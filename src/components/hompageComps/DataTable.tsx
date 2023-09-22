"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { getCoinData } from "@/lib/helperFunctions/coinRainkingApi";
import { CoinsType } from "@/lib/types/marketDataTypes";
import { convertPriceToString } from "@/lib/helperFunctions/cryptoHelperFunctions";
import Image from "next/image";
import { Button } from "../ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
}

export function DataTable<TData, TValue>({
  columns,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const offSetHandler = () => {
    setOffset((prev) => prev + 10);
  };
  const goBackHandler = () => {
    setOffset((prev) => prev - 10);
  };
  useEffect(() => {
    getCoinData(
      `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=${offset}`
    ).then((res) => {
      setData(
        res.data.coins.map((coin: CoinsType) => {
          const { rank, name, change, price, iconUrl } = coin;

          const formattedPrice = `${convertPriceToString(+price)}`;
          return {
            ranking: rank,
            name: [
              <Image
                key={rank}
                src={iconUrl}
                width={20}
                height={20}
                alt=""
                className="max-h-[20px] max-w-[20px]"
              />,
              name,
            ],
            change: change,
            price: formattedPrice,
          };
        })
      );
    });
  }, [offset]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md border max-w-full w-screen">
      <Table>
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
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between space-x-2 p-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goBackHandler}
          disabled={offset === 0}
        >
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={offSetHandler}>
          Next
        </Button>
      </div>
    </div>
  );
}
