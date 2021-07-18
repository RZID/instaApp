<template>
  <div class="border-bottom sticky-top bg-white">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <h3 class="f-Instagram my-2">InstaApp</h3>
      </div>
      <div>
        <b-form-input
          v-model="search"
          class="text-center bg-light"
          placeholder="Search"
          size="sm"
          @input="searchAccount"
        />
      </div>
      <div>
        <h4 class="mb-0 cursor-pointer" @click="$router.push('/')">
          <b-icon
            :icon="$route.path === '/' ? 'house-door-fill' : 'house-door'"
          ></b-icon>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      search: "",
    };
  },
  methods: {
    searchAccount() {
      console.log(this.search);
    },
  },
};
</script>
