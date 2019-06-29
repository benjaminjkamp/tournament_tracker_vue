<template>
  <div class="rounds-new">
    <div class="ms-site-container">

        <div class="modal modal-primary" id="courseAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-dialog-centered animated zoomIn animated-3x" role="document">
            <div class="modal-content">
              <form v-on:submit="addCourse()">
                <div class="modal-header">
                  <h3 class="modal-title color-dark"><input type="text" v-model="courseName"></h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
                </div>
                <div class="modal-body">
                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Hole</th>
                          <th scope="col">Par</th>
                          <th scope="col">HDCP</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-secondary">
                          <th scope="row">1</th>
                          <td><input size="2" step="any" type="text" v-model="par1"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp1"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">2</th>
                          <td><input size="2" step="any" type="text" v-model="par2"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp2"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">3</th>
                          <td><input size="2" step="any" type="text" v-model="par3"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp3"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">4</th>
                          <td><input size="2" step="any" type="text" v-model="par4"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp4"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">5</th>
                          <td><input size="2" step="any" type="text" v-model="par5"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp5"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">6</th>
                          <td><input size="2" step="any" type="text" v-model="par6"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp6"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">7</th>
                          <td><input size="2" step="any" type="text" v-model="par7"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp7"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">8</th>
                          <td><input size="2" step="any" type="text" v-model="par8"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp8"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">9</th>
                          <td><input size="2" step="any" type="text" v-model="par9"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp9"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">10</th>
                          <td><input size="2" step="any" type="text" v-model="par10"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp10"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">11</th>
                          <td><input size="2" step="any" type="text" v-model="par11"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp11"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">12</th>
                          <td><input size="2" step="any" type="text" v-model="par12"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp12"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">13</th>
                          <td><input size="2" step="any" type="text" v-model="par13"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp13"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">14</th>
                          <td><input size="2" step="any" type="text" v-model="par14"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp14"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">15</th>
                          <td><input size="2" step="any" type="text" v-model="par15"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp15"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">16</th>
                          <td><input size="2" step="any" type="text" v-model="par16"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp16"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">17</th>
                          <td><input size="2" step="any" type="text" v-model="par17"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp17"></td>                            
                        </tr>
                        <tr class="table-secondary">
                          <th scope="row">18</th>
                          <td><input size="2" step="any" type="text" v-model="par18"></td>
                          <td><input size="2" step="any" type="text" v-model="hdcp18"></td>                            
                        </tr>
                      </tbody>
                    </table>                            
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn  btn-primary ">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
          <div class="container">
            <div class="text-center">
              <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Edit Round</h1>
              <h3 text-primary>{{round.name}}</h3>
              <p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7"></p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card card-hero animated fadeInUp animation-delay-7">
            <div class="card-body">
              <form class="form-horizontal" v-on:submit.prevent="submit()">
                <fieldset class="container">
                  <div class="form-group row">
                    <label for="inputEmail" autocomplete="false" class="col-lg-2 control-label">Name</label>
                    <div class="col-lg-9">
                      <input type="text" class="form-control" id="inputName"  v-model="round.name">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail" autocomplete="false" class="col-lg-2 control-label">Format</label>
                    <div class="col-lg-9">
                      <input type="email" class="form-control" id="inputEmail" placeholder="Format" v-model="round.format">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail" autocomplete="false" class="col-lg-2 control-label">Course</label>
                    <div class="col-lg-9">
                      <input list="courses" type="text" class="form-control" id="inputSubject" placeholder="Course" v-model="round.course.id">
                    </div>
                  </div>
                  <div class="form-group row justify-content-end">
                    <div class="col-lg-10">
                      <button type="submit" class="btn btn-raised btn-primary">Edit Round</button>
                      <button type="button" class="btn btn-danger" v-on:click="$router.go(-1)">Cancel</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="card card-primary">
            <div class="row">
              


            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-4 col-md-5">
                <div class="card-body wow fadeInUp">

                  <div class="mb-2">
                    <span class="ms-logo ms-logo-sm mr-1">TnT</span>
                    <h3 class="no-m ms-site-title"><span>Courses</span></h3>
                    <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#courseAdd"><i class="zmdi zmdi-account"></i>Add</a>
                  </div>
                  <address class="no-mb">
                    <div v-for="course in courses">

                    <p><i class="color-danger zmdi zmdi-pin mr-1"></i>
                      <router-link :to="'/courses/' + course.id + '/edit'"> {{course.id}} {{course.name}} - {{course.location || "Location Unknown"}}</router-link>
                    </p>
                    </div>
                    <!-- <p><i class="color-danger-light zmdi zmdi-pin mr-1"></i> 795 Folsom Ave, Suite 600</p>
                    <p><i class="color-warning-light zmdi zmdi-map mr-1"></i> San Francisco, CA 94107</p>
                    <p><i class="color-info-light zmdi zmdi-email mr-1"></i> <a href="mailto:joe@example.com">example@domain.com</a></p>
                    <p><i class="color-royal-light zmdi zmdi-phone mr-1"></i>+34 123 456 7890 </p>
                    <p><i class="color-success-light fa fa-fax mr-1"></i>+34 123 456 7890 </p> -->
                  </address>
                </div>
              </div>
              <!-- <div class="col-xl-9 col-lg-8 col-md-7">
                <iframe width="100%" height="340" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48342.06480344582!2d-73.980069429762!3d40.775680208459505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral+Park!5e0!3m2!1sen!2sus!4v1491233314840"></iframe>
              </div> -->
            </div>
          </div>
        </div>
          
        <div class="btn-back-top">
          <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
        </div>
      </div>


      <datalist id="courses">
        <option v-for="course in courses">{{ course.id }} {{ course.name }}</option>
      </datalist>
  </div>
  
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      round: {},
      errors: [],
      courses: [],
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
      hdcp18: ""
    };
  },
  created: function() {
    axios.get("/api/courses").then(response => {
      console.log(response.data);
      this.courses = response.data;
    }),
    axios.get("/api/rounds/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.round = response.data;
    })
  },
  methods: {
    submit: function() {
      $('#button').submit(function(e) {
              e.preventDefault();
              // Coding
              $('#courseAdd').modal('toggle'); //or  $('#IDModal').modal('hide');
             
          });

      var params = {
        name: this.round.name,
        course_id: this.round.course.id
      };

      axios.patch("/api/rounds/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.$router.push("/rounds/" + this.round.id);
      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    },
   
    addCourse: function() {
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
        this.courses.push(response.data);
        // this.$router.push("/rounds/new");
      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    }

  }
};
</script>