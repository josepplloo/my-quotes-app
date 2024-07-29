import userInfoTech from "./usertech.json";
import { BasicInput } from "./BasicInput/BasicInput";
// import networkingInfo from "./networkinginfo.json";

export const InfrastructureForm = () => {
  const {
    equipment,
    servers,
    cameras,
    inkPrinters,
    laserPrinters,
    posPrinters,
    netDevices,
  } = userInfoTech.properties;
  // const { networkswitch, networkrouter, accesspoint, voip } = networkingInfo.properties;

  return (
    <>
      <section className="mb-3">
        <h2 className="text-lg">{userInfoTech.title}</h2>
        <p className="text-sm">{userInfoTech.description}</p>
        <BasicInput {...equipment} />
        <BasicInput {...servers} />
        <BasicInput {...cameras} />
        <BasicInput {...laserPrinters} />
        <BasicInput {...inkPrinters} />
        <BasicInput {...posPrinters} />
        <BasicInput {...netDevices} />
      </section>
      {/* <fieldset className="mb-3">
        <h2 className="text-lg">{userInfoTech.title}</h2>
        <p className="text-sm">{userInfoTech.description}</p>
        <BasicInput {...networkswitch} />
        <BasicInput {...networkrouter} />
        <BasicInput {...accesspoint} />
        <BasicInput {...voip} />
      </fieldset> */}
    </>
  );
};
