"use strict";
 document.addEventListener("DOMContentLoaded", function() {

  const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {

    // Hide desktop name and menu

    const desktopName = document.getElementById("naam");

    if (desktopName) desktopName.style.display = "none";


    // Show mobile name

    const mobileName = document.getElementById("naam2");

    if (mobileName) {

      mobileName.style.display = "inline";


      const moji = ["@", "A", "∂", "𝒶", "a", "ᵃ", "Ⓐ"];

      const name = "ISAAC VAN DEN AKER";


      setInterval(() => {

        mobileName.innerHTML = name.replace(/a/gi, () => moji[Math.floor(Math.random() * moji.length)]);

      }, 200);

    } 

    // Stop further execution of the desktop code
    return; // nothing else runs
  }

  // ===== Mode switcher: ensure true fullscreen and avoid layout clipping =====
  (function () {
    const dispatch = () => window.dispatchEvent(new Event("locationchange"));
    const _push = history.pushState;
    history.pushState = function () { _push.apply(this, arguments); dispatch(); };
    const _replace = history.replaceState;
    history.replaceState = function () { _replace.apply(this, arguments); dispatch(); };
    window.addEventListener("popstate", dispatch);

    function isHome() {
      const path = (location.pathname || "/").replace(/\/+$/, "");
      if (path === "" || path === "/") return true;
      if (/\/(home|index)$/i.test(path)) return true;
      if (document.body.dataset && /home/i.test(document.body.dataset.slug || "")) return true;
      if (document.body.className && /home/i.test(document.body.className)) return true;
      if (document.getElementById("home-flag")) return true; // optional manual flag
      return false;
    }

    function setMenuMode() {
      const menuWrapper = document.querySelector(".wholepage");
      if (!menuWrapper) return;

      const home = isHome();

      // toggle classes
      menuWrapper.classList.toggle("menu-fullscreen", home);
      menuWrapper.classList.toggle("menu-sidebar", !home);

      // toggle global assist class so we can neutralize ancestor transforms/constraints
      document.documentElement.classList.toggle("menu-is-fullscreen", home);

      // ---------- ADDED: hide .other on homepage ----------
      const other = document.querySelector(".other");
      if (other) {
        if (home) {
          other.style.display = "none";
        } else {
          other.style.display = ""; // restore default for other pages
        }
      }

      // Defensive: move to body if needed
      try {
        if (home) {
          if (!menuWrapper.__originalParent) {
            menuWrapper.__originalParent = menuWrapper.parentNode;
            menuWrapper.__originalSibling = menuWrapper.nextSibling;
          }
          if (menuWrapper.parentNode !== document.body) {
            document.body.appendChild(menuWrapper);
            menuWrapper.__moved = true;
          }
        } else {
          if (menuWrapper.__moved && menuWrapper.__originalParent) {
            if (menuWrapper.__originalSibling) {
              menuWrapper.__originalParent.insertBefore(menuWrapper, menuWrapper.__originalSibling);
            } else {
              menuWrapper.__originalParent.appendChild(menuWrapper);
            }
            menuWrapper.__moved = false;
          }
        }
      } catch (e) {
        console.warn("[menu] move/restore failed:", e);
      }
    }

    document.addEventListener("DOMContentLoaded", setMenuMode);
    window.addEventListener("locationchange", () => {
      setTimeout(setMenuMode, 50);
    });

    // fallback: watch main content swaps
    const contentRoot = document.querySelector(".page") || document.querySelector(".page-layout") || document.body;
    new MutationObserver(() => setMenuMode()).observe(contentRoot, { childList: true, subtree: true });
  })();
});


console.log("hallo wereld")

var testje = false;

var timer = 1000;

let titAdd  = 0;
let titAdd1 = 1;
let titAdd2 = 2;
let titAdd3 = 3;
let titAdd4 = 4;
let titAdd5 = 5;
let titAdd6 = 6;
let titAdd7 = 7;
let titAdd8 = 8;
let titAdd9 = 9;
let titAdd10 = 10;
let titAdd11 = 11;
let titAdd12 = 12;

var title = document.getElementById("naam");

var perma = "";

var link1 = "<a href=\"#The-Promise-of-Something-Silver\"class=\"spanLinks\" id=\'spL0\'> (The Promise of Something Silver) </a>"; 
var link2 = "<a href=\"#pptx\"class=\"spanLinks\" id=\'spL1\'> (P.P.T.X.) </a>";
var link3 = "<a href=\"#The-Slideshow-Manifold\"class=\"spanLinks\" id=\'spL2\'> (The Slideshow Manifold) </a>";
var link4 = "<a href=\"#Plagued-by-the-Preview\"class=\"spanLinks\" id=\'spL3\'> (Plagued by the Preview) </a>";
var link5 = "<a href=\"#Still-Lifes-for-Empty-Shelves\"class=\"spanLinks\" id=\'spL4\'> (Still Lifes for Empty Shelves) </a>";
var link6 = "<a href=\"#MyDementedPC\"class=\"spanLinks\" id=\'spL5\'> (MyDementedPC) </a>";
var link7 = "<a href=\"#SECRETFACT\"class=\"spanLinks\" id=\'spL6\'> (SECRETFACT.JPEG) </a>";
var link8 = "<a href=\"#Measuring-Leaves-Gathering-Trees\"class=\"spanLinks\" id=\'spL7\'> (Measuring Leaves, Gathering Trees) </a>";
var link9 = "<a href=\"#60fps-Mirrored-Vision\"class=\"spanLinks\" id=\'spL8\'> (60fps Mirrored Vision) </a>";
var link10 = "<a href=\"#A-Species-of-Nodes\"class=\"spanLinks\" id=\'spL9\'> (A Species of Nodes) </a>";
var link11 = "<a href=\"#Asemic-Selection\"class=\"spanLinks\" id=\'spL10\'> (Asemic Selection) </a>";
var link12 = "<a href=\"#MaterialToMatter\"class=\"spanLinks\" id=\'spL11\'> (M2M) </a>";
var link13 = "<a href=\"#about\"class=\"spanLinks\" id=\'spL12\'> (A҉B҉O҉U҉T҉) </a>";

// const moji = [
//   "♥","✈", "♫","㋡","⇆","<input type=\"checkbox\"checked=\"true\">","✓","⤭","♪","⚧","☹","⟲","a","⁂","a","☆","a","®","✴",
// ];

// const moji = [
//   "💚","🧩", "🦎","🤮","🧽","🤮","😵","⚠️","✨","🧚‍♂️","💫","💿","📡","a","🧼","a","🔮"," ",
// ];

// const moji = [
//    "☺","♲", "⚠","✗","⭏","⮂","⮱","∂","𝒶","*","©","§","📡","a","✉","a","ᵃ","!",
//  ];

// const moji = [
//    "@","s","§","A","S","$","ℐ","∂","𝒶","𝒾","©","𝒸","¢","a","ᔕ","𝓼","ⁱ","!","ᵃ",
//  ];

const moji = [
   "@","A","∂","𝒶","a","ᵃ","Ⓐ","@","A","∂","𝒶","a","ᵃ","Ⓐ"
 ];

var  titAr = [
    "A","A","A","A","A","A",
    "ᵃ","a","Ⓐ",
    link1,
    "A","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link2,
    "ranMoji","ranMoji","ranMoji","a ","ranMoji","a","ranMoji","ranMoji",
    link3,
    "ranMoji","ranMoji","A","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link4,
    "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link13,
    "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link5,
    "ranMoji","a","ranMoji","ranMoji","ranMoji","ranMoji","A","A","A","ranMoji","ranMoji","ranMoji","ranMoji",
    link6,
    "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji",
    link7,
    "ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link8,
    "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji",
    link9,
    "ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link10,
    "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji", 
    link11,
    "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji",
    link12,
    "ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji",
    link1,
    "A","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji",
    link2,
    "ranMoji","ranMoji","ranMoji","a ","ranMoji","a","ranMoji","ranMoji","ranMoji","ranMoji",
    link3,
    "ranMoji","ranMoji","Ⓐ","ranMoji","ranMoji","ranMoji","Ⓐ ","ranMoji","A","A","A","A","ranMoji",
    link4,
    "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link13,
    "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link5,
    "ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link6,
    "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji",
    link7,
   "ranMoji","a","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","A","ranMoji",
    link8,
    "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji",
    link9,
    "ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji",
    link10,
    "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji",
    link11,
    "ranMoji","Ⓐ","Ⓐ","ranMoji","ranMoji","A","ranMoji","ranMoji","ranMoji","ranMoji",
    link12,
    "ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji","ranMoji", "ranMoji","ranMoji","ranMoji","ranMoji",
  ];

let titCount = 1;
let amountOfTits = titAr.length-1;
let counter = 0;
let maxTitleLength = window.innerWidth <= 768 ? 1000 : 10000;
let intervalAnimator = 50;

let runnerFunc = (() => {

    counter +=1;
    console.log(intervalAnimator);
    if (testje) {
      clearInterval(myIntervalID);
      myIntervalID = setInterval(runnerFunc, 1500);
    } else if(perma.length > 1000){
      if(intervalAnimator < 200){
        clearInterval(myIntervalID);
        myIntervalID = setInterval(runnerFunc, intervalAnimator);
        intervalAnimator=intervalAnimator+1;
      }else if(intervalAnimator > 199 && intervalAnimator < 500){
        clearInterval(myIntervalID);
        myIntervalID = setInterval(runnerFunc, intervalAnimator);
        intervalAnimator=intervalAnimator+25;
      }else{
        clearInterval(myIntervalID);
        myIntervalID = setInterval(runnerFunc, 500);
      }
    }
    else {
      clearInterval(myIntervalID);
      myIntervalID = setInterval(runnerFunc, 100);
    }

    amountOfTits = titAr.length-1;

  if(titAdd1 < amountOfTits){
    titAdd1 += titCount;
  }  else{
    titAdd1 = 0;
  }

  if(titAdd2 < amountOfTits){
    titAdd2 += titCount;
  }
  else{
    titAdd2 = 0;
  }
  if(titAdd3 < amountOfTits){
    titAdd3 += titCount;
  }
  else{
    titAdd3 = 0;
  }
  if(titAdd4 < amountOfTits){
    titAdd4 += titCount;
  }
  else{
    titAdd4 = 0;
  }
  if(titAdd5 < amountOfTits){
    titAdd5 += titCount;
  }
  else{
    titAdd5 = 0;
  }
  if(titAdd6 < amountOfTits){
    titAdd6 += titCount;
  }
  else{
    titAdd6 = 0;
  }
  if(titAdd7 < amountOfTits){
    titAdd7 += titCount;
  }
  else{
    titAdd7 = 0;
  }
  if(titAdd8 < amountOfTits){
    titAdd8 += titCount;
  }
  else{
    titAdd8 = 0;
  }
  if(titAdd9 < amountOfTits){
    titAdd9 += titCount;
  }
  else{
    titAdd9 = 0;
  }

  if(titAr[titAdd5] == "ranMoji"){
    titAr[titAdd5] = moji[Math.floor(Math.random()*moji.length)];
  };

  if(counter < 5){
    if(titAr[titAdd1] == "A"){
      perma = perma;
    }
  }
  else{
    if(titAr[titAdd1] == "A"){
      titAr[titAdd1] = moji[Math.floor(Math.random()*moji.length)];
    }
    perma =  titAr[titAdd1] + perma;
  };

  title.innerHTML = "IS"+ titAr[titAdd5] + titAr[titAdd4] + "C" + " V" + titAr[titAdd3] + "N" + " DEN " + titAr[titAdd2] + "KER" + " " + perma;

  if (perma.length > maxTitleLength) {
    // Calculate the number of characters to remove from the end
    const charsToRemove = perma.length - maxTitleLength;

    // Remove characters from the end of the string
    perma = perma.slice(0, -charsToRemove);
}
  // console.log(perma);

});

title.onmouseover = function() {
  testje = true;
};

title.onmouseout = function() {
  testje = false;
};

window.onblur = function() {
  testje = true;
  console.log("blurred");
};

window.onfocus = function() {
  testje = false;
  console.log("active again");
};

const hueRanges = [
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },
  { min: 30, max: 75 },

];

let hues = [];
let directions = [];
let spanCol = [];

function getRandomDirection() {
  return Math.random() * 0.2 + 0.05;
}

for (let i = 0; i < hueRanges.length; i++) {
  hues[i] = hueRanges[i].min;
  spanCol[i] = `hsl(270, 80%, ${hues[i]}%)`;
  directions[i] = getRandomDirection();
}

let nodeLink;

let logColor = (() => {
  for (let i = 0; i < hues.length; i++) {
      hues[i] += directions[i];
      if (hues[i] < hueRanges[i].min || hues[i] > hueRanges[i].max) {
          directions[i] *= -1;
      }
      spanCol[i] = `hsl(270, 80%, ${hues[i]}%)`;
  }
    let links = document.querySelectorAll('.spanLinks');

    links.forEach(link => {

        if (link !== nodeLink) {
          if(link.id == "spL0"){
          link.style.color = spanCol[0];
        }
        if(link.id == "spL1"){
          link.style.color = spanCol[1];
        }
        if(link.id == "spL2"){
          link.style.color = spanCol[2];
        }
        if(link.id == "spL3"){
          link.style.color = spanCol[3];
        }
        if(link.id == "spL4"){
          link.style.color = spanCol[4];
        }
        if(link.id == "spL5"){
          link.style.color = spanCol[5];
        }
        if(link.id == "spL6"){
          link.style.color = spanCol[6];
        }
        if(link.id == "spL7"){
          link.style.color = spanCol[7];
        }
        if(link.id == "spL8"){
          link.style.color = spanCol[8];
        }
        if(link.id == "spL9"){
          link.style.color = spanCol[9];
        }
        if(link.id == "spL10"){
          link.style.color = spanCol[10];
        }
        if(link.id == "spL11"){
          link.style.color = spanCol[11];
        }
          if(link.id == "spL12"){
          link.style.color = "#ff4e2f";
        }
      }
    });

    requestAnimationFrame(logColor);
});

logColor();

function fadeColor(link, originalColor) {
  link.style.transition = "color 0.3s"; // Smooth transition over 0.5 seconds
  link.style.color = originalColor;
}

var parentAnchor = document.getElementById('naam');

function handleMutations(mutationsList, observer) {
    // Koppel IDs aan de juiste image-URL
    const imageMap = {
        spL0: 'https://isaacglyp.github.io/cargopublic/img/img1.png',
        spL1: 'https://isaacglyp.github.io/cargopublic/img/img2.png',
        spL2: 'https://isaacglyp.github.io/cargopublic/img/img3.png',
        spL3: 'https://isaacglyp.github.io/cargopublic/img/img4.png',
        spL4: 'https://isaacglyp.github.io/cargopublic/img/img5.png',
        spL5: 'https://isaacglyp.github.io/cargopublic/img/img6.png',
        spL6: 'https://isaacglyp.github.io/cargopublic/img/img7.png',
        spL7: 'https://isaacglyp.github.io/cargopublic/img/img8.png',
        spL8: 'https://isaacglyp.github.io/cargopublic/img/img9.png',
        spL9: 'https://isaacglyp.github.io/cargopublic/img/img10.png',
        spL10: 'https://isaacglyp.github.io/cargopublic/img/img11.png',
        spL11: 'https://isaacglyp.github.io/cargopublic/img/img12.png',
        spL12: 'https://isaacglyp.github.io/cargopublic/img/img13.png',
    };

    mutationsList.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node.classList.contains('spanLinks')) {

                    node.addEventListener('mouseover', function() {
                        nodeLink = this;
                     const linkId = this.id;
                    
                    if (linkId === 'spL12') {
                        // Change to GREEN (or your desired color, e.g., 'green' or a hex code like '#00ff00')
                        this.style.color = "#00ff00"; // Changed from red to a bright green hex code
                    } else {
                        // Keep the default red for all other 'spanLinks'
                        this.style.color = "#ff4e2f"; // The original red hex code
                    }
                        
                        
                        // Voeg afbeelding toe als die nog niet bestaat
                        if (!this.querySelector('img')) {
                            const img = document.createElement('img');
                            const id = this.id;
                            img.src = imageMap[id] || 'https://isaacglyp.github.io/cargopublic/img/fallback.png'; // fallback als ID niet in map zit
                            img.classList.add('menu-img');
                            this.appendChild(img);
                        }
                    });

                    node.addEventListener('mouseout', function() {
                        if(this.id == "spL0"){
                          fadeColor(this, spanCol[0]);
                        }
                        if(this.id == "spL1"){
                          fadeColor(this, spanCol[1]);
                        }
                        if(this.id == "spL2"){
                          fadeColor(this, spanCol[2]);
                        }
                        if(this.id == "spL3"){
                          fadeColor(this, spanCol[3]);
                        }
                        if(this.id == "spL4"){
                          fadeColor(this, spanCol[4]);
                        }
                        if(this.id == "spL5"){
                          fadeColor(this, spanCol[5]);
                        }
                        if(this.id == "spL6"){
                          fadeColor(this, spanCol[6]);
                        }
                        if(this.id == "spL7"){
                          fadeColor(this, spanCol[7]);
                        }
                        if(this.id == "spL8"){
                          fadeColor(this, spanCol[8]);
                        }
                       if(this.id == "spL9"){
                          fadeColor(this, spanCol[9]);
                        }
                       if(this.id == "spL10"){
                          fadeColor(this, spanCol[10]);
                        }
                       if(this.id == "spL11"){
                          fadeColor(this, spanCol[11]);
                        }

                        // Verwijder afbeelding als die bestaat
                        const img = this.querySelector('img');
                        if(img) {
                            img.remove();
                        }
                    });

                }
            });
        }
    });
}


var observer = new MutationObserver(handleMutations);
var observerConfig = { childList: true };
observer.observe(parentAnchor, observerConfig);


logColor();
let myIntervalID = setInterval(runnerFunc, 1000);
// ==============================================================================
// 🎨 IMAGE BRUSH CODE START
// ==============================================================================

// ** IMPORTANT: REPLACE THIS with the actual URL/path to your image **
const BRUSH_IMAGE_URL = 'https://i.imgur.com/your-fun-image.png'; 

// Set the size of the image in pixels
const IMAGE_SIZE = 50; 

// CONTROL: The minimum distance (in pixels) the mouse must move 
//             before a new image is drawn. Higher number = less dense drawing.
const DRAW_THROTTLE = 25; // 25 pixels

// CONTROL: The opacity (0.0 to 1.0) of the drawn images.
const IMAGE_OPACITY = 0.5; // 50% opacity

// --- Variables for throttling ---
let lastX = 0;
let lastY = 0;

// --- Setup: Create the container and its styles dynamically ---

// 1. Create a <style> tag and insert the necessary CSS
const brushStyle = document.createElement('style');
brushStyle.textContent = `
    /* Style for the main drawing container */
    #simple-js-brush-container {
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        /* Crucial: Makes the entire drawing layer unclickable */
        pointer-events: none; 
    }

    /* Style for each individual image placed by the "brush" */
    .brush-image {
        position: absolute; 
        width: ${IMAGE_SIZE}px;
        height: ${IMAGE_SIZE}px;
        pointer-events: none;
        /* Apply opacity via CSS */
        opacity: ${IMAGE_OPACITY}; 
    }
`;
document.head.appendChild(brushStyle);

// 2. Create the main container <div> and append it to the document body
const brushContainer = document.createElement('div');
brushContainer.id = 'simple-js-brush-container';
document.body.appendChild(brushContainer);


// --- Drawing Logic ---

document.addEventListener('mousemove', (event) => {
    const currentX = event.clientX;
    const currentY = event.clientY;

    // Calculate distance moved using Pythagorean theorem (A^2 + B^2 = C^2)
    const distance = Math.sqrt(
        Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2)
    );

    // Check if the movement is greater than the defined throttle distance
    if (distance > DRAW_THROTTLE) {
        
        // 1. Create a new <img> element
        const brush = document.createElement('img');
        
        // 2. Set its source and class
        brush.src = BRUSH_IMAGE_URL;
        brush.classList.add('brush-image');

        // 3. Position the image. We subtract half the image size 
        //    so the cursor is in the center of the image.
        brush.style.left = `${currentX - IMAGE_SIZE / 2}px`;
        brush.style.top = `${currentY - IMAGE_SIZE / 2}px`;

        // 4. Append the new image to the container
        brushContainer.appendChild(brush);
        
        // 5. Update the last position drawn
        lastX = currentX;
        lastY = currentY;
    }
});

// --- NEW: Click to Clear Functionality ---

document.addEventListener('click', () => {
    // This removes all child elements (the drawn images) inside the brush container.
    brushContainer.innerHTML = '';
    console.log('Drawing cleared by click.');
});

// ==============================================================================
// 🎨 IMAGE BRUSH CODE END
// ==============================================================================
















