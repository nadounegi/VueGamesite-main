<template>
  <div class="cate-title">
    <h2 v-if="!showLink">{{ title }}</h2>
    <router-link v-else :to="to" class="cate-title__link"><h2>{{ title }}</h2></router-link>
   
      <router-link v-if="showLink" :to="to" class="cate-title__link"><h4>もっと見る</h4></router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      required: true,
    },
    showLink: {
      type: Boolean,
      default: false,
    },
  },
};

</script>

<style>
.cate-title {
  position: relative;
  left: 168px;
  top: 34px;
  margin-bottom: 40px;
}

.cate-title h2 {
  position: relative;
  top: 61px;
  right: -9px;
  color: black;
}

/* .cate-title h4 {
  position: relative;
  bottom: 42px;
  left: 74px;
  cursor: pointer;
} */

.cate-title__link{
  text-decoration: none;
}

.cate-title__link h4{
  color: black;
  font-weight: bold;
  position: relative;
  top: 10px;
  left: 240px;
  cursor: pointer;
}
</style>
