<template>
  <div class="cateTitle">
    <h2 v-if="!showLink">{{ title }}</h2>
    <router-link v-else :to="to" class="titleLink"><h2>{{ title }}</h2></router-link>
    <h4 v-if="showLink">
      <router-link :to="to" class="more">もっと見る</router-link>
    </h4>
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
.cateTitle {
  position: relative;
  left: 168px;
  top: 34px;
  margin-bottom: 40px;
}

.cateTitle h2 {
  position: relative;
  bottom: 48px;
  right: 164px;
  color: black;
}

.cateTitle h4 {
  position: relative;
  bottom: 42px;
  left: 74px;
  cursor: pointer;
}
.titleLink{
  text-decoration: none;
}


.more {
  color: black;
  font-weight: bold;
  position: relative;
  top: 7px;
  left: 240px;
  cursor: pointer;
}
</style>
