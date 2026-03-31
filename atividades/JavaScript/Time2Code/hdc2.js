export const exercisesHdc2 = [
    {
        id: 1,
        title: "Maior de Dois",
        desc: "Escreva um programa em que o usuário informe dois números. O sistema deve informar o maior valor.",
        
        html: `
            <div class="field">
                <label>1º Número</label>
                <input type="number" id="n1">
            </div>
            <div class="field">
                <label>2º Número:</label>
                <input type="number" id="n2">
            </div>
            <button id="btn">Verificar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const n1 = Number(document.getElementById("n1").value);
                const n2 = Number(document.getElementById("n2").value);
                const max = Math.max(n1, n2);
                
                if (n1 === n2) {
                    document.getElementById("result").textContent = "Os números são iguais.";
                } else {
                    document.getElementById("result").textContent = "O maior número é " + max;
                }
            }
        }
    },

    {
        id: 2,
        title: "Positivo, Negativo ou Zero",
        desc: "Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.",
        
        html: `
            <div class="field">
                <label>Valor:</label>
                <input type="number" id="num">
            </div>
            <button id="btn">Analisar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const num = Number(document.getElementById("num").value);
                let answer;

                if (num > 0) {
                    answer = "O valor é Positivo.";
                } else if (num < 0) {
                    answer = "O valor é Negativo.";
                } else {
                    answer = "O valor é Zero.";
                }

                document.getElementById("result").textContent = answer;
            }
        }
    },

    {
        id: 3,
        title: "Maior de Três",
        desc: "Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. ",
        
        html: `
            <div class="field">
                <label>Valor 1:</label>
                <input type="number" id="n1">
            </div>
            <div class="field">
                <label>Valor 2:</label>
                <input type="number" id="n2">
            </div>
            <div class="field">
                <label>Valor 3:</label>
                <input type="number" id="n3">
            </div>
            <button id="btn">Verificar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const n1 = Number(document.getElementById("n1").value);
                const n2 = Number(document.getElementById("n2").value);
                const n3 = Number(document.getElementById("n3").value);

                const maior = Math.max(n1, n2, n3);
                document.getElementById("result").textContent = "O maior valor digitado foi " + maior;
            }
        }
    },

    {
        id: 4,
        title: "Soma dos 2 Maiores",
        desc: "Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escreva a soma dos 2 maiores.",
        
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
        desc: "Pegue 6 números informados pelo usuário e mostre a média aritmética entre eles.",
        
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
        desc: "Pegue 4 valores com o usuário então mostre o primeiro, o último e o maior de todos.",
        
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
    },

    {
        id: 7,
        title: "Somatório com Condição",
        desc: "Pegue 6 valores informados pelo usuário, se for menor que 72 deve ser somado e no final mostrar todos os números e a soma.",

        html:`
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
            <div class="field">
                <label>5º Valor:</label>
                <input type="number" id="v5">
            </div>
            <div class="field">
                <label>6º Valor:</label>
                <input type="number" id="v6">
            </div>
            <button id="btn">Processar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const values = [
                    Number(document.getElementById("v1").value),
                    Number(document.getElementById("v2").value),
                    Number(document.getElementById("v3").value),
                    Number(document.getElementById("v4").value),
                    Number(document.getElementById("v5").value),
                    Number(document.getElementById("v6").value)
                ];
                
                let sum = 0;

                for (let i = 0; i < values.length; i++) {
                    if (values[i] < 72) {
                        sum += values[i];
                    }
                }

                document.getElementById("result").innerHTML = "Valores: " + values.join(", ") + "<br>Soma: " + sum;
            }
        }
    },

    {
        id: 8,
        title: "Média Condicional",
        desc: "Escreva um programa que calcule a média de 4 valores, digitados pelo usuário, somente se os valores estiverem no intervalo >0 - < 10. Se a média for > 5 escreva 'Você passou no teste', senão 'tente novamente'.",

        html:`
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
            <button id="btn">Ver Resultado</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const values = [
                    Number(document.getElementById("v1").value),
                    Number(document.getElementById("v2").value),
                    Number(document.getElementById("v3").value),
                    Number(document.getElementById("v4").value)
                ];

                const checkNums = values.every(v => v > 0 && v < 10);

                if (checkNums) {
                    let sum = 0;
                    for (let i = 0; i < values.length; i++) { sum += values[i] };
                    const media = sum / 4;

                    if (media > 5) {
                        document.getElementById("result").innerHTML = "Média: " + media.toFixed(2) + "<br>Você passou no teste";
                    } else {
                        document.getElementById("result").innerHTML = "Média: " + media.toFixed(2) + "<br>tente novamente";
                    }
                } else {
                    document.getElementById("result").innerHTML = "Por favor, insira valores entre 0 e 10.";
                }
            }
        }
    },

    {
        id: 9,
        title: "Pode Votar?",
        desc: "Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).",

        html:`
            <div class="field">
                <label>Ano de nascimento:</label>
                <input type="number" id="birthYear" placeholder="Ano em que nasceu...">
            </div>
            <button id="btn">Ver Resultado</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const birthYear = Number(document.getElementById("birthYear").value);

                if ( currentYear - birthYear >= 16 ) {
                    document.getElementById("result").innerHTML = "Você tem idade para votar!";
                } else {
                    document.getElementById("result").innerHTML = "Você ainda não tem idade para votar!";
                }
            }
        }
    },

    {
        id: 10,
        title: "Peso ideal",
        desc: "Tendo como entrada a altura e o gênero designado ao nascer (1: feminino - 2: masculino) construa um programa que calcule seu peso ideal de acordo com as fórmulas: ",

        html:`
            <div class="modal-img">
                <img src="JavaScript/Time2Code/assets/calc.png" alt="Fórmulas para calcular o peso ideal." style="max-width: 100%; border-radius: 8px;">
            </div>
            <br>

            <div class="field">
                <label>Sua altura (cm):</label>
                <input type="number" id="userHeight" placeholder="ex: 175">
            </div>

            <div class="inline-group">
                <div class="field" style="margin-bottom: 0; width: 100%;">
                    <label>Gênero:</label>
                    <select id="userGender">
                        <option value="1">1: Feminino</option>
                        <option value="2">2: Masculino</option>
                    </select>
                </div>
                <button id="btn">Ver Resultado</button>
            </div>
            
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const heightCm = Number(document.getElementById("userHeight").value);
                const gender = document.getElementById("userGender").value;

                if (!heightCm || heightCm <= 0) {
                    document.getElementById("result").textContent = "Por favor, digite uma altura válida.";
                    return;
                }

                const heightM = heightCm / 100;
                let idealWeight;

                if (gender === "2") {
                    idealWeight = (72.7 * heightM) - 58;
                } else {
                    idealWeight = (62.1 * heightM) - 44.7;
                }

                document.getElementById("result").innerHTML = "Seu peso ideal é: " + idealWeight.toFixed(2) + " kg";
            }
        }
    },

    {
        id: 11,
        title: "Micro Calculadora",
        desc: "Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma operação (1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação) para calcular e escrever o resultado.",

        html:`
            <div class="field">
                <label>1º Valor Inteiro:</label>
                <input type="number" id="v1" placeholder="Ex: 10">
            </div>
            <div class="field">
                <label>2º Valor Inteiro:</label>
                <input type="number" id="v2" placeholder="Ex: 5">
            </div>
            <div class="field">
                <label>Operação:</label>
                <select id="op">
                    <option value="1">1: Adição (+)</option>
                    <option value="2">2: Subtração (-)</option>
                    <option value="3">3: Divisão (/)</option>
                    <option value="4">4: Multiplicação (*)</option>
                </select>
            </div>
            <button id="btn">Calcular</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const v1 = parseInt(document.getElementById("v1").value);
                const v2 = parseInt(document.getElementById("v2").value);
                const op = document.getElementById("op").value;

                if (isNaN(v1) || isNaN(v2)) {
                    document.getElementById("result").textContent = "Por favor, preencha os dois valores com números válidos.";
                    return;
                }

                let calcResult;

                if (op === "1") {
                    calcResult = v1 + v2;
                } else if (op === "2") {
                    calcResult = v1 - v2;
                } else if (op === "3") {
                    if (v2 === 0) {
                        document.getElementById("result").innerHTML = "Erro: Divisão por zero não é permitida.";
                        return;
                    }
                    calcResult = v1 / v2;
                } else if (op === "4") {
                    calcResult = v1 * v2;
                }

                document.getElementById("result").innerHTML = "O resultado é: <strong>" + calcResult + "</strong>";
            }
        }
    }
];