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
        category: "modulnye-zdaniya",
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
        category: "dachnye-domiki",
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
        category: "torgovye-pavilony",
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
        category: "posty-ohrany",
        items: [],
      },
      {
        title: "Бани",
        image: "6.jpg",
        category: "bani",
        items: [],
      },
      {
        title: "Аренда бытовок",
        image: "7.jpg",
        category: "arenda-bytovok",
        items: [],
      },
      {
        title: "Модульные офисы",
        image: "8.jpg",
        category: "modulnye-ofisy",
        items: [],
      },
      {
        title: "Спец. назначения",
        image: "9.jpg",
        category: "moduli-specialnogo-naznacheniya",
        items: [],
      },
      {
        title: "Хозблоки",
        image: "10.jpg",
        category: "hozbloki",
        items: [],
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
