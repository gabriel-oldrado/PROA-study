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
        title: "Média de alunos",
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
                <button id="btn-calculate">Calcular Média</button>
                <button id="btn-finish">Encerrar e Ver Total</button>
            </div>
            <p class="result" id="result"></p>
        `,

        init: function() {
            let studentsApproved = 0;
            let studentsTotal = 0;

            document.getElementById("btn-calculate").onclick = () => {
                const n1 = Number(document.getElementById("n1").value);
                const n2 = Number(document.getElementById("n2").value);
                const res = document.getElementById("result");

                if (document.getElementById("n1").value === "" || document.getElementById("n2").value === "") {
                    res.textContent = "Por favor, preencha as duas notas";
                    return;
                }

                const avg = (n1 + n2) / 2;
                studentsTotal++;
                const approved = avg >= 9.5;
                if (approved) studentsApproved++;

                res.innerHTML = `Média: ${avg.toFixed(1)}`;

                document.getElementById("n1").value = "";
                document.getElementById("n2").value = "";
                document.getElementById("n1").focus();
            }

            document.getElementById("btn-finish").onclick = () => {
                if (studentsTotal === 0) {
                    document.getElementById("result").textContent = "Nenhum aluno calculado.";
                    return;
                }

                document.getElementById("result").innerHTML = `Nº de Alunos: ${studentsTotal} <br>Nº de Aprovados: ${studentsApproved}`;
            }
        }
    },

    {
        id: 7,
        title: "Média com validação de notas",
        desc: "Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.",

        html:`
            <button id="btn">Executar Exercício</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                let sum = 0;
                
                for (let i = 0; i < 6;) {
                    let score = Number(prompt((i + 1) + "º Nota: "));
                    if (score > 0 && score < 10) {
                        sum += score;
                        // console.log(score)
                        // console.log(sum)
                        i++;
                    }
                }

                const avg = (sum / 6).toFixed(2);

                document.getElementById("result").innerHTML = `Média: ${avg}`
            }
        }
    },

    {
        id: 8,
        title: "Valores entre 1 e N",
        desc: "Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário",

        html:`
            <div class="field">
                <label>Valor N:</label>
                <input type="number" id="num">
            </div>
            <button id="btn">Executar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const num = Number(document.getElementById("num").value);
                const res = document.getElementById("result");
                let msg = "";

                for (let i = 1; i <= num; i++) {
                    msg += i + ", ";
                }

                res.textContent = msg;
            }
        }
    },

    {
        id: 9,
        title: "10 preimiros inteiros maiores que 100",
        desc: "Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.",

        html:`
            <button id="btn">Executar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                let msg = "";
                for (let i = 101; i < 101 + 10; i ++) {
                    msg += i + ", ";
                }

                document.getElementById("result").textContent = msg;
            }
        }
    },

    {
        id: 10,
        title: "Valores entre 24 e 42",
        desc: "Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.",

        html:`
            <button id="btn">Executar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                let between = [];
                let betweenCount = 0;
                let out = [];
                let outCount = 0;

                for (let i = 0; i < 10;) {
                    let n = Number(prompt((i + 1) + "º número: "));
                    
                    if (!isNaN(n)) {
                        if (n >= 24 && n <= 42) {
                            between.push(n);
                            betweenCount++;
                        } else {
                            out.push(n)
                            outCount++;
                        }

                        i++;
                    }
                }

                document.getElementById("result").innerHTML = `Valores entre 24 e 42: ${between}; <br>Quantidade: ${betweenCount} <br><br>Fora: ${out}; <br>Quantidade: ${outCount}`;
            }
        }
    },

    {
        id: 11,
        title: "Tabuada de 1 a N",
        desc: "Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. ",

        html:`
            <div class="field">
                <label>Valor N:</label>
                <input type="number" id="num">
            </div>
            <button id="btn">Executar Tabuadas</button>
            <div id="tab-result" class="result"></div>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const number = Number(document.getElementById("num").value);
                const container = document.getElementById("tab-result");
                container.innerHTML = "";

                if (isNaN(number) || number <= 0) {
                    container.textContent = "Por favor, informe um valor maior que zero";
                    return;
                }

                for (let i = 1; i <= number; i++) {
                    const title = document.createElement("strong");
                    title.textContent = `Tabuada do ${i}`;
                    title.style.display = "block";
                    title.style.marginTop = "12px"
                    container.appendChild(title);

                    for (let j = 1; j <= 10; j++) {
                        const line = document.createElement("p");
                        line.textContent = `${i} × ${j} = ${i * j}`;
                        line.style.margin = "2px 0";
                        container.appendChild(line);
                    }
                }
            }
        }
    },
]