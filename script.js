document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', function() {
        window.location.href = 'https://www.youtube.com/watch?v=bkYD-tpAUA4';
    });

    noButton.addEventListener('click', function() {
        moveButton(noButton);
    });

    function moveButton(button) {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const newX = Math.random() * (containerRect.width - buttonRect.width);
        const newY = Math.random() * (containerRect.height - buttonRect.height);

        button.style.position = 'absolute';
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    }
});
