<template>
  <div class="home">
    
  
  </div>
</template>

<style>
</style>

<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      users: [],
      admin: false,
      currentUser: {},
      rounds: [],
      sortAttribute: 'name',
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      console.log("users", response.data);
      this.users = response.data;
    });
    axios.get("/api/rounds").then(response => {
      console.log("rounds", response.data);
      this.rounds = response.data;
    });
    axios.get("/api/users/1").then(response => {
      console.log("users", response.data);
      this.currentUser = response.data;
    });
  },
  methods: {
  }
}
</script>