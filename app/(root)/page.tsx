"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import ClubPane from "./_component/clubPane";
import Search from "./_component/Search";

type DataType = {
  results: ClubType[];
};

interface DictType {
  [key: string]: string;
}

type ClubType = {
  Name: string;
  Category: string;
  SimpleDescription: string;
  Description: string;
  project: DictType[];
  Person: DictType[];
  Sns: DictType[];
  BanerIamge: string;
  LogoImage: string;
  PhotoImage: string;
  Uuid: string;
};

export default function Home() {
  const [creData, setCreData] = useState<DataType>();
  const [featureData, setFeatureData] = useState<DataType>();
  const [freeData, setFreeData] = useState<DataType>();
  const [nowCategory, setNowCategory] = useState(0);

  useEffect(() => {
    fetch("/backend/cre")
      .then((response) => response.json())
      .then((data: DataType) => setCreData(data));

    fetch("/backend/free")
      .then((response) => response.json())
      .then((data: DataType) => setFreeData(data));
    fetch("/backend/feature")
      .then((response) => response.json())
      .then((data: DataType) => setFeatureData(data));
  }, []);

  return (
    <main className="flex w-full relative bg-black">
      <div className="w-[500px] sm:w-[0px] md:w-[0px] lg:w-[0px] xl:w-[0px] 2xl:w-[0px]">
        <Search iselected={nowCategory} set={setNowCategory} />
      </div>

      <div className="flex w-[1000px]  2xl:ml-[100px] xl:ml-[0px]">
        <div className="flex-1 flex sm:mx-4 mt-40 flex-col   bg-black items-center">
          {featureData &&
            featureData.results !== undefined &&
            (nowCategory === 0 || nowCategory === 1) && (
              <ClubPane category={"기능반"} list={featureData.results} />
            )}
          {freeData &&
            freeData.results !== undefined &&
            (nowCategory === 0 || nowCategory === 2) && (
              <ClubPane category={"자율동아리"} list={freeData.results} />
            )}
          {creData &&
            creData.results !== undefined &&
            (nowCategory === 0 || nowCategory === 3) && (
              <ClubPane category={"창체동아리"} list={creData.results} />
            )}
        </div>
      </div>
    </main>
  );
}
