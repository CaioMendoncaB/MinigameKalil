const asteroide = document.querySelector('.asteroide')
const asteroide2 = document.querySelector('.asteroide2')
const asteroide3 = document.querySelector('.asteroide3')
const asteroide4 = document.querySelector('.asteroide4')
const asteroide5 = document.querySelector('.asteroide5')
const asteroide6 = document.querySelector('.asteroide6')
const asteroide7 = document.querySelector('.asteroide7')



document.addEventListener("keypress",function(press){
    const posiçãox = asteroide.offsetLeft;
    const posiçãoy= asteroide.offsetTop
    if(press.key === "d"){
        asteroide.style.left = `${posiçãox +3}px`;
        console.log(posiçãox) 
        }
    if(press.key==="a"){
            asteroide.style.left = `${posiçãox -3}px`;
            console.log(posiçãox)            
        }
   if(press.key==="s"){

        asteroide.style.top = `${posiçãoy +3}px`;           
    }
}
)


function aleatorio(){
   return  Math.random()*(-6+1400)-6
}

//por o time entre 20 e 60

function descer(asteroide,time){
    const intervalo =setInterval(aumenta,time)
    function aumenta(){
        const posiçãoy= asteroide.offsetTop
        if(posiçãoy>=750){
            clearInterval(intervalo)
            asteroide.style.top= `${-50}px`
            asteroide.style.left =`${aleatorio()}px`
            descer(asteroide,time)
        }
        else{asteroide.style.top = `${posiçãoy +3}px`;}
    }

}

descer(asteroide,15)
descer(asteroide2,10)
descer(asteroide3,7)
descer(asteroide4,4)
descer(asteroide5,24)
descer(asteroide6,28)
descer(asteroide7,19)

/*function desaparece(){
    if(imagem.offsetTop==750){
    imagem.style.top= `${-50}px`    
    }
}*/