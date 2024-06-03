import { FormEntry, type QuoteFormInterface } from "@/components/form/types";
import { pricing } from "@/utils/rules/pricing";

const STEP_NUMBER = "STEP_NUMBER";

export interface QuoteState {
  [STEP_NUMBER]: number;
  form: QuoteFormInterface; //TODO: define the type for quote, update form type
  quote: Record<string, number>; //TODO: define the type for quote, update form type
}

//TODO: define the type for quote, update form type
export const INITIAL_STATE: QuoteState = {
  [STEP_NUMBER]: 0,
  form: {
    name: "",
    email: "",
    tel: "",
  },
  quote: {
    budget: 0,
    invested: 0,
    total: 0,
    net: 0,
  },
};

export enum ActionsTypes {
  SET_STEP_NUMBER = "SET_STEP_NUMBER",
  SET_FORM = "SET_FORM",
  SET_RULE_1 = "SET_RULE_1",
}

interface SetStepNumber {
  type: ActionsTypes.SET_STEP_NUMBER;
  payload: number;
}

interface SetForm {
  type: ActionsTypes.SET_FORM;
  payload: FormEntry;
}

interface SetRule1 {
  type: ActionsTypes.SET_RULE_1;
  payload: FormEntry | null;
}

export type Action = SetStepNumber | SetForm | SetRule1;

export const actionCreators = {
  setStepNumber: (step: number): SetStepNumber => ({
    type: ActionsTypes.SET_STEP_NUMBER,
    payload: step,
  }),
  setForm: (data: FormEntry): SetForm => ({
    type: ActionsTypes.SET_FORM,
    payload: data,
  }),
  setRule1: (data: FormEntry): SetRule1 => ({
    type: ActionsTypes.SET_RULE_1,
    payload: data,
  }),
};

export const reducer = (state: QuoteState, action: Action): QuoteState => {  
  switch (action.type) {
    case ActionsTypes.SET_STEP_NUMBER: {
      return { ...state, [STEP_NUMBER]: action.payload };
    }
    case ActionsTypes.SET_FORM: {
      const field = {[action.payload.fieldID]: action.payload.fieldValue}
      //It'll call the rules each time I use the state
      const newState = pricing(state, field);
      return { 
        ...state,
        form: { ...state.form, ...field },
        quote: {...state.quote, ...newState.quote }
      };
    }
    case ActionsTypes.SET_RULE_1: {
      // TODO: Rules implementations should be in another file
      // This is a fake Business rule!
      const payload = { action };
      const myRule = (Math.floor(Math.random() * 3) + 1) * 10000;
      const IVA = 0.19;

      const auxBudget = state.quote.budget - myRule;
      const auxTotal = state.quote.total + myRule;
      const auxIVA = auxTotal * IVA + auxTotal;
      return {
        ...state,
        quote: {
          ...state.quote,
          budget: auxBudget,
          invested: myRule,
          total: auxTotal,
          net: auxIVA,
        },
      };
    }
    default: {
      return state;
    }
  }
};
