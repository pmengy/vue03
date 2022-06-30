<template>
  <div>
    <ul>
      遍历数组
      <li v-for="item in arr" :key="item">{{ item }}</li>
      <li v-for="(item, index) in arr" :key="index">{{ item }}-{{ index }}</li>
    </ul>
    <br />
    <ul>
      遍历数组嵌套对象形式数据
      <li v-for="item in stuArr" :key="item.id">
        {{ item.name }}-{{ item.sex }}-{{ item.hobby }}
      </li>
    </ul>
    <br />
    <ul>
      遍历对象
      <li v-for="(item, key) in tObj" :key="key">{{ key }}-{{ item }}</li>
    </ul>
    <br />
    <ul>
      遍历数字 (了解即可)
      <li v-for="item in count" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DemoApp',

  data() {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
