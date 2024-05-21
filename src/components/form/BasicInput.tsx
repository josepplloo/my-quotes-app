"use client";
import { useDispatch, useSelector } from "@/contexts/QuoteContext";
import { actionCreators } from "@/contexts/QuoteContext/reducer";
import { FieldValueType } from "./types";

interface MyFieldProps {
  title: string;
  type: string;
  name: string;
  id: string;
}
const inputStyle =
  "checked:border-black-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500";

export const BasicInput = (props: MyFieldProps) => {
  const { title, type, name, id } = props;
  const isRCButton = type === 'radio' || type === 'checkbox';

  const dispatch = useDispatch();
  const handleChange = (value: FieldValueType) => { 
    const payload = {
      fieldID: name,
      fieldValue: value,
    };    
    dispatch(actionCreators.setForm(payload));
  };

  return (
    <p className="w-full hover:bg-indigo-50 flex justify-between p-2 has-[:checked]:bg-indigo-300 has-[:checked]:rounded">
      <label htmlFor={id} className="hover:cursor-pointer w-full mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
      />
    </p>
  );
};
