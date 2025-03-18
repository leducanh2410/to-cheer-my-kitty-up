function nextPage() {
    window.location.href = "yes.html";
}
const no = document.getElementById("no");
no.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));

    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
});