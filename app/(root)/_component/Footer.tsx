import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-2  h-[100px] sm:h-[100x] bg-black border-t border-stone-300">
      <div className="flex items-center justify-center w-[150px] h-[70.74px] mr-20 space-y-2 relative ">
        <div className="flex justify-center items-center w-[94.48px] h-[94.48px] left-[0px] top-[1px] absolute">
          <div className=" w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] mb-6 ml-10 absolute">
            <Link href="https://github.com/SRHS-SPAM">
              <img src="/images/social-github-icon-1.svg" alt="깃허브" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center w-[94.48px] h-[94.48px] left-[155px] top-[1px] absolute">
          <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] mb-10 mr-10 absolute">
            <Link href="https://www.instagram.com/spam._srh/">
              <img src="/images/instagram-icon-1.svg" alt="인스타그램" />
            </Link>
          </div>
        </div>

        <div className="flex left-[119px] absolute text-white sm:text-2xl font-normal font-roboto">
          |
        </div>
      </div>

      <div className="text-white text-center sm:text-xs text-lg font-normal font-roboto">
        Introduce-School-Clubs | msg2324@srh-spam.com | SPAM | PROJECT
        Introduce-School-Clubs
      </div>
    </div>
  );
}
