"use client";

import { useDispatch, useSelector } from "@/contexts/QuoteContext";
import { actionCreators } from "@/contexts/QuoteContext/reducer";

const numberOfSteps = 4;
const STEPS = {
  0: {
    title: "User Info",
    description: "insert your contact info",
  },
  1: {
    title: "Inventory Info",
    description: "insert your contact info",
  },
  2: {
    title: "Pricing Info",
    description: "insert your contact info",
  },
};
export const Stepper = ({
  children,
  index,
}: Readonly<{
  children: React.ReactNode;
  index: number;
}>) => {
  const state = useSelector((state) => state);

  const currentStep = state.STEP_NUMBER;

  const activeColor = (index: number) =>
    currentStep >= index ? "indigo-500" : "gray-300";
  const isFinalStep = (index: number) => index === numberOfSteps - 1;

  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(actionCreators.setStepNumber(state.STEP_NUMBER + 1));
  };
  const handlePrevious = () => {
    dispatch(actionCreators.setStepNumber(state.STEP_NUMBER - 1));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <div key={index} className="flex items-center">
          {isFinalStep(index) ? null : (
            <div className={`mr-4 w-1 h-12 bg-${activeColor(index)}`}></div>
          )}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-${activeColor(index)} text-${activeColor(index)}`}
          >
            {"0" + (index + 1)}
          </div>
        </div>
        <div key={index} className="pl-4 flex flex-col items-start">
          <p className={`text-${activeColor(index)} font-semibold`}>{STEPS[index as keyof typeof STEPS]?.title}</p>
          <p className={`text-${activeColor(index)} font-light`}>{STEPS[index as keyof typeof STEPS]?.description}</p>
        </div>
      </div>
      {index === state.STEP_NUMBER ? children : <div></div>}
      <div></div>
    </div>
  );
};
