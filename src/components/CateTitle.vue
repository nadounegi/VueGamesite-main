<template>
  <div class="cateTitle">
    <h2>{{ title }}</h2>
    <h4><router-link :to="to" class="more">もっと見る</router-link></h4>
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
  },
};
</script>

<style>
.cateTitle {
  position: relative;
  left: 81px;
  bottom: 38px;
  margin-bottom: 20px;
}

.cateTitle h2 {
  color: black;
}

.cateTitle h4 {
  position: relative;
  bottom: 31px;
  left: 240px;
  cursor: pointer;
}

.more {
  color: black;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  bottom: 31px;
  left: 240px;
  cursor: pointer;
}
</style>
