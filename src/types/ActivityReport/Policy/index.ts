import { fulfillments } from "@/contexts/ActivityReport";

export interface Promise {
  id: number;
  title: string;
  content: string;
  progress: number;
}

export type FulfillmentType = (typeof fulfillments)[number];
