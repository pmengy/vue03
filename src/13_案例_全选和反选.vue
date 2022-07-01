<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false,
        },
        {
          name: '孙悟空',
          c: false,
        },
        {
          name: '唐僧',
          c: false,
        },
        {
          name: '白龙马',
          c: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      get() {
        // 如果回调函数的每一次返回都为 true 值，返回 true，否则返回 false
        return this.arr.every((item) => item.c);
      },
      set(val) {
        this.arr.forEach((item) => (item.c = val));
      },
    },
  },
  methods: {
    btn() {
      this.arr.forEach((item) => (item.c = !item.c));
    },
  },
};
</script>
