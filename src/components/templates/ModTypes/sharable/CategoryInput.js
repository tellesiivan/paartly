import React, { useState } from "react";
import CheckSpecialChars from "../../../../utils/CheckSpecialChars";
import { HiX } from "react-icons/hi";
export default function CategoryInput({
  tags,
  setTags,
  placeholder,
  id,
  label,
}) {
  const [tag, setTag] = useState("");

  const addTag = (e) => {
    if (tags.includes(tag) || CheckSpecialChars(tag)) return;
    setTags("tags", [tag, ...tags]);

    setTag("");
  };

  const removeTag = (tag) => {
    setTags(
      "tags",
      tags.filter((t) => t !== tag)
    );
  };

  return (
    <>
      <label htmlFor={id} className="text-xs text-white">
        {label}
      </label>
      <div className="flex flex-row px-2 rounded-md h-11 bg-main">
        <input
          className="w-full h-full bg-transparent border-0 outline-none text-inputGray text-md md:text-xs placeholder:text-xs placeholder:text-textGray"
          placeholder={placeholder}
          type="text"
          value={tag}
          onChange={({ target: { value } }) => setTag(value)}
          id={id}
        />
        <button
          className="px-3 my-3 text-xs transition-opacity duration-300 rounded-full text-dark bg-ag-green disabled:opacity-0"
          disabled={tag.trim().length < 3}
          onClick={addTag}
        >
          Add
        </button>
      </div>
      {tags.length > 0 && (
        <div className="pt-2  flex overflow-x-scroll space-x-1.5 ">
          {tags.map((t) => (
            <div
              className="px-1.5 py-1 text-xs rounded-full  bg-greyDark bg-opacity flex items-center whitespace-nowrap text-inputGray"
              key={t}
            >
              {t}
              <span
                className="flex items-center justify-center w-5 h-5 ml-2 bg-white rounded-full cursor-pointer text-alt opacity-30 "
                onClick={() => removeTag(t)}
              >
                <HiX />
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
