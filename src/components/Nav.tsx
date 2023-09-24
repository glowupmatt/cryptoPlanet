import React from "react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="flex flex-row w-full justify-between items-center gap-[1rem]">
      <Link href="/">
        <h1 className="text-[1.5rem] font-[700]">CRYPTO PLANET</h1>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
