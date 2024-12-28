"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetUser = greetUser;
exports.printPersonInfo = printPersonInfo;
exports.squareNumber = squareNumber;
exports.isEven = isEven;
exports.printStudentInfo = printStudentInfo;
exports.logMessage = logMessage;
// Задание 1: Функция приветствия
function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
function printPersonInfo(person) {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}
// Задание 3: Функция для квадратного числа
function squareNumber(num) {
    return num * num;
}
// Задание 4: Функция для проверки четности
function isEven(num) {
    return num % 2 === 0;
}
function printStudentInfo(student) {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}
// Задание 6: Функция для логирования сообщения
function logMessage(message) {
    console.log(message);
}
