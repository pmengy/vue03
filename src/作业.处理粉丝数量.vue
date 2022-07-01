<template>
  <div>
    <div>国内网站:粉丝数量:{{ num | count(1) }}万</div>
    <div>国外网站:粉丝数量:{{ num | count(0) }}千</div>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemoApp',

  data() {
    return {
      num: 1871986,
    };
  },

  mounted() {},

  methods: {},
  filters: {
    count(val, flag) {
      if (flag) return val / 1000;
      else return val / 10000;
    },
  },
};
</script>
