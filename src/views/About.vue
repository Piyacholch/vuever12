<template>
  <main class="about">
    <h1>About</h1>

    <button @click="submit()">
      show
    </button>
    <div class="block">
      <div
        class="row block-item block-bm"
        v-for="(item, index) in loaddata"
        :key="index"
      >
        <!-- <div class="col-1">{{ item.id }}</div> -->
        <div class="col-8" id="floatleft">
         ชื่อ:  {{ item.Name }} <br> 
         อีเมล:   {{ item.Email }} <br> 
        ที่อยู่:  {{ item.Address }}<br> 
        
        </div>
        <button
              type="button"
              class="btn btn-outline-danger delete"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="deleteadmin(item.id)"
            >
              ลบ
            </button>
      </div>
    </div>
  </main>
</template>
<script>

// import { getAuth, updateProfile } from "firebase/auth";
import axios from "axios";
export default {
  data() {
    return {
      loaddata: [],
      id: "",
      email: "",
      Name: "",
      userData:[],
    };
  },
  mounted() {
    this.getuid();
  },
  methods: {
    getuid() {
        axios.get("http://localhost:5050/admin").then((response) => {
          this.loaddata = response.data; 
          // console.log(response);
        });
      },
      deleteadmin(id) {
      axios.delete("http://localhost:5050/admin/" + id).then(() => {
        this.id = id;
        this.getactivity();
        // console.log(response.data)
      });
    },

  }};
</script>