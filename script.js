// Currently your animations are handled by CSS. 
// You can add interaction logic here in the future, 
// for example, a dark mode toggle or dynamic filter buttons.

// console.log("Website loaded successfully.");
document.addEventListener("DOMContentLoaded", () => {
    // Print a "system" message to the browser console
    console.log("%c [SYSTEM]: Saurabh Patil AI Portfolio Initialized...", "color: #00ff9d; font-weight: bold;");

    // Add a simple hover sound or interaction log
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log(`%c [SCAN]: Accessing project data...`, "color: #888;");
        });
    });
});
