// script.js
// Данные для услуг (вместо отдельных страниц)
const servicesData = {
    magazines: {
        title: 'Журналы',
        description: 'Профессиональная печать журналов высокого качества. От тиражей до единичных экземпляров.',
        image: 'images/jurnal.jpg',
        details: ['Цветная печать', 'Ламинация', 'Сборка']
    },
    documents: {
        title: 'Документы',
        description: 'Быстрая и точная печать документов. Черно-белая и цветная.',
        image: 'images/printer.png',
        details: ['Форматы A4-A3', 'Двусторонняя печать', 'Брошюровка']
    },
    books: {
        title: 'Книги',
        description: 'Печать книг в твердом и мягком переплете. От рукописей до тиражей.',
        image: 'images/books.jpg',
        details: ['Офсетная печать', 'Переплет', 'Обложки']
    },
    photos: {
        title: 'Фото',
        description: 'Фотопечать на различных материалах. Высокое разрешение и качество.',
        image: 'images/photo.jpg',
        details: ['На бумаге', 'На холсте', 'Форматы до A0']
    },
    advertising: {
        title: 'Реклама',
        description: 'Печать рекламных материалов: баннеры, флаеры, постеры.',
        image: 'images/banner.jpg',
        details: ['Баннеры', 'Флаеры', 'Постеры']
    },
    design: {
        title: 'Дизайн',
        description: 'Оформление и дизайн для ваших проектов. Креативные решения.',
        image: 'images/desing.jpg',
        details: ['Графический дизайн', 'Логотипы', 'Макеты']
    },
    scanning: {
        title: 'Скан',
        description: 'Сканирование документов и фото в высоком разрешении.',
        image: 'images/scaner.jpg',
        details: ['Цветное сканирование', 'PDF-конверсия', 'Архивация']
    }
};

// Обработчик для кнопок "Подробнее" (модальное окно)
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const detailsBtns = document.querySelectorAll('.details-btn');

    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceKey = this.parentElement.dataset.service;
            const service = servicesData[serviceKey];
            modalBody.innerHTML = `
                <h2>${service.title}</h2>
                <p>${service.description}</p>
                <img src="${service.image}" alt="${service.title}">
                <h3>Услуги</h3>
                <ul>${service.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
            `;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Плавная прокрутка для ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Обработка формы (простая валидация и сообщение об успехе)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        // Здесь Formspree сам обработает отправку, но можно добавить клиентскую валидацию
        if (!form.checkValidity()) {
            e.preventDefault();
            alert('Пожалуйста, заполните все поля правильно.');
            return;
        }
        // После отправки Formspree перенаправит или покажет сообщение
    });
});
