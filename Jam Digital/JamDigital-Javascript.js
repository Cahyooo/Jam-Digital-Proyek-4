let sekarang = new Date();
let jam = sekarang.getHours();
let menit = sekarang.getMinutes();
let detik = sekarang.getSeconds();

console.log(jam);
console.log(menit);
console.log(detik);

let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");

let detikDeg = detik * 6;
let menitDeg = (detik * 60) / 10;
let jamDeg = (detik * 3600) / 600;

let putarSec = `
  @keyframes putarSec {
    from{transform: translateX(-50%) rotate(${detikDeg}deg)}

    to {transform: translateX(-50%) rotate(${detikDeg-0.1}deg)}
}`;

let untukSec = document.createElement("style");
untukSec.innerHTML = putarSec;
document.head.appendChild(untukSec);
sec.style.animationName = "putarSec";
sec.style.animationDuration = "10s";
sec.style.animationIterationCount = "infinite";