<template>
  <div>
    <input :value="text" v-on:input="convertToUpperCase" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "test",
    };
  },
  methods: {
    convertToUpperCase(event) {
      this.text = event.target.value.toUpperCase();
    },
  },
};
</script>