"use client";

type DictType = {
  headtext?: string;
  foottext?: string;
};

interface TextAreaProps {
  placeholder: string;
  id: string;
  className?: string | undefined;
  value: string;
  onChange: any;
}

const TextArea = ({
  id,
  placeholder,
  className,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      className={
        "p-7 rounded-[15px] bg-neutral-700 text-white text-2xl font-medium font-sans resize-none outline-none " +
        className
      }
      placeholder={placeholder}
      required
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
