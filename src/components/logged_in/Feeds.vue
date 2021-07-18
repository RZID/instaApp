<template>
  <div>
    <div class="card mb-3 p-3">
      <p>
        Create post
      </p>
      <form @submit.prevent="createPost">
        <b-form-textarea
          class="mb-2"
          v-model="newPost.description"
          placeholder="Enter something..."
        ></b-form-textarea>
        <b-form-file
          class="mb-2"
          multiple
          accept="image/jpeg, image/png"
          v-model="newPost.files"
        />
        <button class="btn btn-dark btn-sm" type="submit">Create post</button>
      </form>
    </div>
    <div v-if="state === 'ready' && data.length > 0">
      <div v-for="(el, i) in data" :key="i">
        <b-card class="border-md">
          <div class="d-flex align-items-center">
            <b-img
              rounded="circle"
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?width=982&height=726&auto=webp&quality=75"
              class="imgPeople-feed mr-3"
            />
            <h6 class="mb-0">
              Name
            </h6>
          </div>
          <div class="my-3">
            <Gallery :data="el.image" />
          </div>
          <h3 class="d-flex align-items-center">
            <b-icon icon="heart" class="mr-3" />
            <b-icon icon="chat" class="mb-1" />
          </h3>
          <h6>xxx likes</h6>
          <p>
            <span class="font-weight-bold mr-2">Lorem</span>
            <span>
              {{ el.description }}
            </span>
          </p>
        </b-card>
      </div>
    </div>
    <div v-else-if="state === 'loading'">
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import Gallery from "./Swiper.vue";
import Axios from "axios";
export default {
  data: () => {
    return {
      state: "loading",
      data: [],
      newPost: {
        description: "",
        files: null,
      },
    };
  },
  methods: {
    getPosts() {
      this.data = [];
      this.state = "loading";
      Axios.get(`${process.env.VUE_APP_BACKEND}/posts`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          this.data = res.data.data.data;
        })
        .catch((err) => console.error(err))
        .finally(() => (this.state = "ready"));
    },
    createPost() {
      let dataForm = new FormData();
      dataForm.append("description", this.newPost.description);
      this.newPost.files.map((el) => {
        dataForm.append("files", el);
      });
      Axios.post(`${process.env.VUE_APP_BACKEND}/addpost`, dataForm, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
        .then(() => {
          this.getPosts();
        })
        .catch((err) => console.error(err));
    },
  },
  components: { Gallery },
  mounted() {
    this.getPosts();
  },
};
</script>
