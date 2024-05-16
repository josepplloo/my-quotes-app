export enum QuoteFormFields {
  name = "name",
  email = "email",
  tel = "tel",
};

type FieldValueType = string | boolean | number;

export interface FormEntry {
  fieldID: QuoteFormFields;
  fieldValue: FieldValueType
};

export type QuoteFormInterface = Record<QuoteFormFields, FieldValueType>
