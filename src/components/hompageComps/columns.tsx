/* eslint-disable @next/next/no-img-element */
"use client";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Coin = {
  rank: string;
  name: {
    iconUrl: React.ComponentType;
    value: string;
    uuid: string;
  };
  change: string;
  price: string;
};

const columnHelper = createColumnHelper<Coin>();

export const columns: ColumnDef<Coin>[] = [
  {
    header: "Ranking",
    accessorKey: "ranking",
    cell: (ranking) => ranking.getValue(),
  },
  {
    accessorKey: "name",
    cell: (name) => (
      <span>
        <p className="flex gap-2 w-[6rem]">{name.getValue<string>()}</p>
      </span>
    ),
    header: () => <span>Name</span>,
  },
  {
    accessorKey: "change",
    header: () => "24hr Change",
  },
  {
    accessorKey: "price",
    header: () => "Price",
  },
];
