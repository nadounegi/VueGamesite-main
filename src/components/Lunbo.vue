<template>
  <div :class="['carousel', {active: menuActive}]" style="margin: 0 auto;">
    <div class="images">
      <div
        class="img"
        v-for="(item, index) in imagesList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.url + ')' }"
        :class="{ active: activeIndex === index }"
      >
        <div>
          <h1>{{ item.title }}</h1>
          <span>{{ item.description }}</span>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div
        class="nav-button"
        v-for="(item, index) in imagesList"
        :key="index"
        @mouseover="setActiveIndex(index)"
      >
        <img :src="item.url" :alt="item.title" >
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

<style scoped>
html, body {
  overflow: hidden;
  width: 100%;
  max-width: 1520px;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  width: 80%;
  max-width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carousel.menu-active {
  margin-top: 150px; /* Adjust carousel margin when menu is active */
}

.carousel .images {
  width: 100%;
  height: 69vh;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.carousel.menu-active .images {
  height: 69vh; /* Adjust image container height when menu is active */
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: none;
}

.img.active {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
}

.img > div {
  z-index: 1;
  color: white;
}

.img > div > h1 {
  position: relative;
  top: -76px;
  font-size: 40px;
  animation: h1Animation .4s ease-out;
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

.img > div > span {
  position: relative;
  bottom: 181px;
  padding-left: 10px;
  font-size: 20px;
  animation: h1Animation .7s ease-out;
}

.navigation {
  width: 100%;
  height: 120px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px;
  bottom: 160px;
  position: relative;
}

.nav-button {
  width: 100px;
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

.nav-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-button:hover {
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

.nav-button > * {
  transition: all .2s ease-out;
}

.nav-button > h1 {
  margin-left: 10px;
  opacity: 1;
}

.nav-button > img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1);
  transition: transform 0.3s ease-out;
}

.nav-buttonhover > h1 {
  margin-left: 10px;
  opacity: 1;
}

.nav-button:hover > img {
  transform: scale(1);
}

@media (max-width: 900px) {
  .carousel {
    width: 80%;
    max-width: 1000px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }

  .carousel .images {
    width: 100%;
    height: 53vh;
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
}

@media (max-width: 768px) {
  .carousel{
    width: 80%;
    max-width: 1000px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 3px;
  }
  .carousel.active {
    width: 80%;
    max-width: 1000px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:90px;
  }

  .carousel.menu-active {
    margin-top: 150px;
  }

  .carousel .images {
    width: 100%;
    height: 45vh;
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .carousel.menu-active .images {
    height: calc(45vh - 100px); /* Adjust image container height when menu is active */
  }

  .img > div > h1 {
    font-size: 1.8rem;
  }

  .img > div > span {
    font-size: 1rem;
  }

  .nav-button {
    width: 60px;
    height: 60px;
  }
}
</style>
