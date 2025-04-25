// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });
  
  // Typing effect in hero section
  const typingText = "Full Stack Developer";
  let typingIndex = 0;
  const typingElement = document.querySelector('.typing-text');
  
  function typeText() {
    if (typingIndex < typingText.length) {
      typingElement.textContent = typingText.substring(0, typingIndex + 1) + '|';
      typingIndex++;
      setTimeout(typeText, 100);
    } else {
      typingElement.innerHTML = typingText + '<span class="cursor">|</span>';
    }
  }
  
  setTimeout(typeText, 1000);
  
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const parentElement = bar.parentElement.parentElement;
      const position = parentElement.getBoundingClientRect();
      
      // Check if element is in viewport
      if (position.top < window.innerHeight && position.bottom >= 0) {
        const width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        bar.style.width = width;
      }
    });
  }
  
  window.addEventListener('scroll', animateSkillBars);
  // Initial call to animate skills that are already in view
  animateSkillBars();
  
  // Certificate modal
  const certCards = document.querySelectorAll('.cert-card');
  const certModal = document.getElementById('cert-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalImg = document.getElementById('modal-cert-img');
  const modalTitle = document.getElementById('modal-cert-title');
  const modalIssuer = document.getElementById('modal-cert-issuer');
  const modalDate = document.getElementById('modal-cert-date');
  const modalId = document.getElementById('modal-cert-id');
  
  // Certificate data
  const certData = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "June 2022",
      image: "https://via.placeholder.com/800x600",
      credential: "CERT-12345"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "March 2022",
      image: "https://via.placeholder.com/800x600",
      credential: "CERT-67890"
    },
    {
      id: 3,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "January 2022",
      image: "https://via.placeholder.com/800x600",
      credential: "CERT-24680"
    },
    {
      id: 4,
      title: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "November 2021",
      image: "https://via.placeholder.com/800x600",
      credential: "CERT-13579"
    }
  ];
  
  certCards.forEach(card => {
    card.addEventListener('click', function() {
      const certId = parseInt(this.getAttribute('data-id'));
      const cert = certData.find(c => c.id === certId);
      
      if (cert) {
        modalImg.src = cert.image;
        modalTitle.textContent = cert.title;
        modalIssuer.textContent = cert.issuer;
        modalDate.textContent = cert.date;
        modalId.textContent = cert.credential;
        
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      }
    });
  });
  
  closeModal.addEventListener('click', function() {
    certModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  });
  
  // Close modal when clicking outside of modal content
  certModal.addEventListener('click', function(e) {
    if (e.target === certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message (in a real application, you'd do this after successful submission)
    alert('Message sent successfully!');
    
    // Reset form
    contactForm.reset();
  });
});