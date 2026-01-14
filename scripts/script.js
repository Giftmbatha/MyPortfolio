/**
 * Dashboard Portfolio - Main JavaScript
 * Enhances the dashboard experience with interactivity
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initSectionSwitching();
    initMobileMenu();
    initHoverEffects();
    initAccessibilityFeatures();
    initReducedMotionSupport();
    initPrintStyles();
    
    // Set initial active section
    setActiveSection('profile');
    
    console.log('Dashboard Portfolio initialized successfully');
});

/**
 * Navigation System
 */
function initNavigation() {
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    const mainContent = document.querySelector('.main-content');
    
    // Desktop hover behavior
    let hoverTimeout;
    
    sidebar.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
        this.classList.add('expanded');
    });
    
    sidebar.addEventListener('mouseleave', function() {
        hoverTimeout = setTimeout(() => {
            this.classList.remove('expanded');
        }, 300); // Small delay to prevent flickering
    });
    
    // Keyboard navigation
    navItems.forEach((item, index) => {
        item.addEventListener('keydown', function(e) {
            // Arrow key navigation
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = (index + 1) % navItems.length;
                navItems[nextIndex].focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = (index - 1 + navItems.length) % navItems.length;
                navItems[prevIndex].focus();
            }
            
            // Enter or Space to activate
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Click handler
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            setActiveSection(section);
            
            // Update ARIA attributes
            navItems.forEach(nav => {
                nav.setAttribute('aria-selected', 'false');
                nav.classList.remove('active');
            });
            this.setAttribute('aria-selected', 'true');
            this.classList.add('active');
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                const navigation = document.querySelector('.navigation');
                navigation.classList.remove('show');
                sidebar.classList.remove('expanded');
            }
        });
    });
    
    // Focus management
    sidebar.addEventListener('focusin', function() {
        this.classList.add('expanded');
    });
    
    sidebar.addEventListener('focusout', function(e) {
        // Only collapse if focus leaves the sidebar entirely
        if (!this.contains(e.relatedTarget)) {
            this.classList.remove('expanded');
        }
    });
}

/**
 * Section Switching System
 */
function initSectionSwitching() {
    // Handle hash changes in URL
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            setActiveSection(hash);
        }
    });
    
    // Initial hash handling
    if (window.location.hash) {
        const initialSection = window.location.hash.substring(1);
        setActiveSection(initialSection);
    }
}

function setActiveSection(sectionId) {
    const sections = document.querySelectorAll('.dashboard-section');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
        section.setAttribute('hidden', '');
    });
    
    // Show selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.removeAttribute('hidden');
        
        // Update URL hash without scrolling
        history.replaceState(null, null, `#${sectionId}`);
        
        // Update navigation
        navItems.forEach(item => {
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
                item.setAttribute('aria-selected', 'true');
            } else {
                item.classList.remove('active');
                item.setAttribute('aria-selected', 'false');
            }
        });
        
        // Focus management for screen readers
        setTimeout(() => {
            activeSection.setAttribute('tabindex', '-1');
            activeSection.focus();
            activeSection.removeAttribute('tabindex');
        }, 100);
    } else {
        // Default to profile if section doesn't exist
        setActiveSection('profile');
    }
}

/**
 * Mobile Menu System
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navigation = document.querySelector('.navigation');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = navigation.classList.contains('show');
            
            if (isExpanded) {
                navigation.classList.remove('show');
                sidebar.classList.remove('expanded');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            } else {
                navigation.classList.add('show');
                sidebar.classList.add('expanded');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navigation.classList.remove('show');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            navigation.classList.remove('show');
            sidebar.classList.remove('expanded');
            if (mobileMenuToggle) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

/**
 * Hover Effects Enhancement
 */
function initHoverEffects() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.study-card, .certification-card, .profile-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Skill tags hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            const allTags = this.parentElement.querySelectorAll('.skill-tag');
            allTags.forEach(t => {
                if (t !== this) {
                    t.style.opacity = '0.6';
                }
            });
        });
        
        tag.addEventListener('mouseleave', function() {
            const allTags = this.parentElement.querySelectorAll('.skill-tag');
            allTags.forEach(t => {
                t.style.opacity = '1';
            });
        });
    });
}

/**
 * Accessibility Features
 */
function initAccessibilityFeatures() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Handle skip link
    skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById('main-content');
        if (target) {
            target.setAttribute('tabindex', '-1');
            target.focus();
            setTimeout(() => {
                target.removeAttribute('tabindex');
            }, 1000);
        }
    });
    
    // Focus trap for mobile menu
    const trapFocus = (element) => {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    // Tab
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    };
    
    const mobileNav = document.querySelector('.navigation');
    if (mobileNav) {
        trapFocus(mobileNav);
    }
    
    // Live region for section changes
    const liveRegion = document.createElement('div');
    liveRegion.className = 'visually-hidden';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(liveRegion);
    
    // Update live region when section changes
    const originalSetActiveSection = setActiveSection;
    setActiveSection = function(sectionId) {
        originalSetActiveSection(sectionId);
        const sectionName = document.querySelector(`[data-section="${sectionId}"] .nav-label`).textContent;
        liveRegion.textContent = `Now viewing ${sectionName} section`;
    };
}

/**
 * Reduced Motion Support
 */
function initReducedMotionSupport() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotion(e) {
        if (e.matches) {
            // Disable animations
            document.documentElement.style.setProperty('--transition-base', '0ms');
            document.documentElement.style.setProperty('--transition-fast', '0ms');
            document.documentElement.style.setProperty('--transition-slow', '0ms');
            
            // Remove hover effects that might cause issues
            const hoverElements = document.querySelectorAll('*');
            hoverElements.forEach(el => {
                el.style.transition = 'none';
            });
        }
    }
    
    // Initial check
    handleReducedMotion(mediaQuery);
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleReducedMotion);
}

/**
 * Print Styles Enhancement
 */
function initPrintStyles() {
    // Add print button
    const printButton = document.createElement('button');
    printButton.className = 'print-button visually-hidden';
    printButton.innerHTML = '<i class="fas fa-print"></i> Print';
    printButton.addEventListener('click', () => window.print());
    
    // Show print button only when printing is supported
    if (typeof window.print === 'function') {
        printButton.classList.remove('visually-hidden');
        document.querySelector('.dashboard-footer').appendChild(printButton);
    }
    
    // Optimize for printing
    window.addEventListener('beforeprint', () => {
        // Expand all sections for printing
        const sections = document.querySelectorAll('.dashboard-section');
        sections.forEach(section => {
            section.classList.add('active');
            section.removeAttribute('hidden');
        });
        
        // Show navigation labels
        document.querySelectorAll('.nav-label').forEach(label => {
            label.style.opacity = '1';
        });
    });
    
    window.addEventListener('afterprint', () => {
        // Restore active section
        const activeSection = window.location.hash.substring(1) || 'profile';
        setActiveSection(activeSection);
    });
}

/**
 * Performance Optimizations
 */
function initPerformance() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle any resize-dependent logic here
        }, 250);
    });
}

/**
 * Error Handling
 */
function initErrorHandling() {
    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Dashboard error:', e.error);
        // You could send this to an error tracking service
    });
    
    // Promise rejection handler
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });
}

// Initialize additional features
initPerformance();
initErrorHandling();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setActiveSection,
        initNavigation,
        initMobileMenu
    };
}