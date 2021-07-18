<template>
  <div class="home vh-100 d-flex align-items-center justify-content-center">
    <div class="container w-md-50">
      <b-card class="border-md">
        <h2 class="f-Instagram text-center">InstaApp</h2>
        <hr />
        <div class="d-flex justify-content-center" v-if="$route.path === '/'">
          <div>
            <button class="btn btn-dark">Login</button>
          </div>
          <div class="mx-3 align-self-center">
            Or
          </div>
          <div>
            <button class="btn btn-secondary">Register</button>
          </div>
        </div>
        <Login v-else-if="$route.path === '/login'" />
        <Register v-else-if="$route.path === '/register'" />
      </b-card>
    </div>
  </div>
</template>

<script>
import Login from "../components/user/Login.vue";
import Register from "../components/user/Register.vue";
export default {
  name: "Home",
  components: {
    Login,
    Register,
  },
};
</script>
