<template>
    <div class="lunbo">
      <div class="images">
          <div class="img"
          v-for="(item, index) in images"
          :key="index"
          :class="{active: activeIndex === index}"
          ><img :src="item.url" alt="" class="largeImg"></div>
      </div>
  
      <div class="lunboBtns">
          <div class="lunboBtn"
          v-for="(item, index) in images"
          :key="index"
          @mouseover="setActiveIndex(index)"
          :class="{active: activeIndex === index}"
          >
            <img :src="item.url" alt="" class="smallImg">
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          images: Array
      },
      data() {
          return {
              activeIndex: 0
          };
      },
      methods: {
          setActiveIndex(index) {
              this.activeIndex = index;
          }
      }
  }
  </script>
  
  <style>
  .lunbo {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      box-sizing: border-box;
  }

  .images {
      width: 36%;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      right: 139px;
      bottom: 45px;
      overflow: hidden;
  }

  .img {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      transition: opacity 0.5s ease;
  }
  .img.active {
      opacity: 1;
  }
  .largeImg{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .lunboBtns {
    display: flex;
    justify-content: center;
    position: relative;
    left: 135px;
    bottom: -11px;
  }

  .lunboBtn {
      width: 90px;
      height: 90px;
      position: relative;
      border: 4px solid transparent;
      box-sizing: border-box;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 0 5px;
      cursor: pointer;
      transition: border 0.2s ease-out;
  }
  .lunboBtn img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.2s ease-out;
  }
  .lunboBtn:hover {
      border: 4px solid #005A9E;
  }
  .lunboBtn:hover img {
      transform: scale(1.1);
  }
  .lunboBtn.active {
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
  </style>
  