"use client";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { green, red } from "@mui/material/colors";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TableChart from "./TableChart";
import { convertPriceToString } from "@/lib/helperFunctions/cryptoHelperFunctions";

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
  sparkline: string[];
  marketCap: string;
  ["24hVolume"]: string;
};

const columnHelper = createColumnHelper<Coin>();

export const DesktopColumns: ColumnDef<Coin>[] = [
  {
    header: () => <p className="w-full p-0">Ranking</p>,
    accessorKey: "ranking",
    cell: (ranking) => (
      <span className="flex gap-2 w-[1rem]">
        <p className="w-full p-0">{ranking.getValue<string>()}</p>
      </span>
    ),
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
      <span className="flex gap-3 w-[6rem]">
        {change.getValue<string>().includes("-") ? (
          <TrendingDownIcon sx={{ color: "red" }} />
        ) : (
          <TrendingUpIcon sx={{ color: "green" }} />
        )}
        <p className="flex gap-2 w-[6rem] md:w-full">
          {change.getValue<string>()}
        </p>
      </span>
    ),
  },
  {
    accessorKey: "price",
    header: () => "Price",
    cell: (price) => <p>${price.getValue<string>()}</p>,
  },
  {
    accessorKey: "marketCap",
    header: () => "Market Cap",
    cell: (marketCap) => (
      <p>${convertPriceToString(+marketCap.getValue<string>())}</p>
    ),
  },
  {
    accessorKey: "24hVolume",
    header: () => "24Hr Volume",
    cell: (volume) => (
      <p>${convertPriceToString(+volume.getValue<string>())}</p>
    ),
  },
  {
    accessorKey: "sparkline",
    header: () => "Price Graph",
    cell: (sparkline) => <TableChart sparkline={sparkline.getValue()} />,
  },
];
