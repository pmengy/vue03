<template>
  <div id="app" style="padding: 20px">
    <div>
      <span>姓名:</span>
      <input
        type="text"
        v-model.trim="info.username"
        placeholder="请输入姓名"
      />
    </div>
    <br />
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="info.age" placeholder="请输入年龄" />
    </div>
    <br />
    <div>
      <span>性别:</span>
      <select v-model="info.gender">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <br />
    <div>
      <button @click="add">{{ flag ? '添加' : '修改' }}</button>
    </div>
    <br />
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.age }}</td>
          <td>{{ { 0: '女', 1: '男' }[item.gender] }}</td>
          <td>
            <button @click="del(item.id)">删除</button>
            <button @click="edit(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 100,
          username: 'zs',
          age: 18,
          gender: 1,
        },
        {
          id: 101,
          username: 'ls',
          age: 19,
          gender: 1,
        },
      ],
      info: {
        username: '',
        age: '',
        gender: '',
      },
      flag: true,
      current: '',
    };
  },
  methods: {
    add() {
      if (this.info.username === '' || this.info.age === '' || this.info.gender === '')
        return alert('请输入相关信息!');
      if (this.flag) {
        const newId = this.arr[this.arr.length - 1].id
          ? this.arr[this.arr.length - 1].id + 1
          : 100;
        this.arr.push({
          id: newId,
          username: this.info.username,
          age: this.info.age,
          gender: this.info.gender,
        });
        this.flag = false;
      } else {
        const index = this.arr.findIndex((ele) => ele.id === this.current);
        this.arr.splice(index, 1, {
          id: this.current,
          username: this.info.username,
          age: this.info.age,
          gender: this.info.gender,
        });
        this.current = '';
        this.flag = true;
      }
      this.info.username = '';
      this.info.age = '';
      this.info.gender = '';
    },
    del(id) {
      const index = this.arr.findIndex((ele) => ele.id === id);
      this.arr.splice(index, 1);
    },
    edit(data) {
      this.flag = false;
      this.info.username = data.username;
      this.info.age = data.age;
      this.info.gender = data.gender;
      this.current = data.id;
    },
  },
};
</script>
