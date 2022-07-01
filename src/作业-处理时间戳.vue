<template>
  <div>
    <div>{{ time | format('-') }}</div>
    <div>{{ time | format('/') }}</div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'VuecliDemoApp',

  data() {
    return {
      time: Date.now(),
    };
  },

  mounted() {},

  methods: {},
  filters: {
    format(val, split) {
      return moment(val).format(`YYYY${split}MM${split}DD`);
    },
  },
};
</script>
