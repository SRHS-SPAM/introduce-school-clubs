interface BrProps {
  className?: string | undefined;
}

const Br = ({ className }: BrProps) => {
  return (
    <div className={"shrink-0 bg-[#393939] h-[3px] w-full " + className} />
  );
};

export default Br;
