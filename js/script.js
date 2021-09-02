console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    discs: [],
    filter: "all",
  },
  computed: {
    filterByGenre() {
      const filter = this.filter;
      const filteredDiscs = this.discs.filter(
        (disc) => disc.genre === filter || filter === "all"
      );
      return filteredDiscs;
    },
    genres() {
      const genres = [];
      this.discs.forEach((disc) => {
        if (!genres.includes(disc.genre)) genres.push(disc.genre);
      });
      return genres;
    },
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
