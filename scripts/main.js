// Main JavaScript functionality for Gift Mbatha Portfolio

// Theme Toggle Functionality
;(() => {
  const themeToggle = document.getElementById("theme-toggle")
  const htmlElement = document.documentElement

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light"

  if (currentTheme === "dark") {
    htmlElement.classList.add("dark")
  }

  themeToggle.addEventListener("click", function () {
    htmlElement.classList.toggle("dark")

    // Save theme preference
    const theme = htmlElement.classList.contains("dark") ? "dark" : "light"
    localStorage.setItem("theme", theme)

    // Add visual feedback
    this.style.transform = "scale(0.95)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
    }, 150)
  })
})()

// Mobile Menu Toggle
;(() => {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden")

    // Update aria-expanded for accessibility
    const isExpanded = !mobileMenu.classList.contains("hidden")
    this.setAttribute("aria-expanded", isExpanded)

    // Animate the menu icon
    this.style.transform = "rotate(90deg)"
    setTimeout(() => {
      this.style.transform = "rotate(0deg)"
    }, 300)
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.add("hidden")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
    }
  })
})()

// Smooth scrolling for navigation links
;(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerOffset = 80 // Account for fixed header
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})()

// Active navigation highlighting
;(() => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll('nav a[href^="#"]')

  function highlightNavigation() {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const sectionHeight = section.clientHeight

      if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("text-primary")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-primary")
      }
    })
  }

  window.addEventListener("scroll", highlightNavigation)
  highlightNavigation() // Initial call
})()

// Initialize Lucide icons when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const lucide = window.lucide // Declare the lucide variable
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }
})

// Contact form enhancement (if needed in future)
function enhanceContactForms() {
  const contactLinks = document.querySelectorAll('a[href^="mailto:"]')

  contactLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Add analytics tracking or other enhancements here
      console.log("Contact initiated via:", this.href)
    })
  })
}

// Initialize contact form enhancements
document.addEventListener("DOMContentLoaded", enhanceContactForms)

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Close mobile menu with Escape key
  if (e.key === "Escape") {
    const mobileMenu = document.getElementById("mobile-menu")
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle")

    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
      mobileMenuToggle.focus()
    }
  }
})

// Performance optimization: Lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages)
