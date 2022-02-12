<template>
  <div>
    <!-- <h1>doctor clinic</h1> -->
    <!-- <h1>{{ doctorClinic }}</h1> -->
    <div v-for="doctor in doctorClinic" :key="doctor.id">
            {{ doctor.address }}
        </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      doctorClinic: [],
    };
  },
//   async created() {
//     const response = await axios.get("http://185.226.119.248:8080/doctor/clinic", {
//       headers: {
//         Authorization: "Token" + this.Token,
//       },
//     });
//     console.log(response);
//   },
  methods: {
    async getDoctorClinic() {
    //   let result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      let result = await axios.get("http://185.226.119.248:8080/doctor/clinic", {
          // headers
          headers: {
            'Authorization': "Token " + localStorage.getItem("Token")
          }
        }
        );
      console.log(result);
      this.doctorClinic = result.data;
    },
  },
  mounted() {
    this.getDoctorClinic();
  },
//   mounted() {
//       if (process.client) {
//           this.token = localStorage.getItem("Token");
//     }
//   },
};
</script>

<style scoped>
</style>