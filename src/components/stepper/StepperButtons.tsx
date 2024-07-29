"use client";

import { useDispatch, useSelector } from "@/contexts/QuoteContext";
import { actionCreators } from "@/contexts/QuoteContext/reducer";
import { getValidationStatus } from "../form/BasicInput/inputValidation";
import { useState } from "react";

const ErrorList = ({ errors }: { errors: string[] }) => {
  return (
    <>
      {errors.length > 0 && (
        <ul className="flex flex-col">
          {errors.map((item) => (
            <li key={item}>{`❌ ${item}`}</li>
          ))}
        </ul>
      )}
    </>
  );
};

const numberOfSteps = 2;
export const StepperButtons = () => {
  const [validation, setValidation] = useState({
    isValid: true,
    errors: [""],
  });
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleNext = async () => {
    const { isValid, errors } = await getValidationStatus(
      state,
      state.STEP_NUMBER
    );
    setValidation({ isValid, errors });
    if (isValid) {
      dispatch(actionCreators.setStepNumber(state.STEP_NUMBER + 1));
    }
  };
  const handlePrevious = () => {
    dispatch(actionCreators.setStepNumber(state.STEP_NUMBER - 1));
  };

  return (
    <>
      <section className="flex justify-self-center mt-3 gap-10">
        <button
          onClick={handlePrevious}
          className="bg-black text-white p-2 rounded-md border border-white min-w-40 disabled:opacity-45"
          disabled={state.STEP_NUMBER === 0}
        >
          Previous step
        </button>
        <button
          onClick={handleNext}
          className="bg-black text-white p-2 rounded-md border border-white min-w-40 disabled:opacity-45"
          disabled={state.STEP_NUMBER >= numberOfSteps}
        >
          Next step
        </button>
      </section>
      <section className="min-h-6 transition-[height] duration-300">
        {validation.isValid ? (
          ""
        ) : (
          <article>
            <p>The form is invalid:</p>
            <ErrorList errors={validation.errors} />
          </article>
        )}
      </section>
    </>
  );
};
