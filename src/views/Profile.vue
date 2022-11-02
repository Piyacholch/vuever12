<template>
  <main class="home">
    <Navbar />
    <h1>Hello</h1>

    <img :src="photoURL" alt="ไม่มี" class="photoURL" />
    <br />
    <span class="displayName">{{ displayName }}</span> <br>
    <span class="email">{{ email }}</span> <br />


   <!--  Form ปลี่ยนชื่อ+รูป -->
    <!-- <form>
 
      <input type="text" v-model="ChangedisplayName" id="inputChangeName" />
     
      <input type="text" v-model="ChangephotoURL" id="inputChangeName" />
      <button @click="UpdateUser()">submit</button>
    </form>  -->

    <!-- Form ปลี่ยนชื่อ+รูป -->

    <div class="Box pt-5 pb-5">
    <div class="box p-4">
      <h2>ทดสอบเพิ่มข้อมูลลง Firestore</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >อีเมลแอดมิน</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="ชื่อจริง - นามสกุล"
          v-model="email"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >ชื่อจริง</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="ชื่อจริง - นามสกุล"
          v-model="data.Name"
        />
      </div>
 

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >ที่อยู่</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="ที่อยู่"
          v-model="data.Address"
        />
      </div>
      </div>
    </div>
    <div class="footer d-flex justify-content-end mt-4">
        <button
          type="button"
          class="btn btn-warning mx-2"
          @click="submit( email,data.Name, data.Address)"
        >
          ตกลง
        </button>
        <button type="button" class="btn btn-danger" @click="reset()">
          ยกเลิก
        </button>
      </div>
  </main>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import { getAuth, updateProfile } from "firebase/auth"; 
import axios from "axios";
export default {
  components: { Navbar },
  data() {
    return {
      email: "",
      Name: "",
      Address: "",
      data: [],

      ChangedisplayName: null,
      ChangephotoURL: null,
    };
  },

  methods: {
    GetUser() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
       

        console.log(user);
      }
    },
    UpdateUser() {
      const auth = getAuth();
     
      const user = auth.currentUser;
      if (user !== null) {
   
        updateProfile(auth.currentUser, {
          displayName: this.ChangedisplayName,
          photoURL: this.ChangephotoURL,
        })
          .then(() => {
            console.log("อัปเดตสมบูรณ์");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    submit(email, Name, Address) {

      axios
        .post(
          "http://localhost:5050/insertadmin/" +
          email +
            "/" +
            Name +
            "/" +
            Address
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/");

        });
    },
    reset() {

      this.data.Name = "";
      this.data.Address = "";
      
    },
  },
  created() {
    this.GetUser();
    this.UpdateUser();

    const auth = getAuth();
    const user = auth.currentUser;
    this.uid = user.uid;
    this.email = user.email;
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
  },
};
</script>

<style>
.form-control{
  width: 30%;
}
.photoURL {
  width: 100px;
  height: 100px;
  border: 3px solid rgb(0, 195, 0);
  border-radius: 50%;
}
.displayName {
  font-weight: bold;
}
#inputChangeName {
  border: 3px solid rgb(0, 0, 0);
}
</style>