// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
// let a = 10;
// console.log(a > 0);

// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
// let a = 5;
// {
//   if (a % 2 !== 0) {
//     console.log("Toq Son");
//   } else {
//     console.log("Juft Son");
//   }
// }

// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
// let a = 4;
// let b = 2;
// {
//   if (a > 2 && b <= 3) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
// let a = 5;
// let b = 6;
// let c = 7;
// {
//   if (a <= b && b <= c) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
// let a = 5;
// let b = 10;
// if ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// let a = 2;
// let b = -5;
// let c = -10;
// {
//   if (a > 0) {
//     console.log(true);
//   } else if (b < 0) {
//     console.log(true);
//   } else if (c < 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
// let son = 123;

// let yuzlik = Math.floor(son / 100);
// let onlik = Math.floor((son % 100) / 10);
// let birlik = son % 10;
// if (yuzlik !== onlik && yuzlik !== birlik && onlik !== birlik) {
//   console.log("true");
// } else {
//   console.log(false);
// }

// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 5;
// let b = 5;
// let c = 6;
// if (a === b || a === c || b === c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//                      Uyga Vazifa
// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let a = 10;
// {
//   if (a % 2 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A >= 0 yoki B <-2"
// let a = 2;
// let b = -5;
// {
//   if (a >= 0 || b < -2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// let a = 3;
// let b = 5;
// let c = 10;
// if ((a < b && b < c) || (c < b && b < a)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = 3;
// let b = 5;
// {
//   if (a % 2 !== 0 && b % 2 !== 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let a = 5;
// let b = 7;
// {
//   if (a % 2 !== 0 || b % 2 !== 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// let a = 3;
// let b = 4;
// if ((a % 2 !== 0 && b % 2 === 0) || (a % 2 === 0 && b % 2 !== 0)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// let a = 1;
// let b = 2;
// let c = 3;
// {
//   if (a > 0 && b > 0 && c > 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son
// let a = 2;
// let b = -1;
// let c = -2;
// {
//   if (a > 0) {
//     console.log(true);
//   } else if (b < 0 && c < 0) {
//     console.log(false);
//   }
// }

// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// let a = 1;
// let b = 2;
// let c = -1;
// {
//   if (a > 0 && b > 0) {
//     console.log(true);
//   } else if (c < 0) {
//     console.log(false);
//   }
// }

// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
// let son = 10;
// {
//   if (son % 2 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
// let son = 101;
// {
//   if (son % 2 !== 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
// let a = 5;
// let b = -5;
// let c = 7;
// {
//   if (a + b === 0 || b + c === 0 || a + c === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let son = 234;

// let yuzlik = Math.floor(son / 100);
// let onlik = Math.floor((son % 100) / 10);
// let birlik = son % 10;

// if (yuzlik < onlik && onlik < birlik) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let son = 741;

// let yuzlik = Math.floor(son / 100);
// let onlik = Math.floor((son % 100) / 10);
// let birlik = son % 10;

// if ((yuzlik < onlik && onlik < birlik) || (yuzlik > onlik && onlik > birlik)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
// let son = 101;

// let a = Math.floor(son / 100);
// let b = Math.floor((son % 100) / 10);
// let c = son % 10;

// if (a === c) {
//   console.log(true);
// } else {
//   console.log(false);
// }
