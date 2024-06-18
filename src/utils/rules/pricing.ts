import {type QuoteState} from '@/contexts/QuoteContext/reducer';
import {type FieldValueType} from "@/components/form/types";

type FormEntry = {
  [x: string]: FieldValueType;
};

const HOT_KEYS = ['maintenance', 'support', 'documentation'];

export const pricing = (state: QuoteState, field: FormEntry):QuoteState => {
  let auxState = {...state};
  // Create new aux fields for each rule, so yo only have to change the value of the field then you can sum the total
  if('maintenance' in field) {
    const myRule = (Math.floor(Math.random() * 3) + 1) * 10000;
    const IVA = 0.19;

    const auxBudget = auxState.quote.budget - myRule;
    const auxTotal = auxState.quote.total + myRule;
    const auxIVA = auxTotal * IVA + auxTotal;
    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        budget: auxBudget,
        invested: myRule,
        total: auxTotal,
        net: auxIVA,
      },
    };
  }

  if('support' in field) {
    const myRule = (Math.floor(Math.random() * 3) + 1) * 10000;
    const IVA = 0.19;

    const auxBudget = auxState.quote.budget - myRule;
    const auxTotal = auxState.quote.total + myRule;
    const auxIVA = auxTotal * IVA + auxTotal;
    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        budget: auxBudget,
        invested: myRule,
        total: auxTotal,
        net: auxIVA,
      },
    };
  }

  if('documentation' in field) {
    const myRule = (Math.floor(Math.random() * 3) + 1) * 10000;
    const IVA = 0.19;

    const auxBudget = auxState.quote.budget - myRule;
    const auxTotal = auxState.quote.total + myRule;
    const auxIVA = auxTotal * IVA + auxTotal;
    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        budget: auxBudget,
        invested: myRule,
        total: auxTotal,
        net: auxIVA,
      },
    };
  }

  return auxState;
};
