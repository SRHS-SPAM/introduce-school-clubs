interface SearchChildProps {
  isSelected: boolean;
  labelname: string;
  set: React.Dispatch<React.SetStateAction<number>>;
  i: number;
}

const SearchChild = ({ isSelected, labelname, set, i }: SearchChildProps) => {
  return (
    <div className="font-sans form-radio cursor-pointer" onClick={() => set(i)}>
      {isSelected ? (
        <input
          type="radio"
          className="form-radio-input"
          name="radio"
          id="radio1"
          checked
          readOnly
        />
      ) : (
        <input
          type="radio"
          className="form-radio-input"
          name="radio"
          id="radio1"
          readOnly
        />
      )}
      <label className="form-radio-label ml-4 mt-5 text-white text-xl font-normal cursor-pointer">
        {labelname}
      </label>
    </div>
  );
};

export default SearchChild;
