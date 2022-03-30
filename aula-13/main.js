let inputapiReference = document.querySelector("#api");
let buttonenviarReference = document.querySelector("#enviar");
let pReference = document.getElementById("CEP");
buttonenviarReference.addEventListener("click", event => {
    event.preventDefault()

    fetch(`https://viacep.com.br/ws/${inputapiReference.value}/json/`)
    .then(response => {
        return response.json()
    })
    .then(response => {
        //manipulamos a resposta
        pReference.innerText = response.localidade;
        
              
    });

})

