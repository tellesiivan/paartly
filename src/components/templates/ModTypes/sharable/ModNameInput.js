import React from "react";

export default function ModNameInput({ placeholder, value, setValue }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor="modName" className="text-xs text-white">
        Modification Title
      </label>
      <input
        placeholder={placeholder}
        id="modName"
        type="text"
        onChange={({ target: { value } }) => setValue("title", value)}
        value={value}
        className="w-full px-2 border-0 rounded-md outline-none text-inputGray h-11 bg-main text-md md:text-xs placeholder:text-xs placeholder:text-textGray"
      />
    </div>
  );
}
