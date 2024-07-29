"use client";
import { useDispatch } from "@/contexts/QuoteContext";
import { actionCreators } from "@/contexts/QuoteContext/reducer";
import { FieldValueType } from "../types";
import { validationPatterns } from "./inputValidation";
import { useState } from "react";

interface MyFieldProps {
  title: string;
  type: string;
  name: string;
  id: string;
}
const inputStyle =
  "checked:border-black-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500 invalid:border-pink-500 invalid:text-pink-600";

export const BasicInput = (props: MyFieldProps) => {
  const { title, type, name, id } = props;
  const isRCButton = type === "radio" || type === "checkbox";
  const isCheckbox = type === "checkbox";
  const isNumber = type === "number";
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const handleChange = (value: FieldValueType) => {
    // handler for the checkbox set the check in the current state and send it also to the global state
    setChecked(!checked);
    const payload = {
      fieldID: name,
      fieldValue: isCheckbox ? !checked : value,
    };
    dispatch(actionCreators.setForm(payload));
  };

  return (
    <p className="w-full hover:bg-indigo-50 dark:hover:bg-indigo-500 flex justify-between p-2 has-[:checked]:bg-indigo-300 has-[:checked]:rounded">
      <label
        htmlFor={id}
        className="hover:cursor-pointer w-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <span>{title}</span>
        <strong>
          <span aria-label="required">*</span>
        </strong>
      </label>
      <input
        type={type}
        value={isRCButton ? id : undefined}
        id={id}
        name={name}
        className={inputStyle}
        onChange={(e) => handleChange(e.target.value)}
        size={30}
        checked={isCheckbox ? checked : undefined}
        min={isNumber ? 0 : undefined}
        max={isNumber ? 9999 : 99}
        pattern={validationPatterns[type as keyof typeof validationPatterns]}
      />
    </p>
  );
};
