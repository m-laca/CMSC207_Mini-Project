let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['a DCS student.', 'an IT project manager.', 'a bike commuter.'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1200,
    loop: true,
});

// Simple interactivity and small accessibility touches
document.addEventListener('DOMContentLoaded', () => {
    
    const knowMoreBtn = document.getElementById('knowMoreBtn');
    const funFactContainer = document.getElementById('funFactContainer');
    const funFactText = document.getElementById('funFactText');
    const btnText = knowMoreBtn.querySelector('span');

    // Create an array holding all your fun facts
    const facts = [
        "I took a full decade to finish my five-year Chemical Engineering degree at UPLB. Resilience is not just a buzzword for me: it is my lived experience.",
        "I experienced every academic status possible at UPLB: good, warning, probation, dismissal, and even permanent dismissal. I have seen every grade on a class card except for a <i>>Drop.</i>",
        "I learned my most valuable project management skills from my student org, <b>UPLB SChemES</b>. Managing budgets and leading teams there taught me more than any lecture hall ever could.",
        "I turned my academic setbacks into a <i>character development</i> arc. I realized I learn best when I can apply logic to real-world problems.",
        "Since graduating, I have earned a <b>Graduate Diploma in Project Management</b> (PUP Graduate School) and I aced my classes.",
        "I am currently finishing another <b>Diploma in Computer Science</b> (UPOU) to bridge the gap between engineering and IT.",
        "I am a dual-certified Project Management Professional. I hold both the <b>PMI-PMP</b> and <b>IPMA Level D</b> credentials.",
        "I never stop leveling up. I am currently pursuing my <b>PSM II</b> and <b>PSPO II</b> certifications to solidify my expertise in Agile leadership.",
        "I believe a well-managed life needs planned downtime too. I am usually busy with my hobbies."
    ];

    // Create a counter to track which fact we are on
    let currentFactIndex = 0;

    knowMoreBtn.addEventListener('click', () => {
        
        // Show the container on the very first click
        if (!funFactContainer.classList.contains('show')) {
            funFactContainer.classList.add('show');
        }

        // Check if we still have facts left in the array
        if (currentFactIndex < facts.length) {
            
            // Inject the current fact into the HTML
            funFactText.innerHTML = `<strong>Fun Fact ${currentFactIndex + 1}:</strong> ${facts[currentFactIndex]}`;
            
            // Increase the counter for the next click
            currentFactIndex++;

            // Change the button text to encourage more clicks
            btnText.textContent = 'Tell Me Another!';
            
            // This small trick resets the animation so it fades in every time
            funFactContainer.style.animation = 'none';
            funFactContainer.offsetHeight; // Triggers a browser reflow
            funFactContainer.style.animation = null; 

        } else {
            // What happens when the user sees all the facts
            funFactText.innerHTML = "<strong>That is all the trivia for now!</strong>";
            btnText.textContent = 'No More Facts';
            
            // Disable the button so the user knows it is over
            knowMoreBtn.disabled = true; 
            knowMoreBtn.style.opacity = '0.5';
            knowMoreBtn.style.cursor = 'not-allowed';
        }
    });
});
