const success = document.querySelector(".success");
const info = document.querySelector(".info");
const danger = document.querySelector(".danger");

success.addEventListener("click", function (maxNumber) {
    const numberString1 = document.querySelector("#user1");
    const numberString2 = document.querySelector("#user2");
    let number = Number(numberString1.textContent);
    let max = document.querySelector("#toMax").value;
    let maxValue = Number(max);
    number++;
    user1 = document.querySelector("#user1");
    user1.innerText = number;
    if (number === maxValue) {
        numberString1.classList.add('winner');
        numberString2.classList.add('loser');
        info.disabled = true;
        success.disabled = true;
    }
});

info.addEventListener("click", function (el) {
    const numberString2 = document.querySelector("#user2");
    const numberString1 = document.querySelector("#user1")
    let number = Number(numberString2.textContent);
    let max = document.querySelector("#toMax").value;
    let maxValue = Number(max);
    number++;
    user2 = document.querySelector("#user2");
    user2.innerText = number;
    console.log(maxValue);
    if (number === maxValue) {
        numberString1.classList.add('loser');
        numberString2.classList.add('winner');
        info.disabled = true;
        success.disabled = true;
    }
});

danger.addEventListener("click", function (e) {
    const numberString1 = document.querySelector("#user1");
    const numberString2 = document.querySelector("#user2");
    numberString1.classList.remove('winner') || numberString1.classList.remove('loser');
    numberString2.classList.remove('winner') || numberString2.classList.remove('loser');
    numberString1.innerText = 0;
    numberString2.innerText = 0;
    info.disabled = false;
    success.disabled = false;
});