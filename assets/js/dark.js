  // Initialize theme based on local storage
  document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    const body = document.body;
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    if (storedTheme === 'dark') {
        body.classList.add('dark');
        moonIcon.classList.remove('visible');
        sunIcon.classList.add('visible');
    } else {
        body.classList.remove('dark');
        moonIcon.classList.add('visible');
        sunIcon.classList.remove('visible');
    }
});

function myFunction() {
    let body = document.body;
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    // Toggle the dark class
    body.classList.toggle('dark');

    // Toggle icon visibility
    moonIcon.classList.toggle('visible');
    sunIcon.classList.toggle('visible');

    // Store the current theme in local storage
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}