<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-md-center my-3">
        <div class="col-md-3 text-center text-md-left">
          <b-img
            :src="getImage(data.image ? data.image : 'default.png')"
            class="imageUser rounded-circle"
          />
        </div>
        <div class="col-md" v-if="data.user">
          <h4>{{ data.user.name }}</h4>
        </div>
        <div class="row mb-3">
          <div class="col-3" v-for="(el, i) in data.posts" :key="i">
            {{ JSON.stringify(el) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/partials/Navbar.vue";
import Axios from "axios";
export default {
  components: { Navbar },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    getImage(file) {
      return `${process.env.VUE_APP_BACKEND}/profile/image/${file}`;
    },
  },
  mounted() {
    Axios.get(
      `${process.env.VUE_APP_BACKEND}/getuserwithpost/${this.$route.params.id}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => (this.data = res.data.data.data))
      .catch((err) => console.error(err));
  },
};
</script>
