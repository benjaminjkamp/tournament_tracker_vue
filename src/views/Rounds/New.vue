<template>

  <div class="rounds-new">
    
    <div class="ms-site-container">

      <div class="modal modal-primary" id="courseAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-dialog-centered animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <form v-on:submit.prevent="addCourse()">
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
                
                <button type="submit" class="btn btn-raised btn-primary btn-block">Add Course</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    
      <div class="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
        <div class="container">
          <div class="text-center">
            <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">New Round</h1>
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
                  <label for="inputEmail" autocomplete="false" class="col-lg-2 control-label">Year</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" id="inputName" placeholder="Year" v-model="newRoundYear">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="format" autocomplete="false" class="col-lg-2 control-label">Format</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" id="format" placeholder="Format" v-model="newRoundFormat">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail" autocomplete="false" class="col-lg-2 control-label">Course</label>
                  <div class="col-lg-9">
                    <input list="courses" type="text" class="form-control" id="inputSubject" placeholder="Course" v-model="newRoundCourseID">
                  </div>
                </div>
                <div class="form-group row justify-content-end">
                  <div class="col-lg-10">
                    <button type="submit" class="btn btn-raised btn-primary">Add Round</button>
                    <button type="button" class="btn btn-danger" v-on:click="$router.go(-1)">Cancel</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>


        <div class="card card-primary">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-5">
              <div class="card-body wow fadeInUp">
                <div class="mb-2">
                  <span class="ms-logo ms-logo-sm mr-1">TnT</span>
                  <h3 class="no-m ms-site-title"><span>Courses</span></h3>
                  <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#courseAdd"><i class="zmdi zmdi-account"></i>Add</a>
                </div>
                <address class="no-mb">





                  <div v-for="course in courses">

                  <p>
                   <!--  <router-link :to="'/courses/' + course.id + '/edit'"> {{course.id}} {{course.name}} - {{course.location || "Location Unknown"}}</router-link> -->

                   <div v-on:click="changeLocation(course.name)"><i class="color-danger-light zmdi zmdi-pin mr-1"></i> {{course.id}} {{course.name}} - {{course.location || "Location Unknown"}}</div>
                  </p>
                  </div>
                  
                </address>
              </div>
            </div>

            <!-- <div class="map">
              <h1>Map</h1>
              <div id="map"></div>
              
            </div> -->



            <div class="col-xl-9 col-lg-8 col-md-7">
              <iframe width="100%" height="340" :src="location"></iframe></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <!-- <div class="btn-back-top">
        <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
      </div> -->
    </div>


    <datalist id="courses">
      <option v-for="course in courses">{{ course.id }} {{ course.name }}</option>
    </datalist>
  </div>
  
</template>

<style>
  #map {  height: 300px; top:10px; bottom:10px; left: 10px; width: 100%; width: 500px;}

  #marker {
  background-image: url('https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  }
   
  .mapboxgl-popup {
  max-width: 200px;
  }

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      round: {},
      date: Date(),
      errors: [],
      newRoundYear: "",
      newRoundFormat: "",
      newRoundCourseID: "",
      courses: [],
      location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472406.3569906724!2d-85.08727944112829!3d43.66687359293001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4caa3dc7ca0411%3A0x97dd48597a62c9b3!2sMichigan!5e0!3m2!1sen!2sus!4v1562171994655!5m2!1sen!2sus",
      hills: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760686.0897812891!2d-87.56572928714047!3d41.862093291903236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8810c9c0756c3eb5%3A0xffce161a67e25b02!2sLake+Michigan+Hills+Golf+Club!5e0!3m2!1sen!2sus!4v1562171598315!5m2!1sen!2sus",
      moor: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477951.3202837228!2d-85.08729566294394!3d43.65599744115602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881775b0ebfe97f7%3A0xd718f55e0c79b28a!2sMoors+Golf+Club!5e0!3m2!1sen!2sus!4v1562174401947!5m2!1sen!2sus",
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
    axios.get("/api/courses").then(response => {
      this.courses = response.data;
    }),
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmprYW1wIiwiYSI6ImNqeGFseHA1cDE4MzQzdHJ2bnBjZTdsMTEifQ.BMXm7D46lgju3qldWBeDeQ';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/bjkamp/cjxam6xn23qmj1clbom6pduvy', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
  },
  methods: {
    submit: function() {
      var params = {
        year: this.newRoundYear,
        format: this.newRoundFormat,
        course_id: this.newRoundCourseID
      };

      axios.post("/api/rounds", params).then(response => {
        console.log(response.data);
        this.round = response.data;
        this.$router.push("/rounds/" + this.round.id);
      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    },
    mounted: function() {

      
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
        $('#courseAdd').modal('hide');

      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    },
    changeLocation: function(location) {
      if (location === "Hills"){
        this.location = this.hills;
      } else if (location === "Moor") {
        this.location = this.moor;
      }
      end
    }

  }
};
</script>