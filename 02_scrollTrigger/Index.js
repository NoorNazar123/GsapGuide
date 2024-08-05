gsap.registerPlugin(ScrollTrigger);

gsap.from("#div1 .center-box", {
  x: 900,
  y: 300,
  duration: 2,
  delay: 2,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%",
}); 

gsap.from("#div2 .center-box", {
  x: 900,
  y: 300,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%",
  scrollTrigger: {
    trigger:"#div2 .center-box",
    scroller:"body",
    markers:true,
    start:"top 50%",
   // scrub: true, // it work while scrolling b/w start to end point 
    scrub: 5,// you can give (1 to 5) 5 very smoth
    pin: true// it hold scrolling untill animation done
  },
  
}); 
gsap.from("#div3 .center-box", {
  x: 900,
  y: 300,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%", 
  scrollTrigger: {
    trigger:"#div3 .center-box",
    scroller:"body",
    markers:true,
    start:"top 65%"
  },
  
}); 
