/*document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.slide-in-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown-btn');
    dropdowns.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message, ' + document.getElementById('name').value + '! I will get back to you soon.');
        // Clear the form
        document.getElementById('contact-form').reset();
    });
});

// Toggle dropdown form visibility
// Toggle dropdown form visibility
document.getElementById('contact-dropdown').addEventListener('click', function() {
    var contactFormContainer = document.getElementById('contact-form-container');
    if (contactFormContainer.style.display === 'none' || contactFormContainer.style.display === '') {
        contactFormContainer.style.display = 'block';
    } else {
        contactFormContainer.style.display = 'none';
    }
});
*/
// Toggle dropdown form visibility and scroll smoothly to the form
document.getElementById('contact-dropdown').addEventListener('click', function(e) {
    e.preventDefault();
    
    var contactFormContainer = document.getElementById('contact-form-container');

    // Toggle visibility
    if (contactFormContainer.style.display === 'none' || contactFormContainer.style.display === '') {
        contactFormContainer.style.display = 'block';
    } else {
        contactFormContainer.style.display = 'none';
    }

    // Smoothly scroll to the form
    contactFormContainer.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.logo a').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor click behavior
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
});
