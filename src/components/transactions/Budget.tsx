"use client";
import { useDispatch, useSelector } from "@/contexts/QuoteContext";
import { actionCreators } from "@/contexts/QuoteContext/reducer";
import { BasicInput } from "../form/BasicInput";

const budgetMeta = {
  title: "Budget",
  description: "Some budget in mind?",
  type: "object",
  required: [],
  properties: {
    budget: {
      id: "budget",
      type: "number",
      title: "Budget",
      name: "budget",
    },
  },
};

// TODO: update this component given the new rules of the business
export const BudgetInput = () => {
  const state = useSelector((state) => state);
  const { invested, total, net } = state.quote;

  const dispatch = useDispatch();
  const handleChange = () => {
    const payload = {
      fieldID: "",
      fieldValue: "",
    };
    dispatch(actionCreators.setRule1(payload));
  };

  return (
    <section className="mb-3">
      <h2 className="text-lg">{budgetMeta.title}</h2>
      <p className="text-sm">{budgetMeta.description}</p>
      <BasicInput {...budgetMeta.properties.budget} />
      <button
        className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleChange}
      >
        Yes ? no ? take me there!
      </button>
    </section>
  );
};
