export default{
    //1.グローバルメソッド
    methods:{
        formattedPrice(price){
            return new Intl.NumberFormat('ja-JP',{
                style: 'currency',
                currency: 'JPY',
                minimumFractionDigits: 0 // 小数点以下の最小桁数
            }).format(price)
            }
        }
    };
