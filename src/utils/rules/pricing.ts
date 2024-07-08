import {type QuoteState} from '@/contexts/QuoteContext/reducer';
import {type FieldValueType} from "@/components/form/types";

type FormEntry = {
  [x: string]: FieldValueType;
};

const HOT_KEYS = {
  maintenance: {
    corrective: 1,
    preventive: 1.6,
    predictive: 2
  }, 
  support: {
    level1: 0.10,
    level2: 0.16,
    level3: 0.20
  }, 
  tasks: {
    documentation: 0.10,
    report: 0.10,
    branches: 0.60
  },
  sla: {
    tier1: 0.10,
    tier2: 0.16,
    tier3: 0.20
  }
};

const HOT_PRICES = {
        "computers": "50000",
        "servers": "80000",
        "cameras": "30000",
        "laserPrinters": "50000",
        "inkPrinters": "30000",
        "posPrinters": "30000",
        "netDevices": "60000"
      };

const getBasePrice = (state: QuoteState) => {
  let basePrice = 0;
  const {form} = state
  // loop the object if HOT_PRICES[i] -> state[i] > 0 * HOT_PRICES[i] -> acc to sum of base price
  for (const property in HOT_PRICES) {
    basePrice = basePrice + (Number(HOT_PRICES[property as keyof typeof HOT_PRICES]) * Number(form[property as keyof typeof form]))
  }
  return basePrice;
}

export const pricing = (state: QuoteState, field: FormEntry):QuoteState => {
  let auxState = {...state};
  const basePrice = getBasePrice(auxState);
  const IVA = 0.19;
  // Create new aux fields for each rule, so yo only have to change the value of the field then you can sum the total
  if('maintenance' in field) {
    const type = field['maintenance'];
    const value = HOT_KEYS['maintenance'][type as keyof typeof HOT_KEYS.maintenance] 
    const myRule = basePrice * value ;
    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        maintenance: myRule
      },
    };
  }

  if('support' in field) {
    const type = field['support'];
    const value = HOT_KEYS['support'][type as keyof typeof HOT_KEYS.support] 
    const myRule = basePrice * value ;

    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        support: myRule
      },
    };
  }

  if('sla' in field) {
    const type = field['sla'];
    const value = HOT_KEYS['sla'][type as keyof typeof HOT_KEYS.sla] 
    const myRule = basePrice * value ;

    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        sla: myRule
      },
    };
  }

  if('documentation' in field) {
    const isChecked = field['documentation'];
    const myRule = isChecked ? basePrice * HOT_KEYS.tasks.documentation : 0;

    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        documentation: myRule
      },
    };
  }

  if('report' in field) {
    const isChecked = field['report'];
    const myRule = isChecked ? basePrice * HOT_KEYS.tasks.report : 0;

    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        report: myRule
      },
    };
  }
  
  if('branches' in field) {
    const isChecked = field['branches'];
    const myRule = isChecked ? basePrice * HOT_KEYS.tasks.branches : 0;

    auxState = {
      ...auxState,
      quote: {
        ...auxState.quote,
        branches: myRule
      },
    };
  }

  // sum of values for the grand total
  const {
    maintenance,
    support,
    sla,
    report,
    documentation,
    branches
  } = auxState.quote

  const sumOfServices = maintenance + support + sla + documentation + report + branches;
  const auxBudget = auxState.quote.budget - sumOfServices;
  const auxIVA = (sumOfServices * IVA) + sumOfServices;
  auxState = {
    ...auxState,
    quote: {
      ...auxState.quote,
      budget: auxBudget,
      invested: sumOfServices,
      total: sumOfServices,
      net: auxIVA,
    },
  };

  return auxState;
};
