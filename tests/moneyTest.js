import { formatCurrency } from "../scripts/utills/money.js";

if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

if (formatCurrency(0) === "0.00") {
  console.log("passed1");
} else {
  console.log("failed");
}

if (formatCurrency(2000.5) === "20.01") {
  console.log("passed2");
} else {
  console.log("failed");
}
