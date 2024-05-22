<template>
  <div class="carousel">
    <div class="images">
      <div
        class="img"
        v-for="(item, index) in images"
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
        v-for="(item, index) in images"
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
  data() {
    return {
      images: [
        { url: "src/assets/images/神秘海域.png", title: "UNCHARTED 4", description: "シリーズ完結編！" },
        { url: "src/assets/images/Horizon.png", title: "Horizon 2 Forbidden West", description: "1000年後の未来、アメリカ西部を舞台に描かれる『Horizon Forbidden West』。" },
        { url: "src/assets/images/BioHazard.png", title: "BioHazard RE:4", description: "エイダ・ウォンを主人公に、『バイオハザード RE:4』本編のミッシングリンクを描いたストーリーコンテンツ。" },
      ],
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

html,body{
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header{
    position: relative;
    top: -7px;
    width: 179vh;
  }
      
  .carousel{
    width: 25%;
    max-width: 100%;
    bottom: 41px;
    left: 574px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

     
  }

  .images{
    width: 270%;
    max-width: 268%;
    height: 60%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      display: none;
  }
        /* 当活动索引匹配时显示图片 */
        .img.active {
           display: flex; 
           align-items: center;
           justify-content: flex-start;
           padding: 20px;
        }

        .img>div{
          z-index: 1;
          color:white;
        }

        .img>div>h1{
            position: relative;
            top: -76px;
            font-size: 40px;
            animation: h1Animation .4s ease-out;
            z-index: 1;
        }

         @keyframes h1Animation{
            from{
                transform: translateY(50px);
                opacity: 0;
            }
            to{
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .img>div>span{
            position: relative;
            bottom: 181px;
            padding-left: 10px;
            font-size: 20px;
            animation: h1Animation .7s ease-out;
        }
        
        .navigation{
          width: 272%;
          max-width: 283%;
          height: 120px;
          left: 23px;
          margin-top: 20px;
          background-color: rgba(0, 0, 0, .5);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          overflow-x: auto;
          padding: 10px;
          bottom: 122px;
          position: relative;
        }

        .nav-button{
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
        @keyframes imgAnimation{
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
      
       
       
        .nav-button>*{
            transition: all .2s ease-out;
        }
        .nav-button>h1{
          margin-left: 10px;
          opacity: 1;
        }
        .nav-button>img{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transform: scale(1);
            transition: transform 0.3s ease-out;
        }
        .nav-button:hover{
           border: 4px solid #005A9E; 
        }
        .nav-buttonhover>h1{
            margin-left: 10px;
            opacity: 1;
        }
        .nav-button:hover>img{
            transform: scale(1);
        }
  </style>
  