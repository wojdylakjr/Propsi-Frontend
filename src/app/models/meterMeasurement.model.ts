import { IMeter } from "./meter.model";

export interface IMeterMeasurement {
  id?: number;
  meter?: IMeter;
  value?: number;
  date?: Date;
  unit?: string;
}
