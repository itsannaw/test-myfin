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
    console.log('Name:', name, 'Phone:', phone);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/apply.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        const data = JSON.parse(xhr.responseText);
        console.log('Response:', data.status);
        alert('Успешно!');
        closeModal();
        event.target.reset();
    };

    xhr.onerror = function() {
        console.error('Request failed');
        alert('Ошибка. Пожалуйста, попробуйте еще раз.');
    };

    const params = `name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`;
    xhr.send(params);
}



