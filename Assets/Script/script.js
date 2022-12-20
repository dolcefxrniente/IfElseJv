borderBox = document.querySelector("#borderBox")

inputCantidadUno = document.querySelector("#inputCantidadUno")
inputCantidadDos = document.querySelector("#inputCantidadDos")
inputCantidadTres = document.querySelector("#inputCantidadTres")
inputCantidadCuatro = document.querySelector("#inputCantidadCuatro")
passwordUno= document.querySelector("#passwordUno")
passwordDos= document.querySelector("#passwordDos")
passwordTres= document.querySelector("#passwordTres")
mensajeSpan=document.querySelector("#mensajeSpan")
mensaje = document.querySelector("#mensaje")
passwordBtn=document.querySelector("#passwordBtn")
btnCheck = document.querySelector("#btnCheck")
borderBtn = document.querySelector("#borderBtn")

 

inputTotal =   Number ( inputCantidadUno.value) + Number (inputCantidadDos.value) + Number (inputCantidadTres.value) + Number (inputCantidadCuatro.value
)

claveUno= passwordUno.value==9, passwordDos.value==1,passwordTres.value==1
claveDos=passwordUno.value==7, passwordDos.value==1,passwordTres==4

passwordBtn.addEventListener("click", () => {
if(claveUnotrue){

    mensajeSpan.innerHTML="password correcta"
}
else(mensajeSpan.innerHTML="password incorrecta")


    console.log(claveUno,claveDos )
     
})


btnCheck.addEventListener("click", () => {
    if (inputTotal <= 10) {
        mensaje.innerHTML = (inputTotal)

    }

    else {

        mensaje.innerHTML = "Demasiados"

    }

    console.log(inputTotal);

})

borderBtn.addEventListener("click", () => {
if(borderBox.style.border=== "1rem ridge rgb(119, 77, 77)"){
    borderBox.style.border="none"
}else(borderBox.style.border="1rem ridge rgb(119, 77, 77)")


    console.log();

})
