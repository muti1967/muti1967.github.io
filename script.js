// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
                window.scroll({
                    top: offsetTop,
                    behavior: "smooth", 
                });
            }
        });
    });
});

const messageSentDiv = document.getElementById('message-sent');

function handleSubmit(event) {
    event.preventDefault(); 
    showMessageSent();
}

function showMessageSent() {
    messageSentDiv.style.display = 'block'; 
    setTimeout(() => {
        messageSentDiv.style.display = 'none'; 
    }, 3000); 
}

// Event listener for form submission
contactForm.addEventListener('submit', handleSubmit);
