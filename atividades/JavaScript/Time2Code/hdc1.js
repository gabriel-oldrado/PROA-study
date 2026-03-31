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
    },

    {
        id: 2,
        title: "Seu nome",
        desc: "Escreva um programa em que o usuário informe o seu nome e exiba a mensagem 'Olá, [NomeDoUsuario]'.",

        html:`
            <div class="field">
                <label>Nome:</label>
                <input type="text" id="nameInput" placeholder="Informe seu nome...">
            </div>
            <button id="btn">Enviar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                let userName = document.getElementById('nameInput').value;

                if (userName.trim() === "") {
                    document.getElementById("result").textContent = "Por favor, digite o seu nome.";
                    return ;
                }

                document.getElementById("result").textContent = "Olá, " + userName + "!";
            }
        }
    },
    
    {
        id: 3,
        title: "Nome e Idade",
        desc: "Escreva um programa em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem 'Olá, [NomeDoUsuario], sua idade é [idade]'.",

        html:`
            <div class="field">
                <label>Nome:</label>
                <input type="text" id="nameInput" placeholder="Informe seu nome...">
                <label>Idade:</label>
                <input type="number" id="ageInput" placeholder="Informe sua idade...">
            </div>
            <button id="btn">Enviar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                let userName = document.getElementById('nameInput').value;
                let userAge = document.getElementById('ageInput').value;

                if (userName.trim() === "" || userAge.trim() === "") {
                    document.getElementById("result").textContent = "Por favor, insira todos os valores.";
                    return ;
                }

                document.getElementById("result").textContent = "Olá, " + userName + "!\nsua idade é " + userAge;
            }
        }
    },

    {
        id: 4,
        title: "Calcular Áreas",
        desc: "Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.",

        html:`
            <div class="field">
                <label for="shapeSelect">Escolha a figura:</label>
                <select id="shapeSelect">
                    <option value="">Selecione...</option>
                    <option value="rectangle">Retângulo</option>
                    <option value="square">Quadrado</option>
                    <option value="diamond">Losango</option>
                    <option value="trapeze">Trapézio</option>
                    <option value="parallelogram">Paralelogramo</option>
                    <option value="triangle">Triângulo</option>
                    <option value="circle">Círculo</option>
                </select>
            </div>

            <div id="dinamicInput"></div>

            <button id="btn" style="display: none;">Calcular Área</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            const shapeSelect = document.getElementById("shapeSelect");
            const containerInputs = document.getElementById("dinamicInput");
            const btn = document.getElementById("btn");
            const result = document.getElementById("result");

            shapeSelect.addEventListener("change", () => {

                const selectedShape = shapeSelect.value;
                result.textContent = "";

                if (selectedShape === "") {
                    containerInputs.innerHTML = "";
                    btn.style.display = "none";
                    return ;
                }

                btn.style.display = "block";
                switch (selectedShape) {
                    case "rectangle":
                        containerInputs.innerHTML = `
                            <div class="field">
                                <label>Base:</label>
                                <input type="number" id="baseInput-re">
                            </div>
                            <div class="field">
                                <label>Altura:</label>
                                <input type="number" id="heightInput-re">
                            </div>
                        `;
                        break;
                    
                    case "square":
                        containerInputs.innerHTML = `
                            <div class="field">
                                <label>Lado:</label>
                                <input type="number" id="sideInput-sq">
                            </div>
                        `;
                        break;
                    
                    case "diamond":
                        containerInputs.innerHTML = `
                            <div class="field">
                                <label>Diagonal maior:</label>
                                <input type="number" id="diag1Input-di">
                            </div>
                            <div class="field">
                                <label>Diagonal menor:</label>
                                <input type="number" id="diag2Input-di">
                            </div>
                        `;
                        break;
                    
                    case "trapeze":
                        containerInputs.innerHTML = `
                            <div class="field">
                                <label>Base maior:</label>
                                <input type="number" id="base1Input-tr">
                            </div>
                            <div class="field">
                                <label>Base menor:</label>
                                <input type="number" id="base2Input-tr">
                            </div>
                            <div class="field">
                                <label>Altura:</label>
                                <input type="number" id="heightInput-tr">
                            </div>
                        `;
                        break;

                    case "parallelogram":
                        containerInputs.innerHTML = `
                            <div class="field">
                                <label>Base:</label>
                                <input type="number" id="baseInput-pa">
                            </div>
                            <div class="field">
                                <label>Altura:</label>
                                <input type="number" id="heightInput-pa">
                            </div>
                        `;
                        break;
                    
                    case "triangle":
                        containerInputs.innerHTML = `
                            <div class="field">
                                <label>Base:</label>
                                <input type="number" id="baseInput-tri">
                            </div>
                            <div class="field">
                                <label>Altura:</label>
                                <input type="number" id="heightInput-tri">
                            </div>
                        `;
                        break;
                    case "circle":
                        containerInputs.innerHTML = `
                            <div class="field">
                                <label>Raio (r):</label>
                                <input type="number" id="radiusInput-ci">
                            </div>
                        `;
                    break;
                }
            });

            btn.onclick = () => {
                const selectedShape = shapeSelect.value;
                let area = 0;

                switch (selectedShape) {
                    case "rectangle":
                        const baseRe = Number(document.getElementById("baseInput-re").value);
                        const heightRe = Number(document.getElementById("heightInput-re").value);
                        area = baseRe * heightRe;
                        result.textContent = `A área do retângulo é ` + area;
                        break;
                    
                    case "square":
                        const side = Number(document.getElementById("sideInput-sq").value);
                        area = side * side;
                        result.textContent = `A área do quadrado é ` + area;
                        break;
                    
                    case "diamond":
                        const diag1 = Number(document.getElementById("diag1Input-di").value);
                        const diag2 = Number(document.getElementById("diag2Input-di").value);
                        area = (diag1 * diag2) / 2;
                        result.textContent = `A área do losango é ` + area;
                        break;
                    
                    case "trapeze":
                        const base1Tr = Number(document.getElementById("base1Input-tr").value);
                        const base2Tr = Number(document.getElementById("base2Input-tr").value);
                        const heightTr = Number(document.getElementById("heightInput-tr").value);
                        area = ((base1Tr + base2Tr) * heightTr) / 2;
                        result.textContent = `A área do trapézio é ` + area;
                        break;

                    case "parallelogram":
                        const basePa = Number(document.getElementById("baseInput-pa").value);
                        const heightPa = Number(document.getElementById("heightInput-pa").value);
                        area = basePa * heightPa;
                        result.textContent = `A área do paralelogramo é ` + area;
                        break;
                    
                    case "triangle":
                        const baseTri = Number(document.getElementById("baseInput-tri").value);
                        const heightTri = Number(document.getElementById("heightInput-tri").value);
                        area = (baseTri * heightTri) / 2;
                        result.textContent = `A área do triângulo é ` + area;
                        break;

                    case "circle":
                        const radius = Number(document.getElementById("radiusInput-ci").value);
                        area = Math.PI * radius * radius;
                        result.textContent = `A área do círculo é ${area.toFixed(2)}`;
                        break;
                };
            };
        }
    }
]