document.addEventListener("DOMContentLoaded", function ()
{
	const menuBtn = document.querySelector("a.humburger");
	if (menuBtn)
	{
		menuBtn.addEventListener("click", () =>
		{
			const menu = document.querySelector(".mobile-menu");
			if (menu)
			{
				menu.classList.toggle("hidden");
			}
		});
	}
});

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
	slidesPerView: 4,  // Показываем по 4 слайда
	spaceBetween: 16,   // Промежуток между слайдами
	loop: true, // Зацикливание
});

const swiper1 = new Swiper('.swiper1', {
	slidesPerView: 5,  // Показываем по 4 слайда
	spaceBetween: 0,   // Промежуток между слайдами
	loop: true, // Зацикливание
});

const swiper2 = new Swiper('.swiper2', {
	slidesPerView: 3,  // Показываем по 4 слайда
	spaceBetween: 16,   // Промежуток между слайдами
	loop: true, // Зацикливание

	// Добавляем пагинацию для мобильных
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		0: {
			slidesPerView: 1,  // Показываем по 3 слайда на мобилках
			spaceBetween: 12   // Меньший промежуток на мобилках
		},
		480: {
			slidesPerView: 2,  // Возвращаем 5 слайдов
			spaceBetween: 16,   // Стандартный промежуток
			// // Скрываем пагинацию на десктопе
			// pagination: false
		},
		768: {
			slidesPerView: 3,  // Возвращаем 5 слайдов
			spaceBetween: 16,   // Стандартный промежуток
			// Скрываем пагинацию на десктопе
			pagination: false
		}
	}
});

const swiper3 = new Swiper('.swiper3', {
	slidesPerView: 3,  // Показываем по 4 слайда
	spaceBetween: 16,   // Промежуток между слайдами
	loop: true, // Зацикливание
});

const swiper4 = new Swiper('.swiper4', {
	slidesPerView: 7,  // Показываем по 5 слайда
	spaceBetween: 16,   // Промежуток между слайдами
	loop: true, // Зацикливание

	// Добавляем адаптивность для мобильных устройств
	breakpoints: {
		0: {
			slidesPerView: 3,  // Показываем по 3 слайда на мобилках
			spaceBetween: 12   // Меньший промежуток на мобилках
		},
		768: {
			slidesPerView: 5,  // Возвращаем 5 слайдов
			spaceBetween: 16   // Стандартный промежуток
		},
		1200: {
			slidesPerView: 7,  // Возвращаем 5 слайдов
			spaceBetween: 16   // Стандартный промежуток
		},
	}
});

const swiper5 = new Swiper('.swiper5', {
	slidesPerView: 3,  // Показываем по 3 слайда
	spaceBetween: 16,   // Промежуток между слайдами
	loop: true, // Зацикливание

	// Добавляем пагинацию для мобильных
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Добавляем адаптивность для мобильных устройств
	breakpoints: {
		0: {
			slidesPerView: 1,  // Показываем по 3 слайда на мобилках
			spaceBetween: 12   // Меньший промежуток на мобилках
		},
		480: {
			slidesPerView: 2,  // Возвращаем 5 слайдов
			spaceBetween: 16,   // Стандартный промежуток
			// // Скрываем пагинацию на десктопе
			// pagination: false
		},
		768: {
			slidesPerView: 3,  // Возвращаем 5 слайдов
			spaceBetween: 16,   // Стандартный промежуток
			// Скрываем пагинацию на десктопе
			pagination: false
		}
	}
});

class accordionAccordion
{
	constructor()
	{
		this.items = document.querySelectorAll('.accordion-item');
		this.init();
	}

	init()
	{
		this.items.forEach(item =>
		{
			const toggle = item.querySelector('.accordion-toggle');
			const content = item.querySelector('.accordion-content');
			const icon = item.querySelector('.accordion-icon');

			toggle.addEventListener('click', () =>
			{
				this.toggleItem(item, content, icon);
			});
		});

		// Открываем первый элемент
		if (this.items.length > 0)
		{
			const firstItem = this.items[ 0 ];
			const firstContent = firstItem.querySelector('.accordion-content');
			const firstIcon = firstItem.querySelector('.accordion-icon');
			this.openItem(firstItem, firstContent, firstIcon);
		}
	}

	toggleItem(item, content, icon)
	{
		if (item.classList.contains('open'))
		{
			this.closeItem(item, content, icon);
		} else
		{
			// Закрываем все открытые
			this.closeAll();
			// Открываем текущий
			this.openItem(item, content, icon);
		}
	}

	openItem(item, content, icon)
	{
		item.classList.add('open');
		content.style.maxHeight = content.scrollHeight + 'px';
		icon.textContent = '+';
		icon.classList.add('rotate-45');
	}

	closeItem(item, content, icon)
	{
		item.classList.remove('open');
		content.style.maxHeight = '0';
		icon.textContent = '+';
		icon.classList.remove('rotate-45');
	}

	closeAll()
	{
		this.items.forEach(item =>
		{
			if (item.classList.contains('open'))
			{
				const content = item.querySelector('.accordion-content');
				const icon = item.querySelector('.accordion-icon');
				this.closeItem(item, content, icon);
			}
		});
	}
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () =>
{
	new accordionAccordion();

	// Смена главного изображения по клику на миниатюры в блоке slider-imgs
	const sliders = document.querySelectorAll('.slider-js');

	sliders.forEach(slider =>
	{
		// Основное изображение в левой колонке (col-span-7)
		const mainImage = slider.querySelector('.main-img-js img');
		// Миниатюры в блоке slider-imgs
		const thumbs = slider.querySelectorAll('.slider-imgs-js a');

		if (!mainImage || !thumbs.length)
		{
			return;
		}

		thumbs.forEach(thumb =>
		{
			thumb.addEventListener('click', (event) =>
			{
				event.preventDefault();

				const thumbImg = thumb.querySelector('img');
				if (thumbImg && thumbImg.src)
				{
					mainImage.src = thumbImg.src;
				}
			});
		});
	});
});
