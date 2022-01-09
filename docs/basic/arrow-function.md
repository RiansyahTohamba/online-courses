# contoh
```
const sayHello = (name) => {
    const say = `Hello ${name}`
    console.info(say)
}

sayHello('Rian')
```

# apa itu arrow function?
alternatif untuk pembuatan function

# untuk apa ada arrow function?

# apa itu function generator?

# apa saja kekurangan arrow function?
1. tidak memiliki fitur argument object
2. tidak bisa menggunakan function generator
3. tidak bisa mengakses `this`
4. tidak bisa mengakses super 
 
3 dan 4 akan dibahas di OOP Js

# tanpa block
> tanpa argumen,  wajib pakai parenthes
const questions = () => `1. <b> ${question} <b>`

> hanya 1 argumen, tidak wajib pakai parenthes
const questions = question => `1. <b> ${question} <b>`
> 1 argumen, wajib parenthes
const sum = (first, second) => first+second


# anonymous vs arrow
> anonymous
const getQuestions = function (){
    question = doSomething();    
    return template(question);
}
> arrow
const getQuestions = () => {
    question = 'doSomething();'    
    return question;
}
console.info(getQuestions());

const getQuestions = () => {
    console.log('question = doSomething()');
    console.log('template(question)');
}
