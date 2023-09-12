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

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting wihtout info

        // Fetch form data
        const formData = new FormData(contactForm);

        // Replace 'your-server-endpoint' with your actual server endpoint
        fetch('your-server-endpoint', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                // Show a success message
                console.log(data);
                showMessageSent();
            })
            .catch(error => {
                // Show an error message
                console.error(error);
            });
    });

    const messageSentDiv = document.getElementById('message-sent');

    function showMessageSent() {
        messageSentDiv.style.display = 'block';
        setTimeout(() => {
            messageSentDiv.style.display = 'none';
        }, 3000);
    }
});
