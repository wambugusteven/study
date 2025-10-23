const addNote = document.getElementById("dyn");
const save = document.getElementById("btn-s");
const ntn = document.getElementById("dt");

function word () {
  ntn.innerHTML = new Date();
}

ntn.addEventListener("click", word);