"use client";
import { useEffectAsync } from "@/hooks/reactHelper";
import { useAppDispatch, useAppSelector } from "./rtk";
import { sessionActions } from "@/store";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const initialized = useAppSelector((state) => !!state.session.user);
  const newServer = useAppSelector(
    //@ts-ignore
    (state) => state?.session?.server?.newServer
  );

  useEffectAsync(async () => {
    if (!initialized) {
      const response = await fetch("/api/session");
      if (response.ok) {
        dispatch(sessionActions.updateUser(await response.json()));
      } else if (newServer) {
        router.push("/signup");
      } else {
        router.push("/login");
      }
    }
    return null;
  }, [initialized]);

  return [initialized];
};

export default useAuth;
