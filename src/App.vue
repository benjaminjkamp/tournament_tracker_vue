<template>
  <div id="app">
  
    <div id="ms-preload" class="ms-preload">
      <div id="status">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
    </div>
    <div class="ms-site-container" id="background">
      <!-- Account Modal -->
      <div class="modal modal-dark" id="ms-account-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header d-block shadow-2dp no-pb">
              <button type="button" class="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
              <div class="modal-title text-center">
                
                <h1 class=" animated fadeInRight animation-delay-6"><strong>Great<span class="color-"><strong>Northern</strong></span>Classic </strong></h1>
                <span class="ms-logo ms-logo-white ms-logo-sm mr-1">GnC</span>
              </div>
              <div class="modal-header-tabs" v-model="tabIndex">
                <ul class="nav nav-tabs nav-tabs-full nav-tabs-2 nav-tabs-light" role="tablist" v-model="tabIndex">
                  <li class="nav-item" role="presentation"><a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" class="nav-link text-dark active withoutripple"><i class="zmdi zmdi-account"></i> Login</a></li>
                  <li class="nav-item" role="presentation"><a href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" class="nav-link text-dark withoutripple"><i class="zmdi zmdi-account-add"></i> Register</a></li>
                  <!-- <li class="nav-item" role="presentation"><a href="#ms-recovery-tab" aria-controls="ms-recovery-tab" role="tab" data-toggle="tab" class="nav-link withoutripple"><i class="zmdi zmdi-key"></i> Recovery Pass</a></li> -->
                </ul>
              </div>
            </div>
            <div class="modal-body" v-model="tabIndex">
              <div class="tab-content" v-model="tabIndex">
                <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab" v-model="tabIndex">
                  <form v-on:submit.prevent="login()">
                    <fieldset>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user">Email</label>
                          <input type="text" id="ms-form-user" class="form-control" v-model="email">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" class="form-control" v-model="password">
                        </div>
                        <div class="input-group">
                                                    
                        </div>
                      </div>
                      <div class="row mt-2">
                        {{errors[0]}}
                        <!-- <div class="col-md-8"> -->
                          <!-- <div class="form-group no-mt"> -->
                            <!-- <div class="checkbox">
                              <label>
                                <input type="checkbox"> Remember Me 
                              </label>
                            </div>
                          </div> -->
                        <!-- </div> -->
                        <!-- <div class="col-md-4 "> -->
                          <button type="submit" class="btn btn-raised btn-block btn-black pull-right">Login</button>
                        <!-- </div> -->
                      </div>
                    </fieldset>
                  </form>
                  <div class="text-center">
                    <h3>Login with</h3>
                    <!-- <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-facebook"><i class="zmdi zmdi-facebook"></i> Facebook</a>
                    <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-twitter"><i class="zmdi zmdi-twitter"></i> Twitter</a> -->
                    <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-google"><i class="zmdi zmdi-google"></i> Google</a>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="ms-register-tab">
                  <form autocomplete="off" v-on:submit.prevent="signup()">
                    <fieldset>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user-r">First Name</label>
                          <input type="text" id="ms-form-user-r" class="form-control" v-model="firstName">
                        </div>                       
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user-r">Last Name</label>
                          <input type="text" id="ms-form-user-r" class="form-control" v-model="lastName">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-email"></i></span>
                          <label class="control-label" for="ms-form-email-r">Email</label>
                          <input type="email" id="ms-form-email-r" class="form-control" v-model="email">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-phone"></i></span>
                          <label class="control-label" for="ms-form-email-r">Phone Number</label>
                          <input type="text" id="ms-form-email-r" class="form-control" v-model="phoneNumber">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass-r">Password</label>
                          <input type="password" id="ms-form-pass-r" class="form-control" v-model="password">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass-rn">Re-type Password</label>
                          <input type="password" id="ms-form-pass-rn" class="form-control" v-model="passwordConfirmation">
                        </div>
                      </div>
                      <button class="btn btn-raised btn-block btn-primary">Register Now</button>
                    </fieldset>
                  </form>
                </div>
                <!-- <div role="tabpanel" class="tab-pane fade" id="ms-recovery-tab">
                  <fieldset>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                        <label class="control-label" for="ms-form-user-re">Username</label>
                        <input type="text" id="ms-form-user-re" class="form-control">
                      </div>
                    </div>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-email"></i></span>
                        <label class="control-label" for="ms-form-email-re">Email</label>
                        <input type="email" id="ms-form-email-re" class="form-control">
                      </div>
                    </div>
                    <button class="btn btn-raised btn-block btn-primary">Send Password</button>
                  </fieldset>
                  </form>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- New Tournament Modal -->
      <div class="modal modal-dark" id="new-tournament-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header d-block shadow-2dp no-pb">
              <button type="button" class="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
              <div class="modal-title text-center">
                
                <h3 class="no-m ms-site-title">Tournament<span>Tracker</span></h3>
                <span class="ms-logo ms-logo-white ms-logo-sm mr-1">TnT</span>

                <h4>New Tournament</h4>
              </div>
              <div class="modal-header-tabs text-center" v-model="tabIndex">

                <ul class="nav nav-tabs nav-tabs-full nav-tabs-light" role="tablist" v-model="tabIndex">
                  <li class="nav-item text-dark active" role="presentation">
                    <!-- <a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" class="nav-link text-dark active withoutripple"> -->
                       
                      Name Your New Tournament
                    <!-- </a> -->
                  </li>
                  </ul>
              </div>
            </div>
            <div class="modal-body" v-model="tabIndex">
              <div class="tab-content" v-model="tabIndex">
                <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab" v-model="tabIndex">
                  <form autocomplete="off" v-on:submit.prevent="addTournament()">
                    <fieldset>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user">Name</label>
                          <input type="text" id="ms-form-user" class="form-control" v-model="newTournamentName">
                        </div>
                      </div>
                      <div class="row mt-2">
                        <button type="submit" class="btn btn-raised btn-block btn-black pull-right">Create Tournament</button>
                      </div>
                    </fieldset>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--ms-header-dark-->
      <header class="ms-header ms-header-dark">

        
        <div class="container container-full">

          <div class="ms-title">

          <!--   <a v-if="isLogged()" href="javascript:void(0)" class="btn-circle-white ms-toggle-left zoomInDown animation-delay-10">
              <h1 class="animated fadeInRight animation-delay-6">Tournament<span>Tracker</span></h1>
            </a>
            <a v-if="isLogged()" href="javascript:void(0)" class="btn-circle-dark ms-toggle-left zoomInDown animation-delay-10"><span class="ms-logo animated zoomInDown animation-delay-5">TnT</span></a> -->
            <span class="btn-circle-white ms-toggle-left zoomInDown animation-delay-10">
              <router-link to="/">
                <h1 class=" animated fadeInRight animation-delay-6"><strong>Great <span class="color-"><strong>Northern</strong></span> Classic </strong></h1>
              </router-link>
            </span>
            <!-- <a href="javascript:void(0)" class="btn-circle-dark ms-toggle-left zoomInDown animation-delay-10"> -->
              <span class="ms-logo ms-logo-lg animated zoomInDown animation-delay-5">GnC</span>
            <!-- </a> -->
          </div>
          
        </div>
      </header>
      <nav class="navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-white">
        <div class="container container-full">
          <div class="navbar-header">
            <!-- <a href="javascript:void(0)" class="btn-ms-menu btn-circle btn-circle-dark ms-toggle-left animated zoomInDown animation-delay-3"><i class="zmdi zmdi-menu zmdi-hc-4x"></i></a> -->
            <router-link to="/">
              <!-- <img src="assets/img/demo/logo-navbar.png" alt=""> -->
              <span class="ms-logo ms-logo-sm">GNC </span>
              <!-- <span class="ms-title"> Great<strong>Northern</strong>Classic</span> -->
            </router-link>

          </div>
          <div class="collapse navbar-collapse" id="ms-navbar">     

            <ul v-if="isLogged()" class="navbar-nav">

            
             

              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">Tournaments <i class="zmdi zmdi-chevron-down"></i></a>
                <ul class="dropdown-menu">
                  <li class="ms-tab-menu">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs ms-tab-menu-left" role="tablist">

                      
                      <li v-for="tournament in tournaments" class="nav-item">
                        <a @mouseover="setTournamentID(tournament.id)" class="nav-link" :href="'#tab-rounds-' + hoverTournament" data-hover="tab" data-toggle="tab" role="tab">
                          <strong>{{tournament.name}} </strong>
                        </a>
                      </li>

                      <li class="color-info-inverse">
                        <a class="withripple nav-item" href="component-headers.html" data-toggle="modal" data-target="#new-tournament-modal"><i class="zmdi zmdi-hc-lg zmdi-plus-circle"> </i>
                           <span> </span>
                           <strong>Create Tournament</strong>
                        </a>
                      </li>
                        
                      <!-- </ul> -->
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content ms-tab-menu-right">
                      <div class="tab-pane" :id="'tab-rounds-' + hoverTournament" role="tabpanel">
                        <ul class="ms-tab-menu-right-container">
                          <li class="color-success-inverse">
                            <router-link :to="'/tournaments/'+tournament.id+'/standings'">
                              <strong>Standings</strong>
                            </router-link>
                          </li>
                          <li v-for="round in tournament.rounds">
                            <router-link :to="'/rounds/'+round.id">
                              <strong>{{round.name}}</strong>
                            </router-link>
                          </li>
                          
                          
                        </ul>
                        <ul class="ms-tab-menu-right-container active">
                          <li class="color-info-inverse">
                            <router-link :to="'/rounds/' + tournament.id + '/new'">
                              <i class="zmdi zmdi-hc-lg zmdi-plus-circle"> </i>
                              <span class="col-lg-1"> </span>
                              <strong>Create Round</strong>
                            </router-link>
                          </li>
                          <li v-if="isAdmin()" class="color-danger-inverse">
                            <router-link :to="'/tournaments/' + tournament.id + '/edit'">
                              <i class="zmdi zmdi-hc-lg zmdi-edit"> </i>
                              <span class="col-lg-1"> </span>
                              <strong>Edit Tournament</strong>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                  </li>
                </ul>
              </li>
              
              <li class="nav-item dropdown active">
                <router-link :to="'/tournaments/' + latestTournament + '/standings'" class="nav-link animated fadeIn animation-delay-7" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">
                  Standings 
                  <!-- <i class="zmdi zmdi-chevron-down"></i> -->
                </router-link>
                <router-link v-if="isAdmin()" to="/users" class="nav-link animated fadeIn animation-delay-7" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">
                  Players 
                  <!-- <i class="zmdi zmdi-chevron-down"></i> -->
                </router-link>
                
                <ul class="dropdown-menu">
                  <li class="ms-tab-menu">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs ms-tab-menu-left" role="tablist">
                    </ul>
                    <!-- Tab panes -->
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="header-right">
            
            <a v-if="!isLogged()" href="javascript:void(0)" class="btn-circle btn-circle-dark no-focus animated zoomInDown animation-delay-4" data-toggle="modal" data-target="#ms-account-modal"><i class="zmdi zmdi-account"> <strong> Login</strong></i></a>
            <!-- <div v-if="!isLogged()" class="btn-group">
                <a href="javascript:void(0)" type="button" class="btn btn-grey btn-raised dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-left dropdown-menu-white">
                    <li class="dropdown-header">{{currentUser.name}}</li>
                    <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
                    <li role="separator" class="dropdown-divider"></li>
                    <li><a href="javascript:void(0)" class="" data-toggle="modal" data-target="#ms-account-modal">Sign Up</a></li>
                    
                    
                </ul>
                
            </div> -->
            <!-- <i v-if="isLogged()" class="zmdi zmdi-account"></i> -->

            <span >

              <div v-if="isLogged()" class="btn-group">
                  <button type="button" class="btn btn-grey btn-raised dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-left dropdown-menu-white">
                      <li class="dropdown-header">{{currentUser.name}}</li>
                      <li><router-link class="dropdown-item" to="/users/me/edit">Edit Profile</router-link></li>
                      <li role="separator" class="dropdown-divider"></li>
                      <li><router-link v-on:click="isAdmin()" class="dropdown-item" to="/logout">Logout</router-link></li>
                  </ul>
                  <button v-if="isLogged()" type="button" class="btn btn-white btn-raised" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{currentUser.name}}</button>
              </div>

            </span>

            
          </div>
         <!--  <a href="javascript:void(0)" class="ms-toggle-left btn-navbar-menu"><i class="zmdi zmdi-menu"></i></a> -->
        </div> <!-- container -->
      </nav>

      <div class="btn-back-top">
        <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-white btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
      </div>
    </div> <!-- ms-site-container -->

    <div>
      <router-view :key="$route.fullPath"/>
    </div>


  <Footer/>    

  </div>
</template>

<style>

  .ms-header.ms-header-dark{
    background-color: #424242;
    /*background-image: url("./assets/islandShot.jpg");*/
  }
  
  .ms-site-container, .ms-slidebar {
    background-image: url("../public/assets/img/papyrus-dark/papyrus-dark.png");
    /*padding-top: 0px;*/
  }

  .panel-body, .card-body, .ms-slidebar-login{
    background-image: url("../public/assets/img/papyrus/papyrus.png");
  }
    
  .card-body {

  }

  .bolder {
    font-weight: bolder;
  }

  #app {
    background-image: url("../public/assets/img/papyrus-dark/papyrus-dark.png");
    /*padding-top: 0px;*/
  }

  #link-standings{
    font-weight: 650;
  }
  #link-add-round{
    font-weight: 650;
  }

</style>

<script>
// import Vue2Filters from "vue2-filters";
import axios from "axios";
import Footer from './components/Footer.vue';
export default {
  components: {
    Footer
  },
  // mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      hoverTournament: 1,
      latestTournament: "",
      newTournamentName: "",
      tournament: {},
      tournaments: [],
      rounds: [],
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
      currentUser: {},
      userID: "",
      currentUserName: "",
      logo1: "Tournament",
      logo2: "Tracker",
      componentKey: 0,
      tabIndex: 0,
      admin: false,
      tabs: ['#ms-register-tab', '#ms-login-tab'],
      mapKey: process.env.VUE_APP_MAP_KEY,
      errors: []
    };
  },
  mounted() {
    this.tabIndex = this.tabs.findIndex(tab => tab === this.$route.hash);
    
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      console.log("user", response.data);
      this.currentUser = response.data;
      if (this.currentUser.admin) {
        this.admin = true;
      }
    })
    axios.get("/api/rounds").then(response => {
      console.log("rounds", response.data);
      this.rounds = response.data;
    }),
    
    axios.get("/api/tournaments").then(response => {
      console.log("tournaments", response.data);
      this.tournaments = response.data;
      this.latestTournament = this.tournaments;
      this.latestTournament = this.latestTournament.slice(-1)[0].id;
      this.tournament = this.tournaments[this.tournaments.length-1];
      console.log("tournament on created", this.tournament);
      
    })
  },
  methods: {
    setTournamentID: function(id){
      this.hoverTournament = id;
      var index = this.tournaments.findIndex(tournament => tournament.id === id);
      console.log("index", index);
      this.tournament = this.tournaments[index];
      console.log("tournaments array", this.tournaments);
      console.log("hover tournament", this.tournament);
    },
    signup: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone_number: this.phoneNumber,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      console.log(params);
      axios
        .post("/api/users", params)
        .then(response => {
          console.log("test");
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    refreshUser: function(id){
      console.log(id);
      axios
        .get("/api/users/" + id)
        .then(response => {
          this.currentUser = response.data;
          console.log("Current User after Login", response.data);
        })
    },
    login: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;

          var d = new Date();
          var expiration = d.getTime()+86340000;
          var date = new Date(expiration);
          console.log("date", date);
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("expiration", expiration);
          this.userID = response.data.user_id;
          var userID = response.data.user_id;
          
          console.log("logged in", response.data);
          console.log("session expires at", (date));
          if (response.data.admin){
            this.admin = true;
          } else {
            this.admin = false;
          }
          // this.currentUser = response.data;
          // this.$router.push("users/me/edit");
          // this.$router.push("/");
          
          $('#ms-account-modal').modal('hide');
          var id = this.tournaments[this.tournaments.length - 1].id
          console.log("id", id);
          this.refreshUser(userID);
          this.$router.push("/tournaments/" + id + "/standings");
          
          // location.reload();
        })
        .catch(error => {
          // console.log(error.response.data.errors);
          this.errors = ["Invalid email or password."];
          this.errors.push(error);
          this.email = "";
          this.password = "";
          console.log(this.errors);
        });

      
    },
    addTournament: function() {
      var params = {
        name: this.newTournamentName      
      };
      axios
        .post("/api/tournaments", params)
        .then(response => {
          console.log("tournament", response.data);
          this.tournament = response.data;
          $('#new-tournament-modal').modal('hide');
          this.$router.push("/tournaments/" + this.tournament.id + "/standings")
          location.reload();
        })
        .catch(error => {
          this.errors = error.response.data;
          console.log(this.errors);
        });
    },
    isCommissioner: function(){
      if (this.currentUser.id === this.tournament.commissioner.id){
        console.log("commissioner");
        return true;
      } else {
        console.log("not commissioner");
        return false;
      }
    },
    isAdmin: function(){
      if (this.currentUser.admin){
        this.admin = true;
        return true;
      } else {
        this.admin = false;
        return false;
      }
    },
    isLogged: function() {
      var d = new Date();
      var date = d.getTime();
      if (localStorage.getItem('expiration') > date && localStorage.getItem('jwt')) {
        return true;

      } else {
        localStorage.removeItem("jwt");
        localStorage.removeItem("expiration");
        if (this.$router.currentRoute.fullPath !== "/" && this.$router.currentRoute.fullPath !== "/signup"){

          this.$router.push("/");
          return false;
        }
      }
    }

    
  }
};
</script>