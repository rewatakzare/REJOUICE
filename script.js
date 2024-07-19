function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function cursor(){
let hp= document.querySelector(".homepage")
let cursor= document.querySelector(".cursor1")

hp.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
hp.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
hp.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}
function texts(){
    gsap.from(".infocontent h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:".information",
            scroller: "body",
            start:"top 75%",
            end:"top 50%",
            scrub:2,
        }
    })
}
function page(){
    const page3 = document.querySelector('.information');
    const page4 = document.querySelector('.page3');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: page3,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.1,
      },
    });
    tl
      .to(page3, {
        duration: 1,
        y: 0,
        ease: 2,
      })
      .to(page4, {
        duration: 1,
        y:"-0%",
        ease: 2,
      });
    

    gsap.from(".infocontent2 h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:".information2",
            scroller: "body",
            start:"top 75%",
            end:"top 50%",
            scrub:2,
        }
    })
}
function page2(){
    const page5 = document.querySelector('.information2');
    const page6 = document.querySelector('.page6');
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page5,
          start: 'top center',
          end: 'bottom center',
          scrub: 0.1,
        },
      });
      tl
        .to(page5, {
          duration: 1,
          y: 0,
          ease: 2,
        })
        .to(page6, {
          duration: 1,
          y:"-0%",
          ease: 2,
        });
        
}
function cursor2(){
    let p6= document.querySelector(".page6")
    let cursor2= document.querySelector(".cursor")
    
    p6.addEventListener("mousemove",function(dets){
        gsap.to(cursor2,{
            x:dets.x,
            y:dets.y,
        })
    })
    p6.addEventListener("mouseenter",function(){
        gsap.to(cursor2,{
            scale:1,
            opacity:1
        })
    })
    p6.addEventListener("mouseleave",function(){
        gsap.to(cursor2,{
            scale:0,
            opacity:0
        })
    })
}
function text3(){
    gsap.from(".desc h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:".page6",
            scroller: "body",
            start:"top 40%",
            end:"top 10%",
            scrub:2,
        }
    })
}
function text4(){
    gsap.from(".infocontent3 h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:".information3",
            scroller: "body",
            start:"top 70%",
            end:"top 50%",
            scrub:2,
        }
    })
}
function page3(){
    const page7 = document.querySelector('.information3');
    const page8 = document.querySelector('.getintotouch');
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page7,
          start: 'top center',
          end: 'bottom center',
          scrub: 0.1,
        },
      });
      tl
        .to(page7, {
          duration: 1,
          y: 0,
          ease: 2,
        })
        .to(page8, {
          duration: 1,
          y:"-0%",
          ease: 2,
        });
        
}

function images(){
    gsap.from(".images img",{
        y:-100,
        stagger:0.25,
        duration:6,
        scrollTrigger:{
            trigger:".getintouch",
            scroller: "body",
            start:"top 40%",
            end:"top 10%",
            scrub:2,
        }
    })
}
function footer(){
    gsap.from(".part2 h1",{
        y:200,
        opacity:0,
        stagger:0.2,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".footer",
            scroller: "body",
            start:"top 10%",
            end:"top 0%",
            scrub:2,
        }
    })
    gsap.from(".part1 h2",{
        y:120,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".footer",
            scroller: "body",
            start:"top 40%",
            end:"top 0%",
            scrub:2,
        }
    })
}
function loader(){
    function loader(){
    if (!sessionStorage.getItem('loaded')) {
        const tll=gsap.timeline()
        tll.from(".loader h1",{
            opacity:0,
            x:20,
            stagger:0.2,
            duration:2,
        })
        tll.to(".loader h1",{
            opacity:0,
            x:-40,
            stagger:0.2,
            duration:1
        })
        tll.to(".loader",{
            opacity:0,
        })
        tll.to(".loader",{
            display:"none",
        })
        sessionStorage.setItem('loaded', true);
    } else {
        document.querySelector(".loader").style.display = "none";
    }
}
loader();
}
loader();
cursor();
texts();
page();
page2();
cursor2();
text3();
text4();
page3();
images();
footer();
loco();