document.addEventListener("DOMContentLoaded", function ()
{
	const menuBtn = document.querySelector("button.humburger");
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
