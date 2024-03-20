let userName = "cabrito"
let saldoDePartidas = calcularPartidas(40, 20)

function calcularPartidas(vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

if (saldoDePartidas < 10){
    nivel = "ferro"

}else if (saldoDePartidas >= 20 && saldoDePartidas <= 30){
    nivel = "bronze"

}else if (saldoDePartidas >= 31 && saldoDePartidas <= 40){
    nivel = "prata"

}else if (saldoDePartidas >= 41 && saldoDePartidas <= 50){
    nivel = "oureo"

}else if (saldoDePartidas >= 51 && saldoDePartidas <= 60){
    nivel = "diamante"

}else if (saldoDePartidas >= 61 && saldoDePartidas <= 70){
    nivel = "lendario"

}else if (saldoDePartidas >= 100 && saldoDePartidasS <= 120){
    nivel = "imortal"

}
    
    console.log(`o usuário ${userName} tem o saldo de ${saldoDePartidas} vitórias e está no nível ${nivel}`)