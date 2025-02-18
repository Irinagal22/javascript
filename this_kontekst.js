/*1. Создай объект со свойствами и методом, который использует `this` для доступа к этим свойствам. 
Затем присвой этот метод другой переменной и вызовите её. Объясни своими словами, что произошло;*/
const personage = {
    name: 'Irina',
    age: 23,
    greet() {
        console.log(`Hello, my name is ${this.name}. At the moment, my age is ${this.age}`);
    }
};

personage.greet();

const greetFunc = personage.greet;
greetFunc();/*Когда мы вызываем greetFunc(), this больше не указывает на объект personage. В таком случае this будет ссылаться на глобальный объект (в браузере это window), 
или будет undefined в строгом режиме.*/

/*2. Объясни, почему в примере ниже в первом случае выводится имя, а во втором - undefined. Как сделать так, чтобы в методе delayedGreet тоже выводилось имя 
(без использования call, apply или bind)? */
/*const student = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function() {
    setTimeout(this.greet, 1000);//Здесь уже this ссылается на глобальный объект
  }
};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined  */

const student = {
  name: 'Alice',  
  greet: function() {  
    console.log(`Hello, ${this.name}!`);  
  },

  delayedGreet: function() { 
    setTimeout(() => {
      this.greet();
    }, 1000);
  }
};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, Alice

//3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`;

function aboutPerson(name, age) {
  console.log(`${name} в возрасте ${age} лет любит заниматься спортом. В свободное время ${name} предпочитает ${this.activity}.`)
}

const person = {
  activity: 'чтение книг'
};

aboutPerson.call(person, 'Анна', '23');
aboutPerson.apply(person, ['Ирина', '18']);
const aboutPersonBind = aboutPerson.bind(person, 'Катя', '20');
aboutPersonBind()

//4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()? Объясни, почему так произошло. Как это можно изменить?

function sayHello() {
  console.log('Hello, ' + this.name)
}

const admin = {
  name: 'Bob'
};

const user = {
  name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin);
sayHelloToAdmin()

/*const sayHelloToUser = sayHelloToAdmin.bind(user) Здесь bind использоуется второй раз для изменения контекста функции. 
Повторный вызов bind на уже привязанной функции не изменяет контекст.
sayHelloToUser()*/

const sayHelloToUser = sayHello.bind(user);
sayHelloToUser()