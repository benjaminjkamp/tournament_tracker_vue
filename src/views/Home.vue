<template>
  <div class="home">
    <div class="ms-site-container">
      <!-- <img class="image" src="../assets/downhill.jpg"> -->

      <div class="ms-hero-page-override ms-hero-img-city ">
        <div class="container">
          <div class="text-center">
            <span class="btn-circle-white ms-toggle-left zoomInDown animation-delay-10">
              </span>
          </div>
          <div><br><br><br><br><br><br><br></div>
        </div>
      </div>
      <div v-if="!disabled" class="container">
        <div class="row justify-content-md-center">
          <div class="col-lg-6">
            <div class="card card-hero card-primary animated fadeInUp animation-delay-7">
              <div class="card-body">
                <h1 class="color-success text-center"><strong>Login</strong></h1>
                <form v-on:submit.prevent="login()" class="form-horizontal">
                  <fieldset>
                    <div class="form-group row is-empty">
                      <label for="inputEmail" class="col-md-3 control-label"><strong>Email</strong></label>
                      <div class="col-md-9">
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="email">
                      </div>
                    </div>
                    <div class="form-group row is-empty">
                      <label for="inputPassword" class="col-md-3 control-label"><strong>Password</strong></label>
                      <div class="col-md-9">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="password">
                      </div>
                    </div>
                  </fieldset>

                  <button type="submit" class="btn btn-raised btn-success btn-block"><strong>Login </strong><i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i></button>

                  <router-link to="/signup"><span class="btn btn-raised btn-info btn-block"><strong>Register </strong><i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i></span></router-link>
                </form>
                
                <!-- <div class="text-center mt-4">
                  <h3>Login with</h3>
                  <a href="javascript:void(0)" class="btn-circle btn-facebook"><i class="zmdi zmdi-facebook"></i></a>
                  <a href="javascript:void(0)" class="btn-circle btn-twitter"><i class="zmdi zmdi-twitter"></i></a>
                  <a href="javascript:void(0)" class="btn-circle btn-google"><i class="zmdi zmdi-google"></i></a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div> 

    </div>
  </div>
</template>

<style>
  .image {
    height: 800px;
    width: 700px;
  }
</style>

<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      users: [],
      errors: [],
      tournaments: [],
      userID: "",
      admin: false,
      currentUser: {},
      rounds: [],
      sortAttribute: 'name',
      sortAscending: 1,
      email: "",
      password: "",
      disabled: true
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