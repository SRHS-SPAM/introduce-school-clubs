import Br from "./br";
import Club from "./club";

interface ClubPaneProps {
  category: string;
  list: ClubType[];
}

interface DictType {
  [key: string]: string;
}

type ClubType = {
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
};

const ClubPane = ({ category, list }: ClubPaneProps) => {
  console.log(list);
  return (
    <div className="w-full sm:w-full">
      <div className="font-sans text-white text-xl ml-10 sm:ml-5 sm:text-3xl mb-5">
        {category}
      </div>
      <Br className="mt-7 mb-5 sm:mb-10" />
      <div className="w-full grid grid-cols-3 sm:grid-cols-2 p-5 sm:p-3 gap-4 gap-y-11 sm:gap-x-[15px] gap-x-[30px] mb-11">
        {list.map((club, i) => (
          <Club
            BanerIamge={club.BanerIamge}
            Category={club.Category}
            Description={club.Description}
            LogoImage={club.LogoImage}
            Name={club.Name}
            Person={club.Person}
            PhotoImage={club.PhotoImage}
            project={club.project}
            SimpleDescription={club.SimpleDescription}
            Sns={club.Sns}
            Uuid={club.Uuid}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ClubPane;
