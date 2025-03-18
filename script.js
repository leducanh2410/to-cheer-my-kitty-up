function nextPage() {
    window.location.href = "yes.html";
    
    emailjs.send("service_xj673bt",{
        message: "She said YESS !!!!!",
        to_email: "leducanh2410@gmail.com"
    }).then(function(response) {
        alert("Email sent successfully!");
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });
    // window.location.href = "mailto:leducanh2410@gmail.com?subject=She%20said%20YESSS!!!&body=She%20said%20YESS!!!!!";
}
const no = document.getElementById("no");
no.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));

    no.style.left = `${x}px`;
    no.style.top = `${y}px`;

   
});