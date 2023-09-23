"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type Props = {
  setSubmittedTerm: React.Dispatch<React.SetStateAction<string>>;
};

const CryptoSearchBar = (props: Props) => {
  const { setSubmittedTerm } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="border border-black rounded-md p-4 flex gap-4 w-full"
    >
      <input
        type="text"
        placeholder="Search Token"
        onChange={onChangeHandler}
        className="w-full dark:bg-gray-800 dark:text-gray-100 border border-gray-300 rounded-md px-2"
      />
      <Button type="submit">
        <p>Submit</p>
      </Button>
    </form>
  );
};

export default CryptoSearchBar;
