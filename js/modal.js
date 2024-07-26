export function setupModal() {
    const modal = document.getElementById("modal");
    const closeModalButton = document.querySelector(".modal__close");
    const form = document.getElementById("application-form");

    closeModalButton.addEventListener('click', closeModal);
    window.addEventListener('click', event => {
        if (event.target == modal) {
            closeModal();
        }
    });

    form.addEventListener('submit', handleFormSubmit);
}

export function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

export function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    console.log(`Имя: ${name}, Контактная информация: ${phone}`);
    closeModal();
    event.target.reset();
}
