import userInfo from "./userinfo.json";
import userInfoTech from "./usertech.json";
import networkingInfo from "./networkinginfo.json";
import {BasicInput} from "./BasicInput";

export const UserInfoForm = () => {
  const { name, email, tel } = userInfo.properties;
  const { equipment, servers, cameras, printers } = userInfoTech.properties;
  const { networkswitch, networkrouter, accesspoint, voip } = networkingInfo.properties;

  return (
    <form className="w-full">
      <section className="mb-3">
        <h2 className="text-lg">{userInfo.title}</h2>
        <p className="text-sm">{userInfo.description}</p>
        <BasicInput {...name} />
        <BasicInput {...email} />
        <BasicInput {...tel} />
      </section>
      <section className="mb-3">
        <h2 className="text-lg">{userInfoTech.title}</h2>
        <p className="text-sm">{userInfoTech.description}</p>
        <BasicInput {...equipment} />
        <BasicInput {...servers} />
        <BasicInput {...cameras} />
        <BasicInput {...printers} />
      </section>
      <fieldset className="mb-3" disabled>
        <h2 className="text-lg">{userInfoTech.title}</h2>
        <p className="text-sm">{userInfoTech.description}</p>
        <BasicInput {...networkswitch} />
        <BasicInput {...networkrouter} />
        <BasicInput {...accesspoint} />
        <BasicInput {...voip} />
      </fieldset>
    </form>
  );
};
