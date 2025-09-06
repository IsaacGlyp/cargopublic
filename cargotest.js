
"use strict";
console.log("hallo wereld");

var testje = false;
var timer = 1000;

let titAdd  = 0, titAdd1 = 1, titAdd2 = 2, titAdd3 = 3, titAdd4 = 4, titAdd5 = 5, titAdd6 = 6, titAdd7 = 7, titAdd8 = 8, titAdd9 = 9;
var title = document.getElementById("naam");
var perma = "";

var link1 = "<a href=\"#page-1\"class=\"spanLinks\" id='spL0'> (The Promise of Something Silver) </a>"; 
var link2 = "<a href=\"#page-2\"class=\"spanLinks\" id='spL1'> (PPTX) </a>";
var link3 = "<a href=\"#page-3\"class=\"spanLinks\" id='spL2'> (The Slideshow Manifold) </a>";
var link4 = "<a href=\"#page-4\"class=\"spanLinks\" id='spL3'> (Content Infestation) </a>";
var link5 = "<a href=\"#page-5\"class=\"spanLinks\" id='spL4'> (Still Lifes for Empty Shelves) </a>";
var link6 = "<a href=\"#page-6\"class=\"spanLinks\" id='spL5'> (MyDementedPC) </a>";
var link7 = "<a href=\"#page-7\"class=\"spanLinks\" id='spL6'> (SECRETFACT.JPEG) </a>";
var link8 = "<a href=\"#page-8\"class=\"spanLinks\" id='spL7'> (Measuring Leaves, Gathering Trees) </a>";
var link9 = "<a href=\"#page-9\"class=\"spanLinks\" id='spL8'> (Mirrored Vision) </a>";
var link10 = "<a href=\"#page-10\"class=\"spanLinks\" id='spL9'> (A Species of Nodes) </a>";

const moji = ["@","A","∂","𝒶","a","ᵃ","Ⓐ","@","A","∂","𝒶","a","ᵃ","Ⓐ"];

var titAr = [
  "A","A","A","A","A","A","ᵃ","a","Ⓐ", link1,
  "A","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", link2,
  "ranMoji","ranMoji","ranMoji","a ","ranMoji","a","ranMoji","ranMoji", link3,
  "ranMoji","ranMoji","A","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", link4,
  "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", link5,
  "ranMoji","a","ranMoji","ranMoji","ranMoji","ranMoji","A","A","A","ranMoji","ranMoji","ranMoji","ranMoji", link6,
  "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji", link7,
  "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", link8,
  "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji", link9,
  "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", link10,
  "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji"
];

let titCount = 1, amountOfTits = titAr.length-1, counter = 0;
let maxTitleLength = window.innerWidth <= 768 ? 1000 : 10000;
let intervalAnimator = 50;

// -------------------
// DESKTOP RUNNER
// -------------------
let runnerFunc = (() => {
  counter +=1;
  if (testje) {
    clearInterval(myIntervalID);
    myIntervalID = setInterval(runnerFunc, 1500);
  } else if(perma.length > 1000){
    if(intervalAnimator < 200){
      clearInterval(myIntervalID);
      myIntervalID = setInterval(runnerFunc, intervalAnimator);
      intervalAnimator=intervalAnimator+1;
    } else if(intervalAnimator > 199 && intervalAnimator < 500){
      clearInterval(myIntervalID);
      myIntervalID = setInterval(runnerFunc, intervalAnimator);
      intervalAnimator=intervalAnimator+25;
    } else {
      clearInterval(myIntervalID);
      myIntervalID = setInterval(runnerFunc, 500);
    }
  } else {
    clearInterval(myIntervalID);
    myIntervalID = setInterval(runnerFunc, 100);
  }

  amountOfTits = titAr.length-1;
  if(titAdd1 < amountOfTits){ titAdd1 += titCount; } else { titAdd1 = 0; }
  if(titAdd2 < amountOfTits){ titAdd2 += titCount; } else { titAdd2 = 0; }
  if(titAdd3 < amountOfTits){ titAdd3 += titCount; } else { titAdd3 = 0; }
  if(titAdd4 < amountOfTits){ titAdd4 += titCount; } else { titAdd4 = 0; }
  if(titAdd5 < amountOfTits){ titAdd5 += titCount; } else { titAdd5 = 0; }
  if(titAdd6 < amountOfTits){ titAdd6 += titCount; } else { titAdd6 = 0; }
  if(titAdd7 < amountOfTits){ titAdd7 += titCount; } else { titAdd7 = 0; }
  if(titAdd8 < amountOfTits){ titAdd8 += titCount; } else { titAdd8 = 0; }
  if(titAdd9 < amountOfTits){ titAdd9 += titCount; } else { titAdd9 = 0; }

  if(titAr[titAdd5] == "ranMoji"){
    titAr[titAdd5] = moji[Math.floor(Math.random()*moji.length)];
  };

  if(counter < 6){
    if(titAr[titAdd1] == "A"){ perma = perma; }
  }
  else {
    if(titAr[titAdd1] == "A"){
      titAr[titAdd1] = moji[Math.floor(Math.random()*moji.length)];
    }
    perma =  titAr[titAdd1] + perma;
  };

  title.innerHTML = "IS"+ titAr[titAdd5] + titAr[titAdd4] + "C" + " V" + titAr[titAdd3] + "N" + " DEN " + titAr[titAdd2] + "KER" + " " + perma;

  if (perma.length > maxTitleLength) {
    const charsToRemove = perma.length - maxTitleLength;
    perma = perma.slice(0, -charsToRemove);
  }
});

title.onmouseover = function() { testje = true; };
title.onmouseout = function() { testje = false; };
window.onblur = function() { testje = true; };
window.onfocus = function() { testje = false; };

// -------------------
// COLOR ANIMATION
// -------------------
const hueRanges = Array(10).fill({ min: 30, max: 75 });
let hues = [], directions = [], spanCol = [];

function getRandomDirection() { return Math.random() * (1 - 0.5) + 0.2; }
for (let i = 0; i < hueRanges.length; i++) {
  hues[i] = hueRanges[i].min;
  spanCol[i] = `hsl(270, 80%, ${hues[i]}%)`;
  directions[i] = getRandomDirection();
}

let nodeLink;
let logColor = (() => {
  for (let i = 0; i < hues.length; i++) {
    hues[i] += directions[i];
    if (hues[i] < hueRanges[i].min || hues[i] > hueRanges[i].max) { directions[i] *= -1; }
    spanCol[i] = `hsl(270, 80%, ${hues[i]}%)`;
  }
  let links = document.querySelectorAll('.spanLinks');
  links.forEach(link => {
    if (link !== nodeLink) {
      if(link.id == "spL0"){ link.style.color = spanCol[0]; }
      if(link.id == "spL1"){ link.style.color = spanCol[1]; }
      if(link.id == "spL2"){ link.style.color = spanCol[2]; }
      if(link.id == "spL3"){ link.style.color = spanCol[3]; }
      if(link.id == "spL4"){ link.style.color = spanCol[4]; }
      if(link.id == "spL5"){ link.style.color = spanCol[5]; }
      if(link.id == "spL6"){ link.style.color = spanCol[6]; }
      if(link.id == "spL7"){ link.style.color = spanCol[7]; }
      if(link.id == "spL8"){ link.style.color = spanCol[8]; }
      if(link.id == "spL9"){ link.style.color = spanCol[9]; }
    }
  });
  requestAnimationFrame(logColor);
});
logColor();

function fadeColor(link, originalColor){ link.style.transition="color 0.2s"; link.style.color=originalColor; }

// -------------------
// IMAGE MAP + HOVER (desktop only)
// -------------------
const imageMap = {
  spL0:'https://isaacglyp.github.io/cargopublic/img/img1.png',
  spL1:'https://isaacglyp.github.io/cargopublic/img/img2.png',
  spL2:'https://isaacglyp.github.io/cargopublic/img/img3.png',
  spL3:'https://isaacglyp.github.io/cargopublic/img/img4.png',
  spL4:'https://isaacglyp.github.io/cargopublic/img/img5.png',
  spL5:'https://isaacglyp.github.io/cargopublic/img/img6.png',
  spL6:'https://isaacglyp.github.io/cargopublic/img/img7.png',
  spL7:'https://isaacglyp.github.io/cargopublic/img/img8.png',
  spL8:'https://isaacglyp.github.io/cargopublic/img/img9.png',
  spL9:'https://isaacglyp.github.io/cargopublic/img/img10.png'
};

var parentAnchor = document.getElementById('naam');
function handleMutations(mutationsList, observer){
  mutationsList.forEach(function(mutation){
    if(mutation.type==='childList' && mutation.addedNodes.length>0){
      mutation.addedNodes.forEach(function(node){
        if(node.nodeType===1 && node.classList.contains('spanLinks')){
          // COLOR CHANGE on hover (all devices)
          node.addEventListener('mouseover', function(){
            nodeLink=this;
            this.style.color="#ff4e2f";

            // IMAGE unfold only on desktop
            if(!isMobile() && !this.querySelector('img')){
              const img=document.createElement('img');
              img.src=imageMap[this.id] || 'https://isaacglyp.github.io/cargopublic/img/fallback.png';
              img.style.width='100%';
              this.appendChild(img);
            }
          });

          node.addEventListener('mouseout', function(){
            if(this.id=="spL0") fadeColor(this, spanCol[0]);
            if(this.id=="spL1") fadeColor(this, spanCol[1]);
            if(this.id=="spL2") fadeColor(this, spanCol[2]);
            if(this.id=="spL3") fadeColor(this, spanCol[3]);
            if(this.id=="spL4") fadeColor(this, spanCol[4]);
            if(this.id=="spL5") fadeColor(this, spanCol[5]);
            if(this.id=="spL6") fadeColor(this, spanCol[6]);
            if(this.id=="spL7") fadeColor(this, spanCol[7]);
            if(this.id=="spL8") fadeColor(this, spanCol[8]);
            if(this.id=="spL9") fadeColor(this, spanCol[9]);

            if(!isMobile()){
              const img=this.querySelector('img');
              if(img) img.remove();
            }
          });
        }
      });
    }
  });
}
var observer=new MutationObserver(handleMutations);
observer.observe(parentAnchor,{childList:true});

// -------------------
// MOBILE / DESKTOP SWITCH
// -------------------
function isMobile(){ return window.innerWidth<=768||/Mobi|Android/i.test(navigator.userAgent); }

if(isMobile()){
  // Mobile: static thumbnails next to links
  let staticArray = titAr.map(el=>{
    if(el==="ranMoji"){ return moji[Math.floor(Math.random()*moji.length)]; }
    if(el.includes('class="spanLinks"')){
      const idMatch=el.match(/id='(spL\d+)'/);
      if(idMatch){ return `${el}<img src="${imageMap[idMatch[1]]}" width="40" style="vertical-align:middle; margin-left:5px;">`; }
    }
    return el;
  });
  document.getElementById("naam").innerHTML=staticArray.join("");
} else {
  // Desktop: dynamic title animation
  var myIntervalID = setInterval(runnerFunc, 1000);
}
