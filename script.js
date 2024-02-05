//Task1
//1.Bir funksiya olacaq, həmin funksiya 2 parameter qəbul edəcək.
// Funksiyanın görəcəyi iş nədir-Girilən 2 parametr araligindaki ədədlərin cəmini tapacaq.İlk parameter 2ci parameterden kicik olmalidir.
let numSum = 0;
function sum(num1, num2) {
  if (num2 > num1) {
    for (let i = num1 + 1; i < num2; i++) {
      numSum += i;
    }
    console.log(numSum);
  } else {
    console.log("ilk parametr boyukdur 2ci parametrden");
  }
}

sum(2, 6); //3,4,5

//Task2
//Filter methodunu custom olaraq siz yazacaqsiz.Filter funksiyasi olacaq.Hazir funksiya olmayacaq
function customFilter(arr, callback) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

let numbers = [1, 2, 3, 4, 5, 6];
let ovenNumbers = customFilter(numbers, function (num) {
  return num % 2 == 0;
});

console.log(ovenNumbers);

//Task3
//Map və Reducer methodlarinida custom olaraq yazacaqsiz.Hazir map reducer istifade etmeden.Bu funksiyalari sifirdan siz yazacaqsiz
function customMap(array, callback) {
  let mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i], i, array));
  }
  return mappedArray;
}

let numbers2 = [1, 2, 3, 4, 5];
let squaredNumbers = customMap(numbers2, function (num) {
  return num * num;
});

console.log(squaredNumbers);
