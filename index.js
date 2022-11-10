// 1) Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].

// function doggy (num, string) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr[i] = string;
//     }
//     console.log(arr);
// }
// doggy(3, "dog");


// 2)Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в объект. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем {"dog0" : "dog0", "dog1": "dog1", "dog2": "dog2"}.

// function doggy (num, string) {
//     let obj = {};
//     for (let i = 0; i < num; i++) {
//         obj[string + i] = string + i;
//     }
//     console.log(obj);
// }
// doggy(3, "dog");


// 3)Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. Так же написать  новую функцию для расчета суммы нечетных чисел в массиве.Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.

// function task (array) {
//     for(let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             sum1 += array[i];
//         } else {
//             sum2 += array[i];
//         }
//     }
// }
// function task2 (sum1, sum2) {
//     if (sum1 < sum2) {
//         console.log(sum1 + " Меньше чем " + sum2);
//     } else if (sum2 < sum1) {
//         console.log(sum2 + " Меньше чем " + sum1);  
//         }
//         else console.log("Они равны")        
// }
// let sum1 = 0;
// let sum2 = 0;
// let array = [6,5];
// task(array);
// task2(sum1, sum2);


// 4)Напишите функцию для преобразования градусов Цельсия в градусы Фаренгейта. (Например: console.log(function(0)) => 32); f = c * 1.8 +32

// function gradus(c){
//     let far = c * 1.8 + 32;
//     return far;
// }
// console.log(gradus(5));


// Функция min(a, b)

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
// console.log(min(12, 5));


// Функция pow(x,n)

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }