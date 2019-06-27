<template>
  <div class="courses-new">
    <br><br>
    <div class="table-responsive">
      <form v-on:submit.prevent="submit()">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col"><input type="text" placeholder="Course Name" v-model="courseName"></th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">5</th>
              <th scope="col">6</th>
              <th scope="col">7</th>
              <th scope="col">8</th>
              <th scope="col">9</th>
              <th scope="col">10</th>
              <th scope="col">11</th>
              <th scope="col">12</th>
              <th scope="col">13</th>
              <th scope="col">14</th>
              <th scope="col">15</th>
              <th scope="col">16</th>
              <th scope="col">17</th>
              <th scope="col">18</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-secondary">
              <th scope="row">Pars</th>
              <td><input size="2" step="any" type="text" v-model="par1"></td>
              <td><input size="2" step="any" type="text" v-model="par2"></td>
              <td><input size="2" step="any" type="text" v-model="par3"></td>
              <td><input size="2" step="any" type="text" v-model="par4"></td>
              <td><input size="2" step="any" type="text" v-model="par5"></td>
              <td><input size="2" step="any" type="text" v-model="par6"></td>
              <td><input size="2" step="any" type="text" v-model="par7"></td>
              <td><input size="2" step="any" type="text" v-model="par8"></td>
              <td><input size="2" step="any" type="text" v-model="par9"></td>
              <td><input size="2" step="any" type="text" v-model="par10"></td>
              <td><input size="2" step="any" type="text" v-model="par11"></td>
              <td><input size="2" step="any" type="text" v-model="par12"></td>
              <td><input size="2" step="any" type="text" v-model="par13"></td>
              <td><input size="2" step="any" type="text" v-model="par14"></td>
              <td><input size="2" step="any" type="text" v-model="par15"></td>
              <td><input size="2" step="any" type="text" v-model="par16"></td>
              <td><input size="2" step="any" type="text" v-model="par17"></td>
              <td><input size="2" step="any" type="text" v-model="par18"></td>
              
              
            </tr>
            <tr class="table-secondary">
              <th scope="row">Handicaps</th>
              <td><input size="2" step="any" type="text" v-model="hdcp1"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp2"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp3"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp4"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp5"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp6"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp7"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp8"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp9"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp10"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp11"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp12"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp13"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp14"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp15"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp16"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp17"></td>
              <td><input size="2" step="any" type="text" v-model="hdcp18"></td>
              
            </tr>
          
          </tbody>
        </table>
        <button type="submit">Add Course</button>
        <button v-on:click="$router.go(-1)">Cancel</button>
        
      </form>
    </div>
    
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      courseName: "",
      par1: "",
      par2: "",
      par3: "",
      par4: "",
      par5: "",
      par6: "",
      par7: "",
      par8: "",
      par9: "",
      par10: "",
      par11: "",
      par12: "",
      par13: "",
      par14: "",
      par15: "",
      par16: "",
      par17: "",
      par18: "",
      hdcp1: "",
      hdcp2: "",
      hdcp3: "",
      hdcp4: "",
      hdcp5: "",
      hdcp6: "",
      hdcp7: "",
      hdcp8: "",
      hdcp9: "",
      hdcp10: "",
      hdcp11: "",
      hdcp12: "",
      hdcp13: "",
      hdcp14: "",
      hdcp15: "",
      hdcp16: "",
      hdcp17: "",
      hdcp18: "",
      
    };
  },
  created: function() {
    
  },
  methods: {
    submit: function() {
      var params = {
        name: this.courseName,
        par_hole_1: this.par1,
        par_hole_2: this.par2,
        par_hole_3: this.par3,
        par_hole_4: this.par4,
        par_hole_5: this.par5,
        par_hole_6: this.par6,
        par_hole_7: this.par7,
        par_hole_8: this.par8,
        par_hole_9: this.par9,
        par_hole_10: this.par10,
        par_hole_11: this.par11,
        par_hole_12: this.par12,
        par_hole_13: this.par13,
        par_hole_14: this.par14,
        par_hole_15: this.par15,
        par_hole_16: this.par16,
        par_hole_17: this.par17,
        par_hole_18: this.par18,
        hdcp_hole_1: this.hdcp1,
        hdcp_hole_2: this.hdcp2,
        hdcp_hole_3: this.hdcp3,
        hdcp_hole_4: this.hdcp4,
        hdcp_hole_5: this.hdcp5,
        hdcp_hole_6: this.hdcp6,
        hdcp_hole_7: this.hdcp7,
        hdcp_hole_8: this.hdcp8,
        hdcp_hole_9: this.hdcp9,
        hdcp_hole_10: this.hdcp10,
        hdcp_hole_11: this.hdcp11,
        hdcp_hole_12: this.hdcp12,
        hdcp_hole_13: this.hdcp13,
        hdcp_hole_14: this.hdcp14,
        hdcp_hole_15: this.hdcp15,
        hdcp_hole_16: this.hdcp16,
        hdcp_hole_17: this.hdcp17,
        hdcp_hole_18: this.hdcp18,
        
      };

      axios.post("/api/courses", params).then(response => {
        console.log(response.data);
        // this.course = response.data;
        this.$router.push("/rounds/new");
      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    }

  }
};
</script>