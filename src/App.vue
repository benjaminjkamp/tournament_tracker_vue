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
    <div class="ms-site-container">
      <!-- Modal -->
      <div class="modal modal-dark" id="ms-account-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header d-block shadow-2dp no-pb">
              <button type="button" class="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
              <div class="modal-title text-center">
                
                <h3 class="no-m ms-site-title">Tournament<span>Tracker</span></h3>
                <span class="ms-logo ms-logo-white ms-logo-sm mr-1">TnT</span>

                <h4>{{currentUser.name || "Tournament Tracker"}}</h4>
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
                  <form autocomplete="off" v-on:submit.prevent="login()">
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
                      </div>
                      <div class="row mt-2">
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
      <header class="ms-header ms-header-white">

        <!--ms-header-dark-->
        <div class="container container-full">

          <div class="ms-title">

            <!-- <router-link to="/"> -->
              <!-- <img src="assets/img/demo/logo-header.png" alt=""> -->
             <!--  <span class="ms-logo animated zoomInDown animation-delay-5">TnT</span> -->
            <a href="javascript:void(0)" class="btn-circle-primary ms-toggle-left zoomInDown animation-delay-10">
              <h1 class="animated fadeInRight animation-delay-6">Tournament<span>Tracker</span></h1>
            </a>
            <!-- </router-link> -->
            <a href="javascript:void(0)" class="btn-circle-primary ms-toggle-left zoomInDown animation-delay-10"><span class="ms-logo animated zoomInDown animation-delay-5">TnT</span></a>
          </div>
          
        </div>
      </header>
      <nav class="navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-dark">
        <div class="container container-full">
          <div class="navbar-header">
            <a href="javascript:void(0)" class="btn-ms-menu btn-circle btn-circle-white ms-toggle-left animated zoomInDown animation-delay-3"><i class="zmdi zmdi-menu zmdi-hc-4x"></i></a>
            <a class="navbar-brand btn-ms-menu ms-toggle-left" href="javascript:void(0)">
              <!-- <img src="assets/img/demo/logo-navbar.png" alt=""> -->
              <span class="ms-logo ms-logo-sm">TnT</span>
              <span class="ms-title">Tournament<strong>Tracker</strong></span>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="ms-navbar">     

            <ul class="navbar-nav">

              <!-- slidebar toggle -->
              <a href="javascript:void(0)" class="btn-ms-menu btn-circle btn-circle-white ms-toggle-left animated zoomInDown animation-delay-10"><i class="zmdi zmdi-menu zmdi-hc-4x"></i></a>
              
              <li class="nav-item dropdown active">
                <router-link to="/" class="nav-link animated fadeIn animation-delay-7" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">
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
           <!--  <div class="share-menu">
              <ul class="share-menu-list">
                <li class="animated fadeInRight animation-delay-3"><a href="javascript:void(0)" class="btn-circle btn-google"><i class="zmdi zmdi-google"></i></a></li>
                <li class="animated fadeInRight animation-delay-2"><a href="javascript:void(0)" class="btn-circle btn-facebook"><i class="zmdi zmdi-facebook"></i></a></li>
                <li class="animated fadeInRight animation-delay-1"><a href="javascript:void(0)" class="btn-circle btn-twitter"><i class="zmdi zmdi-twitter"></i></a></li>
              </ul>
              <a href="javascript:void(0)" class="btn-circle btn-circle-primary animated zoomInDown animation-delay-7"><i class="zmdi zmdi-share"></i></a>
            </div> -->
           <!--  <form class="search-form animated zoomInDown animation-delay-9">
              <input id="search-box" type="text" class="search-input" placeholder="Search..." name="q" />
              <label for="search-box"><i class="zmdi zmdi-search"></i></label>
            </form> -->
            <a v-if="!isLogged()" href="javascript:void(0)" class="btn-circle btn-circle-white no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal"><i class="zmdi zmdi-account"></i></a>
            <!-- <i v-if="isLogged()" class="zmdi zmdi-account"></i> -->
            <span v-if="isLogged()">

              <div class="btn-group">
                  <button type="button" class="btn btn-grey btn-raised dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-left dropdown-menu-white">
                      <li class="dropdown-header">{{currentUser.name}}</li>
                      <li><a class="dropdown-item" href="/users/edit">Edit Profile</a></li>
                      <li role="separator" class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="/logout">Logout</a></li>
                  </ul>
                  <button type="button" class="btn btn-white btn-raised" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{currentUser.name}}</button>
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


    <router-view :key="$route.fullPath"/>


    <div class="ms-slidebar  sb-left sb-style-overlay" id="ms-slidebar">
      <div class="sb-slidebar-container">
        <header class="ms-slidebar-header">
          <div v-if="!isLogged()" class="ms-slidebar-login">
            <h3>
              <a href="javascript:void(0)" class="withripple" data-toggle="modal" data-target="#ms-account-modal">
                <i class="zmdi zmdi-account"></i> Login
              </a>
            </h3>
            <!-- <router-link to="signup" class="withripple"> -->
           <!--  <a href="#ms-register-tab" class="withripple modal-toggle" data-toggle="modal" data-target="#ms-account-modal">
              <i class="zmdi zmdi-account-add"></i> Register
            </a> -->
            <!-- </router-link> -->
          </div>
          <div v-if="isLogged()" class="ms-slidebar-login">
            <router-link to="/users/edit" class="withripple"><i class="zmdi zmdi-account"></i> Profile</router-link>
            <router-link to="/logout" class="withripple"><i class="zmdi zmdi-sign-in"></i> Logout</router-link>
            
          </div>
          <div class="ms-slidebar-title">
            <form class="search-form">
              <input id="search-box-slidebar" type="text" class="search-input" placeholder="Search..." name="q" />
              <label for="search-box-slidebar"><i class="zmdi zmdi-search"></i></label>
            </form>
            <div class="ms-slidebar-t">
              <h3 class="no-m ms-site-title"><b v-if="currentUser.id == null">{{logo1}}</b><big><span>{{currentUser.name || logo2}}</span></big></h3>
              <span class="ms-logo ms-logo-sm">TnT</span>
            </div>
          </div>
        </header>
        <ul class="ms-slidebar-menu" id="slidebar-menu" role="tablist" aria-multiselectable="true">
          <li class="card" role="tab" id="sch1">
            <a class="collapsed" role="button" data-toggle="collapse" href="#sc1" aria-expanded="false" aria-controls="sc1">
              <i class="zmdi zmdi-home"></i> GNC Tournament </a>
            <ul id="sc1" class="card-collapse collapse" role="tabpanel" aria-labelledby="sch1" data-parent="#slidebar-menu">
              <li>
                <router-link to="/rounds/new" >
                  <i class="zmdi zmdi-hc-lg zmdi-plus-circle">
                    Add Round
                  </i>
                </router-link>
              </li>
              <div v-for="round in rounds">
                <li><router-link :to="'/rounds/' + round.id">{{round.name}}</router-link></li>
              </div>
            </ul>
          </li>

          <!-- add tournament functionality -->
        <!--   <li class="card" role="tab" id="sch2">
            <a class="collapsed" role="button" data-toggle="collapse" href="#sc2" aria-expanded="false" aria-controls="sc2">
              <i class="zmdi zmdi-desktop-mac"></i> New Tournament </a>
            <ul id="sc2" class="card-collapse collapse" role="tabpanel" aria-labelledby="sch2" data-parent="#slidebar-menu">
              <li><a href="/">Home</a></li>
            </ul>
          </li> -->
          
        </ul>
        <!-- <div class="ms-slidebar-social ms-slidebar-block">
          <h4 class="ms-slidebar-block-title">Social Links</h4>
          <div class="ms-slidebar-social">
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-facebook"><i class="zmdi zmdi-facebook"></i> <span class="badge-pill badge-pill-pink">12</span>
              <div class="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-twitter"><i class="zmdi zmdi-twitter"></i> <span class="badge-pill badge-pill-pink">4</span>
              <div class="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-google"><i class="zmdi zmdi-google"></i>
              <div class="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-instagram"><i class="zmdi zmdi-instagram"></i>
              <div class="ripple-container"></div>
            </a>
          </div>
        </div> -->
      </div>
    </div>
    
  </div>
</template>

<style>

</style>

<script>
// import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  // mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      rounds: [],
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
      currentUser: {},
      logo1: "Tournament",
      logo2: "Tracker",
      componentKey: 0,
      tabIndex: 0,
      tabs: ['#ms-register-tab', '#ms-login-tab']
    };
  },
  mounted() {
    this.tabIndex = this.tabs.findIndex(tab => tab === this.$route.hash)
  },
  created: function() {
    axios.get("/api/rounds").then(response => {
      console.log("rounds", response.data);
      this.rounds = response.data;
    }),
    axios.get("/api/users/1").then(response => {
      console.log("users", response.data);
      this.currentUser = response.data;
    })
  },
  methods: {
    signup: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone_number: this.phoneNumber,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          // this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
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
          localStorage.setItem("jwt", response.data.jwt);
          $('#ms-account-modal').modal('hide');
          // this.$router.push("/");
          
          location.reload();
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
    isLogged: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    },
    forceRerender() {
      this.componentKey += 1;  
    },

    
  }
};
</script>