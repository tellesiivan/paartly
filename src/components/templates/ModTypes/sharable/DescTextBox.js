import React from "react";

export default function DescTextBox({ value, setValue }) {
  return (
    <div>
      <textarea
        className="w-full h-40 p-2 rounded-md outline-none resize-none text-inputGray md:h-28 bg-main placeholder:text-xs placeholder:text-textGray md:text-xs"
        placeholder="Enter a short description or explanation about this modification... "
        onChange={({ target: { value } }) => setValue("desc", value)}
        value={value}
      />
    </div>
  );
}
