var playPause = anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500},
        {value: 0, duration: 300}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine',
    },
    delay: function(el,i){ return i *1000 },
    autoplay: false,

});

var playAll = anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500},
        {value: 0, duration: 300}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine',
    },
    autoplay: false
});

var tran = anime({
    targets: '.boc',
    left: '240px',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    autoplay: false,
    loop: false,
  });

var prop = anime({
    targets: '.prop',
    translateX: {
      value: 250,
      duration: 800
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 2,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250,
    autoplay: false
});



document.querySelector('#btns .play').onclick = playPause.play;
document.querySelector('#btns .pause').onclick = playPause.pause;
document.querySelector('#btns .reset').onclick = playPause.restart;
document.querySelector('#btns .reverse').onclick = playPause.reverse;

document.querySelector('#btns .playAll').onclick = playAll.play;
document.querySelector('#btns .reverseAll').onclick = playAll.reverse;


document.querySelector('#tranP').onclick = tran.play;
document.querySelector('#tranR').onclick = tran.restart;

document.querySelector('#propP').onclick = prop.play;
document.querySelector('#propR').onclick = prop.restart;
