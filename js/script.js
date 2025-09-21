// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });

    // Appointment Form - Doctor Selection based on Department
    const departmentSelect = document.getElementById('department');
    const doctorSelect = document.getElementById('doctor');

    if (departmentSelect && doctorSelect) {
        // Doctor data by department
        const doctors = {
            cardiology: [
                { id: 'c1', name: 'Dr. John Smith' },
                { id: 'c2', name: 'Dr. Emily Johnson' },
                { id: 'c3', name: 'Dr. Michael Brown' }
            ],
            neurology: [
                { id: 'n1', name: 'Dr. Sarah Wilson' },
                { id: 'n2', name: 'Dr. Robert Davis' },
                { id: 'n3', name: 'Dr. Jennifer Lee' }
            ],
            dental: [
                { id: 'd1', name: 'Dr. David Miller' },
                { id: 'd2', name: 'Dr. Lisa Anderson' }
            ],
            primary: [
                { id: 'p1', name: 'Dr. James Taylor' },
                { id: 'p2', name: 'Dr. Patricia Martinez' },
                { id: 'p3', name: 'Dr. Thomas White' }
            ],
            orthopedics: [
                { id: 'o1', name: 'Dr. Richard Harris' },
                { id: 'o2', name: 'Dr. Karen Lewis' }
            ],
            pediatrics: [
                { id: 'pd1', name: 'Dr. Susan Clark' },
                { id: 'pd2', name: 'Dr. Joseph Walker' },
                { id: 'pd3', name: 'Dr. Nancy Young' }
            ]
        };

        // Update doctors dropdown based on department selection
        departmentSelect.addEventListener('change', function() {
            const selectedDepartment = this.value;
            
            // Clear current options
            doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
            
            // If a department is selected, populate doctors
            if (selectedDepartment && doctors[selectedDepartment]) {
                doctors[selectedDepartment].forEach(doctor => {
                    const option = document.createElement('option');
                    option.value = doctor.id;
                    option.textContent = doctor.name;
                    doctorSelect.appendChild(option);
                });
            }
        });
    }

    // Form Submission
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // In a real application, you would send this data to a server
            console.log('Appointment Form Data:', formDataObj);
            
            // Show success message
            alert('Thank you! Your appointment has been scheduled. We will contact you shortly to confirm.');
            
            // Reset form
            this.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // Simple testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        let currentIndex = 0;
        
        // Auto-scroll testimonials every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonialSlider.scrollTo({
                left: testimonials[currentIndex].offsetLeft - testimonialSlider.offsetLeft,
                behavior: 'smooth'
            });
        }, 5000);
    }
});