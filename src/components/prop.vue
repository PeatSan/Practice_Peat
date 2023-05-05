<template>
  <div>
    <input v-model="text" />
    <button @click="goToHome">Go</button>
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
    goToHome() {
      this.$router.push({ path: "/", query: { msg: this.text } });
    },
  },
};
</script>