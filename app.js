function handleBudgetSubmit(event) {
    event.preventDefault();

    const incomeInput = document.getElementById('incomeInput');
    const income = parseFloat(incomeInput.value);

    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid positive income number.");
        return;
    }

    const needs = income * 0.50;
    const savings = income * 0.15;
    const shortTerm = income * 0.05;
    const wants = income * 0.30;
    const total = needs + savings + shortTerm + wants;

    const formatCurrency = (amount) => {
        return '₱' + amount.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    document.getElementById('needsValue').textContent = formatCurrency(needs);
    document.getElementById('savingsValue').textContent = formatCurrency(savings);
    document.getElementById('shortTermValue').textContent = formatCurrency(shortTerm);
    document.getElementById('wantsValue').textContent = formatCurrency(wants);
    document.getElementById('totalValue').textContent = formatCurrency(total);
    document.getElementById('incomeInput')?.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value > 0) {
            handleBudgetSubmit(new Event('submit'));
        }
    });

    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.classList.add('active');
    }
}