const cardTitle = document.querySelector(".card__ratio-title");
const cardLastStat = document.querySelector(".card__last-stat");
const showButton = document.querySelector(".card__toggle-button");
const showBlock = document.querySelector(".card__descr");

if(window.innerWidth < 744) {
    cardTitle.textContent = "Кэф";
    cardLastStat.textContent = "30 дней"
}

showButton.addEventListener("click",() => {
    showBlock.classList.add("show");
    showButton.style.display = "none";
})


