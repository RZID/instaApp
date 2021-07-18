<template>
  <div>
    <p
      :class="
        `text-${
          message.type === 'error'
            ? 'danger'
            : message.type === 'loading'
            ? 'info'
            : 'success'
        } text-center`
      "
      v-if="message.type.length > 0"
    >
      {{ message.message }}
    </p>
    <form @submit.prevent="signup">
      <InputFloat class="mt-3">
        <b-form-input
          type="email"
          placeholder="E-mail"
          v-model="formData.email"
        />
      </InputFloat>
      <InputFloat class="mt-3">
        <b-form-input
          type="text"
          placeholder="Fullname"
          v-model="formData.fullname"
        />
      </InputFloat>
      <InputFloat class="mt-3">
        <b-form-input
          type="text"
          placeholder="Username"
          v-model="formData.username"
        />
      </InputFloat>
      <InputFloat class="mt-3">
        <b-form-input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
      </InputFloat>

      <div class="text-center">
        <div class="text-muted mt-3">
          Already have an account?
          <a
            href="#"
            @click="$router.push('/login')"
            class="text-muted font-weight-bold"
          >
            Click here to login
          </a>
        </div>
        <div>
          <b-button type="submit" variant="dark" class="mt-3">
            Register
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
        email: "",
        fullname: "",
        password: "",
        username: "",
      },
      message: { type: "", message: "" },
    };
  },
  components: { InputFloat: FloatLabel },
  methods: {
    signup() {
      this.message.type = "loading";
      this.message.message = "Please wait...";
      Axios.post(`${process.env.VUE_APP_BACKEND}/register`, this.formData)
        .then(() => {
          this.message.type = "success";
          this.message.message = "Register success! please login to continue";
        })
        .catch((err) => {
          this.message.type = "error";
          this.message.message = err.response.data.status.message;
        });
    },
  },
};
</script>
