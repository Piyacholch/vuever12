<template>
  <main class="home">
    <Navbar />
    <h1>Hello</h1>

    <img :src="photoURL" alt="ไม่มี" class="photoURL" />
    <br />
    <span class="displayName">{{ displayName }}</span> <br />
    <span class="email">{{ email }}</span> <br />
    <!-- inputเปลี่ยนชื่อ -->
    <form>
      <!-- DisplayName -->
      <input type="text" v-model="ChangedisplayName" id="inputChangeName" />
      <!-- IMG -->
      <input type="text" v-model="ChangephotoURL" id="inputChangeName" />
      <button @click="UpdateUser()">submit</button>
    </form>
  </main>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import { getAuth, updateProfile } from "firebase/auth";
export default {
  components: { Navbar },
  data() {
    return {
      ChangedisplayName: null,
      ChangephotoURL: null,
    };
  },

  methods: {
    GetUser() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const uid = user.uid;
        console.log(displayName, email, photoURL, uid);
      }
    },
    UpdateUser() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        updateProfile(auth.currentUser, {
          displayName: this.ChangedisplayName,
          photoURL:this.ChangephotoURL,
        })
          .then(() => {
            console.log("อัปเดตสมบูรณ์");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  created() {
    this.GetUser();
    this.UpdateUser();

    const auth = getAuth();
    const user = auth.currentUser;
    this.email = user.email;
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
  },
};
</script>

<style>
.photoURL {
  width: 100px;
  height : 100px;
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