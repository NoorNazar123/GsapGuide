gsap.to(".box", {
   x:900,
   y:300,
   duration: 2,
   delay:2, 
   rotate: 360,
   backgroundColor: 'green',
   borderRadius: "50%",
   repeat: -1,//infinite(-1) 
   yoyo: true,
});   
gsap.from("h1", {
   y:30,
   duration: 1,
   delay:4,
   opacity:0,
   stagger:1, //stagger if if there are many tag animated same it. sent one after one 
   stagger:-1, //same but oposite
   repeat: 2,//3 time one auto and 2 as repeat
})
   