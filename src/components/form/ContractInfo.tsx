import maintenance from "./contractMeta/maintenance.json";
import support from "./contractMeta/support.json";
import sla from "./contractMeta/documentation.json";
import {BasicInput} from "./BasicInput";

export const ContractInfoForm = () => {
  const { corrective, predictive, preventive } = maintenance.properties;
  const { level1, level2, level3 } = support.properties;
  const { tier1, tier2, tier3, documentation, branches, report } = sla.properties;

  return (
    <div className="w-full p-4">
      <fieldset className="p-2 mb-3 border rounded">
        <legend>
          <h2 className="text-lg">{maintenance.title}</h2>
          <p className="text-sm">{maintenance.description}</p>
        </legend>
        <BasicInput {...corrective} />
        <BasicInput {...preventive} />
        <BasicInput {...predictive} />
      </fieldset>
     <fieldset className="p-2 mb-3 border rounded">
        <h2 className="text-lg">{support.title}</h2>
        <p className="text-sm">{support.description}</p>
        <BasicInput {...level1} />
        <BasicInput {...level2} />
        <BasicInput {...level3} />
      </fieldset>
      <fieldset className="p-2 mb-3 border rounded">
        <h2 className="text-lg">{sla.title}</h2>
        <p className="text-sm">{sla.description}</p>
        <BasicInput {...tier1} />
        <BasicInput {...tier2} />
        <BasicInput {...tier3} />
      </fieldset>
      <fieldset className="p-2 mb-3 border rounded">
        <h2 className="text-lg">{`Administrative Tasks`}</h2>
        <p className="text-sm">Select the ones who apply to you.</p>
        <BasicInput {...documentation} />
        <BasicInput {...report} />
        <BasicInput {...branches} />
      </fieldset>
    </div>
  );
};
