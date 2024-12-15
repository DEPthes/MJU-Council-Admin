import { fulfillments } from "@/constants/ActivityReport";

export type FulfillmentType = (typeof fulfillments)[number];

// ---------------- {{ promiseCategory }} -----------------------------------
export interface PromiseCategory {
  promiseCategoryId: number;
  title: string;
}

export interface PromiseCategoryResponse {
  check: boolean;
  information: PromiseCategory[];
  message: string | null;
}

// ------------------- {{ Promise }} ----------------------

export interface PromiseInformation {
  title: string;
  content: string;
  progress: number;
}

export interface PromiseResponseInformation {
  promiseCategoryId: number;
  title: string;
  content: string;
  progress: number;
}

export interface PromiseListResponse {
  check: boolean;
  information: PromiseResponseInformation[];
  message: string | null;
}
