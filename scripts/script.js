import { exercisesHdc1 } from "./JavaScript/Time2Code-01/exercises.js";
import { exercisesHdc2 } from "./JavaScript/Time2Code-02/exercises.js";

const courseModules = [
    {htmlId: "hdc1List", data: exercisesHdc1},
    {htmlId: "hdc2List", data: exercisesHdc2},
];

courseModules.forEach(module => {
    const listElement = document.getElementById(module.htmlId);

    if (!listElement) return;

    module.data.forEach(exercise => {
        const itemList = document.createElement("li");
        itemList.innerHTML = `
        <button data-id="${exercise.id}">
            Exercício ${exercise.id}
            <span class="ex-desc">- ${exercise.desc}</span>
        </button>
        `;
        listElement.appendChild(itemList);
    });

    listElement.addEventListener("click", (event) => {
        const btnClicked = event.target.closest("button[data-id]");
        if (!btnClicked) return;

        const exerciseId = Number(btnClicked.dataset.id);
        
        const choosenEx = module.data.find(ex => ex.id === exerciseId);
        if (!choosenEx) return;

        document.getElementById("modal-title").textContent = `Ex ${choosenEx.id} — ${choosenEx.title}`;
        document.getElementById("modal-desc").textContent = choosenEx.desc;
        document.getElementById("modal-body").innerHTML = choosenEx.html;

        choosenEx.init();

        document.getElementById("overlay").classList.add("active");

    });
});

// ---
const btnAccordion = document.querySelectorAll(".item-header");

btnAccordion.forEach(btnAc => {
    btnAc.addEventListener("click", () => {
        btnAc.parentElement.classList.toggle("open");
    });
});

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