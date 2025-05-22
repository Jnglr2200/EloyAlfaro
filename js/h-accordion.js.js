document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        // Cierra todos los demás elementos
        document.querySelectorAll('.accordion-item').forEach(innerItem => {
            innerItem.classList.remove('active');
        });
        // Abre el elemento clickeado
        item.classList.add('active');
    });
});