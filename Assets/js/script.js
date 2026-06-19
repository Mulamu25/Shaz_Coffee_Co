// ============================================
// SHAZ COFFEE CO. - Complete JavaScript
// Part 3: Hamburger Menu, Modal, Lightbox, Accordion, Search, Form Validation
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. ANIMATED HAMBURGER MENU ICON
    // ========================================
    
    // Get elements
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.getElementById('navbar');
    
    // Check if both exist
    if (menuIcon && navbar) {
        console.log('Hamburger menu found!');
        
        // Toggle menu on click
        menuIcon.addEventListener('click', function() {
            console.log('Menu icon clicked!');
            menuIcon.classList.toggle('open');
            navbar.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navbar.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when a link is clicked
        const links = navbar.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                menuIcon.classList.remove('open');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            const isClickOnMenuIcon = menuIcon.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnMenuIcon && navbar.classList.contains('active')) {
                menuIcon.classList.remove('open');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
    } else {
        console.log('Hamburger menu not found!');
        console.log('menuIcon:', menuIcon);
        console.log('navbar:', navbar);
    }
    
    // ========================================
    // 2. WELCOME MODAL POPUP (Homepage)
    // ========================================
    
    // Only show if modal hasn't been shown in this session
    if (!sessionStorage.getItem('modalShown')) {
        setTimeout(function() {
            const modal = document.createElement('div');
            modal.className = 'welcome-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <h2>Welcome to SHAZ COFFEE CO.!</h2>
                    <p>Enjoy 10% off your first order when you sign up for our newsletter!</p>
                    <input type="email" id="modalEmail" placeholder="Enter your email address">
                    <button id="modalSubscribeBtn" class="btn">Subscribe Now</button>
                    <p><small>No thanks, continue to site</small></p>
                </div>
            `;
            document.body.appendChild(modal);
            
            // Close modal on X click
            const closeBtn = document.querySelector('.modal-close');
            if (closeBtn) {
                closeBtn.onclick = function() {
                    modal.remove();
                    sessionStorage.setItem('modalShown', 'true');
                };
            }
            
            // Close modal on outside click
            modal.onclick = function(e) {
                if (e.target === modal) {
                    modal.remove();
                    sessionStorage.setItem('modalShown', 'true');
                }
            };
            
            // Subscribe button
            const subscribeBtn = document.getElementById('modalSubscribeBtn');
            if (subscribeBtn) {
                subscribeBtn.onclick = function() {
                    const email = document.getElementById('modalEmail').value;
                    if (email && email.includes('@') && email.includes('.')) {
                        alert('Thanks for subscribing! Check your email for your 10% off code.');
                        modal.remove();
                        sessionStorage.setItem('modalShown', 'true');
                    } else {
                        alert('Please enter a valid email address.');
                    }
                };
            }
            
            // No thanks link
            const noThanks = modal.querySelector('small');
            if (noThanks) {
                noThanks.onclick = function() {
                    modal.remove();
                    sessionStorage.setItem('modalShown', 'true');
                };
            }
        }, 2000);
    }
    
    // ========================================
    // 3. BACK TO TOP BUTTON
    // ========================================
    
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.title = 'Back to Top';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // ========================================
    // 4. IMAGE LIGHTBOX GALLERY (Menu Page)
    // ========================================
    
    const menuImages = document.querySelectorAll('.menu-item img, section table td img');
    
    menuImages.forEach(function(img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                    <p>${this.alt}</p>
                </div>
            `;
            document.body.appendChild(lightbox);
            
            const closeBtn = document.querySelector('.lightbox-close');
            if (closeBtn) {
                closeBtn.onclick = function() {
                    lightbox.remove();
                };
            }
            
            lightbox.onclick = function(e) {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            };
        });
    });
    
    // ========================================
    // 5. ACCORDION FAQ (About Page)
    // ========================================
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            
            // Close other accordion items
            accordionHeaders.forEach(function(otherHeader) {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
    
    // ========================================
    // 6. MENU SEARCH & FILTER (Menu Page)
    // ========================================
    
    const searchInput = document.getElementById('menuSearch');
    const filterSelect = document.getElementById('categoryFilter');
    
    function filterMenu() {
        const searchTerm = searchInput?.value.toLowerCase() || '';
        const filterType = filterSelect?.value || 'all';
        
        const menuItems = document.querySelectorAll('section table td, .menu-item');
        
        menuItems.forEach(function(item) {
            const title = item.querySelector('h3')?.innerText.toLowerCase() || '';
            const parentSection = item.closest('section');
            const sectionTitle = parentSection?.querySelector('h2')?.innerText.toLowerCase() || '';
            
            const matchesSearch = title.includes(searchTerm) || searchTerm === '';
            
            let matchesFilter = true;
            if (filterType !== 'all') {
                if (filterType === 'coffee' && !sectionTitle.includes('coffee')) matchesFilter = false;
                if (filterType === 'cold' && !sectionTitle.includes('cold')) matchesFilter = false;
                if (filterType === 'snack' && !sectionTitle.includes('snack')) matchesFilter = false;
            }
            
            if (matchesSearch && matchesFilter) {
                item.style.display = '';
                const parentRow = item.closest('tr');
                if (parentRow) parentRow.style.display = '';
            } else {
                item.style.display = 'none';
                const parentRow = item.closest('tr');
                if (parentRow && parentRow.querySelectorAll('td:not([style*="display: none"])').length === 0) {
                    parentRow.style.display = 'none';
                }
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keyup', filterMenu);
    }
    if (filterSelect) {
        filterSelect.addEventListener('change', filterMenu);
    }
    
    // ========================================
    // 7. ENQUIRY FORM VALIDATION
    // ========================================
    
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        if (input) {
            const existingError = input.parentNode.querySelector('.error-message');
            if (existingError) existingError.remove();
            
            input.classList.add('error');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerText = message;
            input.parentNode.appendChild(errorDiv);
        }
    }
    
    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(function(error) {
            error.remove();
        });
        document.querySelectorAll('.error').forEach(function(input) {
            input.classList.remove('error');
        });
    }
    
    function validateEnquiryForm() {
        clearErrors();
        let isValid = true;
        
        const name = document.getElementById('name')?.value.trim();
        if (!name || name.length < 2) {
            showError('name', 'Please enter your full name (minimum 2 characters)');
            isValid = false;
        }
        
        const email = document.getElementById('email')?.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        const enquiryType = document.getElementById('enquiryType')?.value;
        if (!enquiryType || enquiryType === '') {
            showError('enquiryType', 'Please select an enquiry type');
            isValid = false;
        }
        
        const message = document.getElementById('message')?.value.trim();
        if (!message || message.length < 10) {
            showError('message', 'Please enter a message (minimum 10 characters)');
            isValid = false;
        }
        
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            if (isValid) {
                formMessage.innerHTML = '<div class="success-message">Thank you! Your enquiry has been sent. We will respond within 24-48 hours.</div>';
                document.getElementById('enquiryForm')?.reset();
                setTimeout(function() {
                    formMessage.innerHTML = '';
                }, 5000);
            } else {
                formMessage.innerHTML = '<div class="error-messages">Please fix the errors above and try again.</div>';
            }
        }
        
        return isValid;
    }
    
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateEnquiryForm();
        });
    }
    
    // Clear errors on input
    document.querySelectorAll('#enquiryForm input, #enquiryForm select, #enquiryForm textarea').forEach(function(input) {
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const errorMsg = this.parentNode.querySelector('.error-message');
            if (errorMsg) errorMsg.remove();
        });
    });
    
    // ========================================
    // 8. CONTACT FORM VALIDATION
    // ========================================
    
    function validateContactForm() {
        clearErrors();
        let isValid = true;
        
        const name = document.getElementById('contactName')?.value.trim();
        if (!name || name.length < 2) {
            showError('contactName', 'Please enter your full name');
            isValid = false;
        }
        
        const email = document.getElementById('contactEmail')?.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showError('contactEmail', 'Please enter a valid email address');
            isValid = false;
        }
        
        const message = document.getElementById('contactMessage')?.value.trim();
        if (!message || message.length < 10) {
            showError('contactMessage', 'Please enter a message (minimum 10 characters)');
            isValid = false;
        }
        
        const contactFormMessage = document.getElementById('contactFormMessage');
        if (contactFormMessage) {
            if (isValid) {
                contactFormMessage.innerHTML = '<div class="success-message">Thank you! Your message has been sent. We will get back to you soon.</div>';
                document.getElementById('contactForm')?.reset();
                setTimeout(function() {
                    contactFormMessage.innerHTML = '';
                }, 5000);
            } else {
                contactFormMessage.innerHTML = '<div class="error-messages">Please fix the errors above.</div>';
            }
        }
        
        return isValid;
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateContactForm();
        });
    }
    
    // ========================================
    // 9. CONSOLE MESSAGE
    // ========================================
    
    console.log('SHAZ COFFEE CO. JavaScript loaded successfully!');
});