function toggleFaq(element) {
    const answer = element.nextElementSibling;

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

function submitFeedback() {
    const feedback = document.getElementById("feedback").value.trim();

    if (feedback === "") {
        alert("Please enter your feedback");
        return;
    }

    alert("Thank you for your feedback!");
    document.getElementById("feedback").value = "";
}
