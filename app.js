// // es5 version -> onclick , var , for
// // es6 version -> addEventlistener , let , const
// // var=let adilhan
// // const -> togtmol utga zarlahdaa

// const time = document.getElementsByTagName('h1')[0];
// const start = document.querySelector(".start");
// const stop = document.querySelector(".stop");
// const restart = document.querySelector(".restart");
// const lap = document.querySelector(".lap");
// const ol = document.getElementsByTagName("ol")[0];
// let second=0 , minute=0 , hour=0;
// let up;

// // click , key , scroll , doubleClick
// function watch() {
//     second++;
//     if(second==60) {
//         minute++; 
//         second=0;
//         if(minute==60) {
//             hour++;
//             minute=0;
//         }
//     } 
//     // if(second<10){
//     //     console.log(time.innerText = "00:00:0" + second);
//     // } else {
//     //     console.log(time.innerText="00:00:" + second);
//     // }
//     // ternary operator ?:
//     let s = second<10 ? "0" +second : second;
//     let m = minute<10 ? "0" + minute: minute;
//     let h = hour <10 ? "0" +hour : hour;
//     time.innerText=h+":"+m+":" + s;
// }
// // setTimeout clearTimeout 1 udaa ajilna
// // setInterval clearInterval hyzgaargui ajilna
// start.addEventListener('click', ()=>{
//     // nergui shugman function
//     up = setInterval(watch,60);    
//     document.querySelector(".start").disabled = true;
//     document.querySelector(".stop").disabled = false;
// });
// stop.addEventListener('click',()=>{
//     clearInterval(up);
//     document.querySelector(".stop").disabled=true;
//     document.querySelector(".start").disabled=false;
// });
// restart.addEventListener('click' , ()=> {
//     clearInterval(up);
//     time.innerText="00:00:00";
//     second=0;
//     minute=0;
//     hour=0;
// })
// lap.addEventListener("click" , ()=>{
//     // shineer tag uusgeh : document.createElement("tagName");
//     let liEl = document.createElement("li");
//     console.log(liEl);
//     let s = second<10 ? "0" +second : second;
//     let m = minute<10 ? "0" + minute: minute;
//     let h = hour <10 ? "0" +hour : hour;
//     liEl.innerText=h+":"+m+":" + s;
//     // .append() -> tag dotor uur tag nemeh
//     ol.append(liEl);
// })

const time = document.getElementsByTagName('h1')[0];
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const restart = document.querySelector(".restart");
const lap = document.querySelector(".lap");
const ol = document.getElementsByTagName("ol")[0];
let second = 0, minute = 0, hour = 0, millisecond = 0;
let up;

function watch() {
    millisecond++;
    if (millisecond === 100) {
        second++;
        millisecond = 0;
        if (second === 60) {
            minute++;
            second = 0;
            if (minute === 60) {
                hour++;
                minute = 0;
            }
        }
    }

    let ms = millisecond < 10 ? "0" + millisecond : millisecond;
    let s = second < 10 ? "0" + second : second;
    let m = minute < 10 ? "0" + minute : minute;
    let h = hour < 10 ? "0" + hour : hour;
    time.innerText = h + ":" + m + ":" + s + ":" + ms;
}

start.addEventListener('click', () => {
    up = setInterval(watch, 10);
    start.disabled = true;
    stop.disabled = false;
});

stop.addEventListener('click', () => {
    clearInterval(up);
    stop.disabled = true;
    start.disabled = false;
});

restart.addEventListener('click', () => {
    clearInterval(up);
    time.innerText = "00:00:00:00";
    second = 0;
    minute = 0;
    hour = 0;
    millisecond = 0;
});

lap.addEventListener("click", () => {
    let liEl = document.createElement("li");
    let ms = millisecond < 10 ? "0" + millisecond : millisecond;
    let s = second < 10 ? "0" + second : second;
    let m = minute < 10 ? "0" + minute : minute;
    let h = hour < 10 ? "0" + hour : hour;
    liEl.innerText = h + ":" + m + ":" + s + ":" + ms;
    ol.append(liEl);
});
