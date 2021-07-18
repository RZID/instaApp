<template>
  <div>
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
        identity: "",
        password: "",
      },
    };
  },
  components: { InputFloat: FloatLabel },
  methods: {
    login() {
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
