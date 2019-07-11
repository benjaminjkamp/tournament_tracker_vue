<template>
  <div class="rounds-new">
    
    <div class="ms-site-container">

      <!-- Course Add Modal Component -->
      <ModalCourseAdd :mapKey="mapKey" :courseName="courseName" :address="address" @addCourse="addCourse" />      

      <!-- Round Edit Header -->
      <div class="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
        <div class="container">
          <div class="text-center">
            <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Edit Round Info</h1>
            <h3 text-primary></h3>
            <p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">{{round.name}}</p>
          </div>
        </div>
      </div>

      <!-- Round Edit Form -->
      <div class="container">
        <div class="card card-hero animated fadeInUp animation-delay-2">
          <div class="card-body">
            <form class="form-horizontal" v-on:submit.prevent="submit()">
              <fieldset class="container">
                <div class="form-group row">
                  <label for="inputName" autocomplete="false" class="col-lg-2 control-label">Name</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" id="inputName"  v-model="round.name">
                  </div>
                </div>
                
                
                <div class="form-group row">
                  <label for="inputFormat" autocomplete="false" class="col-lg-2 control-label">Format</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" id="inputFormat" placeholder="Format" v-model="round.format">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputCourse" autocomplete="false" class="col-lg-2 control-label">Course</label>
                  <div class="col-lg-9">
                    <input list="courses" type="text" class="form-control" id="inputCourse" placeholder="Course" v-model="round.course.id">
                  </div>
                </div>
                <div class="form-group row justify-content-end">
                  <div class="col-lg-10">
                    <button type="submit" class="btn btn-raised btn-primary">Edit Round</button>
                    <router-link :to="'/rounds/' + round.id">
                      <button type="button" class="btn btn-danger">
                        Cancel
                      </button>
                    </router-link>
                    
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div> <!-- end form -->
        
      </div>
        
      <!-- Course Info Card Component -->
      <div class="container">
        <CourseInfoCard :mapKey="mapKey" :courses="courses" :location="location" @changeLocation="changeLocation" />
      </div>

     <!--  <div class="btn-back-top">

        <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
      </div> -->

    </div> <!-- End Site Container -->

    <!-- Course Data List -->
    <datalist id="courses">
      <option v-for="course in courses">
        {{ course.id }} {{ course.name }}
      </option>
    </datalist>

  </div>
  
</template>

<style>
  #courseList{
    overflow: scroll;
    max-height: 300px;
    max-width: 1000px;
  }
  
</style>

<script>
import CourseInfoCard from "../../components/CourseInfoCard.vue";
import ModalCourseAdd from "../../components/ModalCourseAdd.vue";
import axios from "axios";
export default {
  components: {
    CourseInfoCard,
    ModalCourseAdd
  },
  
  data: function() {
    return {
      round: {},
      errors: [],
      courses: [],
      courseName: "golf",
      address: "Michigan",
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
      mapKey: "",
      zoom: 5,
      location: "golf+club+michigan",
     
    };
  },
  created: function() {
    axios.get("/api/courses").then(response => {
      console.log("courses", response.data);
      this.courses = response.data;
    });
    axios.get("/api/rounds/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.round = response.data;
    });
    this.mapKey = process.env.VUE_APP_MAP_KEY;
  },
  mounted: function() {
  
  },
  methods: {
    submit: function() {
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
        location: this.address,
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
    changeLocation: function(courseAddress) {
     
      this.location = courseAddress

    }


  }
};
</script>