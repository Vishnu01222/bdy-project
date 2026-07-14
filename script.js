const birthday = new Date("Julu 31, 2026 00:00:00").getTime();

const messages=[

"Every second brings us closer ❤️",

"You make my world brighter 🌸",


"You deserve all the happiness ❤️",

"Your smile is my favorite gift 🎁"

];

let msg=0;

setInterval(()=>{

document.getElementById("message").innerHTML=messages[msg];

msg++;

if(msg>=messages.length) msg=0;

},4000);

function update(id,value){

const element=document.getElementById(id);

if(element.innerHTML!=value){

element.innerHTML=value;

element.classList.remove("flip");

void element.offsetWidth;

element.classList.add("flip");

}

}

setInterval(()=>{

const now=new Date().getTime();

const distance=birthday-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

update("days",days);

update("hours",hours);

update("minutes",minutes);

update("seconds",seconds);

if(distance<=0){

document.querySelector(".container").innerHTML="<h1>🎉 Happy Birthday ❤️🎉</h1>";

}

},1000);

// Hearts

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.top="100vh";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);

// Stars

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

const size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.animationDelay=Math.random()*2+"s";

document.body.appendChild(star);

}

// Music

const btn=document.getElementById("musicBtn");

const music=document.getElementById("music");

btn.onclick=()=>{

if(music.paused){

music.play();

btn.innerHTML="⏸ Pause Music";

}else{

music.pause();

btn.innerHTML="▶ Play Music";

}

};