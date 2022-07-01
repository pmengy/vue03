<template>
  <div>
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: '',
        msg: {
          a: 1,
        },
      },
    };
  },
  // 目标: 侦听对象
  /*
  语法:
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
      },
      变量名: {
        handler(newVal, oldVal){

        },
        deep: true, // 深度侦听(对象里面层的值改变)
        immediate: true // 立即侦听(网页打开handler执行一次)
      }
    }
  */
  // watch: {
  //   user: {
  //     handler(newVal, oldVal) {
  //       console.log(newVal, oldVal);
  //     },
  //     // deep: true,
  //     // immediate: true,
  //   },
  // },
  // 如果只是监听复杂数据类型里的某个简单数据类型的属性
  watch: {
    'user.name': {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
    },
  },
};
</script>

<style></style>
