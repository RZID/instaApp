<template>
  <div>
    <p
      :class="
        `text-${message.type === 'loading' ? 'info' : 'danger'} text-center`
      "
      v-if="message.type.length > 0"
    >
      {{ message.message }}
    </p>
    <form @submit.prevent="login">
      <InputFloat class="mt-3">
        <b-form-input
          type="text"
          placeholder="E-mail or username"
          v-model="formData.identity"
        />
      </InputFloat>
      <InputFloat class="mt-3">
        <b-form-input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
      </InputFloat>
      <div class="text-center mt-3">
        <div class="text-muted">
          Haven't an account?
          <a
            href="#"
            @click="$router.push('/register')"
            class="text-muted font-weight-bold"
          >
            Click here to register
          </a>
        </div>
        <div>
          <b-button type="submit" variant="dark" class="mt-3">
            Login
          </b-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FloatLabel from "vue-float-label/components/FloatLabel";
import Axios from "axios";
export default {
  data: () => {
    return {
      formData: {
        identity: "",
        password: "",
      },
      message: {
        type: "",
        message: "",
      },
    };
  },
  components: { InputFloat: FloatLabel },
  methods: {
    login() {
      this.message.type = "loading";
      this.message.message = "Please wait...";
      Axios.post(`${process.env.VUE_APP_BACKEND}/login`, this.formData)
        .then((res) => {
          localStorage.setItem("token", res.data.data.data.token);
          localStorage.setItem(
            "userData",
            JSON.stringify(res.data.data.data.userData)
          );
          return this.$router.push("/");
        })
        .catch((err) => {
          this.message.type = "error";
          this.message.message = err.response.data.status.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
