export interface IToy {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean,
}

export type CreatedFilteredArray = IToy[];

export type FilterValue = string | boolean | undefined;
