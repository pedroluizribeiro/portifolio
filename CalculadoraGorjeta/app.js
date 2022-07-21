function calculateTip(event){
    event.preventDefault(); //previne qualquer padrao da aplicação
    let bill = document.getElementById('bill').value; //pega o valor do id
    let serviceQual = document.getElementById('serviceQual').value;
    let count = document.getElementById('count').value;

    if(bill == '' | serviceQual == 0){
        alert('Por favor, preencha os campos vazios!')
        return;
    }

    if(count == '' | count <= 1){
        count = 1;
        document.getElementById('each').style.display = "none";
    }else{
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQual) / count;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);