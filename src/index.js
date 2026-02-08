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
});
