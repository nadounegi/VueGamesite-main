<template>
  <div class="lunbo">
    <div class="images">
        <div class="img"
        v-for="(item,index) in images"
        :key="index"
        :class="{active:activeIndex === index}"
        ><img :src="item.url" alt=""></div>
    </div>

    <div class="lunboBtns">
        <div class="lunboBtn"
        v-for="(item,index) in images"
        :key="index"
        @mouseover="setActiveIndex(index)">
    <img :src="item.url" alt="" class="smallImg"></div>
        
    </div>
  </div>
</template>

<script>
export default {
    props:{
        images:Array
    },
}
</script>

<style>
.lunbo{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.images{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.smallImg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: none;
}
/* activeクラスが付いた時に表示する */
.smallImg.active{
    display: flex;
    /* 画像を中央に寄せる */
    align-items: center;
    /* 画像を左寄せ */
    justify-content: flex-start;
    padding: 20px;
}

.lunboBtns{
    width: 100%;
    max-width: 283%;
    height: 120px;
    left: 23px;
}
</style>