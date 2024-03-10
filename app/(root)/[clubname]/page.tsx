"use client";

import Br from "../_component/br";
import { useEffect, useState } from "react";
import Desc from "./_component/desc";

interface DataType {
  result: ClubType[];
}
interface DictType {
  [key: string]: string;
}

interface ClubType {
  name: string;
  category: string;
  simpledescription: string;
  description: string;
  project: DictType[];
  person: DictType[];
  sns: DictType[];
  baneriamge: string;
  logoimage: string;
  photoimage: string;
  uuid: string;
}

// baneriamge: "https://introduce-club.s3.ap-northeast-2.amazonaws.com/spamintro.png";
// category: "기능반";
// description: "k";
// logoimage: "https://introduce-club.s3.ap-northeast-2.amazonaws.com/spamlogo.png";
// name: "TEST";
// person: "k";
// photoimage: "https://introduce-club.s3.ap-northeast-2.amazonaws.com/spambanner.png";
// projectdescription: (2)[("k", "k")];
// projectname: (2)[("k", "k")];
// simpledescription: "asd";
// sns: ["k"];
// uuid: "1c29d365-5cee-494e-b4a8-1871db0fffa6";
// _id: "65e5a86d0f91903dedec35cc";

export default function Page(props: any) {
  const [data, setData] = useState<ClubType>();

  const fun = async () => {
    try {
      const res: DataType = await fetch(`/api/getFetch`, {
        method: "POST",
        body: JSON.stringify({ link: props.params.clubname }),
      }).then((response) => response.json());

      console.log(res);
      setData(res.result[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      {
        <div className="w-full sm:w-full font-sans mt-[100px] flex flex-col items-center bg-black">
          <div className="w-[1000px] sm:w-full  mt-[100px]">
            <div className="overflow-hidden w-full h-[300px] rounded-xl flex flex-col items-center mb-[50px] p-[30px]">
              <img
                src={data ? data.baneriamge : ""}
                alt={data ? `${data.name} 배너` : "SPAM 배너"}
                className="w-full"
              />
            </div>
            <div className="flex sm:mt-[100px] items-center justify-center w-full">
              <div className="overflow-hidden w-[90px] h-[90px] ml-[30px] mb-[10px] rounded-xl flex flex-col items-center justify-center">
                <img
                  src={data ? data.logoimage : ""}
                  alt={data ? `${data.name} 로고` : "SPAM 로고"}
                  className="rounded-2xl"
                />
              </div>
              <div className="sm:ml-8 ml-14 justify-center text-center text-white sm:text-[25px] text-[40px] font-normal">
                {data ? <>{data.name}</> : "SPAM"}
              </div>
              <div className="ml-auto mr-10 w-[120px] text-center text-white sm:text-xl text-2xl font-normal">
                {data ? <>{data.category}</> : "자율동아리"}
              </div>
            </div>
            <div className="my-[50px]">
              <Br />
            </div>
            <div className="flex sm:flex-col  self-start items-center  gap-x-10 my-10 text-center">
              <div className="overflow-hidden  sm:w-[300px]  sm:h-[250px] w-[500px] h-[300px] rounded-xl mb-10 flex flex-col items-start sm:items-center sm:justify-center">
                <img
                  src={data ? data.photoimage : ""}
                  alt={data ? `${data.name} 소개 이미지` : "SPAM 소개 이미지"}
                  className="rounded-2xl w-full"
                />
              </div>
              <p className="font-sans  text-white text-3xl  font-normal sm:mx-[30px]">
                {data
                  ? data.simpledescription
                  : "간단한 소개 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis consequatur ratione quasi nobis vero repellendus magnam placeat nostrum vitae minima accusamus rerum tempore dolorum ullam illum praesentium, quisquam expedita."}
              </p>
            </div>
            <div className="my-[50px]">
              <Br />
            </div>
            <div className="flex items-center text-center justify-center">
              <div className="flex sm:w-full w-[1000px] min-h-[175px] text-white  sm:text-[30px] text-[40px] font-normal items-center text-center sm:mx-[30px]">
                <p>
                  {data
                    ? data.description
                    : " 설명글(설립 목적) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nemo iusto totam eveniet doloribus! Nihil nulla quos ut maxime nesciunt inventore illum cum. Voluptates, nostrum eaque totam quae obcaecati veritatis?"}
                </p>
              </div>
            </div>

            <div className="my-[50px]">
              <Br />
            </div>
            {/* <Desc
              title="프로젝트"
              dom={data?.description.map((ai, i) => (
                <DescText title={ai.title} link={ai.link} key={i}></DescText>
              ))}
            /> */}

            <Desc
              title={"프로젝트"}
              data={data?.project}
              headKey={"projectdescription"}
              footKey={"projectname"}
            />

            <div className="my-[50px]">
              <Br />
            </div>

            <Desc
              title={"동아리 인원"}
              data={data?.person}
              headKey={"type"}
              footKey={"name"}
            />

            <div className="my-[50px]">
              <Br />
            </div>
            <Desc
              title={"동아리 SNS"}
              data={data?.sns}
              headKey={"name"}
              footKey={"link"}
            />

            <div className="my-[50px]"></div>
          </div>
        </div>
      }
    </>
  );
}
