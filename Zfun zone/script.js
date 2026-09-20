
const calc1 = () => {
  `<div class="contain">
    <h2>Calculator</h2>
    <div class="screen">
        <input type="number" />
    </div>
    <div class="btns">
        <div class="numbers">
            <button class="num">9</button>
            <button class="num">8</button>
            <button class="num">7</button>
            <button class="num">6</button>
            <button class="num">5</button>
            <button class="num">4</button>
            <button class="num">3</button>
            <button class="num">2</button>
            <button class="num">1</button>
            <button class="num">0</button>
            <button class="num">00</button>
        </div>
        <div class="operator">
            <button class="opert">+</button>
            <button class="opert">-</button>
            <button class="opert">*</button>
            <button class="opert">.</button>
            <button class="opert">/</button>
            <button class="opert">C</button>
            <button class="opert">Del</button>
            <button class="opert">%</button>
        </div>
    </div>
</div>`
}

const actn = () => {
  calculator.innerText = calc1;
 return;
}

popup.addEventListener("click", 
actn()
)

 let Brave = () => {}