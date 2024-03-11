import Link from "next/link";

interface DictType {
  [key: string]: string;
}

const Desc = ({
  title,
  data,
  headKey,
  footKey,
}: {
  title: string;
  data?: DictType[];
  headKey: string;
  footKey: string;
}) => {
  return (
    <div className="ml-10 sm:ml-0">
      <div className="h-[70px] sm:ml-5 flex items-center text-white sm:text-xl text-3xl font-normal font-sans">
        {title}
      </div>
      <div className="m-15 sm:px-6 sm:w-full">
        <div className="flex flex-col text-white sm:text-[20px] text-[25px] font-normal font-sans mr-[15px] sm:mr-0 sm:flex-col">
          {data?.map((ai, i) => (
            <div key={i} className="flex">
              <div className="flex-1 w-[300px] sm:w-auto text-nowrap mb-[10px]">
                {ai[headKey]}
              </div>
              {footKey === "link" ? (
                <Link
                  href={ai[footKey]}
                  className="flex-1 text-[#459AFF] mb-[10px]"
                >
                  link
                </Link>
              ) : (
                <div className="flex-1 mb-[10px]">{ai[footKey]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desc;
