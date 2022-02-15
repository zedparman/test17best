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
            v-model="full_name"
            placeholder="full_name"
          />
          <!-- <h1>{{ sms_token }}</h1> -->
          <input
            type="text"
            class="form-control mb-2"
            v-model="GMC"
            placeholder="GMC"
          />
          <input
            type="text"
            class="form-control mb-2"
            v-model="nationality_code"
            placeholder="nationality_code"
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
      full_name: "",
      sms_token: "",
      GMC: "",
      nationality_code: "",
    };
  },
  methods: {
    async handleDoctorVerify() {
      let response = await axios.post(
        "http://185.226.119.248:8080/doctor/signup/",
        {
          phone_number: this.phone_number,
          full_name: this.full_name,
          sms_token: this.sms_token,
          GMC: this.GMC,
          nationality_code: this.nationality_code,
        }
      );
      console.log(response);
      this.$router.push("/doctorChangePassword");
      localStorage.setItem('Token', response.data.token);
    },
  },
  mounted() {
    if (process.client) {
      this.phone_number = localStorage.getItem("phone_number");
      this.sms_token = localStorage.getItem("sms_token");
      // this.token = localStorage.getItem("token");
    // console.log(token)
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