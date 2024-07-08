"use client";
import { useSelector } from "@/contexts/QuoteContext";
import { type QuoteState } from "@/contexts/QuoteContext/reducer";
import * as yup from 'yup';
import { type ValidationError } from 'yup';

export const validationPatterns = {
  text: "\\w{3,60}\\s\\w{2,60}.*",
  number: "\\^[0-9]\\d*",
};
export interface GetValidationStatus {
  isValid: boolean,
  errors: string[]
};
const STEP_1 = 0
const STEP_2 = 1

export const schema ={ 
  [STEP_1]: yup.object().shape({
    email: yup.string().email('Provide a valid Email address').required('Email is required'),
    name: yup.string().required('Name is required'),
    tel: yup.string().required('Tel is required')
  }),
  [STEP_2]: yup.object().shape({
    cameras: yup.number().required('The number of cameras is required').positive('The number of cameras has to be positive').integer(),
    computers: yup.number().required('The number of computers is required').positive('The number of computers has to be positive').integer(),
    inkPrinters: yup.number().required('The number of ink printers is required').positive('The number of ink printers has to be positive').integer(),
    laserPrinters: yup.number().required('The number of laser printers is required').positive('The number of laser printers has to be positive').integer(),
    netDevices: yup.number().required('The number of net devices is required').positive('The number of net devices has to be positive').integer(),
    posPrinters: yup.number().required('The number of POS printers is required').positive('The number of POS printers has to be positive').integer(),
  })
};  

export const schemaStep2 = yup.object().shape({
  cameras: yup.number().required('The number of cameras is required').positive('The number of cameras has to be positive').integer(),
  computers: yup.number().required('The number of computers is required').positive('The number of computers has to be positive').integer(),
  inkPrinters: yup.number().required('The number of ink printers is required').positive('The number of ink printers has to be positive').integer(),
  laserPrinters: yup.number().required('The number of laser printers is required').positive('The number of laser printers has to be positive').integer(),
  netDevices: yup.number().required('The number of net devices is required').positive('The number of net devices has to be positive').integer(),
  posPrinters: yup.number().required('The number of POS printers is required').positive('The number of POS printers has to be positive').integer(),
});

export const getValidationStatus = async(state: QuoteState, STEP_NUMBER: number): Promise<GetValidationStatus> => {
  let isValid = true;
  let errors: ValidationError["errors"] = []; 

  try {
    isValid = await schema[STEP_NUMBER as keyof typeof schema]
      .isValid(state.form);
    await schema[STEP_NUMBER as keyof typeof schema]
      .validate(state.form, { abortEarly: false });
  } catch (error: any) {
    errors = [...errors, ...error.errors];
  }

  return {isValid, errors};
};
