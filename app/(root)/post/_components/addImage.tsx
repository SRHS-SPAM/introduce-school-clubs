"use client";

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ClubImageAddProps {
  title: string;
  alttext: string;
  className: string;
  name: string;
  i: 0 | 1 | 2;
  setFile: Dispatch<SetStateAction<File[]>>;
}

const AddImage = ({
  alttext,
  title,
  className,
  i,
  name,
  setFile,
}: ClubImageAddProps) => {
  const [image, setImage] = useState("");

  // const handleWrapImageChange = (file: File, i: number) => {
  //   let f = [false, false, false];
  //   let tempwrapimages = wrapTempPreImage ? [...wrapTempPreImage] : [];
  //   let tempwrapi = wrapI ? [...wrapI] : [];
  //   if (wrapI?.length)
  //     wrapI.forEach((ai) => {
  //       if (ai === 0) f[0] = true;
  //       if (ai === 1) f[1] = true;
  //       if (ai === 2) f[2] = true;
  //     });
  //   {
  //     /** */
  //   }
  //   if (f[0] === true && f[1] === true && f[2] === true) {
  //     tempwrapimages[i] = file;
  //   } else if (f[0] === false && f[1] === true && f[2] === true) {
  //     if (i === 0) tempwrapimages = [file, ...tempwrapimages];
  //     else if (i === 1) tempwrapimages = [file, tempwrapimages[1]];
  //     else if (i === 2) tempwrapimages = [tempwrapimages[0], file];
  //     if (i !== 0) tempwrapi.push(i);
  //   } else if (f[0] === true && f[1] === false && f[2] === true) {
  //     if (i === 1)
  //       tempwrapimages = [tempwrapimages[0], file, tempwrapimages[1]];
  //     else if (i === 0) tempwrapimages = [file, tempwrapimages[1]];
  //     else if (i === 2) tempwrapimages = [tempwrapimages[0], file];
  //     if (i === 1) tempwrapi.push(i);
  //   } else if (f[0] === false && f[1] === false && f[2] === true) {
  //     if (i === 2) tempwrapimages = [file];
  //     else if (i === 1) tempwrapimages = [file, tempwrapimages[0]];
  //     else if (i === 0) tempwrapimages = [file, tempwrapimages[0]];
  //     if (i !== 2) tempwrapi.push(i);
  //   } else if (f[0] === true && f[1] === true && f[2] === false) {
  //     if (i === 2) tempwrapimages = [...tempwrapimages, file];
  //     else if (i === 0) tempwrapimages = [file, tempwrapimages[1]];
  //     else if (i === 1) tempwrapimages = [tempwrapimages[0], file];
  //     if (i === 2) tempwrapi.push(i);
  //   } else if (f[0] === false && f[1] === true && f[2] === false) {
  //     if (i === 1) tempwrapimages = [file];
  //     else if (i === 0) tempwrapimages = [file, tempwrapimages[0]];
  //     else if (i === 2) tempwrapimages = [tempwrapimages[0], file];
  //     if (i !== 1) tempwrapi.push(i);
  //   } else if (f[0] === true && f[1] === false && f[2] === false) {
  //     if (i === 0) tempwrapimages = [file];
  //     else {
  //       tempwrapimages = [tempwrapimages[0], file];
  //       tempwrapi.push(i);
  //     }
  //   } else if (f[0] === false && f[1] === false && f[2] === false) {
  //     tempwrapimages = [file];
  //     tempwrapi.push(i);
  //   }
  //   {
  //     /** */
  //   }
  //   setWrapTempPreImage(tempwrapimages);
  //   setWrapI(tempwrapi);
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 0) return;

    const file = e.target.files![0];
    // URL.revokeObjectURL(image);
    setImage(URL.createObjectURL(file));
    setFile((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[i] = file;
      return updatedFiles;
    });
    // handleWrapImageChange(file, i);
  };

  // useEffect(() => {
  //   return () => URL.revokeObjectURL(image);
  // }, []); //이러면 안댐!!!!!

  return (
    <>
      <label htmlFor={name}>
        <div
          className={cn(
            "rounded-xl overflow-clip bg-neutral-700 flex items-center justify-center cursor-pointer",
            className
          )}
        >
          {image === "" ? (
            <>
              <span className="text-center text-white text-opacity-50 text-xl font-semibold whitespace-nowrap">
                {title}
              </span>
            </>
          ) : (
            <img
              src={image}
              alt={alttext}
              className="object-cover rounded-xl w-full h-auto"
            />
          )}
        </div>
      </label>
      <div className="hidden">
        <input
          type="file"
          id={name}
          name={name}
          accept="image/*"
          className=""
          onChange={handleImageChange}
        />
      </div>
    </>
  );
};
export default AddImage;
