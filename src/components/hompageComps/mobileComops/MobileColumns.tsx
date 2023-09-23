/* eslint-disable @next/next/no-img-element */
"use client";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { green, red } from "@mui/material/colors";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import classNames from "classnames";

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

export const MobileColumns: ColumnDef<Coin>[] = [
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
    cell: (change) => (
      <span className="flex gap-3">
        {change.getValue<string>().includes("-") ? (
          <TrendingDownIcon sx={{ color: "red" }} />
        ) : (
          <TrendingUpIcon sx={{ color: "green" }} />
        )}
        <p
          className={classNames(
            "flex gap-2 w-[6rem] md:w-full",
            {
              "text-red-400": change.getValue<string>().includes("-"),
            },
            {
              "text-green-400": !change.getValue<string>().includes("-"),
            }
          )}
        >
          {change.getValue<string>()}
        </p>
      </span>
    ),
  },
  {
    accessorKey: "price",
    header: () => "Price",
  },
];
