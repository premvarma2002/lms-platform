//  for indian currency 

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price)
  }


//   for dollors

//   export const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//     }).format(price)
// }