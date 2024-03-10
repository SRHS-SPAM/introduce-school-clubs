import Link from "next/link";
import { Noto_Sans_KR, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto-font",
});

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--noto-font",
});

export default function Header() {
  return (
    <div
      className="w-full h-20  bg-neutral-700 inline-flex justify-center items-center"
      style={{ position: "fixed", top: "0" }}
    >
      <div
        className={
          " inline-flex w-full h-20 justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-2xl"
        }
      >
        <div className="font-sans w-15 h-[53px] flex items-center justify-center text-center text-white mx-auto ">
          <Link href="/">홈</Link>
        </div>
        <div className="font-sans w-20 h-[53px] flex items-center justify-center text-center text-white  font-normal mx-auto ">
          <Link href="https://www.youtube.com/@seoul_robot_school">동아리</Link>
        </div>
        <div className="font-sans w-20 h-[53px] flex items-center justify-center text-center text-white  font-normal mx-auto ">
          <Link href="https://www.youtube.com/@seoul_robot_school">스피닷</Link>
        </div>
        <div className="font-sans w-30 h-[53px] flex items-center justify-center text-center text-white font-normal  mx-auto ">
          <Link href="https://www.youtube.com/@seoul_robot_school">
            서로위키
          </Link>
        </div>
      </div>
    </div>
  );
}
