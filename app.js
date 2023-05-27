const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" GUSTAVO_"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
type()
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
erase()
function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.querySelector(".navRoll").addEventListener("click", function(){
 
  if(document.querySelector("ol").classList.contains("show")){
   document.querySelector("ol").classList.remove("show");
  }else{
    document.querySelector("ol").classList.add("show");
  }
  console.log("removed");
})
document.querySelector(".navRoll").addEventListener("click", function(){
 
  if(document.querySelector(".navbar").classList.contains("u")){
   document.querySelector(".navbar").classList.remove("u");
  }else{
    document.querySelector(".navbar").classList.add("u");
  }
  console.log("removed");
})



