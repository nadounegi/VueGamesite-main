<template>
    <div class="order-history">
      <h1 class="title">注文履歴</h1>
      <div class="table-container">
      <table>
        <thead class="thead">
          <tr>
            <th class="col-id">注文番号</th>
            <th class="col-date">注文日時</th>
            <th class="col-num">注文数量</th>
            <th class="col-Ammount">合計金額</th>
            <th class="col-name">商品名</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orderHistory" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.items.length }}</td>
            <td>¥{{ order.total }}</td>
            <td>
              <ul>
                <li v-for="item in order.items"
                 :key="item.id">
                 {{ item.name }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </template>
  

<script>
export default {
    computed:{
        orderHistory(){
            return this.$store.getters.orderHistory;
        }
    }
}
</script>

<style scoped>
.order-history{
  padding: 20px;
  overflow-y: auto;
  height: calc(94% - -3px);
}

.title {
  width: 171px;
  text-align: left;
  margin-left: 254px;
}

.table-container {
  width: 63%;
  margin: auto;
  border-collapse: collapse;
  margin-top: 20px;
  
}

table {
  width: 100%;
  border-collapse: collapse;
}

.thead th {
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
  z-index: 1;
}

</style>