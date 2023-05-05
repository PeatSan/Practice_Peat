<template>
  <div class="hello">
    <card></card>
    <card>2nd Cards</card>

    <h1>{{ itemCode }}</h1>
    <h1>{{ no }}</h1>
    <button @click="no = no + 1">Add</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import card from "./card.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    card,
  },
  data() {
    //data() : เป็นพื้นที่ในการประกาศตัวแปรของ Component
    return {
      text: "Peat",
      no: 0,
      itemCode2: "",
    };
  },
  methods: {
    SayHello(name) {
      return "Say Hello To : " + name;
    },
  },
  created() {
    this.text = "Text";
    this.itemCode2 = this.text + this.no;
  },
  watch: {
    //watch : เป็นพื้นที่ในการเฝ้าดูค่าของตัวแปร เมื่อมีการประมวลผลหรือเปลี่ยนแปลง
    no() {
      console.log("Number :" + this.no);
    },
  },
  computed: {
    itemCode() {
      return this.text + this.no;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
