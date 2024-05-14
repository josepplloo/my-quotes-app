import userInfo from "./userinfo.json";
import userInfoTech from "./usertech.json";
import networkingInfo from "./networkinginfo.json";

interface MyFieldProps {
  title: string;
  type: string;
  name: string;
  id: string;
}
const MyField = (props: MyFieldProps) => {
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

export const UserInfoForm = () => {
  const { name, email, tel } = userInfo.properties;
  const { equipment, servers, cameras, printers } = userInfoTech.properties;
  const { networkswitch, networkrouter, accesspoint, voip } = networkingInfo.properties;

  return (
    <form className="w-full">
      <section className="mb-3">
        <h2 className="text-lg">{userInfo.title}</h2>
        <p className="text-sm">{userInfo.description}</p>
        <MyField {...name} />
        <MyField {...email} />
        <MyField {...tel} />
      </section>
      <section className="mb-3">
        <h2 className="text-lg">{userInfoTech.title}</h2>
        <p className="text-sm">{userInfoTech.description}</p>
        <MyField {...equipment} />
        <MyField {...servers} />
        <MyField {...cameras} />
        <MyField {...printers} />
      </section>
      <fieldset className="mb-3">
        <h2 className="text-lg">{userInfoTech.title}</h2>
        <p className="text-sm">{userInfoTech.description}</p>
        <MyField {...networkswitch} />
        <MyField {...networkrouter} />
        <MyField {...accesspoint} />
        <MyField {...voip} />
      </fieldset>
    </form>
  );
};
