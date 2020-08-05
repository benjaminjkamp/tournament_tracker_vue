<template>
  <header class="ms-header ms-header-white">

    
    <div class="container container-full">

      <div class="ms-title">

        <a href="javascript:void(0)" class="btn-circle-primary ms-toggle-left zoomInDown animation-delay-10">
          <h1 class="animated fadeInRight animation-delay-6">Tournament<span>Tracker</span></h1>
        </a>
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
            <router-link :to="'/tournaments/' + latestTournament + '/standings'" class="nav-link animated fadeIn animation-delay-7" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">
              Standings 
              <!-- <i class="zmdi zmdi-chevron-down"></i> -->
            </router-link>
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
       
        <a v-if="!isLogged()" href="javascript:void(0)" class="btn-circle btn-circle-white no-focus animated zoomInDown animation-delay-4" data-toggle="modal" data-target="#ms-account-modal"><i class="zmdi zmdi-account"></i></a>
        <!-- <i v-if="isLogged()" class="zmdi zmdi-account"></i> -->
        <span v-if="isLogged()">

          <div class="btn-group">
              <button type="button" class="btn btn-grey btn-raised dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="zmdi zmdi-account zmdi-hc-lg"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-left dropdown-menu-white">
                  <li class="dropdown-header">{{currentUser.name}}</li>
                  <li><router-link class="dropdown-item" to="/users/edit">Edit Profile</router-link></li>
                  <li role="separator" class="dropdown-divider"></li>
                  <li><router-link class="dropdown-item" to="/logout">Logout</router-link></li>
              </ul>
              <button type="button" class="btn btn-white btn-raised" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{currentUser.name}}</button>
          </div>

        </span>

        
      </div>
     <!--  <a href="javascript:void(0)" class="ms-toggle-left btn-navbar-menu"><i class="zmdi zmdi-menu"></i></a> -->
    </div> <!-- container -->
  </nav>
</template>

<script>
  export default {
    props: {
      
    },
    methods: {
      addCourse: function() {
        var params = {
          name: this.courseName,
          location: this.address
        }
        this.$emit("addCourse", params)
      },
      isLogged: function() {
        if (localStorage.getItem('jwt')) {
          return true;
        } else {
          return false;
        }
      }
      // changeLocation: function(course) {
      //   this.$emit("changeLocation", course);
      // }
    }
  }
</script>