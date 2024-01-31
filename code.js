// console.log("start");
// const id =  setTimeout(function() {
//    console.log("hello");
// }, 0);
// clearTimeout(id);

// setTimeout(function() {
//    console.log("ok")
// }, 0 )

// console.log("end");
// let list = [
//    "Tigran",
//    "Zara",
//    "Arman",
//    "Garik",
//    "Gohar",
//    "Gayane",
//    "Laura",
//    "Anna",
//    "Gagik"
// ];
// let searchText = "";

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//    searchText = input.value;
//    render()
// });

// const root = document.querySelector("#root");

// function render() {
//    root.innerHTML = "";
//    list.filter((name) => {
//       return name.indexOf(searchText) !== -1;
//    }).map(name => {
//       const div = document.createElement("div");
//       div.innerText = name;
//       return div;
//    }).forEach(el => {
//       root.appendChild(el);
//    });
// }
// render();

// function func(x, y) {
//    let a = x + 2;
//    let b = y + 2;
//    let c = x + y;
//    return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//          resolve(c * 2);
//       }, 10000);
//    });
// }


// const promise = func(2, 4);
// promise.then(function(result) {
//    alert(result);
// });

// function calculator(x, y) {
//    let first = x + 5;
//    let second = y + 2;
//    let third = first + second; 
//    let forth = third * 2;
//    return forth;
// }
// console.log(calculator(4, 5)); 


// function calculator(x, y) {
//    let first = x + 5;
//    let second = y + 2;
//    let third = first + second;
//    return new Promise(function(resolve, reject) {
//           setTimeout(function() {
//             resolve(third * 2);
//           }, 5000)
//    })
// };

// let param = calculator(4, 5);
// param.then(function(result) {
//    alert(result);
// })

// function func() {
//    return new Promise(function(resolve, reject) {
//       setTimeout(function () {
//         resolve(8)
//       }, 1000);
//    })
  
// }
// const p = func();
// p.then(function(result) {
//     console.log(result)
// })

function func() {
   return new Promise(function(resolve, reject) {
      setTimeout(function() {
         // reject(new Error("You have a problem."));
         resolve(8)
      }, 2000)
   });
}

function func2 (val) {
   return new Promise(function(resolve, reject) {
        setTimeout(function() {
         resolve(val + 9);
        }, 2000);
   })
}


func().then(function(result) {
   return func2(result);
}).then(function(result) {
   return result + 5;
}).then(function (result) {
   alert(result);
})


 
// answer.catch(function(error) {
//    alert(error);
// });

















