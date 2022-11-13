import { IBillLineItem } from "./billLineItem.model";
import { IRental } from "./rental.model";

export interface IBill {
  id?: number;
  totalPrice?: number;
  date?: Date;
  rental?: IRental;
  billLineItems?: IBillLineItem[] | null;
}
