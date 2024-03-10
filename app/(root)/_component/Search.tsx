import SearchChild from "./SearchChild";

interface SearchProps {
  iselected: number;
  set: React.Dispatch<React.SetStateAction<number>>;
}

export default function Search({ iselected, set }: SearchProps) {
  return (
    <div className="Search">
      <div className="font-sans absolute z-1 lg:flex ml-[50px] mt-[150px] ">
        <div className="w-[250px] h-[300px] bg-neutral-700 rounded-[20px] ">
          <div className="flex items-center">
            <div className="ml-4 mt-5 text-white text-xl">검색 및 필터</div>
          </div>

          <input
            type="text"
            placeholder="동아리 이름이나 부장 이름을 입력해주세요"
            className="flex justify-center items-center mt-5 mx-5 h-10 w-55 bg-neutral-500 rounded-[15px] placeholder-white-500 text-white  text-sm text-left pl-2"
          />
          <div className="w-[146px] h-[140px] flex-col justify-start items-start gap-1 inline-flex mx-7 mt-7">
            <SearchChild
              isSelected={iselected === 0 ? true : false}
              labelname="전체"
              set={set}
              i={0}
            />
            <SearchChild
              isSelected={iselected === 1 ? true : false}
              labelname="기능반"
              set={set}
              i={1}
            />
            <SearchChild
              isSelected={iselected === 2 ? true : false}
              labelname="자율 동아리"
              set={set}
              i={2}
            />
            <SearchChild
              isSelected={iselected === 3 ? true : false}
              labelname="창체 동아리"
              set={set}
              i={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
