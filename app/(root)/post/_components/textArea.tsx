import { Dispatch, SetStateAction } from "react";

type DictType = {
  headtext?: string;
  foottext?: string;
};

interface TextAreaProps {
  placeholder: string;
  id: string;
  className?: string | undefined;
}

const TextArea = ({ id, placeholder, className }: TextAreaProps) => {
  return (
    <textarea
      className={
        "p-7 rounded-[15px] bg-neutral-700 text-white text-2xl font-medium font-sans resize-none outline-none " +
        className
      }
      placeholder={placeholder}
      required
      id={id}
    />
  );
};

export default TextArea;
