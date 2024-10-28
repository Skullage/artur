import { defineStore } from "pinia";

export const useModalsStore = defineStore("modals", {
  state: () => ({
    image: {
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      url: null,
      curIndex: null,
      array: [],
    },
    modal: {
      title: null,
      price: null,
    },
    menu: {
      isMobileMenuShow: false,
    },
    dropdownMenu: {
      isShow: false,
    },
  }),
  getters: {
    isBigImageShown(state) {
      return state.image.url;
    },
    isModalShown(state) {
      return state.modal.title;
    },
    getImageIndex(state) {
      return state.image.images.findIndex((el) => el === state.image.url);
    },
  },
  actions: {
    showBigImage(link, curIndex, array) {
      this.image.url = link;
      this.image.curIndex = curIndex;
      this.image.array = array;
    },
    showPrevImage() {
      if (this.image.curIndex > 0) {
        this.image.curIndex--;
      } else {
        this.image.curIndex = this.image.array.length - 1;
      }
    },
    showNextImage() {
      if (this.image.curIndex < this.image.array.length - 1) {
        this.image.curIndex++;
      } else {
        this.image.curIndex = 0;
      }
    },
    closeBigImage() {
      this.image.url = null;
      this.image.curIndex = null;
      this.image.array = null;
    },
    showModal(data) {
      this.modal.title = data.title;
      this.modal.price = data.price;
    },
    closeModal() {
      this.modal.title = null;
      this.modal.price = null;
    },
  },
});
export const useCatalogStore = defineStore("catalog", {
  state: () => ({
    catalog: [
      {
        title: "Бытовки",
        image: "1.jpg",
        category: "bytovki",
        items: [
          {
            title: 'Бытовка "Люкс-сэндвич" (6,0*2,4м)',
            image: ["6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"],
            hit: true,
            desc:
              "<p>Каркас: горячекатаный, металлический (швеллер 8 , угол 75*75*5мм)</p>\n" +
              "<p>Базовая комплектация:</p>\n" +
              "<p>- Утепление: 100мм сэндвич-панель</p>\n" +
              "<p>- Дверь входная: металлическая, производство Россия</p>\n" +
              "<p>- Окно: ПВХ</p>\n" +
              "<p>- Электрика: светильник - 1шт, розетка - 1шт</p>\n" +
              "<p><strong>Дополнительная комплектация:</strong></p>\n" +
              "<p>- Сплит-система</p>\n" +
              "<p>- Обогреватель (электроконвектор)</p>\n" +
              "<p>- Мебель</p>",
            price: "от 399000 ₽",
            sizes: null,
          },
          {
            title: 'Блок-контейнер "Стандарт"',
            image: ["1.jpg", "2.jpg"],
            hit: true,
            desc: "<p>Каркас: горячекатаный, металлический (швеллер 8 , угол 75*75*5мм)</p><p>- Утепление: 50мм минеральная вата</p><p>- Наружная отделка: Профилированный лист оцинкованный</p><p>- Внутренняя отделка: ДВП 3,2мм</p><p>- Дверь входная: металлическая, производство Россия</p><p>- Окно: ПВХ</p><p>- Электрика: светильник - 1шт, розетка - 1шт</p><p><strong>Дополнительная комплектация:</strong></p><p>- Линолеум</p><p>- Перегородка (тамбур)</p><p>- Сплит-система</p><p>- Обогреватель (электроконвектор)</p><p>- Мебель</p>",
            price: "131000 ₽",
            sizes: [
              { size: "3,0*2,4 м", price: "131000 ₽" },
              { size: "4,0*2,4 м", price: "143000 ₽" },
              { size: "5,0*2,4 м", price: "156000 ₽" },
              { size: "6,0*2,4 м", price: "169000 ₽" },
            ],
          },
        ],
      },
      {
        title: "Модульные здания",
        image: "2.jpg",
        category: "modulnye_zdaniya",
        items: [
          {
            title: "Модульное здание двухэтажное 2 модуля",
            image: ["12.jpeg", "13.jpeg"],
            hit: true,
            desc: null,
            price: "460000 ₽",
            sizes: null,
          },
        ],
      },
      {
        title: "Дачные домики",
        image: "3.jpg",
        category: "dachnye_domiki",
        items: [
          {
            title: 'Дачный домик "Норвегия"',
            image: [
              "14.jpeg",
              "15.jpeg",
              "16.jpeg",
              "17.jpeg",
              "18.jpeg",
              "19.jpeg",
            ],
            hit: true,
            desc:
              "<p>Каркас: горячекатаный, металлический (швеллер 8 , труба профильная 80*80)</p>\n" +
              "<p>Базовая комплектация:</p>\n" +
              "<p>- Утепление: 100мм минеральная вата</p>\n" +
              "<p>- Наружная отделка: Профнастил окрашенный+имитация бруса</p>\n" +
              "<p>- Внутренняя отделка: ЛДСП</p>\n" +
              "<p>- Дверь входная: ПВХ&nbsp;</p>\n" +
              "<p>- Окно: ПВХ&nbsp;</p>\n" +
              "<p>- Электрика</p>\n" +
              "<p>- Линолеум</p>\n" +
              "<p><strong>Дополнительная комплектация:</strong></p>\n" +
              "<p>- Перегородка (тамбур)</p>\n" +
              "<p>- Сплит-система</p>\n" +
              "<p>- Обогреватель (электроконвектор)</p>\n" +
              "<p>- Мебель</p>",
            price: "300000 ₽",
            sizes: null,
          },
        ],
      },
      {
        title: "Торговые павильоны",
        image: "4.jpg",
        category: "torgovye_pavilony",
        items: [
          {
            title: 'Торговый павильон "Касса-1"',
            image: ["20.jpg", "21.jpg", "22.jpg", "23.jpg"],
            hit: true,
            desc: "<p><span>Изготавливаем Торговые павильоны любых конфигураций и размеров под заказ!</span></p>",
            price: "от 340000 ₽",
            sizes: null,
          },
        ],
      },
      {
        title: "Посты охраны",
        image: "5.jpg",
        category: "posty_ohrany",
        items: [
          {
            title: 'Пост охраны "ЛЮКС-проходная" (4,5*4,0м)',
            image: ["24.jpg", "25.jpg"],
            hit: true,
            desc:
              "<p>Каркас: горячекатаный, металлический (швеллер 8 , угол 75*75*5мм)</p>\n" +
              "<p>Базовая комплектация:</p>\n" +
              "<p>- Утепление: 100мм минеральная вата</p>\n" +
              "<p>- Наружная отделка: Профилированный лист, цветной</p>\n" +
              "<p>- Внутренняя отделка: ЛДСП</p>\n" +
              "<p>- Дверь входная: металлическая, производство Россия</p>\n" +
              "<p>- Окно: ПВХ</p>\n" +
              "<p>- Электрика</p>\n" +
              "<p>- Линолеум</p>\n" +
              "<p><strong>Дополнительная комплектация:</strong></p>\n" +
              "<p>- Сплит-система</p>\n" +
              "<p>- Обогреватель (электроконвектор)</p>\n" +
              "<p>- Мебель</p>",
            price: "450000 ₽",
            sizes: null,
          },
        ],
      },
      {
        title: "Бани",
        image: "6.jpg",
        category: "bani",
        items: [
          {
            title: 'Баня "ЛЮКС" (6,0*2,3м)',
            image: [
              "26.jpg",
              "27.jpg",
              "28.jpg",
              "29.jpg",
              "29.jpg",
              "30.jpg",
              "31.jpg",
            ],
            hit: true,
            desc:
              "<p>Каркас: металлический</p>\n" +
              "<p>Базовая комплектация:</p>\n" +
              "<p>- Утепление: 100мм минеральная вата - комната отдыха / Базальт - парное отделение</p>\n" +
              "<p>- Наружная отделка: Сайдинг металлический (Огромный выбор цветов)</p>\n" +
              "<p>- Внутренняя отделка: Вагонка сосна АВ - комната отдыха / Вагонка липа - парное отделение</p>\n" +
              "<p>- Дверь входная: ПВХ из усиленного профиля</p>\n" +
              "<p>- Окно: ПВХ</p>\n" +
              "<p>- Печь на 16м3</p>",
            price: "549000 ₽",
            sizes: null,
          },
        ],
      },
      {
        title: "Аренда бытовок",
        image: "7.jpg",
        category: "arenda_bytovok",
        items: [
          {
            title: 'Блок-контейнер "Стандарт зима"',
            image: ["32.jpeg", "33.jpeg"],
            hit: true,
            desc:
              "<p>Размер вагончика: 6.0*2.4м</p>\n" +
              "<p>Каркас: горячекатаный, металлический (швеллер 8 , угол 75*75*5мм)</p>\n" +
              "<p>Базовая комплектация:</p>\n" +
              "<p>- Утепление: 100мм минеральная вата</p>\n" +
              "<p>- Наружная отделка: Профилированный лист оцинкованный</p>\n" +
              "<p>- Внутренняя отделка: ОСП</p>\n" +
              "<p>- Дверь входная: металлическая, производство Россия</p>\n" +
              "<p>- Окно: ПВХ</p>\n" +
              "<p>- Электрика: светильник - 2шт, розетка - 2шт</p>",
            price: "549000 ₽",
            sizes: [
              { size: "1 месяц", price: "12000 ₽" },
              { size: "2 месяц", price: "11000 ₽" },
              { size: "3 месяц и более", price: "10000 ₽" },
            ],
          },
        ],
      },
      {
        title: "Модульные офисы",
        image: "8.jpg",
        category: "modulnye_ofisy",
        items: [
          {
            title: 'Офис модульный "Комфорт" (6,0*3,0м)',
            image: ["34.jpg", "35.jpg", "36.jpg", "37.jpg"],
            hit: true,
            desc:
              "<p>Каркас: горячекатаный, металлический (швеллер 8 , труба проф 80*80)</p>\n" +
              "<p>Базовая комплектация:</p>\n" +
              "<p>- Утепление: 100мм</p>\n" +
              "<p>- Дверь входная: металлическая, производство Россия</p>\n" +
              "<p>- Окно: ПВХ</p>\n" +
              "<p>- Электрика: светильник - 1шт, розетка - 1шт</p>\n" +
              "<p><strong>Дополнительная комплектация:</strong></p>\n" +
              "<p>- Сплит-система</p>\n" +
              "<p>- Обогреватель (электроконвектор)</p>\n" +
              "<p>- Мебель</p>",
            price: "329000 ₽",
            sizes: null,
          },
        ],
      },
      {
        title: "Спец. назначения",
        image: "9.jpg",
        category: "moduli_specialnogo_naznacheniya",
        items: [
          {
            title: "Модуль для насосной станции со съёмной крышей",
            image: ["38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg"],
            hit: true,
            desc:
              "<p>Модуль для насосной станции со съёмной крышей</p>\n" +
              "<p>Изготавливаются индивидуально, любых размеров и конфигураций</p>",
            price: "199000 ₽",
            sizes: null,
          },
        ],
      },
      {
        title: "Хозблоки",
        image: "10.jpg",
        category: "hozbloki",
        items: [
          {
            title: 'Хозблок "ЛЮКС"',
            image: ["43.jpg", "44.jpg", "45.jpg", "46.jpg"],
            hit: true,
            desc: "<p><span>Изготавливаем любые конфигурации и размеры Хозблоков!</span></p>",
            price: "329000 ₽",
            sizes: [
              { size: "2,0*1,5 м", price: "от 64000 ₽" },
              { size: "3,0*2,0 м", price: "от 78000 ₽" },
              { size: "4,0*2,4 м", price: "от 93000 ₽" },
            ],
          },
        ],
      },
    ],
  }),
  getters: {
    getAllItems(state) {
      const items = [];
      state.catalog.map((el) => {
        el.items.forEach((item, index) => {
          item["id"] = el.category + "-" + index;
          items.push(item);
        });
      });
      return items;
    },
    getItemsByCategory: (state) => {
      return (category) => {
        const items = [];
        state.catalog.map((el) => {
          if (el.category === category) {
            el.items.forEach((item) => {
              items.push(item);
            });
          }
        });
        return items;
      };
    },
  },
});
