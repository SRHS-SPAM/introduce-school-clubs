import { MinusIcon, Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Dict from "./dict";

interface DictType {
  [key: string]: string;
}

interface DescProps {
  title: string;
  headplaceholder: string;
  footplaceholder: string;
  headid: string;
  footid: string;
  headwidth?: number;
  data: DictType[];
  gap?: number;
  setData: Dispatch<SetStateAction<DictType[]>>;
}

const Desc = ({
  title,
  footid,
  footplaceholder,
  headid,
  headplaceholder,
  data,
  setData,
}: DescProps) => {
  const handlePlus = () => {
    setData([...data, { [headid]: "", [footid]: "" }]);
  };
  const handleMinus = () => {
    setData(data.slice(0, data.length - 1));
  };

  return (
    <div className="flex flex-col w-[1093px]">
      <div className="h-[70px] text-white text-3xl font-normal font-sans">
        {title}
      </div>
      <div className="flex flex-col gap-5">
        {data.map((ai, i) => (
          <Dict
            footid={footid}
            footplaceholder={footplaceholder}
            headid={headid}
            headplaceholder={headplaceholder}
            key={i}
            ikey={i}
            wrapData={data}
            setWrapData={setData}
          />
        ))}
        <div className="flex w-full gap-5">
          <div
            className="flex-1 h-24 bg-neutral-700 rounded-[15px] text-white flex items-center justify-center cursor-pointer"
            onClick={handlePlus}
          >
            <Plus size={40} />
          </div>
          {data.length > 1 && (
            <div
              className="w-1/5 h-24 bg-neutral-700 rounded-[15px] text-white flex items-center justify-center cursor-pointer"
              onClick={handleMinus}
            >
              <MinusIcon size={40} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desc;
