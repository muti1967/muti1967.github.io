
  
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }


    var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = `
    @keyframes cursorColorChange {
        0% { border-right-color: #fff; }   /* Start with white */
        100% { border-right-color: #0000FF; } /* Full blue at the end */
    }

    @keyframes cursorBlink {
        0% { border-right-color: transparent; }
        50% { border-right-color: currentColor; }
        100% { border-right-color: transparent; }
    }

    .typewrite > .wrap {
        border-right: 0.08em solid;
        animation: cursorBlink 1s steps(1) infinite, cursorColorChange 2s linear infinite;
    }
`;
document.body.appendChild(css);

    
};
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


       
            window.onload = function() {
                var elements = document.getElementsByClassName('typewrite');
                for (var i=0; i<elements.length; i++) {
                    var toRotate = elements[i].getAttribute('data-type');
                    var period = elements[i].getAttribute('data-period');
                    if (toRotate) {
                        new TxtType(elements[i], JSON.parse(toRotate), period);
                    }
                }
    
                // Inject CSS for the typing cursor
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
                document.body.appendChild(css);
            };


            
            document.addEventListener("DOMContentLoaded", function() {
                const links = document.querySelectorAll('nav ul li a[href^="#"]'); // Select all anchor links starting with '#'
              
                for (const link of links) {
                  link.addEventListener("click", function(e) {
                    e.preventDefault(); // Prevent default behavior (jumping to section)
              
                    const targetId = this.getAttribute("href").substring(1); // Get the ID of the target section
                    const targetElement = document.getElementById(targetId);
              
                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop, // Scroll to the target section's top
                        behavior: "smooth" // Enable smooth scroll behavior
                      });
                    }
                  });
                }
              });
              
//switch

document.getElementById("switch3-radio1").addEventListener("click", function() {
    showSection('skillsSection');
  });
  
  document.getElementById("switch3-radio2").addEventListener("click", function() {
    showSection('experienceSection');
  });
  
  document.getElementById("switch3-radio3").addEventListener("click", function() {
    showSection('educationSection');
  });
  
  function showSection(sectionId) {
    // Hide all sections
    document.getElementById('skillsSection').style.display = 'none';
    document.getElementById('experienceSection').style.display = 'none';
    document.getElementById('educationSection').style.display = 'none';
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  }
  
  var buttons = document.getElementsByClassName("button");
  var arr = [...buttons]; // Convert the HTMLCollection into an array
  
  arr.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.style.opacity = "1"; // Show the selected button
      if (index == 0) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
      } else if (index == 1) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "teal";
      } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(92, 204, 125)";
      }
      
      // Hide other buttons
      arr
        .filter(function (item) {
          return item != element;
        })
        .forEach((item) => {
          item.style.opacity = "0";
        });
    });
  });
  
  