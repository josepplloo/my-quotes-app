import userInfo from "./userinfo.json";
import {BasicInput} from "./BasicInput/BasicInput";

export const UserInfoForm = () => {
  const { name, contact, email, tel } = userInfo.properties;

  return (
    <section className="mb-3">
      <h2 className="text-lg">{userInfo.title}</h2>
      <p className="text-sm">{userInfo.description}</p>
      <BasicInput {...name} />
      <BasicInput {...contact} />
      <BasicInput {...email} />
      <BasicInput {...tel} />
    </section>
  );
};
