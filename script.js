let stopp=document.querySelector("#Stop");
let start=document.querySelector("#Start");
let rStart=document.querySelector("#Restart");
let display=document.querySelector("#watch");
var msec= 0;
let sec= 0;
let minit= 0;
let startTime=null;
start.addEventListener("click",()=>{
    if(startTime!==null){
        clearInterval(startTime);
    }
    
  startTime=setInterval(()=>{
   msec++;
   if(msec==100){
    msec=0;
    sec++;
    if(sec==60){
        sec=0;
        minit++;
    }
   }
   let stringMm=msec<10?`0${msec}`:msec;
   let StringS=sec<10?`0${sec}`:sec;
   let stringM=minit<10?`0${minit}`:minit;
  
   display.innerHTML=`${stringM}:${StringS}:${stringMm}`;
},10);

});
stopp.addEventListener("click",()=>{
    clearInterval(startTime);

});
rStart.addEventListener("click",()=>{
    clearInterval(startTime);
    display.innerHTML=`00:00:00`;
    msec=sec=minit=0;
});