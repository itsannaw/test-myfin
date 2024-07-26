import { setupModal, openModal } from './modal.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadCreditsData()
        .then(credits => {
            populateCreditTable(credits);
            setupModal();
        })
        .catch(error => console.error('Error loading credits:', error));
}

async function loadCreditsData() {
    const response = await fetch('data/credits.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function populateCreditTable(credits) {
    const tbody = document.getElementById("credit-table-body");
    credits.forEach(credit => {
        const tr = document.createElement("tr");
        tr.classList.add('credit-table__row');
        tr.innerHTML = `
            <td class="credit-table__cell" data-label="Кредит">${credit.name} <p>${credit.bank}</p></td>
            <td class="credit-table__cell" data-label="Ставка (%)">${credit.rate}</td>
            <td class="credit-table__cell" data-label="Срок">${credit.term}</td>
            <td class="credit-table__cell"><button class="button apply-btn">Оформить заявку</button></td>
        `;

        tbody.appendChild(tr);
    });

    document.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', openModal);
    });
}
