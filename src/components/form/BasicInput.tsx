interface MyFieldProps {
  title: string;
  type: string;
  name: string;
  id: string;
}
export const BasicInput = (props: MyFieldProps) => {
  const { title, type, name, id } = props;
  const inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500";
  return (
    <p>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <span>{title}</span>
        <strong>
          <span aria-label="required">*</span>
        </strong>
      </label>
      <input type={type} id={id} name={name} className={inputStyle} required />
    </p>
  );
};