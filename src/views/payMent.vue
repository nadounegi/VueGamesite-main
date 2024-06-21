<template>
    <div>
      <BreadCrumb/>
      <h1 class="title">注文履歴</h1>
      <table>
        <thead>
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

<style>
h1 {
  text-align: left;
  left: 136px;
}


table {
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  margin-top: 20px;
}
.thead th {
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
}

.thead {
  background-color: #f2f2f2;
}

</style>