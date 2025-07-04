// Animation functionality for Gift Mbatha Portfolio

// Intersection Observer for section animations
;(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-enter-active")
          entry.target.classList.remove("section-enter")

          // Add staggered animation for child elements
          const animatedElements = entry.target.querySelectorAll(".animate-on-scroll")
          animatedElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add("animate-fade-in")
            }, index * 100)
          })
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    if (!section.classList.contains("section-enter-active")) {
      section.classList.add("section-enter")
    }
    observer.observe(section)
  })
})()

// Parallax effect for background elements
function initParallax() {
  const parallaxElements = document.querySelectorAll(".animate-float, .animate-bounce-subtle")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5

    parallaxElements.forEach((element) => {
      element.style.transform = `translateY(${rate}px)`
    })
  })
}

// Typing animation for hero text
function initTypingAnimation() {
  const typingElement = document.querySelector(".typing-text")
  if (!typingElement) return

  const text = typingElement.textContent
  typingElement.textContent = ""

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  // Start typing animation after a delay
  setTimeout(typeWriter, 1000)
}

// Smooth reveal animation for cards
function initCardAnimations() {
  const cards = document.querySelectorAll(".bg-white, .bg-background")

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "0"
          entry.target.style.transform = "translateY(30px)"

          setTimeout(() => {
            entry.target.style.transition = "all 0.6s ease-out"
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, 100)

          cardObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
    },
  )

  cards.forEach((card) => cardObserver.observe(card))
}

// Counter animation for statistics (if added)
function animateCounters() {
  const counters = document.querySelectorAll(".counter")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  })
}

// Progress bar animation for skills
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar")

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector(".progress")
        const percentage = progressBar.getAttribute("data-percentage")

        setTimeout(() => {
          progressBar.style.width = percentage + "%"
        }, 200)

        skillObserver.unobserve(entry.target)
      }
    })
  })

  skillBars.forEach((bar) => skillObserver.observe(bar))
}

// Hover effects for interactive elements
function initHoverEffects() {
  const interactiveElements = document.querySelectorAll(".group, .hover\\:scale-105, .hover\\:scale-110")

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transition = "transform 0.3s ease"
    })

    element.addEventListener("mouseleave", function () {
      this.style.transform = ""
    })
  })
}

// Scroll-triggered animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[class*="animate-"]')

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  })

  animatedElements.forEach((element) => {
    element.style.animationPlayState = "paused"
    scrollObserver.observe(element)
  })
}

// Initialize all animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (!prefersReducedMotion) {
    initParallax()
    initTypingAnimation()
    initCardAnimations()
    initSkillBars()
    initScrollAnimations()
  }

  // Always initialize hover effects (they're subtle)
  initHoverEffects()
})

// Smooth scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top button (optional)
function addScrollToTopButton() {
  const scrollButton = document.createElement("button")
  scrollButton.innerHTML = "↑"
  scrollButton.className =
    "fixed bottom-8 right-8 w-12 h-12 bg-primary text-secondary rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 opacity-0 pointer-events-none z-50"
  scrollButton.setAttribute("aria-label", "Scroll to top")

  document.body.appendChild(scrollButton)

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollButton.style.opacity = "1"
      scrollButton.style.pointerEvents = "auto"
    } else {
      scrollButton.style.opacity = "0"
      scrollButton.style.pointerEvents = "none"
    }
  })

  scrollButton.addEventListener("click", scrollToTop)
}

// Initialize scroll to top button
document.addEventListener("DOMContentLoaded", addScrollToTopButton)
