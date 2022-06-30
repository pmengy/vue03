<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="reverse">数组翻转</button>
    <button @click="slice">截取前3个</button>
    <button @click="change">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo02VFor',

  data() {
    return {
      arr: [5, 3, 9, 2, 1],
    };
  },
  mounted() {},
  methods: {
    reverse() {
      this.arr.reverse();
    },
    slice() {
      this.arr = this.arr.slice(0, 3);
    },
    change() {
      // this.$set(this.arr, 0, 10);
      this.arr.splice(0, 1, 10);
    },
  },
};
</script>

<style scoped></style>
