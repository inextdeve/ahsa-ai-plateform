"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Tooltip } from "@nextui-org/react";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import {
  CodeXml,
  Fullscreen,
  Gauge,
  Home,
  ListTodo,
  LogOut,
  Settings,
  TrafficCone,
  TriangleAlert,
  Video,
} from "lucide-react";
import { UserDropdown } from "./user-dropdown";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const SidebarWrapper = () => {
  const { t, i18n } = useTranslation("sidebar");

  console.log("Language from sidebar", i18n.language);

  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <Image
            src="/right_logo.png"
            width={1063}
            height={431}
            alt="right-logo"
            priority
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title={t("home")}
              icon={<Home />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title={t("mainMenu")}>
              <SidebarItem
                isActive={pathname === "/violations"}
                title={t("violations")}
                icon={<TriangleAlert />}
                href="violations"
              />
              <SidebarItem
                isActive={pathname === "/road-monitoring"}
                title={t("roadMonitoring")}
                icon={<TrafficCone />}
                href="road-monitoring"
              />
              <SidebarItem
                isActive={pathname === "/service-tracking"}
                icon={<ListTodo />}
                title={t("serviceTracking")}
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title={t("liveStream")}
                icon={<Video />}
              />
              <SidebarItem
                isActive={pathname === "/performance"}
                title={t("performance")}
                icon={<Gauge />}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title={t("settings")}
                icon={<Settings />}
                href="settings"
              />
            </SidebarMenu>

            <SidebarMenu title={t("general")}>
              <SidebarItem
                isActive={pathname === "/docs"}
                title={t("api")}
                icon={<CodeXml />}
                href="docs"
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <LogOut />
              </div>
            </Tooltip>
            {/* <Tooltip content={"Profile"} color="primary">
              <UserDropdown />
            </Tooltip> */}
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <Fullscreen />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
