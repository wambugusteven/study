const ntn = document.getElementById("bt");
const ntn1 = document.getElementById("dsn-scr1");
const button1 = document.getElementById("btn-td");
const button2 = document.getElementById("btn2");

const mdk = () => {
    ntn.innerHTML = new Date();
}

button1.addEventListener("click", mdk);

const dateDis = () => {
    ntn1.innerHTML = "Love is a scam 😜";
}
button2.addEventListener("click", dateDis);

