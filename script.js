alert("Therezinha Sartori, solicitamos o seu nome e suas notas!")
const name = prompt("Digite o seu Nome")
const first =  Number(prompt("Digite a primeira nota"))
const second =  Number(prompt("Digite a segunda nota"))
const third =  Number(prompt("Digite a terceira nota"))
let final = (first + second + third) / 3
final = final.toFixed(2)

if (final > 6){
  alert(`O aluno ${name} passou! Parabéns, sua média foi: ${final}`)
} else if (final < 6 && final >= 4 ) {
  alert(`Ainda é possivel ${name}, estude mais, sua média foi: ${final}`)
} else{
    alert(`Caso perdido ${name}, Game Over, sua média foi: ${final}`)
}