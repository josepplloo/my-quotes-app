import userInfo from "./userinfo.json";
import {BasicInput} from "./BasicInput";

export const UserInfoForm = () => {
  const { name, email, tel } = userInfo.properties;

  return (
    <section className="mb-3">
      <h2 className="text-lg">{userInfo.title}</h2>
      <p className="text-sm">{userInfo.description}</p>
      <BasicInput {...name} />
      <BasicInput {...email} />
      <BasicInput {...tel} />
    </section>
  );
};
