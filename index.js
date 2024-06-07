const hour=document.querySelector("#hour");
const min=document.querySelector("#min");
const sec=document.querySelector("#sec");
const ampmEl=document.querySelector("#ampm");

updateClock();

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    ampmEl.innerText="AM";
    if(h>12){
        h-=12;
        ampmEl.innerText="PM";
    }
    if(h===0 && ampmEl.innerText==="AM"){
        h=12;
    }
    h=h<10 ? "0"+h : h;
    m=m<10 ? "0"+m : m;
    s=s<10 ? "0"+s : s;
    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    setTimeout(updateClock,1000);
}