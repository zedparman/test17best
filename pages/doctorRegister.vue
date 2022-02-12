<template>
  <div>
    <div class="container form-group main">
      <div>
        <h1>title</h1>
      </div>
      <div>
        <!-- <h1>{{ phone_number }}</h1> -->
        <form @submit.prevent="handlePhoneNumber">
          <input
            type="text"
            class="form-control mb-2"
            v-model="phone_number"
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
      token_type: "DOCTOR_TOKEN",
    };
  },
  methods: {
    async handlePhoneNumber() {
      let response = await axios.post("http://185.226.119.248:8080/sms/send/", {
        phone_number: this.phone_number,
        token_type: "DOCTOR_TOKEN",
      });
      console.log(response);
      this.$router.push("/doctorVerify");
      localStorage.setItem("phone_number", this.phone_number);
      this.phone_number = "";
    },
  },
  mounted() {
    if (process.client) {
      this.phone_number = localStorage.getItem("phone_number");
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