import {
  greetUser,
  printPersonInfo,
  squareNumber,
  isEven,
  printStudentInfo,
  logMessage,
  Person,
  Student,
} from "./function";

// Пример использования
greetUser("Алексей");

const person: Person = { name: "Иван", age: 30, city: "Москва" };
printPersonInfo(person);

const number = 4;
console.log(`Квадрат числа ${number}: ${squareNumber(number)}`);

console.log(`Число ${number} четное? ${isEven(number)}`);

const student: Student = { name: "Мария", grade: 5 };
printStudentInfo(student);

logMessage("Это сообщение для логирования.");
