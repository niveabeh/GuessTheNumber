const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] //vetor de escopo global com números já apostados 
const sorteado = Math.floor(Math.random() * 100) + 1 // numero aleatório entre 1 e 100
const chances = 6 //constante definida 

frm.addEventListener("submit", (e) =>{

    e.preventDefault()

    const numero = Number(frm.inNumero.value) 

    if(numero == sorteado){
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(numero)){ // se o numero existir no vetor "erros"
            alert(`Você já apostou o número ${numero}. Tente outro`) 
        }else{
            erros.push(numero) // push : empurrar. colocar. subir // no vetor erro, colocar numero escolhido
            const numErros = erros.length //length significa comprimento ou tamanho // armareza o tamanho do vetor "erros"
            const numChances = chances - numErros //calcular o numero de chances que ainda restam 
        
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true 
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número Sorteado ${sorteado}`
            }else{
                const dica = numero < sorteado ? "maior" : "menor" 
                respDica.innerText = `Dica: tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = "" //limpa o campo de entratada 
    frm.inNumero.focus() //posiciona o cursor neste campo 
})
frm.btNovo.addEventListener("click", ()=>{
    location.reload()
})