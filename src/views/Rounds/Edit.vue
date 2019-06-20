<template>
  <div class="rounds-new">
    <br><br>
    Name: <input type="text" v-model="round.name"><br>
    Course ID: <input type="text" v-model="round.course.id"><router-link to="/courses/new"><button>Add Course</button></router-link><br>
    <br><br>
    <button type="submit" v-on:click="submit()">Edit Round</button>
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
      courses: []
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
    }

  }
};
</script>