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
    <div className="ml-10">
      <div className="h-[70px] flex items-center text-white sm:text-xl text-3xl font-normal font-sans">
        {title}
      </div>
      <div className="m-15 sm:m-16">
        <div className="flex flex-col text-white sm:text-[20px] text-[25px] font-normal font-sans mr-[15px] sm:flex-col">
          {data?.map((ai, i) => (
            <div key={i} className="flex">
              <div className="flex-1 w-[300px] text-nowrap mb-[10px]">
                {ai[headKey]}
              </div>
              {footKey === "link" ? (
                <Link href={ai[footKey]}>
                  <div className="flex-1 mb-[10px]">{ai[footKey]}</div>
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
