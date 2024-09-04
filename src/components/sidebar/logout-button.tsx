//@ts-nocheck
import { nativePostMessage } from "@/common/NativeInterface";
import { useAppDispatch, useAppSelector } from "@/components/hooks/rtk";
import { sessionActions } from "@/store";
import { Button } from "@nextui-org/react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.session.user);
  const router = useRouter();

  const handleLogout = async () => {
    const notificationToken = window.localStorage.getItem("notificationToken");
    if (notificationToken && !user?.readonly) {
      window.localStorage.removeItem("notificationToken");
      const tokens = user?.attributes.notificationTokens?.split(",") || [];
      if (tokens.includes(notificationToken)) {
        const updatedUser = {
          ...user,
          attributes: {
            ...user?.attributes,
            notificationTokens:
              tokens.length > 1
                ? tokens.filter((it) => it !== notificationToken).join(",")
                : undefined,
          },
        };
        await fetch(`/api/users/${user?.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        });
      }
    }

    await fetch("/api/session", { method: "DELETE" });
    nativePostMessage("logout");
    router.push("/login");
    dispatch(sessionActions.updateUser(null));
  };

  return (
    <Button
      onClick={handleLogout}
      size="sm"
      variant="solid"
      className="bg-transparent"
    >
      <LogOut />
    </Button>
  );
};

export default LogoutButton;
