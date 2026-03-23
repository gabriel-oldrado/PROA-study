export const exercisesHdc2 = [
    {
        id: 1,
        title: "Maior de Dois",
        desc: "Informe dois números e veja qual é o maior.",
        
        html: `
            <div class="field">
                <label>Número 1:</label>
                <input type="number" id="n1">
            </div>
            <div class="field">
                <label>Número 2:</label>
                <input type="number" id="n2">
            </div>
            <button id="btn">Verificar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const n1 = Number(document.getElementById("n1").value);
                const n2 = Number(document.getElementById("n2").value);
                const maior = Math.max(n1, n2);
                
                if (n1 === n2) {
                    document.getElementById("result").textContent = "Os números são iguais.";
                } else {
                    document.getElementById("result").textContent = "O maior número é " + maior;
                }
            }
        }
    },

    {
        id: 2,
        title: "Positivo, Negativo ou Zero",
        desc: "Informe um valor e descubra seu sinal.",
        
        html: `
            <div class="field">
                <label>Valor:</label>
                <input type="number" id="valor">
            </div>
            <button id="btn">Analisar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const valor = Number(document.getElementById("valor").value);
                let resposta;

                if (valor > 0) {
                    resposta = "O valor é Positivo.";
                } else if (valor < 0) {
                    resposta = "O valor é Negativo.";
                } else {
                    resposta = "O valor é Zero.";
                }

                document.getElementById("result").textContent = resposta;
            }
        }
    },

    {
        id: 3,
        title: "Maior de Três",
        desc: "Informe 3 valores diferentes e veja o maior.",
        
        html: `
            <div class="field">
                <label>Valor 1:</label>
                <input type="number" id="v1">
            </div>
            <div class="field">
                <label>Valor 2:</label>
                <input type="number" id="v2">
            </div>
            <div class="field">
                <label>Valor 3:</label>
                <input type="number" id="v3">
            </div>
            <button id="btn">Verificar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const v1 = Number(document.getElementById("v1").value);
                const v2 = Number(document.getElementById("v2").value);
                const v3 = Number(document.getElementById("v3").value);

                const maior = Math.max(v1, v2, v3);
                document.getElementById("result").textContent = "O maior valor digitado foi " + maior;
            }
        }
    },

    {
        id: 4,
        title: "Soma dos 2 Maiores",
        desc: "Informe 3 valores. O programa somará apenas os 2 maiores.",
        
        html: `
            <div class="field">
                <label>Valor 1:</label>
                <input type="number" id="v1">
            </div>
            <div class="field">
                <label>Valor 2:</label>
                <input type="number" id="v2">
            </div>
            <div class="field">
                <label>Valor 3:</label>
                <input type="number" id="v3">
            </div>
            <button id="btn">Calcular</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const v1 = Number(document.getElementById("v1").value);
                const v2 = Number(document.getElementById("v2").value);
                const v3 = Number(document.getElementById("v3").value);

                const numerosOrdenados = [v1, v2, v3].sort((a, b) => b - a);
                const soma = numerosOrdenados[0] + numerosOrdenados[1];

                document.getElementById("result").textContent = "A soma dos dois maiores é " + soma;
            }
        }
    },

    {
        id: 5,
        title: "Média de 6 Valores",
        desc: "Informe 6 números para ver a média aritmética entre eles.",
        
        html: `
            <div class="field"><input type="number" id="n1" placeholder="Nº 1"></div>
            <div class="field"><input type="number" id="n2" placeholder="Nº 2"></div>
            <div class="field"><input type="number" id="n3" placeholder="Nº 3"></div>
            <div class="field"><input type="number" id="n4" placeholder="Nº 4"></div>
            <div class="field"><input type="number" id="n5" placeholder="Nº 5"></div>
            <div class="field"><input type="number" id="n6" placeholder="Nº 6"></div>
            <button id="btn">Calcular Média</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const valores = [
                    Number(document.getElementById("n1").value),
                    Number(document.getElementById("n2").value),
                    Number(document.getElementById("n3").value),
                    Number(document.getElementById("n4").value),
                    Number(document.getElementById("n5").value),
                    Number(document.getElementById("n6").value)
                ];

                const somaTotal = valores.reduce((acc, atual) => acc + atual, 0);
                const media = somaTotal / valores.length;

                document.getElementById("result").innerHTML = "Números: " + valores.join(", ") + "<br><br>Média: " + media.toFixed(2);
            }
        }
    },

    {
        id: 6,
        title: "Primeiro, Último e Maior",
        desc: "Informe 4 valores. O sistema revelará o primeiro, o último e o maior de todos.",
        
        html: `
            <div class="field">
                <label>1º Valor:</label>
                <input type="number" id="v1">
            </div>
            <div class="field">
                <label>2º Valor:</label>
                <input type="number" id="v2">
            </div>
            <div class="field">
                <label>3º Valor:</label>
                <input type="number" id="v3">
            </div>
            <div class="field">
                <label>4º Valor:</label>
                <input type="number" id="v4">
            </div>
            <button id="btn">Processar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const valores = [
                    Number(document.getElementById("v1").value),
                    Number(document.getElementById("v2").value),
                    Number(document.getElementById("v3").value),
                    Number(document.getElementById("v4").value)
                ];

                const primeiro = valores[0];
                const ultimo = valores[3];
                const maior = Math.max(...valores);

                document.getElementById("result").innerHTML = "Primeiro: " + primeiro + "<br>Último: " + ultimo + "<br>Maior: " + maior;
            }
        }
    }
];