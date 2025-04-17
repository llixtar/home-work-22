// ----  1  ----
console.log('\n#1. Лічильник за допомогою замикання:');

const counter = function (n) {
  let val = 0;
  return function (newValue) {
    if (newValue !== undefined) {
      val = newValue
    }
    return val++;
  };

};

const counterFunc = counter();

console.log(counterFunc()) // 0
console.log(counterFunc()) // 1
console.log(counterFunc(100)) // 100
console.log(counterFunc()) // 101
console.log(counterFunc()) // 102
console.log(counterFunc(500)) // 500
console.log(counterFunc()) // 501
console.log(counterFunc()) // 502
console.log(counterFunc(0)) // 0
console.log(counterFunc()) // 1
console.log(counterFunc()) // 2

// ----  2  ----
console.log('\n#2. Три методи за допомогою замикання:');
const counterFactory = function () {
  let counter = 0;

  function value(n) {
    if (n !== undefined) {
      counter = n;
    }
    return counter;
  }

  function increment() {
    counter += 1;
  }

  function decrement() {
    counter -= 1;
  }

  return {
    value,
    increment,
    decrement,
  };
};


const cntr = counterFactory();

console.log(cntr.value()); // 0
cntr.increment();
cntr.increment();
cntr.increment();
console.log(cntr.value()); // 3
cntr.decrement();
cntr.decrement();
console.log(cntr.value()); // 1
console.log(cntr.value(100)); // 100
cntr.decrement();
console.log(cntr.value()); // 99
console.log(cntr.value(200)); // 200
cntr.increment();
console.log(cntr.value()); // 201


// ----  3  ----
console.log('\n#3. Рекурсія для підрахунку степені:');

const myPrint = (a, b, res) => {
  return `${a}^${b}=${res}`;
};

/*const myPow = (a, b) => {
  let res;
  if (b === 0) return 1;
  if (b > 0) return a * myPow(a, b - 1);
  if (b < 0) return 1 / myPow(a, -b);
};*/

const myPow = (a, b, myPrint) => {
  let res;
  if (b === 0) {
    res = 1;
  }
  if (b > 0) {
    res = a * myPow(a, b - 1);
  }
  if (b < 0) {
    res = 1 / myPow(a, -b);
  }

  if (myPrint) 
    return myPrint(a, b, res);
  else
    return res;
};

console.log(myPow(3, 4, myPrint)) // 3^4=81
console.log(myPow(2, 3, myPrint)) // 2^3=8
console.log(myPow(2, 0, myPrint)) // 2^0=1
console.log(myPow(2, -2, myPrint)) // 2^-2=0.25

// ----  4  ----
console.log('\n#4. Приймає довільний числовий масив і повертає максимальне число:');
const myMax = (arr) => {
  return Math.max.apply(null, arr);
};

const list = [12, 23, 100, 34, 56, 9, 233];
console.log(list);
console.log("Максимальне число:" + myMax(list)); // 233


// ----  5  ----
console.log('\n#5. Помножити числа а і b, повертаючи результат:');
const myMul = (a, b) => {
  return a * b;
};

const myDouble = (n) => {
  return myMul.bind(null, 2)(n);
};

const myTriple = (n) => {
  return myMul.bind(null, 3)(n);
};

console.log('myDouble:');
console.log(myDouble(3)); // 6
console.log(myDouble(4)); // 8
console.log(myDouble(5)); // 10

console.log('myTriple:');
console.log(myTriple(3)); // 9
console.log(myTriple(4)); // 12
console.log(myTriple(5)); // 15
