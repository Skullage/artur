import { defineStore } from "pinia";

export const useModalsStore = defineStore("modals", {
  state: () => ({
    image: {
      images: [
        "/album/1.jpg",
        "/album/2.jpg",
        "/album/3.jpg",
        "/album/4.jpg",
        "/album/5.jpg",
      ],
      url: null,
    },
    modal: {
      title: null,
      price: null,
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
    showBigImage(index) {
      this.image.url = this.image.images[index];
    },
    showPrevImage() {
      if (this.getImageIndex > 0) {
        this.image.url = this.image.images[this.getImageIndex - 1];
      } else {
        this.image.url = this.image.images[this.image.images.length - 1];
      }
    },
    showNextImage() {
      if (this.getImageIndex < this.image.images.length - 1) {
        this.image.url = this.image.images[this.getImageIndex + 1];
      } else {
        this.image.url = this.image.images[0];
      }
    },
    closeBigImage() {
      this.image.url = null;
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
