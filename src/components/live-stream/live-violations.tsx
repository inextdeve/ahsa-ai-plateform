"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
} from "@nextui-org/react";
import { columns, violations } from "./data";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { LocateFixed } from "lucide-react";

const statusColorMap: Record<string, ChipProps["color"]> = {
  low: "success",
  high: "danger",
  med: "warning",
};

type Violation = (typeof violations)[0];

export default function LiveViolations({ className }: { className?: string }) {
  const { t } = useTranslation("live");
  const renderCell = React.useCallback(
    (violation: Violation, columnKey: React.Key) => {
      const cellValue = violation[columnKey as keyof Violation];

      switch (columnKey) {
        case "location":
          return (
            <Link
              href={violation.location}
              target="_blank"
              className="flex justify-center items-center"
            >
              <LocateFixed className="w-4 h-4 text-primary hover:text-primary/70" />
            </Link>
          );
        case "violation":
          return <>{t(violation.violation.toLowerCase())}</>;
        case "severity":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[violation.severity]}
              size="sm"
              variant="flat"
            >
              {t(cellValue)}
            </Chip>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Table
      aria-label="Live violations table"
      classNames={{ wrapper: "bg-gray-400/30 border-1 border-primary h-full" }}
      className={className}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {t(column.name.toLowerCase())}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={violations}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
