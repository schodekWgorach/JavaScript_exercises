/*setTimeout */


const firstIntervalID = setInterval(function () {
  console.log("Wygenerowano z setInterval");
}, 1000);



setTimeout(function () {
  console.log("JavaScript rules");
}, 4000);

setTimeout (function (){
  console.log("xxx")
},300)

console.log('script second task ');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

setTimeout (function (){
  clearInterval(firstIntervalID);
  console.log("clearInterval")
},17000)



