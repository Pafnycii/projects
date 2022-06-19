// тут 1 фраза константа, tabsBtns название наших табов, документ - мы обращаемся ко всему документу, и querySelectorAll это что мы выбираем все табы в этом документе, это аналог того как мы в css обращаемся к нужному тегу
const tabsBtns = document.querySelectorAll(".tabs__nav button");
// эта фраза console.log(tabsBtns) по сути не нужна, ставим это лишь для того чтоб проверить сработал ли наш тег, проверяем в браузере f12, console, если находит в данном случае 3 модуля, значит работает
console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs__item");

// функция скрывает табы и убирает active у кнопок
function hideTabs() {
  tabsItems.forEach(item => item.classList.add("hide"));
  tabsBtns.forEach(item => item.classList.remove("active"));
}

// функция показывает переданным номер таба и делает соответствующую ему кнопку активной

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
//  круглые скобочки - это значит что мы должны вызывать эту функцию
hideTabs();
showTab(2);

tabsBtns.forEach((btn,index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

// здесь начинаем настройку плавной прокрутки при клике на ссылку
// квадратными скобками мы якобы входим внутрь функции

const anchors = document.querySelectorAll(".header__nav a")
anchors.forEach(anc => {
anc.addEventListener("click", function(event) {
    // preventdefault мы отменяем стандартном действие при наведении на ссылку
event.preventDefault();

const id = anc.getAttribute("href");
const elem = document.querySelector(id);
window.scroll({
    // -80 это значит что поскольку у нас шапка всегда следует за нами, и при переходе на контакты шапка перекрывает часть контента, сделали чтоб перелистывалось вниз но меньше на 80 пикселей
top: elem.offsetTop - 80, 
// для этого мы и писали, smooth обеспечит плавную прокрутку сайта при нажатии на ссылку
behavior: 'smooth'
});
});
});