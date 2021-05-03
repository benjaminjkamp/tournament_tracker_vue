<template>
  <div class="users-edit">
    
    <div class="ms-site-container" id="background">
      <div class="container">
        <div class="col-lg-12 ms-paper-content-container">
          <div class="ms-paper-content">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  
                  <div class="card-tabs">
                    <ul v-if="teamColor === 'Red'" style="background-color: #f44336;" class="nav nav-tabs shadow-2dp" role="tablist">
                      
                      <li class="av-item"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-male"></i> <span class="d-none d-sm-inline">Profile</span></a></li>
                      <li v-if="this.editorAdmin" class="nav-item"><a href="#stats" aria-controls="home" role="tab" data-toggle="tab" class="withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Stats</span></a></li>
                      <li class="col-lg-3"></li>
                      <li class="col-lg-6">
                        <!-- <div class="col-lg-3 color-danger slider slider-horizontal" style="margin-bottom: 30px; background-color: red;"> -->
                          <div class="btn-group btn-group-justified btn-group-raised">
                              <a v-on:click="selectTeam('Blue')" href="#" class="btn btn-info"><strong>Blue</strong></a>
                              <a v-on:click="selectTeam('None')" href="#" class="btn btn-success">None</a>
                              <a v-on:click="selectTeam('Red')" href="#" class="btn btn-danger"><strong>Red</strong></a>
                          </div>


                        <!-- </div> -->
                      </li>

                      <li class="col-lg-1" v-if="!this.editorAdmin"></li>
                      
                      <span v-if="editorAdmin"><a v-on:click="makeAdmin()" v-if="!userAdmin" href="#"  class="btn-circle btn-circle-raised btn-circle-default"><i class="zmdi zmdi-shield-security"></i></a>
                      <a v-on:click="makeAdmin()" v-if="userAdmin" href="#" class="btn-circle btn-circle-raised btn-circle-danger"><i class="zmdi zmdi-shield-security"></i></a></span>


                    </ul>
                    <ul v-if="teamColor === 'None'" style="background-color: #4caf50;" class="nav nav-tabs shadow-2dp" role="tablist">
                      
                      <li class="av-item"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-male"></i> <span class="d-none d-sm-inline">Profile</span></a></li>
                      <li v-if="this.editorAdmin" class="nav-item"><a href="#stats" aria-controls="home" role="tab" data-toggle="tab" class="withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Stats</span></a></li>
                      <li class="col-lg-3"></li>
                      <li class="col-lg-6">
                        <!-- <div class="col-lg-3 color-danger slider slider-horizontal" style="margin-bottom: 30px; background-color: red;"> -->

                          <div class="btn-group btn-group-justified btn-group-raised">
                              <a v-on:click="selectTeam('Blue')" href="#" class="btn btn-info"><strong>Blue</strong></a>
                              <a v-on:click="selectTeam('None')" href="#" class="btn btn-success">None</a>
                              <a v-on:click="selectTeam('Red')" href="#" class="btn btn-danger"><strong>Red</strong></a>
                          </div>


                        <!-- </div> -->
                      </li>

                      <li class="col-lg-1" v-if="!this.editorAdmin"></li>
                      
                      <span v-if="editorAdmin"><a v-on:click="makeAdmin()" v-if="!userAdmin" href="#"  class="btn-circle btn-circle-raised btn-circle-default"><i class="zmdi zmdi-shield-security"></i></a>
                      <a v-on:click="makeAdmin()" v-if="userAdmin" href="#" class="btn-circle btn-circle-raised btn-circle-danger"><i class="zmdi zmdi-shield-security"></i></a></span>


                    </ul>
                    <ul v-if="teamColor == 'Blue'" style="background-color: #00bcd4;" class="nav nav-tabs shadow-2dp" role="tablist">
                      
                      <li class="av-item"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-male"></i> <span class="d-none d-sm-inline">Profile</span></a></li>
                      <li v-if="this.editorAdmin" class="nav-item"><a href="#stats" aria-controls="home" role="tab" data-toggle="tab" class="withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Stats</span></a></li>
                      <li class="col-lg-3"></li>
                      <li class="col-lg-6">
                        <!-- <div class="col-lg-3 color-danger slider slider-horizontal" style="margin-bottom: 30px; background-color: red;"> -->
                          <div class="btn-group btn-group-justified btn-group-raised">
                              <a v-on:click="selectTeam('Blue')" href="#" class="btn btn-info"><strong>Blue</strong></a>
                              <a v-on:click="selectTeam('None')" href="#" class="btn btn-success">None</a>
                              <a v-on:click="selectTeam('Red')" href="#" class="btn btn-danger"><strong>Red</strong></a>
                          </div>


                        <!-- </div> -->
                      </li>

                      <li class="col-lg-1" v-if="!this.editorAdmin"></li>
                      
                      <span v-if="editorAdmin"><a v-on:click="makeAdmin()" v-if="!userAdmin" href="#"  class="btn-circle btn-circle-raised btn-circle-default"><i class="zmdi zmdi-shield-security"></i></a>
                      <a v-on:click="makeAdmin()" v-if="userAdmin" href="#" class="btn-circle btn-circle-raised btn-circle-danger"><i class="zmdi zmdi-shield-security"></i></a></span>


                    </ul>
                    
                  </div>
                  
                  <div class="card-body">
                    
                    <form v-on:submit.prevent="submit()" class="form-horizontal" autocomplete="off">
                      <div class="tab-content">
                        <strong class="text-danger" v-if="errors.length > 0">{{errors}}</strong>

                        <!-- Profile Form -->
                        <div role="tabpanel" class="tab-pane fade active show" id="profile">  

                     
                          <fieldset>
                            <div class="form-group row">
                              <label for="firstName" class="col-md-3 control-label">
                                First Name
                              </label>
                              <div class="col-md-6">
                                <input type="text" class="form-control" id="firstName" placeholder="First Name" v-model="firstName">
                              </div>
                            </div>
                            <div class="form-group row">
                              <label for="lastName" class="col-md-3 control-label">
                                Last Name
                              </label>
                              <div class="col-md-9">
                                <input type="text" class="form-control" id="lastName" placeholder="Last Name" v-model="lastName">
                              </div>
                            </div>
                            <div class="form-group row">
                              <br>
                              <label for="phoneNumber" class="col-md-3 control-label">
                                Phone Number
                              </label>
                              <div class="col-md-9">
                                <input type="text" class="form-control" id="phoneNumber" placeholder="Phone Number" v-model="phoneNumber">
                              </div>
                            </div>
                            <div class="form-group row">
                              <br>
                              <label for="email" class="col-md-3 control-label">
                                Email
                              </label>
                              <div class="col-md-9">
                                <input type="text" class="form-control" id="email" placeholder="Email" v-model="email">
                              </div>
                            </div>
                        
                             
                            <div class="form-group row justify-content-end">
                                <div class="col-lg-10">
                                    <button type="submit" class="btn btn-raised btn-primary">Submit</button>
                                    <button type="button" class="btn btn-danger" v-on:click="$router.go(-1)">Cancel</button>
                                </div>
                            </div>
                          </fieldset> 
                        </div>

                        <!-- Stats Form -->
                        <div role="tabpanel" class="tab-pane fade show" id="stats"> 

                          <!-- stats form -->
                          <fieldset>
                            <table class="table table-no-border table-striped">
                              <tr>
                                <th> Low Net Handicap</th>
                                <td>
                                  <input type="text" class="col-sm-4" id="lowNetHDCP" placeholder="Low-Net"v-model="user.low_net_handicap">
                                </td>
                                
                              </tr>
                              <tr>
                                <th>Skins Handicap</th>
                                <td>
                                  <input type="text" class="col-sm-4" id="skins" placeholder="Skins" v-model="user.skins_handicap">
                                </td>
                              </tr>
                              <tr>
                                <th> GNC Average</th>
                                <td>
                                  <input type="text" class="col-sm-4" id="gncAverage" placeholder="GNC Avg"v-model="user.gnc_average">
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  Two Year Average
                                </th>
                                <td>
                                  <input type="text" class="col-sm-4" id="avg2017" placeholder="2yr Avg"v-model="user.two_year_average">
                                </td>
                              </tr>
                             <!--  <tr>
                                <th>
                                  
                                  GNC Record
                                </th>
                                <td>
                                  <input type="text" class="col-sm-3" id="gncRecord" placeholder="W" v-model="user.ryder_cup_record.ryder_cup_wins"> --
                                  <input type="text" class="col-sm-3" id="gncRecord" placeholder="L" v-model="user.ryder_cup_record.ryder_cup_losses"> --
                                  <input type="text" class="col-sm-3" id="gncRecord" placeholder="T" v-model="user.ryder_cup_record.ryder_cup_ties">
                                </td>
                              </tr> -->
                              <tr>
                                <th class="">
                                  
                                  Last Year's Record
                                </th>
                                <td class="">
                                  <input type="text" class="col-sm-3" id="2017Record" placeholder="W" v-model="winsLastYear"> --
                                  <input type="text" class="col-sm-3" id="2017Record" placeholder="L" v-model="lossesLastYear"> --
                                  <input type="text" class="col-sm-3" id="2017Record" placeholder="T" v-model="tiesLastYear">
                                </td>
                              </tr>
                              
                              <div class="form-group row">
                                <div class="">
                                    <button type="submit" class="btn btn-block btn-raised btn-primary">Submit</button>
                                    <button type="button" class="btn btn-danger" v-on:click="$router.go(-1)">Cancel</button>
                                </div>
                              </div>
                            </table>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<style>
/*#background {
      background-image: url("../../../public/assets/img/papyrus-dark/papyrus-dark.png");*/
      /*padding-top: 0px;*/


    /*}*/
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      editor: {},
      editorAdmin: false,
      userAdmin: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      errors: [],
      winsLastYear: "",
      lossesLastYear: "",
      tiesLastYear: "",
      teamColor: "None"
    };
  },
  created: function() {
    // target user
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      
      this.user = response.data;
      this.firstName = this.user.first_name;
      this.lastName = this.user.last_name;
      this.phoneNumber = this.user.personal_info.phone_number;
      this.email = this.user.personal_info.email;
      if (this.user.team !== "Red" && this.user.team !== "Blue"){
      } else {
        this.teamColor = this.user.team;
      }

      if(this.user.admin){
        this.userAdmin = true;
      }

      
      console.log("user", this.user, "admin: ", this.userAdmin);
    });

    // logged in user
    axios.get("/api/users/me").then(response => {
      this.editor = response.data;
      if (this.editor.admin){
        this.editorAdmin = true;
      }
    })
  },
  methods: {
    submit: function(){
      var record2017 = this.winsLastYear + " - " + this.lossesLastYear + " - " + this.tiesLastYear;
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone_number: this.user.personal_info.phone_number,
        email: this.user.personal_info.email,
        team_color: this.teamColor,
        avg_gnc: this.user.gnc_average,
        avg_two_year: this.user.two_year_average,
        // ryder_cup_wins: this.user.ryder_cup_record.ryder_cup_wins,
        ryder_cup_losses: this.user.ryder_cup_record.ryder_cup_losses,
        ryder_cup_ties: this.user.ryder_cup_record.ryder_cup_ties,
        wins_last_year: this.winsLastYear,
        losses_last_year: this.lossesLastYear,
        ties_last_year: this.tiesLastYear,
        record_2017: record2017,
        handicap_skins: this.user.skins_handicap,
        handicap_low_net: this.user.low_net_handicap
      }

      axios.patch("/api/users/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.$router.push('/users')
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data;
      })
    },
    selectTeam: function(color){
      this.teamColor = color;
    },
    makeAdmin: function(){
      var newValue = false;
      console.log("userAdmin", this.userAdmin);
      if(this.userAdmin){
        newValue = false;

      } else {
        newValue = true;
      }

      var params = {
        admin: newValue
      }
      console.log("wat");
      axios.patch("/api/users/" + this.$route.params.id, params).then(response => {
        console.log(this.$route.params.id);
        console.log(params);
        console.log("Admin Setting Modified", response.data);
        this.userAdmin = newValue;
      }).catch(error => {
        console.log("Admin Setting Modification Failed.");
        this.errors = error.response.data.errors
      })
    },
    destroy: function(){
      axios.delete("/api/users/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.$router.push("/login");
        location.reload();
      })
    }
  }
};
</script>