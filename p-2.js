// 1. How many times does each element appear in the array:
// {kiwi: 3, apple: 2, orange: 1}
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const countWord = (list) => {
    const count = {};
    list.forEach(x => {
        if (!count[x]) {
            count[x] = 1;
        } else {
            count[x] ++;
        }
    });
    return count;
}

// console.log(countWord(fruits));


// 2. Create an array that contains only unique values
// ['kiwi', 'apple', 'orange']
const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const uniqueItems = (list) => {
    const unique = {};
    list.forEach(x => {
        unique[x] = true;
    });
    return Object.keys(unique);
}

// console.log(uniqueItems(myFruits));


// 3. Create a function that groups students by age.
// Get an output object where the key is age,
// and the value is an array of students.
// { 
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }],
//   '18': [{ name: 'stas', age: 18 }],
// }
const students = [
    { name: 'alex', age: 20 },
    { name: 'mike', age: 24 },
    { name: 'masha', age: 20 },
    { name: 'stas', age: 18 },
  ];

const groupStudents = (list) => {
    const grouped = {};
    list.forEach(x => {
        if (!grouped[x.age]) {
            grouped[x.age] = [x];
        } else {
            grouped[x.age].push(x);
        }
    });
    return grouped;
}

// console.log(groupStudents(students));


// 4. Write a function that takes two arguments:
// an array of unique integers and a sum in the form of an integer.
// If the sum of any two numbers from the array argument equals the number
// that comes as the second argument, the function should
// return a new array of these two numbers in any order.
// If there's no solution, return an empty array.

// [-1, 11] or [11, -1] - (-1 + 11 = 10)

//https://www.youtube.com/watch?v=498UIks8UOk 9:20
//https://github.com/VasilyMur/js-workout-6-coding-tasks/blob/main/code-finish.js

//https://www.google.com/search?q=js+%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8+%D0%BD%D0%B0+%D1%81%D0%BE%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8&client=firefox-b-d&sca_esv=577516629&sxsrf=AM9HkKl-Gbuh39TyIA35bbEbw8Ugm2kV5g%3A1698539756813&ei=7Kg9ZdqWMez_wPAP5dWqiA8&oq=js+%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGpzINC30LDQtNCw0YfQuCAqAggAMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiSClBnWGdwAXgBkAEAmAGHAaABhwGqAQMwLjG4AQPIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp
