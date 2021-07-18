<template>
  <div>
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
        <b-button type="submit" variant="success" class="mt-3">
          Register
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
import FloatLabel from "vue-float-label/components/FloatLabel";
export default {
  data: () => {
    return {
      formData: {
        email: "",
        fullname: "",
        password: "",
        username: "",
      },
    };
  },
  components: { InputFloat: FloatLabel },
  methods: {
    signup() {
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
