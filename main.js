document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.plus-btn');
    const links = document.querySelectorAll('.faq-link');
    
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        targetElement.classList.toggle('active');
      });
    });
    
    links.forEach(link => {
      link.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        targetElement.classList.toggle('active');
      });
    });
  

});