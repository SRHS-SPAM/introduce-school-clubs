"use client";

import { Dispatch, SetStateAction } from "react";

interface DictProps {
  headplaceholder: string;
  footplaceholder?: string;
  headid: string;
  footid: string;
  ikey: number;
  wrapData: DictType[];
  setWrapData: Dispatch<SetStateAction<DictType[]>>;
}

type DictType = {
  [headtext: string]: string;
};

const Dict = ({
  footid,
  footplaceholder,
  headid,
  headplaceholder,
  ikey,
  wrapData,
  setWrapData,
}: DictProps) => {
  const handleHeadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWrapData((value) =>
      value.map((item, index) => {
        if (index === ikey) {
          return {
            ...item,
            [headid]: e.target.value,
          };
        }
        return item;
      })
    );
  };
  const handleFootChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWrapData((value) =>
      value.map((item, index) => {
        if (index === ikey) {
          return {
            ...item,
            [footid]: e.target.value,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`flex w-[1093px] sm:w-full sm:flex-col gap-4`}>
      <input
        type="text"
        placeholder={headplaceholder}
        required
        onChange={handleHeadChange}
        className={`h-24 p-5 text-white w-60 sm:flex-1 sm:w-auto placeholder:text-opacity-50 text-3xl font-normal placeholder:text-center bg-neutral-700 rounded-[15px]`}
      />

      <input
        required
        type="text"
        onChange={handleFootChange}
        placeholder={footplaceholder}
        className="flex-1 h-24 p-5 pl-12 sm:text-center sm:p-0 sm:py-5 text-white placeholder:text-opacity-50 text-3xl font-normal bg-neutral-700 rounded-[15px]"
      />
    </div>
  );
};

export default Dict;
