const hom1 = document.querySelector('.home');

const ab = document.querySelector('.about');

const cont = document.querySelector('.contacs');

const pro = document.querySelector('.projects');


//category change
function home() {
    hom1.classList.remove('home2');
    ab.classList.remove('about2');
    cont.classList.remove('contacs2')
    pro.classList.remove('projects2')

}

function about() {
    ab.classList.add('about2');
    hom1.classList.add('home2');
    cont.classList.remove('contacs2')
    pro.classList.remove('projects2')


}

function contacs() {
    hom1.classList.add('home2');
    ab.classList.remove('about2');
    cont.classList.add('contacs2')
    pro.classList.remove('projects2')
}


function proj() {
    pro.classList.add('projects2')
    hom1.classList.add('home2');
    ab.classList.remove('about2');
    cont.classList.remove('contacs2')

}




let na = document.querySelector('.nav')
let ham = document.querySelector('.menuH');

ham.addEventListener('click', () => {
na.classList.toggle('nav2')
})







// many varible 
const bor = document.querySelector('.born');
const liv = document.querySelector('.live');
let x = window.matchMedia("(max-width: 600px)")
const sk = document.querySelector('.romania');
const d = document.querySelector('.imgd');








//scroll event 'about'
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        bor.classList.add('born2');
    }

    if (window.scrollY >= 500) {
        liv.classList.add('live2');
    }

    if (x.matches) {
        bor.classList.add('born3')
        sk.classList.add('romania2')
        d.classList.add('imgd2')
    }


    else {
        bor.classList.remove('born3')
        sk.classList.remove('romania2')
        d.classList.remove('imgd2')
    }
})








 




// many dom variable
let bod = document.querySelector('body')
let nav = document.querySelector('ul')
let interf = document.querySelector('.interface')
let ski = document.querySelector('.i3d')
let tex = document.querySelector('.text')
let abou = document.querySelector('.me')
let desc = document.querySelector('.desc')
let rom = document.querySelector('.romania')
let hov = document.querySelector('.hoveron')
let sendM = document.querySelector('.sendmess')
let sendN = document.querySelector('.sendname')
let sendE = document.querySelector('.sendemail')
let mess = document.querySelector('.mess')




//day template
function day() {
    sendM.style.color = 'black';
    sendE.style.color = 'black';
    sendN.style.color = 'black';
    mess.style.color = 'black';
    hov.style.color = 'black';
    people.style.color = 'black';
    bod.style.backgroundColor = 'white';
    nav.style.color = 'black'
    nav.style.borderBottom = '1px solid black'
    interf.classList.add('interfaceDay')
    ski.classList.add('i3dDay');
    tex.classList.add('textDay')
    abou.classList.add('meme');
    desc.classList.add('descDay');
    rom.classList.add('romaniaDay');
    bor.style.color = 'black';
    liv.style.color = 'black';
}




//night template
function night() {
    sendM.style.color = 'white';
    sendE.style.color = 'white';
    sendN.style.color = 'white';
    mess.style.color = 'white';
    hov.style.color = 'white';
    people.style.color = 'white';
    bod.style.backgroundColor = 'rgb(0, 13, 40)';
    nav.style.color = 'white'
    nav.style.borderBottom = '1px solid white'
    interf.classList.remove('interfaceDay')
    ski.classList.remove('i3dDay');
    tex.classList.remove('textDay')
    abou.classList.remove('meme');
    desc.classList.remove('descDay');
    rom.classList.remove('romaniaDay');
    bor.style.color = 'white';
    liv.style.color = 'white';
}

let submit = document.querySelector('.buttnon');
let email = document.querySelector('.emailStorage');
let nam = document.querySelector('.nameStorage');
let last = document.querySelector('.lastStorage');




submit.addEventListener('click', (e) =>{
     localStorage.setItem('info', email.value)
     localStorage.setItem('name', nam.value)
     localStorage.setItem('last', last.value)

     localStorage.getItem('name', nam.value)
     per.classList.add('personal2');
     cont.style.display = 'none';
     conta.classList.add('li40');
   
     
})








//storage of entry in the page
if (localStorage.counter) {
    let c = parseInt(localStorage.counter)
    c += 1
    localStorage.counter = c;
} else {
    localStorage.counter = 0;
}

let people = document.querySelector('.counter');

people.innerHTML = 'welcome, ' + 'you are the ' + localStorage.counter + 'th ' + 'visitator of my web site ';


















