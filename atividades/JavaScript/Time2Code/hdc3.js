export const exercisesHdc3 = [
    {
        id: 1,
        title: "Bomba Relógio",
        desc: "Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva 'EXPLOSÃO'. ",

        html:`
            <button id="btn">Iniciar Contagem!</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const result = document.getElementById("result");
                let count = "";

                for (let i = 30; i >= 0; i--) {
                    count += i + "... ";
                }

                result.textContent = count + "\nEXPLOSÃO";
            }
        }
    },

    {
        id: 2,
        title: "Divisão",
        desc: "Crie um algoritmo que divida dois números, obrigando o usuário a digitar um valor maior que zero para o divisor (o segundo número).",

        html:`
            <div class="field">
                <label>Valor 1:</label>
                <input type="number" id="n1">
            </div>
            <div class="field">
                <label>Valor 2:</label>
                <input type="number" id="n2">
            </div>
            <button id="btn">Dividir</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const n1 = Number(document.getElementById("n1").value);
                const n2 = Number(document.getElementById("n2").value);
                const res = document.getElementById("result");

                if (document.getElementById("n1").value === "" || document.getElementById("n2").value === "") {
                    res.textContent = "Por favor, preencha os dois valores.";
                    return ;
                }

                if (n2 <= 0) {
                    res.textContent = "O segundo valor deve ser maior que 0.";
                    return ;
                }

                res.innerHTML = `${n1} ÷ ${n2} = ${(n1 / n2)}`;
            }
        }
    },

    {
        id: 3,
        title: "Contagem regressiva",
        desc: "Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.",

        html:`
            <button id="btn">Iniciar contagem regressiva!</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const res = document.getElementById("result");
                let count = "";

                for (let i = 10; i >= 0; i--) {
                    count += i + ", ";
                }

                res.textContent = count + "...";

            }
        }
    },

    {
        id: 4,
        title: "",
        desc: "Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).",

        html:`
            <button id="btn">ICalcular</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const res = document.getElementById("result");
                let sum = 0;

                for (let i = 15; i <= 100; i++) {
                    sum += i;
                }

                res.textContent = "A Média Aritmética é = " + sum / 85;
            }
        }
    },

    {
        id: 5,
        title: "Média de dois valores e seus intermediários", // botar um titulo melhorzinkkkkk
        desc: "Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. ",

        html:`
            <div class="field">
                <label>Valor do Topo:</label>
                <input type="number" id="ceil">
            </div>
            <div class="field">
                <label>Valor Base:</label>
                <input type="number" id="floor">
            </div>
            <button id="btn">Calcular Média</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const ceil = Number(document.getElementById("ceil").value);
                const floor = Number(document.getElementById("floor").value);
                const res = document.getElementById("result");

                const avg = (ceil + floor) / 2;

                let sum = 0;
                let count = 0;
                for (let i = floor; i <= ceil; i++) {
                    sum += i;
                    count ++;
                }
                const sumAvg = sum / count;

                res.innerHTML = `MA de ${ceil} + ${floor} = ${avg} <br>MA dos valores entre ${ceil} e ${floor} = ${sumAvg}`;
            }
        }
    },

    {
        id: 6,
        title: "",
        desc: "Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem 'Calcular a média de outro aluno Sim/Não?' e solicitar um resposta. Se a resposta for 'S', o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.",

        html:`
            <div class="field">
                <label>Nota 1:</label>
                <input type="number" id="n1" placeholder="0 a 10" min="0" max="10" step="0.1">
            </div>
            <div class="field">
                <label>Nota 2:</label>
                <input type="number" id="n2" placeholder="0 a 10" min="0" max="10" step="0.1">
            </div>
            <div class="inline-group">
                <button id="btn-calcular">Calcular Média</button>
                <button id="btn-encerrar">Encerrar e Ver Total</button>
            </div>
            <p class="result" id="result"></p>
        `,

        init: function() {
            let approved = 0;
            let studentsTotal = 0;
            
            document.getElementById("btn-calcular").onclick = () => {

            }
        }
    },

    {
        id: 7,
        title: "",
        desc: "",

        html:``,

        init: function() {
            document.getElementById("btn").onclick = () => {

            }
        }
    },
]