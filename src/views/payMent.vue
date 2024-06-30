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

.order-history {
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title{
  font-size: 29px;
  color: rgb(81, 81, 80);
  width: 100%;
  text-align: center;;
  margin-bottom: 20px;
}

.table-container {
  width: 50%;
  margin: auto;
  margin-top: 20px;
  height: calc(56% - 50px);
  overflow-y: scroll;
  position: relative;
  right: 51px;
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