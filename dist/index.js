"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
// Пример использования
(0, function_1.greetUser)("Алексей");
const person = { name: "Иван", age: 30, city: "Москва" };
(0, function_1.printPersonInfo)(person);
const number = 4;
console.log(`Квадрат числа ${number}: ${(0, function_1.squareNumber)(number)}`);
console.log(`Число ${number} четное? ${(0, function_1.isEven)(number)}`);
const student = { name: "Мария", grade: 5 };
(0, function_1.printStudentInfo)(student);
(0, function_1.logMessage)("Это сообщение для логирования.");
