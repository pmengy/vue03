<template>
  <div>
    <ul v-for="item in myArr" :key="item">
      <li>{{ item }}</li>
    </ul>
    <br />
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色
export default {
  data() {
    return {
      myArr: ['帅哥', '美女', '程序猿'],
    };
  },
  methods: {
    btn() {
      this.myArr.push(this.myArr.shift());
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
