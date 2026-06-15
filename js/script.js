// Fade animation after page load

window.onload = function () {

    document.querySelector("main img").style.opacity = "1";

};

// Navbar hover animation

let links = document.querySelectorAll("header ul li a");

links.forEach(function(link){

    link.addEventListener("mouseover",function(){

        this.style.transform="scale(1.1)";

    });

    link.addEventListener("mouseout",function(){

        this.style.transform="scale(1)";

    });

});


// Search placeholder animation

const input = document.querySelector("input");

const words = [

"Search Pizza...",
"Search Biryani...",
"Search Burger...",
"Search Momos...",
"Search Chinese...",
"Search South Indian...",
"Search Cakes..."

];

let i=0;

setInterval(()=>{

input.setAttribute("placeholder",words[i]);

i++;

if(i==words.length){

i=0;

}

},2000);


// Search box glow animation

setInterval(()=>{

input.style.boxShadow="0px 0px 20px rgba(255,0,0,.8)";

setTimeout(()=>{

input.style.boxShadow="0px 5px 20px rgba(0,0,0,.3)";

},700);

},2500);


// Scroll reveal animation

window.addEventListener("scroll",()=>{

let p=document.querySelector("main p");

let position=p.getBoundingClientRect().top;

let screen=window.innerHeight;

if(position<screen-100){

p.style.opacity="1";
p.style.transform="translateY(0px)";
p.style.transition="1s";

}

});


// Logo rotate animation on click

let logo=document.querySelector(".logo img");

logo.addEventListener("click",()=>{

logo.style.transform="rotate(360deg)";

logo.style.transition="1s";

setTimeout(()=>{

logo.style.transform="rotate(0deg)";

},1000);

});


// Input typing effect

input.addEventListener("focus",()=>{

input.style.background="#fff8f8";

});

input.addEventListener("blur",()=>{

input.style.background="white";

});