function addNote() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(title === "" || content === "") {
        alert("Please enter title and content.");
        return;
    }

    let notesContainer = document.getElementById("notesContainer");

    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    noteDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="delete-btn" onclick="deleteNote(this)">
            Delete
        </button>
    `;

    notesContainer.appendChild(noteDiv);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function deleteNote(button) {
    button.parentElement.remove();
}