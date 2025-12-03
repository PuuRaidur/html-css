// Get elements
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

// Update button icon
function updateButtonIcon() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    toggleBtn.textContent = isDark ? '🌙' : '☀️';
}

// Toggle theme
function toggleTheme() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    // Set attribute (use 'light' as default when not dark)
    if (newTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.removeAttribute('data-theme'); // light is default
    }

    // Save to localStorage
    localStorage.setItem('theme', newTheme);

    updateButtonIcon();
}

// Initialize button
updateButtonIcon();

// Add event listener
toggleBtn.addEventListener('click', toggleTheme);