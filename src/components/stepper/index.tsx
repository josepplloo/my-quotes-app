"use client";
import Image from "next/image"; 
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
  index,
}: Readonly<{
  index: number;
}>) => {
  const state = useSelector((state) => state);

  const currentStep = state.STEP_NUMBER;
  const isCurrent = index === state.STEP_NUMBER; 

  const activeColor = (index: number) =>
    currentStep >= index ? "black" : "gray-300";
  const isFinalStep = (index: number) => index === numberOfSteps - 1;

  const dispatch = useDispatch();
  const handleNext = (index: number) => {
    dispatch(actionCreators.setStepNumber(index));
  };

  return (
    <div className="col-span-1 h-24 w-96">
      <button
        onClick={() => handleNext(index)}
        className={`w-full flex items-center border-2 dark:invert hover:indigo-400 border-${isCurrent ? 'black': 'gray-300'}`}
      >
        <div className="flex items-center">
          {isFinalStep(index) ? null : (
            <div className={`w-1 h-12 bg-${activeColor(index)}`}></div>
          )}
          {/* circle */}
          <div
            className={`mx-4 w-8 h-8 rounded-full flex items-center justify-center border border-black bg-${isCurrent ? 'black': 'white'}`}
          >
            { currentStep > index ?
            <Image
              className="relative"
              src="/my-quotes-app/checkmark.svg"
              alt="Checkmark Logo"
              width={24}
              height={24}
              priority
            />
            :<p className={`text-${isCurrent ? 'white dark:black': 'gray-300 dark:invert'}`}>{"0" + (index + 1)}</p>}
          </div>
        </div>
        <article className="pl-4 px-2 flex flex-col items-start dark:invert">
          <p className={`text-${activeColor(index)} font-${isCurrent ? 'semibold': 'normal'}`}>
            {STEPS[index as keyof typeof STEPS]?.title}
          </p>
          <p className={`text-${activeColor(index)} font-light`}>
            {STEPS[index as keyof typeof STEPS]?.description}
          </p>
        </article>
      </button  >
    </div>
  );
};

export const StepAccordion = ({
  children,
  index,
}: Readonly<{
  children: React.ReactNode;
  index: number;
}>) => {
  const state = useSelector((state) => state);

  const isCurrent = index === state.STEP_NUMBER; 

  return (
      <div className={`max-h-60 overflow-auto ${isCurrent ? 'max-h-[300px]': 'max-h-0 w-0 h-0'} transition-[max-height] duration-500 ease-in-out`}>
        {children}
      </div>
  );
}
