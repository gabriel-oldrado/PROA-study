export const exercisesHdc1 = [
    {
        id: 1,
        title: "Carro Legal!",
        desc:"Escreva um programa que crie uma variável chamada 'nome_do_carro' e atribua-a um valor 'Fusca'. Exiba-a ao usuário.",

        html:`
            <button id="btn">Ver Carro!</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            const nome_do_carro = "Fusca";
            document.getElementById("btn").onclick = () => {
                document.getElementById("result").textContent = nome_do_carro;
            }
        }

        // tacar o resto dpskk
    }
]