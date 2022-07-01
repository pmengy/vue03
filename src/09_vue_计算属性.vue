<template>
  <div>
    购物车商品总价：
    {{ totalPrice() }}
    {{ getPrice }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 5,
      price: 98,
      coupon: 400,
    };
  },
  // 计算属性:
  // 场景: 一个变量的值, 需要用另外变量计算而得来
  /*
    语法:
    computed: {
      计算属性名 () {
        return 值
      }
    }
  */
  computed: {
    getPrice() {
      return this.total * this.price >= 500
        ? this.total * this.price - this.coupon
        : this.total * this.price;
    },
  },
  // 注意: 计算属性和data属性都是变量-不能重名
  // 注意2: 函数内变量变化, 会自动重新计算结果返回
};
</script>

<style></style>
