const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var top = document.querySelector('#page4 .top')
top.addEventListener('click', () => {
    scroll.scrollTo(0);
}
)

function loading() {
    var tl = gsap.timeline();

    tl.to('#yellow1', {
        top: '-100%',
        delay: 0.2,
        duration: 0.8,
        ease: Expo.easeInOut
    });
    tl.to('#loader video', {
        duration: 0.5
    });
    tl.from('#black', {
        top: '100%',
        duration: 0.05
    }, 'black');

    tl.from('#yellow2', {
        top: '100%',
        duration: 0.8,
        ease: Expo.easeOut

    }, 'black');
    tl.to('#loader h1', {
        color: 'black',

    }, 'black');

    tl.to('#loader', {
        opacity: 0
    });

    tl.to('#loader', {
        display: "none"
    });

}
loading();


let elems = document.querySelectorAll('#page2 .elem');
let page2 = document.querySelector('#page2');
elems.forEach(e => {
    e.addEventListener('mouseenter', () => {
        let bgimg = e.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    }
    )
});

elems.forEach(e => {
    e.addEventListener('mouseleave', () => {
        page2.style.backgroundImage = 'none'
    }
    )
});

function menu() {
    let i = 0
    document.querySelector('#nav-right i').addEventListener('click', () => {

        if (i == 0) {
            gsap.to('#nav-right i', {
                rotation: 0
            })
            gsap.to('#nav-right a', {
                x: 10,
                opacity: 0,
                ease: Expo.easeIn,
                duration: 0.35
            })
            i = 1
        }
        else if (i == 1) {
            gsap.to('#nav-right i', {
                rotation: 225
            })
            gsap.to('#nav-right a', {
                x: 0,
                opacity: 1,
                ease: Expo.easeIn,
                duration: 0.35
            })
            i = 0
        }
    }
    )
}
menu();
document.querySelector('#nav-right i').addEventListener('mouseenter', () => {
    gsap.to('#nav-right i', {
        scale: 1.2,
        duration: 0.25,
        ease: Expo.easeIn
    })
}
)
document.querySelector('#nav-right i').addEventListener('mouseleave', () => {
    gsap.to('#nav-right i', {
        scale: 1,
        duration: 0.25
    })
}
)





