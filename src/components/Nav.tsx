import React from "react";
import { ModeToggle } from "./ThemeToggle";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="flex flex-col w-full justify-center items-center gap-[1rem]">
      <h1 className="text-[1.5rem] font-[700]">CRYPTO PLANET</h1>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
