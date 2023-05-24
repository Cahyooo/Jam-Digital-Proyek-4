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
let menitDeg = (menit * 6) + (detik * 0.1);
let jamDeg = (jam * 30) + (menit * 0.5) + (detik * (0.5 / 60));


let putarSec = `
  @keyframes putarSec {
    from {transform: translateX(-50%) rotate(${detikDeg}deg)}

    to {transform: translateX(-50%) rotate(${360 + detikDeg}deg)}
}`;

 let putarMin = `
  @keyframes putarMin {
    from {transform: translateX(-50%) rotate(${menitDeg}deg)}

    to {transform: translateX(-50%) rotate(${360 + menitDeg}deg)}
}`;

let putarHour = `
  @keyframes putarHour {
    from {transform: translateX(-50%) rotate(${jamDeg}deg)}

    to {transform: translateX(-50%) rotate(${360 + jamDeg}deg)}
}`;

let animasiSec = document.createElement('style');
animasiSec.innerHTML = putarSec
document.head.appendChild(animasiSec);

let animasiMin = document.createElement('style');
animasiMin.innerHTML = putarMin
document.head.appendChild(animasiMin);

let animasiHour = document.createElement('style');
animasiHour.innerHTML = putarHour
document.head.appendChild(animasiHour);
