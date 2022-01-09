pada javascript, satu module/class diwakilkan dengan 1 function.
function ini akan di export pada akhirnya:
```
function App(){

}
export App;
```

fungsi didalam module App() terdiri dari arrow function.
arrow-function memang memiliki banyak keterbatasan:
1. tidak memiliki fitur argument object
2. tidak bisa menggunakan function generator
3. tidak bisa mengakses `this`
4. tidak bisa mengakses super 

karena inilah dia digunakan pada module javascript.
