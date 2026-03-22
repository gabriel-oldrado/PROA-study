import { exercisesHdc1 } from "./JavaScript/Time2Code-01/exercicios.js";

const hdc1List = document.getElementById("hdc1-list");

exercisesHdc1.forEach(exercise => {
    const itemList = document.createElement("li");
    itemList.innerHTML = `
    <button data-id="${exercise.id}">
        Exercício ${exercise.id}
        <span class="ex-desc">- ${exercise.desc}</span>
    </button>
    `;
    hdc1List.appendChild(itemList);
});

// ---
const btnAccordion = document.querySelectorAll(".item-header");

btnAccordion.forEach(btnAc => {
    btnAc.addEventListener("click", () => {
        btnAc.parentElement.classList.toggle("open");
    });
});

// ---
hdc1List.addEventListener("click", (event) => {
    const btnClicked = event.target.closest("button[data-id]");
    if (!btnClicked) return;

    const exerciseId = Number(btnClicked.dataset.id);
    const choosenEx = exercisesHdc1.find(ex => ex.id === exerciseId);
    if (!choosenEx) return;

    document.getElementById("modal-title").textContent = `Ex ${choosenEx.id} — ${choosenEx.title}`;
    document.getElementById("modal-desc").textContent = choosenEx.desc;
    document.getElementById("modal-body").innerHTML = choosenEx.html;

    choosenEx.init();

    document.getElementById("overlay").classList.add("active");
})

function closeModal() {
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("modal-body").innerHTML = "";
}

document.getElementById("modal-close").onclick = closeModal;

document.getElementById("overlay").onclick = (event) => {
    if (event.target === event.currentTarget) {
        closeModal();
    }
};