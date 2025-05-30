import {
  faUniversity,
  faCouch,
  faBullseye,
  faMugHot
} from "@fortawesome/free-solid-svg-icons";

import {
  faApple,
  faAmazon,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";

import { Transaction } from "./types/Transaction";

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Apple",
    amount: -14.06,
    icon: faApple,
    location: "Card Number Used",
    status: "Pending",
    date: "2025-05-29"
  },
  {
    id: 2,
    name: "Payment",
    amount: 174.00,
    icon: faUniversity,
    location: "JPMorgan Chase Bank",
    status: "Completed",
    date: "2025-05-28"
  },
  {
    id: 3,
    name: "Apple",
    amount: -3.24,
    icon: faApple,
    location: "Card Number Used",
    status: "Completed",
    date: "2025-05-28"
  },
  {
    id: 4,
    name: "Payment",
    amount: 99.71,
    icon: faUniversity,
    location: "JPMorgan Chase Bank",
    status: "Completed",
    date: "2025-05-25"
  },
  {
    id: 5,
    name: "Payment",
    amount: 73.58,
    icon: faUniversity,
    location: "JPMorgan Chase Bank",
    status: "Completed",
    date: "2025-05-26"
  },
  {
    id: 6,
    name: "IKEA",
    amount: -21.61,
    icon: faCouch,
    location: "Round Rock, TX",
    status: "Completed",
    date: "2025-05-24"
  },
  {
    id: 7,
    name: "Target",
    amount: -73.58,
    icon: faBullseye,
    location: "Cedar Park, TX",
    status: "Completed",
    date: "2025-05-24"
  },
  {
    id: 8,
    name: "Amazon",
    amount: -45.99,
    icon: faAmazon,
    location: "Online Purchase",
    status: "Completed",
    date: "2025-05-23"
  },
  {
    id: 9,
    name: "Spotify",
    amount: -9.99,
    icon: faSpotify,
    location: "Subscription",
    status: "Recurring",
    date: "2025-05-22"
  },
  {
    id: 10,
    name: "Starbucks",
    amount: -5.50,
    icon: faMugHot,
    location: "Austin, TX",
    status: "Completed",
    date: "2025-05-21"
  }
];

export default transactions;
