"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  nativeEnvironment,
  nativePostMessage,
} from "../../common/NativeInterface";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../hooks/rtk";
import { sessionActions } from "@/store";

const LoginForm = () => {
  const { t } = useTranslation("auth");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [code, setCode] = useState("");
  const [codeEnabled, setCodeEnabled] = useState(false);

  const generateLoginToken = async () => {
    if (nativeEnvironment) {
      let token = "";
      try {
        const expiration = dayjs().add(6, "months").toISOString();
        const response = await fetch("/api/session/token", {
          method: "POST",
          body: new URLSearchParams(`expiration=${expiration}`),
        });
        if (response.ok) {
          token = await response.text();
        }
      } catch (error) {
        token = "";
      }

      nativePostMessage(`login|${token}`);
    }
  };

  const handlePasswordLogin = async () => {
    // setFailed(false);
    try {
      const query = `email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`;
      const response = await fetch("/api/session", {
        method: "POST",
        body: new URLSearchParams(
          code.length ? `${query}&code=${code}` : query
        ),
      });
      if (response.ok) {
        const user = await response.json();
        console.log("Successfuuly");
        generateLoginToken();
        dispatch(sessionActions.updateUser(user));
        router.push("/");
      } else if (
        response.status === 401 &&
        response.headers.get("WWW-Authenticate") === "TOTP"
      ) {
        setCodeEnabled(true);
      } else {
        console.log("Failed");
        throw Error(await response.text());
      }
    } catch (error) {
      dispatch(sessionActions.updateUser({}));
      router.push("/");
      // setFailed(true);
      // setPassword("");
    }
  };

  return (
    <form className="p-12 md:p-24">
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <svg className="absolute mx-3" width="24" viewBox="0 0 24 24">
          <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
        </svg>
        <input
          type="text"
          id="username"
          className="bg-gray-400/30 rounded px-12 py-2 md:py-4 focus:outline-none w-full"
          placeholder={t("username")}
          value={formData.email}
          name="username"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
        />
      </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <svg className="absolute mx-3" viewBox="0 0 24 24" width="24">
          <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
        </svg>
        <input
          type="password"
          id="password"
          className="bg-gray-400/30 rounded px-12 py-2 md:py-4 focus:outline-none w-full"
          placeholder={t("password")}
          value={formData.password}
          name="password"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
        />
      </div>
      <Button
        onClick={handlePasswordLogin}
        size="lg"
        className="bg-primary hover:bg-primary/90 font-medium p-2 md:p-4 text-white uppercase w-full rounded"
      >
        {t("login")}
      </Button>
    </form>
  );
};

export default LoginForm;
