<template>
  <div>
    <p>
      v-for="menu in manufacturers": key="manu.id" {{ manu.id }} -
      {{ manu.Title }}
    </p>
    <input plcaeholder />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "text",
      manufacturers: [{ id: 1, Title: "test1" }],
    };
  },
  created() {},
  methods: {
    get() {
      axios.get("url").then((response) => {
        this.manufacturers = response.data;
      }); //GET DATA FROM API
    },
  },
};
</script>