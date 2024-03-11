import Image from "next/image";
import SPAMban from "@/../public/images/spambanner.png";
import SPAMlog from "@/../public/images/spamlogo.png";
import asf from "./spambanner.png";
import Link from "next/link";
import ClubText from "./clubText";

interface DictType {
  [key: string]: string;
}

interface ClubProps {
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
}

const Club = ({
  BanerIamge,
  Category,
  Description,
  LogoImage,
  Name,
  Person,
  PhotoImage,
  project,
  SimpleDescription,
  Sns,
  Uuid,
}: ClubProps) => {
  return (
    <Link
      href={Uuid}
      className="font-sans space-x-4 flex-1 sm:w-full sm:h-[300px] w-[270px] h-[390px] bg-neutral-700 rounded-xl pt-5 relative"
    >
      <div className="w-full h-full flex flex-col gap-y-2">
        <div className="flex items-center sm:ml-4 ml-8 gap-3 sm:mb-2">
          <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-[15px] bg-zinc-300 overflow-clip flex items-center">
            {LogoImage && (
              <img src={LogoImage} className="rounded-2xl object-cover" />
            )}
          </div>
          <div className="text-center text-white text-2xl sm:text-lg font-normal font-sans text-nowrap">
            {Name}
          </div>
        </div>
        <div className="sm:w-[230px] sm:h-[170px] w-[230px] h-[130px] rounded-xl self-center bg-zinc-300 overflow-clip flex items-center">
          {BanerIamge && (
            <img
              src={BanerIamge}
              alt={Name + "배너"}
              className="object-cover"
            />
          )}
        </div>
        <div className="club-wrapper">
          <div className="h-20">
            <ClubText description={SimpleDescription} title="설립 목적" />
          </div>
          <ClubText description={Description} title="소개" />

          {/* {Person ? <ClubText description={Person[0].name} title="인원" /> : ""} */}
        </div>
      </div>
      <div className="absolute right-3 bottom-[9px] text-white text-opacity-50 font-medium text-sm sm:text-lg font-sans">
        동아리 보러가기
      </div>
    </Link>
  );
};
export default Club;
