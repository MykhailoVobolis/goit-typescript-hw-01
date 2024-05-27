Basic/Task 1

Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

const age = 50;
const username = 'Max';
const toggle = true;
const empty = null;
const callback = (a) => { return 100 + a };



Basic/Task 2

У вас є наступний JavaScript масив:

let person = ['Max', 21];

Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?



Basic/Task 3

Створіть змінну, яка може містити або рядок, або число (union type)?
Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).



Basic/Task 4

У вас є такі функції JavaScript:

function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}

Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?


Basic/Task 5

Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.



Basic/Task 6

Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};



Basic/Task 7

У вас є два об'єкти:

const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),     }
  }

  const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }

Створіть новий тип даних, який підходить для цих двох об'єктів.