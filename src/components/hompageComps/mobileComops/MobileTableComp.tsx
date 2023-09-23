"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import classNames from "classnames";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
  MobileColumns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const MobileTableComp = <TData, TValue>(
  props: DataTableProps<TData, TValue>
) => {
  const { data, MobileColumns } = props;
  const router = useRouter();

  const table = useReactTable({
    data,
    columns: MobileColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <Table className="backdrop-blur-sm">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row: any) => {
            const change = row.original.change;
            return (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={classNames(
                  "",
                  {
                    "bg-red-800/50": change.includes("-"),
                  },
                  {
                    "bg-green-800/50": !change.includes("-"),
                  }
                )}
                onClick={() => router.push(`/coin/${row.original?.uuid}`)}
              >
                {row.getVisibleCells().map((cell: any) => {
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell
              colSpan={MobileColumns.length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MobileTableComp;
