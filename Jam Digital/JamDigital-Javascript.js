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

    to {transform: translateX(-50%) rotate(${360 + detikDeg}deg)}
}`;

let untukSec = document.createElement("style");
untukSec.innerHTML = putarSec;
document.head.appendChild(untukSec);
sec.style.animationName = "putarSec";
sec.style.animationDuration = "60s";
sec.style.animationIterationCount = "infinite ";
sec.style.animationTimingFunction = "linear";

let putarMin = `
  @keyframes putarMin {
    from{transform: translateX(-50%) rotate(${menitDeg}deg)}

    to {transform: translateX(-50%) rotate(${360 + menitDeg}deg)}
}`;

let untukMin = document.createElement("style");
untukMin.innerHTML = putarMin;
document.head.appendChild(untukMin);
min.style.animationName = "putarMin";
min.style.animationDuration = "3600s";
min.style.animationIterationCount = "infinite ";
min.style.animationTimingFunction = "linear";

let putarHour = `
  @keyframes putarHour {
    from{transform: translateX(-50%) rotate(${jamDeg}deg)}

    to {transform: translateX(-50%) rotate(${360 + jamDeg}deg)}
}`;

let untukHour = document.createElement("style");
untukHour.innerHTML = putarHour;
document.head.appendChild(untukHour);
hour.style.animationName = "putarHour";
hour.style.animationDuration = "216000s";
hour.style.animationIterationCount = "infinite ";
hour.style.animationTimingFunction = "linear";
