<template>
  <div>
    <div class="container form-group main">
      <div>
        <h1>title</h1>
      </div>
      <div>
        <!-- <h1>{{ token }}</h1> -->
        <form @submit.prevent="handlePassword">
          <input
            type="password"
            class="form-control mb-2"
            v-model="password"
            placeholder="password"
          />
          <input
            type="password"
            class="form-control mb-2"
            v-model="password_again"
            placeholder="password_again"
          />
          <input class="btn btn-primary w-100" type="submit" value="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      password: "",
      password_again: "",
      token: "",
    };
  },
  methods: {
    async handlePassword() {
      let response = await axios.put(
        "http://185.226.119.248:8080/change_password",
        {
          password: this.password,
          password_again: this.password_again,
        },
        {
          // headers
          headers: {
            'Authorization': "Token " + this.token
          }
        }
      );
      console.log(response);
      this.$router.push("/doctorClinic");
    },
  },
  mounted() {
      if (process.client) {
          this.token = localStorage.getItem("Token");
    }
  },
    // async created() {
    //   const response = await axios.put(
    //     "http://185.226.119.248:8080/change_password",
    //     {
    //       headers: {
    //         Authorization: "Token" + this.Token,
    //       },
    //     }
    //   );
    //   console.log(response);
    // },
};
</script>

<style lang="css">
.main {
    height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 20px;
  margin: auto;
  width: 90%;
  text-align: center;
}
</style>