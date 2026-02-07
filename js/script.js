// ==========================================
// DATA MANAGEMENT
// ==========================================

// Faculty Data
const facultyData = [
    {
        id: 1,
        name: "Dr. Maria Santos",
        position: "Dean",
        department: "Computer Science",
        specialization: "Artificial Intelligence, Machine Learning",
        email: "m.santos@university.edu.ph",
        rating: 4.8,
        publications: 45,
        yearsOfExperience: 15
    },
    {
        id: 2,
        name: "Dr. Robert Chen",
        position: "Professor",
        department: "Computer Science",
        specialization: "Algorithms, Data Structures",
        email: "r.chen@university.edu.ph",
        rating: 4.7,
        publications: 38,
        yearsOfExperience: 12
    },
    {
        id: 3,
        name: "Dr. Jennifer Martinez",
        position: "Associate Professor",
        department: "Information Technology",
        specialization: "Network Security, Cybersecurity",
        email: "j.martinez@university.edu.ph",
        rating: 4.9,
        publications: 32,
        yearsOfExperience: 10
    },
    {
        id: 4,
        name: "Dr. Michael Reyes",
        position: "Professor",
        department: "Computer Science",
        specialization: "Software Engineering, Cloud Computing",
        email: "m.reyes@university.edu.ph",
        rating: 4.6,
        publications: 41,
        yearsOfExperience: 14
    },
    {
        id: 5,
        name: "Dr. Sarah Johnson",
        position: "Associate Professor",
        department: "Information Systems",
        specialization: "Business Analytics, Data Science",
        email: "s.johnson@university.edu.ph",
        rating: 4.8,
        publications: 29,
        yearsOfExperience: 9
    },
    {
        id: 6,
        name: "Prof. David Garcia",
        position: "Assistant Professor",
        department: "Information Technology",
        specialization: "Web Development, Mobile Applications",
        email: "d.garcia@university.edu.ph",
        rating: 4.5,
        publications: 18,
        yearsOfExperience: 6
    },
    {
        id: 7,
        name: "Dr. Lisa Wang",
        position: "Professor",
        department: "Computer Science",
        specialization: "Computer Vision, Image Processing",
        email: "l.wang@university.edu.ph",
        rating: 4.9,
        publications: 52,
        yearsOfExperience: 16
    },
    {
        id: 8,
        name: "Dr. James Rodriguez",
        position: "Associate Professor",
        department: "Information Systems",
        specialization: "Database Systems, Big Data",
        email: "j.rodriguez@university.edu.ph",
        rating: 4.7,
        publications: 35,
        yearsOfExperience: 11
    },
    {
        id: 9,
        name: "Prof. Angela Cruz",
        position: "Assistant Professor",
        department: "Information Technology",
        specialization: "IT Project Management, DevOps",
        email: "a.cruz@university.edu.ph",
        rating: 4.6,
        publications: 15,
        yearsOfExperience: 5
    },
    {
        id: 10,
        name: "Dr. Thomas Lee",
        position: "Professor",
        department: "Computer Science",
        specialization: "Natural Language Processing, AI Ethics",
        email: "t.lee@university.edu.ph",
        rating: 4.8,
        publications: 48,
        yearsOfExperience: 13
    },
    {
        id: 11,
        name: "Dr. Patricia Gonzales",
        position: "Associate Professor",
        department: "Information Systems",
        specialization: "Enterprise Systems, Digital Transformation",
        email: "p.gonzales@university.edu.ph",
        rating: 4.7,
        publications: 27,
        yearsOfExperience: 8
    },
    {
        id: 12,
        name: "Prof. Kevin Tan",
        position: "Assistant Professor",
        department: "Computer Science",
        specialization: "Robotics, IoT",
        email: "k.tan@university.edu.ph",
        rating: 4.5,
        publications: 21,
        yearsOfExperience: 7
    }
];

// Announcements Data
const announcementsData = [
    {
        id: 1,
        title: "Annual Tech Summit 2024",
        date: "2024-02-15",
        type: "Event",
        description: "Join us for our flagship technology conference featuring industry leaders, workshops, and networking opportunities. Registration opens on January 20.",
        priority: "high"
    },
    {
        id: 2,
        title: "Scholarship Application Deadline Extended",
        date: "2024-02-10",
        type: "Important",
        description: "The deadline for merit-based scholarship applications has been extended to February 28, 2024. Don't miss this opportunity!",
        priority: "high"
    },
    {
        id: 3,
        title: "New AI and Machine Learning Lab Opening",
        date: "2024-02-05",
        type: "News",
        description: "We're excited to announce the opening of our state-of-the-art AI and Machine Learning laboratory equipped with high-performance computing resources.",
        priority: "medium"
    },
    {
        id: 4,
        title: "Guest Lecture: Future of Quantum Computing",
        date: "2024-02-01",
        type: "Event",
        description: "Dr. Alan Thompson from MIT will deliver a guest lecture on quantum computing developments. Open to all students and faculty. Venue: Auditorium A, 2:00 PM.",
        priority: "medium"
    },
    {
        id: 5,
        title: "Midterm Examination Schedule Released",
        date: "2024-01-28",
        type: "Academic",
        description: "The midterm examination schedule for the current semester is now available. Please check your student portal for detailed information.",
        priority: "high"
    },
    {
        id: 6,
        title: "Hackathon 2024: Innovation Challenge",
        date: "2024-01-25",
        type: "Event",
        description: "Participate in our 48-hour hackathon with exciting prizes! Theme: Sustainable Technology Solutions. Team registration deadline: February 5.",
        priority: "medium"
    },
    {
        id: 7,
        title: "Career Fair: Tech Industry Leaders",
        date: "2024-01-20",
        type: "Event",
        description: "Meet recruiters from top tech companies including Google, Microsoft, and Amazon. Bring your resume and dress professionally. February 20, 9:00 AM - 4:00 PM.",
        priority: "high"
    },
    {
        id: 8,
        title: "Research Publication Grant Available",
        date: "2024-01-15",
        type: "Important",
        description: "Faculty and graduate students can apply for research publication grants. Maximum funding: ₱50,000 per project. Application deadline: March 1, 2024.",
        priority: "medium"
    }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Date formatting utility
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Calculate days until event
function daysUntilEvent(dateString) {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Debounce function for search optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Local Storage Management
const StorageManager = {
    save: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            return false;
        }
    },
    load: (key) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading from localStorage:', e);
            return null;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    }
};

// ==========================================
// FACULTY DIRECTORY FUNCTIONALITY
// ==========================================

class FacultyManager {
    constructor() {
        this.allFaculty = [...facultyData];
        this.filteredFaculty = [...facultyData];
        this.currentSort = { field: 'name', direction: 'asc' };
        this.viewMode = 'grid'; // grid or list
        this.favorites = StorageManager.load('favoriteFaculty') || [];
    }

    // Render faculty cards
    render() {
        const facultyGrid = document.getElementById('facultyGrid');
        if (!facultyGrid) return;

        facultyGrid.innerHTML = '';
        facultyGrid.className = this.viewMode === 'grid' ? 'faculty-grid' : 'faculty-list';

        if (this.filteredFaculty.length === 0) {
            facultyGrid.innerHTML = '<p class="no-results">No faculty members found matching your criteria.</p>';
            return;
        }

        this.filteredFaculty.forEach(faculty => {
            const card = this.createFacultyCard(faculty);
            facultyGrid.appendChild(card);
        });

        this.updateResultsCount();
    }

    // Create individual faculty card
    createFacultyCard(faculty) {
        const card = document.createElement('div');
        card.className = 'faculty-card';
        card.setAttribute('data-id', faculty.id);
        
        const isFavorite = this.favorites.includes(faculty.id);
        const stars = this.generateStarRating(faculty.rating);

        card.innerHTML = `
            <div class="faculty-card-header">
                <h4>${faculty.name}</h4>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                        data-id="${faculty.id}" 
                        title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                    <span class="star-icon">${isFavorite ? '★' : '☆'}</span>
                </button>
            </div>
            <div class="position">${faculty.position}</div>
            <div class="department">${faculty.department}</div>
            <div class="rating">
                <span class="stars">${stars}</span>
                <span class="rating-value">${faculty.rating}</span>
            </div>
            <div class="faculty-stats">
                <span title="Publications"><strong>${faculty.publications}</strong> Publications</span>
                <span title="Years of Experience"><strong>${faculty.yearsOfExperience}</strong> Years</span>
            </div>
            <div class="specialization">
                <strong>Specialization:</strong> ${faculty.specialization}
            </div>
            <div class="email">${faculty.email}</div>
            <button class="view-profile-btn" data-id="${faculty.id}">View Full Profile</button>
        `;

        // Add event listener for favorite button
        const favoriteBtn = card.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(faculty.id);
        });

        // Add event listener for view profile button
        const viewProfileBtn = card.querySelector('.view-profile-btn');
        viewProfileBtn.addEventListener('click', () => {
            this.showFacultyModal(faculty);
        });

        return card;
    }

    // Generate star rating HTML
    generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }
        if (hasHalfStar) {
            stars += '⯨';
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '☆';
        }

        return stars;
    }

    // Toggle favorite status
    toggleFavorite(id) {
        const index = this.favorites.indexOf(id);
        if (index > -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(id);
        }
        StorageManager.save('favoriteFaculty', this.favorites);
        this.render();
    }

    // Filter faculty
    filter(searchTerm, department) {
        this.filteredFaculty = this.allFaculty.filter(faculty => {
            const matchesSearch = !searchTerm || 
                faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDepartment = !department || faculty.department === department;
            return matchesSearch && matchesDepartment;
        });

        this.applySort();
        this.render();
    }

    // Sort faculty
    sort(field) {
        if (this.currentSort.field === field) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.field = field;
            this.currentSort.direction = 'asc';
        }

        this.applySort();
        this.render();
    }

    applySort() {
        const { field, direction } = this.currentSort;
        const multiplier = direction === 'asc' ? 1 : -1;

        this.filteredFaculty.sort((a, b) => {
            if (typeof a[field] === 'string') {
                return multiplier * a[field].localeCompare(b[field]);
            }
            return multiplier * (a[field] - b[field]);
        });
    }

    // Update results count
    updateResultsCount() {
        const countElement = document.getElementById('resultsCount');
        if (countElement) {
            countElement.textContent = `Showing ${this.filteredFaculty.length} of ${this.allFaculty.length} faculty members`;
        }
    }

    // Show faculty modal
    showFacultyModal(faculty) {
        const modal = document.getElementById('facultyModal');
        if (!modal) return;

        const modalContent = document.getElementById('modalFacultyContent');
        const stars = this.generateStarRating(faculty.rating);

        modalContent.innerHTML = `
            <h2>${faculty.name}</h2>
            <div class="modal-info">
                <p><strong>Position:</strong> ${faculty.position}</p>
                <p><strong>Department:</strong> ${faculty.department}</p>
                <p><strong>Specialization:</strong> ${faculty.specialization}</p>
                <p><strong>Email:</strong> <a href="mailto:${faculty.email}">${faculty.email}</a></p>
                <div class="rating">
                    <strong>Rating:</strong> 
                    <span class="stars">${stars}</span>
                    <span class="rating-value">${faculty.rating}/5.0</span>
                </div>
                <p><strong>Publications:</strong> ${faculty.publications}</p>
                <p><strong>Years of Experience:</strong> ${faculty.yearsOfExperience} years</p>
            </div>
        `;

        modal.style.display = 'block';
    }

    // Change view mode
    setViewMode(mode) {
        this.viewMode = mode;
        this.render();
    }
}

// ==========================================
// ANNOUNCEMENTS FUNCTIONALITY
// ==========================================

class AnnouncementsManager {
    constructor() {
        this.allAnnouncements = [...announcementsData];
        this.filteredAnnouncements = [...announcementsData];
        this.currentFilter = 'all';
        this.readAnnouncements = StorageManager.load('readAnnouncements') || [];
    }

    render() {
        const board = document.getElementById('announcementsBoard');
        if (!board) return;

        board.innerHTML = '';

        // Sort by date (most recent first)
        const sorted = [...this.filteredAnnouncements].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );

        sorted.forEach(announcement => {
            const item = this.createAnnouncementItem(announcement);
            board.appendChild(item);
        });

        this.updateFilterButtons();
    }

    createAnnouncementItem(announcement) {
        const item = document.createElement('div');
        item.className = `announcement-item ${this.readAnnouncements.includes(announcement.id) ? 'read' : 'unread'}`;
        item.setAttribute('data-id', announcement.id);

        const daysUntil = daysUntilEvent(announcement.date);
        const countdownText = daysUntil > 0 
            ? `${daysUntil} day${daysUntil !== 1 ? 's' : ''} away`
            : daysUntil === 0 
                ? 'Today!'
                : `${Math.abs(daysUntil)} day${Math.abs(daysUntil) !== 1 ? 's' : ''} ago`;

        item.innerHTML = `
            <div class="announcement-header">
                <h4>${announcement.title}</h4>
                ${!this.readAnnouncements.includes(announcement.id) ? '<span class="new-badge">NEW</span>' : ''}
            </div>
            <div class="announcement-meta">
                <span class="date">${formatDate(announcement.date)}</span>
                <span class="countdown ${daysUntil < 0 ? 'past' : ''}">${countdownText}</span>
            </div>
            <p>${announcement.description}</p>
            <div class="announcement-footer">
                <span class="type type-${announcement.type.toLowerCase()}">${announcement.type}</span>
                <span class="priority priority-${announcement.priority}">${announcement.priority.toUpperCase()}</span>
            </div>
        `;

        item.addEventListener('click', () => {
            this.markAsRead(announcement.id);
        });

        return item;
    }

    markAsRead(id) {
        if (!this.readAnnouncements.includes(id)) {
            this.readAnnouncements.push(id);
            StorageManager.save('readAnnouncements', this.readAnnouncements);
            this.render();
            this.updateUnreadCount();
        }
    }

    filter(type) {
        this.currentFilter = type;
        if (type === 'all') {
            this.filteredAnnouncements = [...this.allAnnouncements];
        } else {
            this.filteredAnnouncements = this.allAnnouncements.filter(
                announcement => announcement.type.toLowerCase() === type.toLowerCase()
            );
        }
        this.render();
    }

    updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.announcement-filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === this.currentFilter);
        });
    }

    updateUnreadCount() {
        const unreadCount = this.allAnnouncements.filter(
            a => !this.readAnnouncements.includes(a.id)
        ).length;

        const badge = document.getElementById('unreadBadge');
        if (badge) {
            badge.textContent = unreadCount;
            badge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
        }
    }
}

// ==========================================
// CONTACT FORM FUNCTIONALITY
// ==========================================

class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (!this.form) return;

        this.fields = this.form.querySelectorAll('input, select, textarea');
        this.submissions = StorageManager.load('formSubmissions') || [];
        this.init();
    }

    init() {
        // Real-time validation
        this.fields.forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => {
                if (field.closest('.form-group').classList.contains('error')) {
                    this.validateField(field);
                }
                // Character counter for textarea
                if (field.tagName === 'TEXTAREA') {
                    this.updateCharacterCount(field);
                }
            });
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Initialize character counter
        const messageField = document.getElementById('message');
        if (messageField) {
            this.createCharacterCounter(messageField);
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validateField(field) {
        const formGroup = field.closest('.form-group');
        let isValid = true;
        let errorMessage = '';

        if (field.type === 'email') {
            isValid = this.validateEmail(field.value);
            errorMessage = 'Please enter a valid email address';
        } else if (field.tagName === 'SELECT') {
            isValid = field.value !== '';
            errorMessage = 'Please select an option';
        } else if (field.required) {
            isValid = field.value.trim() !== '';
            errorMessage = 'This field is required';
        }

        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }

        if (isValid) {
            formGroup.classList.remove('error');
            formGroup.classList.add('valid');
        } else {
            formGroup.classList.add('error');
            formGroup.classList.remove('valid');
        }

        return isValid;
    }

    createCharacterCounter(field) {
        const formGroup = field.closest('.form-group');
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.textContent = `0 characters`;
        formGroup.appendChild(counter);
    }

    updateCharacterCount(field) {
        const formGroup = field.closest('.form-group');
        const counter = formGroup.querySelector('.character-counter');
        if (counter) {
            const count = field.value.length;
            counter.textContent = `${count} character${count !== 1 ? 's' : ''}`;
        }
    }

    handleSubmit() {
        let isFormValid = true;
        this.fields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Collect form data
            const formData = {
                id: Date.now(),
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                inquiryType: document.getElementById('inquiryType').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };

            // Save to localStorage
            this.submissions.push(formData);
            StorageManager.save('formSubmissions', this.submissions);

            // Show success message with animation
            this.showSuccessMessage();

            // Reset form
            this.form.reset();

            // Remove validation states
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error', 'valid');
            });

            // Reset character counter
            const counter = document.querySelector('.character-counter');
            if (counter) {
                counter.textContent = '0 characters';
            }
        } else {
            // Scroll to first error
            const firstError = document.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    showSuccessMessage() {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.classList.add('fade-in');

        setTimeout(() => {
            successMessage.classList.add('fade-out');
            setTimeout(() => {
                successMessage.style.display = 'none';
                successMessage.classList.remove('fade-in', 'fade-out');
            }, 500);
        }, 5000);

        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ==========================================
// PROGRAM TABS FUNCTIONALITY
// ==========================================

class ProgramTabsManager {
    constructor() {
        this.tabButtons = document.querySelectorAll('.tab-button');
        this.tabContents = document.querySelectorAll('.tab-content');
        
        if (this.tabButtons.length === 0) return;

        this.init();
    }

    init() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                this.switchTab(targetTab);
                
                // Save current tab to localStorage
                StorageManager.save('currentProgramTab', targetTab);
            });
        });

        // Load last viewed tab
        const lastTab = StorageManager.load('currentProgramTab');
        if (lastTab) {
            this.switchTab(lastTab);
        }
    }

    switchTab(targetTab) {
        // Update active tab button
        this.tabButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === targetTab);
        });

        // Show target tab content with animation
        this.tabContents.forEach(content => {
            if (content.id === targetTab) {
                content.classList.add('active');
                content.style.animation = 'fadeIn 0.5s ease';
            } else {
                content.classList.remove('active');
            }
        });
    }
}

// ==========================================
// MODAL FUNCTIONALITY
// ==========================================

class ModalManager {
    constructor() {
        this.modal = document.getElementById('facultyModal');
        if (!this.modal) return;

        this.closeBtn = this.modal.querySelector('.close-modal');
        this.init();
    }

    init() {
        // Close button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        // Click outside to close
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.close();
            }
        });
    }

    close() {
        this.modal.style.display = 'none';
    }
}

// ==========================================
// THEME TOGGLE FUNCTIONALITY
// ==========================================

class ThemeManager {
    constructor() {
        this.currentTheme = StorageManager.load('theme') || 'light';
        this.init();
    }

    init() {
        // Apply saved theme
        document.body.setAttribute('data-theme', this.currentTheme);

        // Create theme toggle button if it doesn't exist
        const existingToggle = document.getElementById('themeToggle');
        if (!existingToggle) {
            this.createToggleButton();
        } else {
            this.updateToggleButton();
        }
    }

    createToggleButton() {
        const button = document.createElement('button');
        button.id = 'themeToggle';
        button.className = 'theme-toggle';
        button.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        button.title = 'Toggle theme';
        
        button.addEventListener('click', () => this.toggle());
        
        document.body.appendChild(button);
    }

    updateToggleButton() {
        const button = document.getElementById('themeToggle');
        if (button) {
            button.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    toggle() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        StorageManager.save('theme', this.currentTheme);
        this.updateToggleButton();
    }
}

// ==========================================
// STATISTICS DASHBOARD (for home page)
// ==========================================

class StatisticsManager {
    constructor() {
        this.statsContainer = document.getElementById('statsContainer');
        if (!this.statsContainer) return;

        this.calculateAndRender();
    }

    calculateAndRender() {
        const stats = {
            totalFaculty: facultyData.length,
            avgRating: (facultyData.reduce((sum, f) => sum + f.rating, 0) / facultyData.length).toFixed(1),
            totalPublications: facultyData.reduce((sum, f) => sum + f.publications, 0),
            upcomingEvents: announcementsData.filter(a => daysUntilEvent(a.date) > 0 && a.type === 'Event').length
        };

        this.statsContainer.innerHTML = `
            <div class="stat-card">
                <div class="stat-value">${stats.totalFaculty}</div>
                <div class="stat-label">Faculty Members</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.avgRating}</div>
                <div class="stat-label">Average Rating</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.totalPublications}</div>
                <div class="stat-label">Total Publications</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.upcomingEvents}</div>
                <div class="stat-label">Upcoming Events</div>
            </div>
        `;
    }
}

// ==========================================
// COLLAPSIBLE HEADER
// ==========================================

class HeaderManager {
    constructor() {
        this.header = document.querySelector('header');
        this.logoSection = document.querySelector('.logo-section');
        
        if (!this.header || !this.logoSection) return;
        
        this.isCollapsed = false;
        this.init();
    }

    init() {
        // Create toggle button
        this.createToggleButton();

        // Auto-collapse header on page load after a short delay
        setTimeout(() => {
            this.collapse();
        }, 1000); // Collapse after 1 second
    }

    createToggleButton() {
        // Create toggle button
        this.toggleBtn = document.createElement('button');
        this.toggleBtn.className = 'header-toggle-btn';
        this.toggleBtn.innerHTML = '▼';
        this.toggleBtn.title = 'Expand menu';
        this.toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
        
        this.toggleBtn.addEventListener('click', () => {
            if (this.isCollapsed) {
                this.expand();
            } else {
                this.collapse();
            }
        });
        
        document.body.appendChild(this.toggleBtn);
    }

    collapse() {
        this.header.classList.add('collapsed');
        this.isCollapsed = true;
        this.toggleBtn.innerHTML = '▼';
        this.toggleBtn.title = 'Expand menu';
    }

    expand() {
        this.header.classList.remove('collapsed');
        this.isCollapsed = false;
        this.toggleBtn.innerHTML = '▲';
        this.toggleBtn.title = 'Collapse menu';
    }
}

// ==========================================
// ADVANCED FEATURES
// ==========================================

// ==========================================
// FACULTY COMPARISON TOOL
// ==========================================

class FacultyComparison {
    constructor() {
        this.selectedFaculty = [];
        this.maxComparison = 3;
        this.createComparisonPanel();
    }

    createComparisonPanel() {
        const panel = document.createElement('div');
        panel.id = 'comparisonPanel';
        panel.className = 'comparison-panel';
        panel.innerHTML = `
            <div class="comparison-header">
                <h3>Faculty Comparison <span class="comparison-count">(0/${this.maxComparison})</span></h3>
                <button class="close-comparison">×</button>
            </div>
            <div class="comparison-body">
                <div id="comparisonItems"></div>
                <button class="btn-compare" disabled>Compare Selected</button>
            </div>
        `;
        document.body.appendChild(panel);

        panel.querySelector('.close-comparison').addEventListener('click', () => {
            panel.classList.remove('active');
        });

        panel.querySelector('.btn-compare').addEventListener('click', () => {
            this.showComparison();
        });
    }

    addToComparison(facultyId) {
        if (this.selectedFaculty.length >= this.maxComparison) {
            this.showNotification('Maximum 3 faculty members can be compared', 'warning');
            return;
        }

        if (this.selectedFaculty.includes(facultyId)) {
            this.removeFromComparison(facultyId);
            return;
        }

        this.selectedFaculty.push(facultyId);
        this.updateComparisonPanel();
        this.showNotification('Added to comparison', 'success');
    }

    removeFromComparison(facultyId) {
        this.selectedFaculty = this.selectedFaculty.filter(id => id !== facultyId);
        this.updateComparisonPanel();
    }

    updateComparisonPanel() {
        const panel = document.getElementById('comparisonPanel');
        const itemsContainer = document.getElementById('comparisonItems');
        const compareBtn = panel.querySelector('.btn-compare');
        const count = panel.querySelector('.comparison-count');

        count.textContent = `(${this.selectedFaculty.length}/${this.maxComparison})`;

        if (this.selectedFaculty.length > 0) {
            panel.classList.add('active');
            compareBtn.disabled = this.selectedFaculty.length < 2;
        } else {
            panel.classList.remove('active');
        }

        itemsContainer.innerHTML = this.selectedFaculty.map(id => {
            const faculty = facultyData.find(f => f.id === id);
            return `
                <div class="comparison-item">
                    <span>${faculty.name}</span>
                    <button class="remove-comparison" data-id="${id}">×</button>
                </div>
            `;
        }).join('');

        itemsContainer.querySelectorAll('.remove-comparison').forEach(btn => {
            btn.addEventListener('click', () => {
                this.removeFromComparison(parseInt(btn.dataset.id));
            });
        });
    }

    showComparison() {
        const modal = document.createElement('div');
        modal.className = 'modal comparison-modal';
        modal.style.display = 'block';

        const facultyList = this.selectedFaculty.map(id => 
            facultyData.find(f => f.id === id)
        );

        modal.innerHTML = `
            <div class="modal-content comparison-content">
                <button class="close-modal">×</button>
                <h2>Faculty Comparison</h2>
                <div class="comparison-grid">
                    <div class="comparison-row header">
                        <div class="comparison-cell">Metric</div>
                        ${facultyList.map(f => `<div class="comparison-cell">${f.name}</div>`).join('')}
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell">Position</div>
                        ${facultyList.map(f => `<div class="comparison-cell">${f.position}</div>`).join('')}
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell">Department</div>
                        ${facultyList.map(f => `<div class="comparison-cell">${f.department}</div>`).join('')}
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell">Rating</div>
                        ${facultyList.map(f => `<div class="comparison-cell">⭐ ${f.rating}</div>`).join('')}
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell">Publications</div>
                        ${facultyList.map(f => `<div class="comparison-cell">${f.publications}</div>`).join('')}
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell">Experience (Years)</div>
                        ${facultyList.map(f => `<div class="comparison-cell">${f.yearsOfExperience}</div>`).join('')}
                    </div>
                    <div class="comparison-row">
                        <div class="comparison-cell">Specialization</div>
                        ${facultyList.map(f => `<div class="comparison-cell">${f.specialization}</div>`).join('')}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
}

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================

class NotificationManager {
    constructor() {
        this.createContainer();
    }

    createContainer() {
        if (!document.getElementById('notificationContainer')) {
            const container = document.createElement('div');
            container.id = 'notificationContainer';
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
    }

    show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        notification.innerHTML = `
            <span class="notification-icon">${icons[type]}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">×</button>
        `;

        const container = document.getElementById('notificationContainer');
        container.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 10);

        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hide(notification);
        });

        if (duration > 0) {
            setTimeout(() => {
                this.hide(notification);
            }, duration);
        }
    }

    hide(notification) {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }
}

// Global notification instance
const notificationManager = new NotificationManager();

function showNotification(message, type = 'info', duration = 3000) {
    notificationManager.show(message, type, duration);
}

// ==========================================
// EXPORT FUNCTIONALITY
// ==========================================

class ExportManager {
    exportToCSV(data, filename = 'faculty_data.csv') {
        const headers = Object.keys(data[0]).join(',');
        const rows = data.map(obj => Object.values(obj).join(',')).join('\n');
        const csv = `${headers}\n${rows}`;

        const blob = new Blob([csv], { type: 'text/csv' });
        this.downloadFile(blob, filename);
        showNotification('CSV exported successfully!', 'success');
    }

    exportToJSON(data, filename = 'faculty_data.json') {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        this.downloadFile(blob, filename);
        showNotification('JSON exported successfully!', 'success');
    }

    exportToPDF() {
        window.print();
        showNotification('Opening print dialog...', 'info');
    }

    downloadFile(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// ==========================================
// QUICK ACTIONS MENU
// ==========================================

class QuickActionsMenu {
    constructor() {
        this.createMenu();
    }

    createMenu() {
        const menu = document.createElement('div');
        menu.className = 'quick-actions-menu';
        menu.innerHTML = `
            <button class="quick-action-toggle" title="Quick Actions (Q)">⚡</button>
            <div class="quick-actions-panel">
                <button class="quick-action" data-action="export-csv">
                    <span class="icon">📄</span>
                    <span>Export CSV</span>
                </button>
                <button class="quick-action" data-action="export-json">
                    <span class="icon">📋</span>
                    <span>Export JSON</span>
                </button>
                <button class="quick-action" data-action="print">
                    <span class="icon">🖨️</span>
                    <span>Print</span>
                </button>
                <button class="quick-action" data-action="stats">
                    <span class="icon">📊</span>
                    <span>Statistics</span>
                </button>
            </div>
        `;

        document.body.appendChild(menu);

        const toggle = menu.querySelector('.quick-action-toggle');
        const panel = menu.querySelector('.quick-actions-panel');

        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target)) {
                menu.classList.remove('active');
            }
        });

        // Handle actions
        const exportManager = new ExportManager();

        panel.querySelectorAll('.quick-action').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                menu.classList.remove('active');

                switch(action) {
                    case 'export-csv':
                        exportManager.exportToCSV(facultyData);
                        break;
                    case 'export-json':
                        exportManager.exportToJSON(facultyData);
                        break;
                    case 'print':
                        exportManager.exportToPDF();
                        break;
                    case 'stats':
                        this.showAdvancedStats();
                        break;
                }
            });
        });
    }

    showAdvancedStats() {
        const stats = this.calculateAdvancedStats();
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-content stats-modal">
                <button class="close-modal">×</button>
                <h2>📊 Advanced Statistics</h2>
                <div class="advanced-stats-grid">
                    <div class="stat-box">
                        <h4>Department Distribution</h4>
                        ${this.renderDepartmentChart(stats.departments)}
                    </div>
                    <div class="stat-box">
                        <h4>Average Metrics</h4>
                        <ul>
                            <li>Average Rating: <strong>${stats.avgRating}</strong></li>
                            <li>Average Publications: <strong>${stats.avgPublications}</strong></li>
                            <li>Average Experience: <strong>${stats.avgExperience} years</strong></li>
                        </ul>
                    </div>
                    <div class="stat-box">
                        <h4>Position Breakdown</h4>
                        ${this.renderPositionChart(stats.positions)}
                    </div>
                    <div class="stat-box">
                        <h4>Top Rated Faculty</h4>
                        <ol>
                            ${stats.topRated.map(f => `<li>${f.name} (${f.rating})</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    calculateAdvancedStats() {
        const departments = {};
        const positions = {};

        facultyData.forEach(f => {
            departments[f.department] = (departments[f.department] || 0) + 1;
            positions[f.position] = (positions[f.position] || 0) + 1;
        });

        const avgRating = (facultyData.reduce((sum, f) => sum + f.rating, 0) / facultyData.length).toFixed(2);
        const avgPublications = Math.round(facultyData.reduce((sum, f) => sum + f.publications, 0) / facultyData.length);
        const avgExperience = (facultyData.reduce((sum, f) => sum + f.yearsOfExperience, 0) / facultyData.length).toFixed(1);

        const topRated = [...facultyData]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);

        return {
            departments,
            positions,
            avgRating,
            avgPublications,
            avgExperience,
            topRated
        };
    }

    renderDepartmentChart(departments) {
        return Object.entries(departments)
            .map(([dept, count]) => {
                const percentage = (count / facultyData.length * 100).toFixed(1);
                return `
                    <div class="chart-bar">
                        <div class="chart-label">${dept}</div>
                        <div class="chart-bar-container">
                            <div class="chart-bar-fill" style="width: ${percentage}%"></div>
                            <span class="chart-value">${count}</span>
                        </div>
                    </div>
                `;
            }).join('');
    }

    renderPositionChart(positions) {
        return Object.entries(positions)
            .map(([pos, count]) => {
                const percentage = (count / facultyData.length * 100).toFixed(1);
                return `
                    <div class="chart-bar">
                        <div class="chart-label">${pos}</div>
                        <div class="chart-bar-container">
                            <div class="chart-bar-fill" style="width: ${percentage}%"></div>
                            <span class="chart-value">${count}</span>
                        </div>
                    </div>
                `;
            }).join('');
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Header Manager
    new HeaderManager();
    
    // Initialize Faculty Manager
    if (document.getElementById('facultyGrid')) {
        const facultyManager = new FacultyManager();
        facultyManager.render();

        // Search functionality with debounce
        const searchInput = document.getElementById('facultySearch');
        if (searchInput) {
            const debouncedSearch = debounce(() => {
                const searchTerm = searchInput.value;
                const department = document.getElementById('departmentFilter').value;
                facultyManager.filter(searchTerm, department);
            }, 300);

            searchInput.addEventListener('input', debouncedSearch);
        }

        // Department filter
        const departmentFilter = document.getElementById('departmentFilter');
        if (departmentFilter) {
            departmentFilter.addEventListener('change', () => {
                const searchTerm = searchInput.value;
                const department = departmentFilter.value;
                facultyManager.filter(searchTerm, department);
            });
        }

        // Sort buttons
        const sortButtons = document.querySelectorAll('.sort-btn');
        sortButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const field = btn.dataset.sort;
                facultyManager.sort(field);
                
                // Update button states
                sortButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // View mode toggle
        const viewModeButtons = document.querySelectorAll('.view-mode-btn');
        viewModeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.view;
                facultyManager.setViewMode(mode);
                
                viewModeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Initialize Announcements Manager
    if (document.getElementById('announcementsBoard')) {
        const announcementsManager = new AnnouncementsManager();
        announcementsManager.render();
        announcementsManager.updateUnreadCount();

        // Filter buttons
        const filterButtons = document.querySelectorAll('.announcement-filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                announcementsManager.filter(filter);
            });
        });
    }

    // Initialize Contact Form Manager
    if (document.getElementById('contactForm')) {
        new ContactFormManager();
    }

    // Initialize Program Tabs Manager
    if (document.querySelector('.tab-button')) {
        new ProgramTabsManager();
    }

    // Initialize Modal Manager
    if (document.getElementById('facultyModal')) {
        new ModalManager();
    }

    // Initialize Theme Manager
    new ThemeManager();

    // Initialize Statistics (for home page)
    if (document.getElementById('statsContainer')) {
        new StatisticsManager();
    }

    // ==========================================
    // INITIALIZE NEW FEATURES
    // ==========================================
    
    // Initialize Faculty Comparison Tool
    const facultyComparison = new FacultyComparison();
    window.facultyComparison = facultyComparison; // Make it globally accessible

    // Initialize Quick Actions Menu
    new QuickActionsMenu();

    // Function to add comparison buttons to faculty cards
    function addComparisonButtons() {
        const facultyCards = document.querySelectorAll('.faculty-card');
        facultyCards.forEach(card => {
            // Check if button already exists
            if (card.querySelector('.compare-faculty-btn')) {
                return;
            }

            const facultyId = parseInt(card.dataset.id);
            if (facultyId) {
                const compareBtn = document.createElement('button');
                compareBtn.className = 'compare-faculty-btn';
                compareBtn.innerHTML = '⚖️';
                compareBtn.title = 'Add to comparison';
                compareBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    facultyComparison.addToComparison(facultyId);
                    compareBtn.classList.toggle('active');
                });
                
                const header = card.querySelector('.faculty-card-header');
                if (header) {
                    header.style.position = 'relative';
                    header.appendChild(compareBtn);
                }
            }
        });
    }

    // Add comparison buttons initially
    setTimeout(addComparisonButtons, 500);

    // Re-add buttons when faculty list changes (search, filter, sort)
    const facultyGrid = document.getElementById('facultyGrid');
    if (facultyGrid) {
        const observer = new MutationObserver(() => {
            addComparisonButtons();
        });
        observer.observe(facultyGrid, { childList: true, subtree: true });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = 'Back to top';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to College of Computer Studies!', 'info', 5000);
    }, 1000);
}); 