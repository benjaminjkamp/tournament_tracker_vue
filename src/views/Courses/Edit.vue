<template>
  <div class="courses-edit">
    <div class="ms-site-container">
      <div class="container col-lg-9">
        <div class="table-responsive">
          <form v-on:submit.prevent="submit()">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col"><input type="text" placeholder="Course Name" v-model="course.name"></th>
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
                  <th scope="row">Handicaps</th>
                  <td><input size="2" step="any" type="text" v-model="handicaps[0]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[1]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[2]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[3]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[4]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[5]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[6]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[7]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[8]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[9]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[10]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[11]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[12]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[13]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[14]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[15]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[16]"></td>
                  <td><input size="2" step="any" type="text" v-model="handicaps[17]"></td>
                  
                </tr>
                <tr class="table-secondary">
                  <th scope="row">Pars</th>
                  <td><input size="2" step="any" type="text" v-model="pars[0]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[1]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[2]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[3]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[4]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[5]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[6]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[7]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[8]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[9]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[10]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[11]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[12]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[13]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[14]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[15]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[16]"></td>
                  <td><input size="2" step="any" type="text" v-model="pars[17]"></td>
                  
                  
                </tr>
                       
              </tbody>
            </table>
            <button type="submit">Edit Course</button>
            <button v-on:click="$router.go(-1)">Cancel</button>
            
          </form>
        </div>
      </div>
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
      course: {},
      errors: [],
      courseName: "",
      handicaps: [],
      pars: [],
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
    axios.get("/api/courses/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.course = response.data;
      this.handicaps = Object.values(this.course.handicaps);
      this.pars = Object.values(this.course.pars);
    })
  },
  methods: {
    submit: function() {
      var params = {
        name: this.courseName,
        par_hole_1: this.course.pars.hole1_par,
        par_hole_2: this.course.pars.hole2_par,
        par_hole_3: this.course.pars.hole3_par,
        par_hole_4: this.course.pars.hole4_par,
        par_hole_5: this.course.pars.hole5_par,
        par_hole_6: this.course.pars.hole6_par,
        par_hole_7: this.course.pars.hole7_par,
        par_hole_8: this.course.pars.hole8_par,
        par_hole_9: this.course.pars.hole9_par,
        par_hole_10: this.course.pars.hole10_par,
        par_hole_11: this.course.pars.hole11_par,
        par_hole_12: this.course.pars.hole12_par,
        par_hole_13: this.course.pars.hole13_par,
        par_hole_14: this.course.pars.hole14_par,
        par_hole_15: this.course.pars.hole15_par,
        par_hole_16: this.course.pars.hole16_par,
        par_hole_17: this.course.pars.hole17_par,
        par_hole_18: this.course.pars.hole18_par,
        hdcp_hole_1: this.course.handicaps.hole1_handicap,
        hdcp_hole_2: this.course.handicaps.hole2_handicap,
        hdcp_hole_3: this.course.handicaps.hole3_handicap,
        hdcp_hole_4: this.course.handicaps.hole4_handicap,
        hdcp_hole_5: this.course.handicaps.hole5_handicap,
        hdcp_hole_6: this.course.handicaps.hole6_handicap,
        hdcp_hole_7: this.course.handicaps.hole7_handicap,
        hdcp_hole_8: this.course.handicaps.hole8_handicap,
        hdcp_hole_9: this.course.handicaps.hole9_handicap,
        hdcp_hole_10: this.course.handicaps.hole10_handicap,
        hdcp_hole_11: this.course.handicaps.hole11_handicap,
        hdcp_hole_12: this.course.handicaps.hole12_handicap,
        hdcp_hole_13: this.course.handicaps.hole13_handicap,
        hdcp_hole_14: this.course.handicaps.hole14_handicap,
        hdcp_hole_15: this.course.handicaps.hole15_handicap,
        hdcp_hole_16: this.course.handicaps.hole16_handicap,
        hdcp_hole_17: this.course.handicaps.hole17_handicap,
        hdcp_hole_18: this.course.handicaps.hole18_handicap
        
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