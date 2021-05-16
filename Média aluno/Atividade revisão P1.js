function Calcular() {

    var valor01 = document.getElementById("A1").value;
    var valor02 = document.getElementById("A2").value;
    var presenca = document.getElementById("presenca").value;

    if (valor01 == "" || valor02 == "") {
        alert("Preencha todos os campos!");

    } else {

        valor01 = parseInt(valor01);
        valor02 = parseInt(valor02);

        media = (valor01 + 2*valor02) / 3;
        media = media.toFixed(1);


        
        if(presenca >= 75 && media >= 5) {
            alert("MÉDIA: "+ media +  "\nPRESENÇA: " + presenca + "%" + "\n\nParabéns pelo esforço.\n\nSituação: APROVADO!");
        
        } else if(presenca >= "75" && media < "5" && media > "3") {
            alert("MÉDIA: " + media + "\nPRESENÇA: " + presenca + "%" + "\n\nSeu esforço foi incrivel procure se empenhar mais.\n\nSituação: RE");
           
        } else if (presenca > "75" && media < "3") {
            alert("MÉDIA: " + media + "\nPRESENÇA: " + presenca + "%" + "\n\nSituação: Reprovado por Nota!");

        } else {
            alert("MÉDIA: " + media + "\nPRESENÇA: " + presenca + "%" + "\n\nSituação: Reprovado por Falta!");
        
        }
    }

}