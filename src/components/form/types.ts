export enum QuoteFormFields {
  name = "name",
  email = "email",
  tel = "tel",
};

export type FieldValueType = string | boolean | number;

export interface FormEntry {
  fieldID: string;
  fieldValue: FieldValueType
};

export type QuoteFormInterface = Record<QuoteFormFields, FieldValueType>
