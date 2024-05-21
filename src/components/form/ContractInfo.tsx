import maintenance from "./contractMeta/maintenance.json";
import support from "./contractMeta/support.json";
import documentation from "./contractMeta/documentation.json";
import {BasicInput} from "./BasicInput";

export const ContractInfoForm = () => {
  const { corrective, predictive, preventive, proactive } = maintenance.properties;
  const { level1, level2, level3, level4 } = support.properties;
  const { tier1, tier2, tier3, tier4 } = documentation.properties;

  return (
    <div className="w-full p-4">
      <fieldset className="p-2 mb-3 border rounded">
        <legend>
          <h2 className="text-lg">{maintenance.title}</h2>
          <p className="text-sm">{maintenance.description}</p>
        </legend>
        <BasicInput {...corrective} />
        <BasicInput {...predictive} />
        <BasicInput {...preventive} />
        <BasicInput {...proactive} />
      </fieldset>
     <fieldset className="p-2 mb-3 border rounded">
        <h2 className="text-lg">{support.title}</h2>
        <p className="text-sm">{support.description}</p>
        <BasicInput {...level1} />
        <BasicInput {...level2} />
        <BasicInput {...level3} />
        <BasicInput {...level4} />
      </fieldset>
      <fieldset className="p-2 mb-3 border rounded">
        <h2 className="text-lg">{documentation.title}</h2>
        <p className="text-sm">{documentation.description}</p>
        <BasicInput {...tier1} />
        <BasicInput {...tier2} />
        <BasicInput {...tier3} />
        <BasicInput {...tier4} />
      </fieldset>
    </div>
  );
};
