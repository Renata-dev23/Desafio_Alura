const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector("mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo);
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    };
    return stringEncriptada;
};



function btnDesEncriptar() {
    const textoDesEncriptado = encriptar(textArea.value);
    mensagem.value = textoDesEncriptado;
    textArea.value = "";
}

function desEncriptar(stringDesEncriptada) {

    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo);
    stringDesEncriptada = stringDesEncriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++) {
        if(stringDesEncriptada.includes(matrizCodigo[i][1])){
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    };
    return stringDesEncriptada;
}