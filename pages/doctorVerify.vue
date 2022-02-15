<template>
  <div>
    <div class="container form-group main">
      <div>
        <h1>title</h1>
      </div>
      <div>
        <!-- <h1>{{ phone_number }}</h1>
        <h1>{{ sms_token }}</h1> -->

        <form @submit.prevent="handleDoctorVerify">
          <!-- <h1>{{ phone_number }}</h1> -->
          <input
            type="text"
            class="form-control mb-2"
            v-model="sms_token"
            placeholder="phone number"
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
      phone_number: "",
      sms_token: "",
      token_type: "DOCTOR_TOKEN",
    };
  },
  methods: {
    async handleDoctorVerify() {
      let response = await axios.post(
        "http://185.226.119.248:8080/sms/verify/",
        {
          phone_number: this.phone_number,
          token_type: "DOCTOR_TOKEN",
          sms_token: this.sms_token,
        }
      );
      console.log(response);
      this.$router.push("doctorSignUp");
      localStorage.setItem("sms_token", this.sms_token);
      this.phone_number = "";
    },
  },
  mounted() {
    if (process.client) {
      this.phone_number = localStorage.getItem("phone_number");
      this.sms_token = localStorage.getItem("sms_token");
    }
  },
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