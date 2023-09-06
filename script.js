// import 'animate.css';
const btn = document.querySelector('#btn');
const background = document.querySelector('#background');
const circle = document.querySelector('#circle');

// btn.addEventListener('click', () => {
//     background.style.backgroundColor = 'green';
// })

window.addEventListener('mousemove', (details) => {
    let xvalue = details.pageX;
    let yvalue = details.pageY;

    setTimeout(() => {
        circle.style.top = yvalue + 'px';
        circle.style.left = xvalue + 'px';
    }, 50)
})

$('#hero h1').textillate({
    in: {
        effect: 'fadeInUp'
    },
    loop: true,
    out: {
        effect: 'fadeOutRight'
    }
});


$('#down #text h3').textillate({
    autoStart: false,
    in: {
        effect: 'fadeInUp',
        delay: 15,
    },
    callback: () => {
        gsap.fromTo('#down #text img', {
            opacity: 0,
            y: -30,
            duration: 2,
            ease: 'Expo.easeInOut'
        }, {
            opacity: 1,
            y: 0,
        })
    }
});

// const element = document.querySelector('#hero h1');
// element.classList.add('animate__animated', 'animate__bounceOutLeft');

// element.addEventListener('animationend', () => {
//     // do something
//     animate__fadeInUp();
// });

// let timeline = gsap.timeline();

gsap.to('.fader', {
    scrollTrigger: {
        trigger: '#image',
        // markers: true,
        start: 'top 10%',
        toggleActions: 'play pause resume reverse'
    },
    opacity: 0,
    y: -100,
    stagger: .3,
    duration: 2,
    onComplete: () => {
        $('#down #text h3').textillate('start')
    }
})