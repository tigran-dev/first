console.log("start");
setTimeout(function() {
   console.log("hello");
}, 500);

for(let i = 0; i < 5000; i++) {
   console.log("waiting");
}

console.log("end");
