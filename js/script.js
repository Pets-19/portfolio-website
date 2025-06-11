// Update current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Navbar scroll effect
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
	// Add background to navbar on scroll
	if (window.scrollY > 50) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}

	// Highlight active section in navbar
	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (window.scrollY >= sectionTop - 200) {
			current = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === `#${current}`) {
			link.classList.add("active");
		}
	});
});

// Mobile menu toggle with improved animation
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
	nav.classList.toggle("active");
	burger.classList.toggle("active");

	// Enhanced animation for links
	navLinksItems.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			// Staggered animation for each link
			link.style.animation = `fadeIn 0.5s ease forwards ${
				index / 7 + 0.3
			}s`;
		}
	});
});

// Close mobile menu when clicking on a link with improved UX
navLinksItems.forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.remove("active");
		burger.classList.remove("active");

		navLinksItems.forEach((link) => {
			link.style.animation = "";
		});
	});
});

// Improved reveal elements on scroll with options for different animations
function reveal() {
	const reveals = document.querySelectorAll(".reveal");

	reveals.forEach((element) => {
		const windowHeight = window.innerHeight;
		const elementTop = element.getBoundingClientRect().top;
		const elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			element.classList.add("active");

			// Add extra animation class if specified
			if (element.dataset.animation) {
				element.classList.add(element.dataset.animation);
			}
		}
	});
}

window.addEventListener("scroll", reveal);

// Trigger initial reveal check
reveal();

// Enhanced skill bars animation when visible with smoother transitions
const skillBars = document.querySelectorAll(".progress-bar");

const animateSkillBars = () => {
	skillBars.forEach((bar) => {
		const windowHeight = window.innerHeight;
		const elementTop = bar.getBoundingClientRect().top;
		const elementVisible = 100;

		if (elementTop < windowHeight - elementVisible) {
			const width = bar.getAttribute("data-width");
			bar.style.width = width;
			bar.style.opacity = 1;
		}
	});
};

window.addEventListener("scroll", animateSkillBars);
animateSkillBars(); // Initial check for visible skill bars

// Contact form submission with improved user feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent default for demo purposes

	// Form submission handling is done by FormSubmit
	// This is just for UX feedback
	const button = this.querySelector('button[type="submit"]');
	const originalText = button.textContent;

	// Show sending state
	button.disabled = true;
	button.textContent = "Sending...";

	// Simulate form submission
	setTimeout(() => {
		// Show success message
		const formContainer = this.closest(".contact-form");
		this.style.display = "none";

		const successMessage = document.createElement("div");
		successMessage.className = "success-message";
		successMessage.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <h3>Message Sent Successfully!</h3>
      <p>Thanks for reaching out. I'll get back to you soon.</p>
      <button class="btn btn-outline send-another">Send Another Message</button>
    `;
		formContainer.appendChild(successMessage);

		// Add event listener to "Send Another Message" button
		formContainer
			.querySelector(".send-another")
			.addEventListener("click", () => {
				successMessage.remove();
				this.reset();
				this.style.display = "block";
				button.disabled = false;
				button.textContent = originalText;
			});

		// In a real implementation, you would submit the form here
		// this.submit();
	}, 2000);
});

// Add parallax effect to hero section
const heroSection = document.querySelector(".hero");
window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;
	if (heroSection) {
		heroSection.style.backgroundPosition = `50% ${scrollPosition * 0.5}px`;
	}
});

// Typing effect for hero subtitle
const subtitle = document.querySelector(".subtitle");
if (subtitle) {
	const text = subtitle.textContent || "";
	subtitle.textContent = "";

	let i = 0;
	const typeWriter = () => {
		if (i < text.length) {
			subtitle.textContent += text.charAt(i);
			i++;
			setTimeout(typeWriter, 50);
		}
	};

	setTimeout(typeWriter, 1000);
}

// Image hover effects
const projectImages = document.querySelectorAll(".project-image");
projectImages.forEach((image) => {
	image.addEventListener("mouseenter", () => {
		image.classList.add("hovered");
	});

	image.addEventListener("mouseleave", () => {
		image.classList.remove("hovered");
	});
});
