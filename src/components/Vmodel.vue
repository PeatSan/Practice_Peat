<template>
  <div>
    <input v-model="text" />
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "text",
    };
  },
};
</script>