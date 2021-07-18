<template>
  <div>
    <Navbar />
    <div class="container">
      <div v-if="$route.path === '/'">
        <div class="row my-4">
          <div class="col-md-7">
            <Feed />
          </div>
          <div class="col d-none d-md-block">
            <a
              class="cursor-pointer"
              @click="$router.push(`/user/${userData.id}`)"
            >
              <h5>
                {{ userData.username }}
              </h5>
            </a>
            <a href="#" @click="logout" class="text">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/partials/Navbar.vue";
import Feed from "../../components/logged_in/Feeds.vue";
export default {
  name: "InstaappHome",
  components: { Navbar, Feed },
  data() {
    return {
      userData: {},
    };
  },
  mounted() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/home");
    },
  },
};
</script>
