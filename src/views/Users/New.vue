<template>
  <div class="ms-site-container" id="background">
    <div class="container">
      <div class="col-lg-12 ms-paper-content-container">
        <div class="ms-paper-content">
          <div class="row">
            <div class="col-lg-10">
              <div class="card">
                
                <div class="card-tabs">
                  <ul class="nav nav-tabs shadow-2dp" role="tablist">
                    
                    <li class="av-item"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-male"></i> <span class="d-none d-sm-inline">Profile</span></a></li>
                    <li v-if="this.editorAdmin" class="nav-item"><a href="#stats" aria-controls="home" role="tab" data-toggle="tab" class="withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Stats</span></a></li>
                    <li class="col-lg-8"></li>
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
                            <div class="col-md-6">
                              <input type="text" class="form-control" id="lastName" placeholder="Last Name" v-model="lastName">
                            </div>
                          </div>
                          <div class="form-group row">
                            <br>
                            <label for="phoneNumber" class="col-md-3 control-label">
                              Phone Number
                            </label>
                            <div class="col-md-6">
                              <input type="text" class="form-control" id="phoneNumber" placeholder="Phone Number" v-model="phoneNumber">
                            </div>
                          </div>
                          <div class="form-group row">
                            <br>
                            <label for="email" class="col-md-3 control-label">
                              Email
                            </label>
                            <div class="col-md-6">
                              <input type="text" class="form-control" id="email" placeholder="Email" v-model="email">
                            </div>
                          </div>
                      
                           
                          <div class="form-group row justify-content-end">
                              <div class="col-lg-10">
                                  <button type="submit" class="btn btn-raised btn-primary">Add User</button>
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
                                <input type="text" class="col-sm-4" id="lowNetHDCP" placeholder="Low-Net"v-model="lowNetHandicap">
                              </td>
                              
                            </tr>
                            <tr>
                              <th>Skins Handicap</th>
                              <td>
                                <input type="text" class="col-sm-4" id="skins" placeholder="Skins" v-model="skinsHandicap">
                              </td>
                            </tr>
                            <tr>
                              <th> GNC Average</th>
                              <td>
                                <input type="text" class="col-sm-4" id="gncAverage" placeholder="GNC Avg"v-model="gncAverage">
                              </td>
                            </tr>
                            <tr>
                              <th>
                                Two Year Average
                              </th>
                              <td>
                                <input type="text" class="col-sm-4" id="avg2017" placeholder="2yr Avg"v-model="twoYearAverage">
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
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      editor: {},
      editorAdmin: true,
      userAdmin: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      errors: [],
      winsLastYear: "",
      lossesLastYear: "",
      tiesLastYear: "",
      skinsHandicap: 0,
      lowNetHandicap: 0,
      gncAverage: 0,
      twoYearAverage: 0,
      password: "",
      passwordConfirmation: ""
    };
  },
  methods: {
    submit: function() {
      var record2017 = this.winsLastYear + " - " + this.lossesLastYear + " - " + this.tiesLastYear;
      var password = "gnc" + this.firstName.charAt(0) + this.lastName;
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone_number: this.phoneNumber,
        email: this.email,
        password: password,
        password_confirmation: password,
        avg_gnc: this.gncAverage,
        avg_two_year: this.twoYearAverage,
        // ryder_cup_wins: this.ryderCupWins,
        // ryder_cup_losses: this.ryderCupLosses,
        // ryder_cup_ties: this.ryderCupTies,
        record_2017: this.record2017,
        handicap_skins: this.skinsHandicap,
        handicap_low_net: this.lowNetHandicap
      }
      axios
        .post("/api/users", params)
        .then(response => {
          console.log("User Created", response.data);
          this.$router.push("/users");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    // submit: function(){
    //   var record2017 = this.wins2017 + " - " + this.losses2017 + " - " + this.ties2017;
    //   var params = {
    //     first_name: this.user.first_name,
    //     last_name: this.user.last_name,
    //     phone_number: this.user.personal_info.phone_number,
    //     email: this.user.personal_info.email,
    //     avg_gnc: this.user.gnc_average,
    //     avg_two_year: this.user.two_year_average,
    //     // ryder_cup_wins: this.user.ryder_cup_record.ryder_cup_wins,
    //     ryder_cup_losses: this.user.ryder_cup_record.ryder_cup_losses,
    //     ryder_cup_ties: this.user.ryder_cup_record.ryder_cup_ties,
    //     record_2017: record2017,
    //     handicap_skins: this.user.skins_handicap,
    //     handicap_low_net: this.user.low_net_handicap
    //   }

    //   axios.patch("/api/users/" + this.$route.params.id, params).then(response => {
    //     console.log(response.data);
    //     this.$router.push('/')
    //   }).catch(error => {
    //     console.log(error.response.data);
    //     this.errors = error.response.data;
    //   })
    // },
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