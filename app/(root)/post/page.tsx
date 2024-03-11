"use client";
import Image from "next/image";
import Br from "../_component/br";
import SPAMBANNER from "@/../public/images/spambanner.png";
import SPAMINTRO from "@/../public/images/spamintro.png";
import SPAMLOGO from "@/../public/images/spamlogo.png";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import TextArea from "./_components/textArea";
import Desc from "./_components/desc";
import AddImage from "./_components/addImage";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";

const clubTypeName = ["자율동아리", "창체동아리", "기능반"];

interface DictType {
  [key: string]: string;
}

type SubmitType = {
  name: string;
  category: string;
  simpledescription: string;
  description: string;
  person: DictType[];
  sns: DictType[];
  project: DictType[];
  baner_image: string;
  logo_image: string;
  photo_image: string;
};

export default function Page() {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    simple_description: "",
  });
  const [file, setFile] = useState<File[]>([]);
  const [person, setPerson] = useState<DictType[]>([
    {
      type: "",
      name: "",
    },
  ]);
  const [prjt, setPrjt] = useState<DictType[]>([{ name: "", description: "" }]);
  const [sns, setSns] = useState<DictType[]>([{ name: "", link: "" }]);
  const [clubType, setClubType] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const nextInputs = {
      ...inputs,
      [id]: value,
    };
    setInputs(nextInputs);
  };

  const handleType = (d: number) => {
    setClubType((clubType + d + 3) % 3);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window === "undefined") return;

    // if (wrapTempPreImage === undefined) {
    //   alert(
    //     "제출 중 오류가 발생했어요!; 로고이미지, 배너이미지, 소개란 이미지 전부 필수예요!"
    //   );
    //   return;
    // }

    // if (wrapTempPreImage?.length !== 3) {
    //   alert(
    //     "제출 중 오류가 발생했어요!; 로고이미지, 배너이미지, 소개란 이미지 전부 필수예요!"
    //   );
    //   return;
    // }

    setIsLoading(() => true);

    const files: string[] = ["", "", ""];
    const uploadPromises = files.map(async (element, i) => {
      const formData = new FormData();
      formData.append("file", file[i]);

      const res = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());
      const fileName = encodeURIComponent(res.fileName);
      return `https://introduce-club.s3.ap-northeast-2.amazonaws.com/${fileName}`;
    });

    try {
      const uploadedFiles = await Promise.all(uploadPromises);

      const body: SubmitType = {
        name: inputs.name,
        category: clubTypeName[clubType],
        description: inputs.description,
        person: person,
        simpledescription: inputs.simple_description,
        project: prjt,
        sns: sns,
        baner_image: uploadedFiles[0],
        logo_image: uploadedFiles[1],
        photo_image: uploadedFiles[2],
      };

      const res = await fetch("/backend/post", {
        method: "POST",
        body: JSON.stringify(body),
      }).then((res) => res.json());
    } catch (error) {
      console.error(error);
    }

    try {
      router.push("../");
    } catch (error) {
      console.error(error);
      setIsLoading(() => false);
    }
  };

  return (
    <div className="mt-[60px] flex flex-col items-center bg-black w-full">
      <div className="w-[1200px] sm:w-full mt-[100px] sm:px-3">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          <AddImage
            alttext="업로드된 배너 이미지"
            title="이미지 선택"
            className="w-[1200px] h-[250px] sm:w-full"
            setFile={setFile}
            i={0}
            name="banner"
          />

          <div className="flex mt-[100px] items-center w-[1093px] sm:w-[300px] sm:flex-wrap sm:gap-4">
            <AddImage
              alttext="업로드된 로고 이미지"
              title="로고"
              className="w-[100px] h-[100px] sm:w-[90px] sm:mx-0 sm:h-[90px]"
              i={1}
              setFile={setFile}
              name="logo"
            />
            <input
              type="text"
              id="name"
              value={inputs.name}
              onChange={onChange}
              required
              placeholder="동아리 이름 입력"
              className="bg-transparent sm:w-full sm:text-center outline-none ml-8 sm:ml-0 text-white placeholder:text-white text-[40px] sm:text-[25px] font-normal font-sans"
            />
            <div className="ml-auto sm:ml-0 sm:justify-center sm:w-full flex items-center justify-between">
              <div>
                <ChevronLeft
                  className="text-white cursor-pointer"
                  size={32}
                  onClick={() => handleType(-1)}
                />
              </div>
              <div>
                <div className="text-center text-white text-3xl font-normal font-sans select-none">
                  {clubTypeName[clubType]}
                </div>
              </div>

              <div>
                <ChevronRight
                  className="text-white cursor-pointer"
                  size={32}
                  onClick={() => handleType(1)}
                />
              </div>
            </div>
          </div>

          <Br className="my-[50px]" />

          <div className="px-10 w-full sm:px-0 flex justify-center">
            <div className="flex sm:flex-col sm:items-center gap-10 w-full">
              <AddImage
                alttext="업로드된 소개 이미지"
                className="w-[400px] h-[300px] sm:h-[250px]"
                title="이미지 선택"
                i={2}
                setFile={setFile}
                name="main_image"
              />

              <TextArea
                placeholder="간단한 소개를 입력해주세요."
                id="simple_description"
                className="w-full h-full sm:h-44"
                value={inputs.simple_description}
                onChange={onChange}
              />
            </div>
          </div>

          <Br className="my-[50px]" />
          <TextArea
            placeholder="동아리 설명을 입력해주세요."
            id="description"
            className="w-[1093px] h-[220px] sm:w-full"
            value={inputs.description}
            onChange={onChange}
          />
          <Br className="mt-[25px] mb-[35px]" />
          <Desc
            setData={setPrjt}
            title="프로젝트"
            footid="description"
            footplaceholder="설명"
            headid="name"
            headplaceholder="프로젝트 이름"
            data={prjt}
          />
          <div className="my-[50px]">
            <Br />
          </div>
          <Desc
            setData={setPerson}
            title="동아리 인원"
            footid="name"
            footplaceholder="이름"
            headid="type"
            headplaceholder="직책"
            data={person}
          />
          <div className="my-[50px]">
            <Br />
          </div>
          <Desc
            setData={setSns}
            title="동아리 SNS"
            headid="name"
            footid="link"
            footplaceholder="링크"
            headplaceholder="SNS"
            data={sns}
          />
          <Br className="mt-[28px] mb-[28px]" />
          {isLoading ? (
            <button
              disabled
              type="submit"
              className="flex items-center bg-neutral-700 justify-center mb-[170px] h-24 w-full rounded-[15px]"
            >
              <Check className="text-white" size={36} />
              <span className="text-white text-3xl ml-3">작성 완료</span>
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center bg-neutral-700 justify-center mb-[170px] h-24 w-full rounded-[15px]"
            >
              <Check className="text-white" size={36} />
              <span className="text-white text-3xl ml-3">작성 완료</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
