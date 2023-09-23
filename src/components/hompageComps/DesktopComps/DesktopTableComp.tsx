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
  DesktopColumns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DesktopTableComp = <TData, TValue>(
  props: DataTableProps<TData, TValue>
) => {
  const { data, DesktopColumns } = props;
  const router = useRouter();

  const table = useReactTable({
    data,
    columns: DesktopColumns,
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
                <TableHead key={header.id} className="p-8">
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
                  "rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out"
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
              colSpan={DesktopColumns.length}
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
export default DesktopTableComp;
