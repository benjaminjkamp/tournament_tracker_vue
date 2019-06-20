<template>
  <div class="rounds-new">
    <br><br>
    Year: <input type="text" v-model="newRoundYear"><br>
    Format: <input type="text" v-model="newRoundFormat"><br>
    Course ID: <input type="text" v-model="newRoundCourseID"><router-link to="/courses/new"><button>Add Course</button></router-link><br>
    <br><br>
    <button type="submit" v-on:click="submit()">Add Round</button><router-link to="/"><button>Cancel</button></router-link>
    <br><br><br><br>
    <h4>Courses</h4>
    <div v-for="course in courses">

     <router-link :to="'/courses/' + course.id + '/edit'"> {{course.id}} {{course.name}} </router-link>
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
      round: {},
      errors: [],
      newRoundYear: "",
      newRoundFormat: "",
      newRoundCourseID: "",
      courses: []
    };
  },
  created: function() {
    axios.get("/api/courses").then(response => {
      this.courses = response.data;
    })
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
    }

  }
};
</script>