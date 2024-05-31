const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

showNotes();

btn.addEventListener('click', () => {
    let inputBlock = document.createElement("p");
    let img = document.createElement("img");
    inputBlock.className = "input-block";
    inputBlock.setAttribute("contenteditable", "true");
    img.src = "images.png";
    inputBlock.appendChild(img);
    notesContainer.appendChild(inputBlock);

    updateStorage();
});


notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        const notes = document.querySelectorAll(".input-block");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            };
        });
    }
});

notesContainer.addEventListener("input", function() {
    updateStorage();
});
