import React from "react";

export default function NameInput({ setValues, values, error, setError }) {
  const onChange = ({ target: { value, name } }) => {
    if (error) {
      setError("");
    }
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <input
      className="w-full h-full bg-transparent border-0 outline-none text-inputGray text-md md:text-xs placeholder:text-xs placeholder:text-textGray"
      placeholder="Update your name here..."
      type="text"
      value={values.name}
      onChange={onChange}
      name="name"
    />
  );
}
