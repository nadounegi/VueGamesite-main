<template>
  <div :class="['carousel', {'carousel--active': menuActive}]" style="margin: 0 auto;">
    <div class="carousel__images">
      <div
        class="carousel__img"
        v-for="(item, index) in imagesList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.url + ')' }"
        :class="{ active: activeIndex === index }"
      >
        <div>
          <h1 class="carousel__title">{{ item.title }}</h1>
          <span class="carousel__description">{{ item.description }}</span>
        </div>
      </div>
    </div>
    <div class="carousel__navigation">
      <div
        class="carousel__nav-button"
        v-for="(item, index) in imagesList"
        :key="index"
        @mouseover="setActiveIndex(index)"
      >
        <img :src="item.url" :alt="item.title" class="carousel__nav-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menuActive'],
  computed:{
    imagesList(){
      return this.$store.getters['images/imagesList']
    },
  },
  created(){
      this.$store.dispatch('images/getimagesList')
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    setActiveIndex(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style>
html, body {
  overflow: hidden;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  width: 88vw;
  max-width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carousel__images {
  width: 99%;
  height: 80vh;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.carousel__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: none;
}
/* 这个.img.active不能删 */
.carousel__img.active {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
}

.carousel__title {
  z-index: 1;
  color: white;
  position: relative;
  top: -76px;
  font-size: 40px;
  animation: h1Animation 0.4s ease-out;
  z-index: 1;
}

@keyframes h1Animation {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.carousel__description {
  z-index: 1;
  color: white;
  position: relative;
  bottom: 181px;
  padding-left: 10px;
  font-size: 20px;
  animation: h1Animation 0.7s ease-out;
}

.carousel__navigation {
  width: 98.9%;
  height: 120px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px;
  bottom: 141px;
  position: relative;
}

.carousel__nav-button {
  width: 178px;
  height: 100px;
  position: relative;
  border: 4px solid transparent;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  overflow: hidden;
  user-select: none;
  margin: 0 5px;
  cursor: pointer;
}

.carousel__nav-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.carousel__nav-button:hover {
  border: 4px solid #005A9E;
}

@keyframes imgAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.carousel__nav-button > * {
  transition: all 0.2s ease-out;
}

.carousel__nav-button > h1 {
  margin-left: 10px;
  opacity: 1;
}

.carousel__nav-button > img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1);
  transition: transform 0.3s ease-out;
}

.carousel__nav-button:hover > img {
  transform: scale(1.1);
}

</style>