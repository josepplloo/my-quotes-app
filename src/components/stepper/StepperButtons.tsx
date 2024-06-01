"use client";

import { useDispatch, useSelector } from "@/contexts/QuoteContext";
import { actionCreators } from "@/contexts/QuoteContext/reducer";

const numberOfSteps = 4;
export const StepperButtons = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(actionCreators.setStepNumber(state.STEP_NUMBER + 1));
  };
  const handlePrevious = () => {
    dispatch(actionCreators.setStepNumber(state.STEP_NUMBER - 1));
  };

  return (
    <>
      <section className="flex gap-10">
        <button
          onClick={handlePrevious}
          className="bg-blue-600 text-white p-2 rounded-md"
        >
          Previous step
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white p-2 rounded-md"
        >
          Next step
        </button>
      </section>
    </>
  );
};
