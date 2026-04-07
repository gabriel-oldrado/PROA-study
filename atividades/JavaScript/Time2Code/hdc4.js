export const exercisesHdc4 = [
    {
        id: 1,
        title: "Estudantes",
        desc: "Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar 'PARE' o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.",

        html:`
            <button id="btn">Executar</button>
            <p class="result" id="result"></p>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const res = document.getElementById("result");
                let studentsList = [];
                let count = 0;
                let student;

                do {
                    student = prompt("Nome do aluno (ou digite PARE para sair):");
                    
                    if (student && student.toUpperCase() !== "PARE") {
                        studentsList.push(student);
                        count++;
                    }
                } while (student !== null && student.toUpperCase() !== "PARE");

                res.innerHTML = `Nº de Alunos: ${count}<br>Alunos: ${studentsList}`;
            }
        }
    },

    {
        id: 2,
        title: "Planetas",
        desc: "Crie uma array de planetas que inclua 'Terra', 'Marte', 'Plutão', 'Vênus', 'Júpiter', 'Saturno'  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.",

        html:`
            <div class="field">
                <label>Pesquisar Planeta:</label>
                <input type="text" id="planet">
            </div>
            <button id="btn">Buscar planeta</button>
            <div id="tab-result" class="result"></div>
        `,

        init: function() {
            document.getElementById("btn").onclick = () => {
                const planetsList = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
                const userInput = document.getElementById("planet").value.trim();
                const res = document.getElementById("result");

                if (userInput === "") {
                    res.textContent = "Por favor, digite o nome de um planeta";
                    return;
                }

                if (planetsList.includes(userInput)) {
                    res.textContent = `${userInput} está na lista!`;
                } else {
                    result.textContent = `${userInput} não está na lista.`;
                }
            }
        }
    },

    {
        id: 3,
        title: "Compras",
        desc: "Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas. Caso a fruta esteja no array, remova-a e exiba a mensagem Fruta foi retirada da lista. Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem Fruta indisponível no nosso mercado. Quando o array não possuir mais itens dentro de si, escreva Lista de compras finalizada.",

        html:`
            <div id="fruit-list" class="result"></div>
        <div class="field">
            <label>Nome da fruta:</label>
            <input type="text" id="fruit" placeholder="Ex: Maçã">
        </div>
        <button id="btn">Remover da lista</button>
        <p class="result" id="result"></p>
    `,

        init: function() {
            let fruits = ["Maçã", "Banana", "Uva", "Pera", "Manga", "Morango"];

            const renderList = () => {
                const list = document.getElementById("fruit-list");
                if (fruits.length > 0) {
                    list.innerHTML = "Lista atual: " + fruits.join(", ");
                } else {
                    list.innerHTML = "";
                }
            }

            renderList();

            document.getElementById("btn").onclick = () => {
                const input = document.getElementById("fruit").value.trim();
                const result = document.getElementById("result");

                if (input === "") {
                    result.textContent = "Por favor, digite o nome de uma fruta.";
                    return;
                }

                const index = fruits.findIndex(f => f.toLowerCase() === input.toLowerCase());

                if (fruits.length === 0) {
                    result.textContent = "Lista de compras finalizada.";
                    return;
                }

                if (index !== -1) {
                    fruits.splice(index, 1);
                    result.textContent = "Fruta foi retirada da lista.";
                    document.getElementById("fruit").value = "";
                } else {
                    result.textContent = "Fruta indisponível no nosso mercado.";
                }

                renderList();

                if (fruits.length === 0) {
                    result.textContent = "Lista de compras finalizada.";
                    document.getElementById("btn").disabled = true;
                    document.getElementById("fruit").disabled = true;
                }
            }
        }
    },
]