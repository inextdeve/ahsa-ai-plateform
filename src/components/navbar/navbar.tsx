import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { BurguerButton } from "./burguer-button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full bg-secondary/80"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent justify="end" className="w-full max-md:hidden">
          {t("title")}
        </NavbarContent>
        <NavbarContent justify="end" className="w-full">
          <Image width={35} height={35} alt="left-logo" src="/left_logo.png" />
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
