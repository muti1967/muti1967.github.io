// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting wihtout info

    // Fetch form data
    const formData = new FormData(contactForm);

//will complete API when i have a chance next project


    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            //show a success message
            console.log(data);
        })
        .catch(error => {
            // show an error message
            console.error(error);
        });
});

//cool effects section

const parallax = document.querySelector('.parallax');
let scrollValue = 0;

function moveBackgroundVertical() {
    scrollValue += 0.1; // Adjust the increment to control the speed
    parallax.style.backgroundPositionY = `${scrollValue}px`;

    // Reset the position when it reaches the end
    if (scrollValue >= window.innerHeight) {
        scrollValue = 0;
    }
    requestAnimationFrame(moveBackgroundVertical);
}

moveBackgroundVertical(); // Start the animation


/*    
    <div class="parallax">
      <video autoplay muted loop id="bg-video">
          <source src="images/blbck.mp4" type="video/mp4">
          <!-- Add additional sources for different formats if needed -->
          Your browser does not support the video tag.
      </video>
     
      */





 






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
