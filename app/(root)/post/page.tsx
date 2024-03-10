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

  const [person, setPerson] = useState<DictType[]>([
    {
      type: "",
      name: "",
    },
  ]);
  const [prjt, setPrjt] = useState<DictType[]>([{ name: "", description: "" }]);
  const [sns, setSns] = useState<DictType[]>([{ name: "", link: "" }]);
  const [clubType, setClubType] = useState(0);

  const [inti, setInti] = useState<number[] | undefined>();
  const [wrapTempPreImage, setWrapTempPreImage] = useState<
    File[] | undefined
  >();

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

    const body: SubmitType = {
      name: e.currentTarget.clubName.value,
      category: clubTypeName[clubType],
      description: e.currentTarget.description.value,
      person: person,
      simpledescription: e.currentTarget.simple_description.value,
      project: prjt,
      sns: sns,
      baner_image:
        "https://introduce-club.s3.ap-northeast-2.amazonaws.com/spamintro.png",
      logo_image:
        "https://introduce-club.s3.ap-northeast-2.amazonaws.com/spamlogo.png",
      photo_image:
        "https://introduce-club.s3.ap-northeast-2.amazonaws.com/spambanner.png",
    };

    console.log(body);

    // const formData = new FormData();
    // let formimagenameName = ["photo", "logo", "baner"];
    // Array.from(wrapTempPreImage).forEach((ai, i) => {
    //   formData.append(formimagenameName[i], ai);
    // });

    // [
    //   "name",
    //   "simple_description",
    //   "description",
    //   "project_name",
    //   "project_description",
    //   "person",
    //   "sns",
    // ].forEach((ai) => {
    //   formData.delete(ai);
    // });

    // //여기부터
    // let project_name = [prjt[0].headtext];
    // for (let i = 1; i < prjt.length; i++) {
    //   project_name.push(prjt[i].headtext);
    // }

    // let project_description = [prjt[0].foottext];
    // for (let i = 1; i < prjt.length; i++) {
    //   project_description.push(prjt[i].foottext);
    // }
    // let modal_project_description = [""];
    // for (let i = 1; i < prjt.length; i++) {
    //   modal_project_description.push("");
    // }
    // const temp_project_description =
    //   project_description === undefined
    //     ? modal_project_description
    //     : project_description;

    // let tempsns = [sns[0].headtext];
    // for (let i = 1; i < sns.length; i++) {
    //   tempsns.push(sns[i].headtext);
    // }

    // if (project_name === undefined) {
    //   alert(
    //     "제출 중 오류가 발생했어요!; 프로젝트 이름이 빠져있어요!(그냥 .만 찍어도 좋아요!)"
    //   );
    //   return;
    // }
    // if (project_description === undefined) {
    //   alert(
    //     "제출 중 오류가 발생했어요!; 프로젝트 설명이 빠져있어요!(그냥 .만 찍어도 좋아요!)"
    //   );
    //   return;
    // }
    // if (tempsns === undefined) {
    //   alert(
    //     "제출 중 오류가 발생했어요!; sns가 빠져있어요!(그냥 .만 찍어도 좋아요!)"
    //   );
    //   return;
    // }
    // let willbesubmittotext: SubmitType = {
    //   name: clubname,
    //   category: clubTypeName[clubType],
    //   simple_description: simpDesc,
    //   description: desc,
    //   // person: person,
    //   project_name: project_name,
    //   // @ts-ignore //<--이거 꼭 필요함
    //   project_description: temp_project_description,
    //   sns: tempsns,
    // };

    /*for(let [key, value] of formData.entries()){
      console.log(key, value);
    } 
    console.log(willbesubmittotext)*/
    //확인 용도

    // try {
    //   const response = await axios.post("/backend/image", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     transformRequest: [
    //       function () {
    //         return formData;
    //       },
    //     ],
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   const res = await fetch("/backend/post", {
    //     method: "POST",
    //     body: JSON.stringify(willbesubmittotext),
    //   }).then((res) => res.json());
    //   router.push("../");
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="mt-[60px] flex flex-col items-center bg-black">
      <div className="w-100% mt-[100px]">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          <AddImage
            alttext="업로드된 배너 이미지"
            title="이미지 선택"
            className="w-[1200px] h-[250px]"
            name="baner"
            i={0}
            wrapI={inti}
            setWrapTempPreImage={setWrapTempPreImage}
            wrapTempPreImage={wrapTempPreImage}
            setWrapI={setInti}
          />

          <div className="flex mt-[100px] items-center w-[1093px]">
            <AddImage
              alttext="업로드된 로고 이미지"
              title="로고"
              className="w-[100px] h-[100px]"
              name="logo"
              setWrapTempPreImage={setWrapTempPreImage}
              wrapTempPreImage={wrapTempPreImage}
              i={1}
              wrapI={inti}
              setWrapI={setInti}
            />
            <input
              type="text"
              id="clubName"
              required
              placeholder="동아리 이름 입력"
              className="bg-transparent w-[322px] outline-none ml-8 text-white placeholder:text-white text-[40px] font-normal font-sans "
            />
            <div className="ml-auto w-[243px] flex items-center justify-between">
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

          <div className="px-10 w-full flex justify-center">
            <div className="flex gap-10 w-full">
              <AddImage
                alttext="업로드된 소개 이미지"
                className="w-[400px] h-[300px]"
                title="이미지 선택"
                wrapI={inti}
                setWrapI={setInti}
                name="photo"
                setWrapTempPreImage={setWrapTempPreImage}
                wrapTempPreImage={wrapTempPreImage}
                i={2}
              />

              <TextArea
                placeholder="간단한 소개를 입력해주세요."
                id="simple_description"
                className="w-full h-full"
              />
            </div>
          </div>

          <Br className="my-[50px]" />
          <TextArea
            placeholder="동아리 설명을 입력해주세요."
            id="description"
            className="w-[1093px] min-h-[220px]"
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
          <button
            type="submit"
            className="flex items-center bg-neutral-700 justify-center mb-[170px] h-24 w-full rounded-[15px]"
          >
            <Check className="text-white" size={36} />
            <span className="text-white text-3xl ml-3">작성 완료</span>
          </button>
        </form>
      </div>
    </div>
  );
}
