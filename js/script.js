console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    discs: [],
  },
  methods: {},
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.discs = res.data.response;
      });
  },
});
