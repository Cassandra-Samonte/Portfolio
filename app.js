new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 1000
});

let typed = new Typed('.auto-type', {
    strings: ['Hello World'],
    typeSpeed: 150,
    backSpeed:50,
    startDelay: 10,
    loop: true
})

function openPopup() {
    document.getElementById('contact-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
}

document.querySelector('.contact-button').addEventListener('click', function(event) {
    event.preventDefault();
    openPopup();
});
  
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const user_email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    console.log({
      user_email,
      subject,
      message
    });
    
    const recipientEmail = 'cssamonte@gmail.com';
    const emailBody = `Message from: ${user_email}\n\n${message}`;
    
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    closePopup();
});
  