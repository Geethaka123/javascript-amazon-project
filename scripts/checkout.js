import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/car.js";
// import "../data/cart-class.js";

//async return a promise
async function loadPage() {
  try {
    await loadProductsFetch();

    const value = await new Promise((resolve) => {
      loadCart(() => {
        resolve("value4");
      });
    });

    console.log(value);
  } catch (error) {
    console.log("unexpected error. plz try again!yooo");
    console.log(error);
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

//let us run multiple promises at the same time
// Promise.all([
//   //   new Promise((resolve) => {
//   //     loadProducts(() => {
//   //       resolve("value1"); //go to next step
//   //     });
//   //   }),
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve("value1"); //go to next step
//   });
// })
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
