// Задание 1: Функция приветствия
export function greetUser(name: string): void {
  console.log(`Привет, ${name}!`);
}

// Задание 2: Интерфейс и функция
export interface Person {
  name: string;
  age: number;
  city: string;
}

export function printPersonInfo(person: Person): void {
  console.log(
    `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
  );
}

// Задание 3: Функция для квадратного числа
export function squareNumber(num: number): number {
  return num * num;
}

// Задание 4: Функция для проверки четности
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Задание 5: Интерфейс и функция для студента
export interface Student {
  name: string;
  grade: number;
}

export function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

// Задание 6: Функция для логирования сообщения
export function logMessage(message: string): void {
  console.log(message);
}
