
<template>
  <div class="cateTitle">
        <!-- 类别标题 -->
      <h2>{{title}}</h2>
      <router-link :to = "link" class="more">もっと見る</router-link>
    </div>
</template>

<script>
export default {
  name:'CateTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
/* カテゴリータイトル */
.cateTitle{
  position: relative;
  left: 81px;
  bottom: 38px;
  margin-bottom: 20px;
}
.cateTitle h4{
  position: relative;
  bottom: 31px;
  left: 240px;
  cursor: pointer;
}
.more{
  color: black;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  bottom: 31px;
  left: 240px;
  cursor: pointer;
}
</style>
