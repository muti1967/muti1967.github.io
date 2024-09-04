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

*/
// Toggle dropdown form visibility and scroll smoothly to the form

document.querySelector('.logo a').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor click behavior
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const sendButton = document.getElementById('send-button');

    // Disable the button to prevent multiple submissions
    sendButton.disabled = true;

    // Send the form data using fetch
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Change button text to a check mark
            sendButton.innerHTML = 'Sent &#10004; I Look forward to connecting!';
            sendButton.style.backgroundColor = '#28a745'; // Change button color to green
            sendButton.style.cursor = 'pointer'; // Allow cursor to be pointer again
            sendButton.disabled = false; // Re-enable the button

            // Add a click event listener to reset the form and the button
            sendButton.addEventListener('click', resetForm);
        } else {
            response.json().then(data => {
                if (data.errors) {
                    alert('There was a problem submitting your form. Please try again.');
                    sendButton.disabled = false; // Re-enable the button if there's an error
                }
            });
        }
    }).catch(error => {
        alert('There was a problem submitting your form. Please try again.');
        sendButton.disabled = false; // Re-enable the button if there's an error
    });

    // Function to reset the form and button
    function resetForm() {
        form.reset(); // Reset the form fields
        sendButton.innerHTML = 'Send'; // Reset button text
        sendButton.style.backgroundColor = ''; // Reset button color
        sendButton.style.cursor = 'pointer'; // Reset cursor
        sendButton.removeEventListener('click', resetForm); // Remove this reset event listener
    }
});
// script.js
// Toggle the mobile menu
document.getElementById("menu-icon").addEventListener("click", function() {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show"); // Toggle the "show" class to display/hide the menu
  });

  document.addEventListener("DOMContentLoaded", function () {
    var aboutSection = document.querySelector('#about'); // The "About Me" section

    // Ensure the section is hidden initially
    aboutSection.classList.remove('show');

    // Add scroll event listener
    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY || window.pageYOffset; // Get scroll position

      if (scrollPosition > 96) { // If scrolled down more than 96px
        aboutSection.classList.add('show'); // Add class to fade in
      } else {
        aboutSection.classList.remove('show'); // Remove class to fade out
      }
    });
  });