<template>
  <h1>Test Post Something By Admin</h1>
  <span>{{ email }}</span>
  <form>
    <div class="">
      <label for="manage_input" class="form-label">อีเมลแอดมิน: </label>
      <input type="text" class="manage_input" v-model="data.email" />
    </div>

    <div class="">
      <label for="manage_input" class="form-label">ที่อยู่: </label>
      <input type="text" class="manage_input" v-model="data.Adress" />
    </div>
    <div class="">
      <label for="manage_input" class="form-label">เบอร์โทร: </label>
      <input type="text" class="manage_input" v-model="data.Tel" />
    </div>
    <button
      type="submit"
      @click="submit(data.emailAdmin, data.Adress, data.Tel)"
    >
      ตกลง
    </button>
  </form>
</template>
<script>
import axios from "axios";
import { getAuth } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;
export default {
  data() {
    return {
      email: "",
      Adress: "",
      Tel: "",
      data: [],
    };
  },
  methods: {
    submit(email, Adress, Tel) {
      // const formData = new FormData();
      // formData.append("Text", this.Text);
      axios
        .post(
          "http://localhost:5050/inserttest/" + email + "/" + Adress + "/" + Tel
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/help");
          // console.log(response.data)
        });
    },
  },
  created() {
    this.email = user.email;
  },
};
</script>
<style>
.manage_input {
  width: 300px;
}
</style>