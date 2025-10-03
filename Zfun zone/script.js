const ntn = document.getElementById("dsn-scr");
const ntn1 = document.getElementById("dsn-scr1");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");

let noteNumber = 0;
for (let i = 1; i <= 1; i++) {
    noteNumber = noteNumber + 1; 
}

const row = {
    noteBlock: `
        <div class="dis">
           <h1>${noteNumber}</h1>
           <input type="text" />
        </div>
    `
};

const noteAdd = () => {
     ntn.innerHTML = row[0];
}
button1.addEventListener("click", noteAdd);

const dateDis = () => {
    ntn1.innerHTML = "Love is a scam 😜";
}
button2.addEventListener("click", dateDis);

ntn.innerHTML += row[0];
