window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
    header.classList.toggle("header-fixo", window.scrollY > 105);
})

function expandir(){
    document.querySelector(".X").style.cssText = "display: flex;"
    document.getElementById('imgCronograma2').style.cssText = "display: block;"
    document.querySelector("body").style.cssText = "overflow: hidden;";
    document.querySelector(".cronograma").style.cssText = "opacity: 0";
    document.querySelector(".portfolio2020").style.cssText = "opacity: 0";
    document.querySelector(".portfolio").style.cssText = "opacity: 0";
    document.querySelector(".header-fixo").style.cssText = "opacity: 0";

}

let X = document.querySelector(".X")

X.addEventListener('click',function() {
    document.getElementById('imgCronograma2').style.cssText = "display: none "
    document.querySelector(".X").style.cssText = "display: none;"
    document.querySelector("body").style.cssText = "overflow: visible;";
    document.querySelector(".cronograma").style.cssText = "opacity: 1";
    document.querySelector(".portfolio2020").style.cssText = "opacity: 1";
    document.querySelector(".portfolio").style.cssText = "opacity: 1";
    document.querySelector(".header-fixo").style.cssText = "opacity: 1";


})
    
let indexMaster = 0

const slidesMaster = document.querySelectorAll("#slider img");
            
const indicatorMaster = document.querySelector(".indicatorMaster");

const prevMaster = document.querySelector(".prevMaster");

const nextMaster = document.querySelector(".nextMaster");

prevMaster.addEventListener("click", function() {

    prevSlideMaster();

})

nextMaster.addEventListener("click", function() {

    nextSlideMaster();

})

function prevSlideMaster() {
    if (indexMaster == 0) {
        indexMaster = slidesMaster.length - 1;
    } else {
        indexMaster--
    }
    changeSlideMaster()
}

function nextSlideMaster() {
    if (indexMaster == slidesMaster.length - 1) {
        indexMaster = 0;
    } else {
        indexMaster++
    }

    changeSlideMaster();
}

function changeSlideMaster() {
    for (let i = 0; i < slidesMaster.length; i++) {
        slidesMaster[i].classList.remove("active")
    }
    slidesMaster[indexMaster].classList.add("active")
}