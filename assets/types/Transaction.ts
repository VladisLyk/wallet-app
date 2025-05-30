import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { TransactionStatus } from "./Status";

export interface Transaction {
    id: number;
    name: string;
    amount: number;
    icon: IconDefinition;
    location: string;
    status: TransactionStatus;
    date: string;
  }
  