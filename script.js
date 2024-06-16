// script.js

document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0-based
    const year = parseInt(document.getElementById('year').value);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
});
