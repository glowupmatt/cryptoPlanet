import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CryptoConverter from "./sideBarComps/CryptoConverter/CryptoConverter";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="">
      <CryptoConverter />
    </div>
  );
};

export default SideBar;
