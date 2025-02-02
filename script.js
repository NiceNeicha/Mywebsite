document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('main section');

    function hideAllSections() {
        sections.forEach(section => section.classList.add('hidden'));
    }

    function showSection(id) {
        document.getElementById(id).classList.remove('hidden');
    }

    // Show 'About Me' by default
    hideAllSections();
    showSection('about-me');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default jump behavior
            const targetId = this.getAttribute('data-tab');
            hideAllSections();
            showSection(targetId);
        });
    });
});