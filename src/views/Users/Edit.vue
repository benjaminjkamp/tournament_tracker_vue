<template>
  <div class="users-edit">
    
    <div class="ms-site-container" id="background">
      <div class="container">
        <div class="col-lg-9 ms-paper-content-container">
          <div class="ms-paper-content">
            <div class="row">
              <div class="col-lg-8">
                <div class="card">
                  
                  <div class="card-tabs">
                    <ul class="nav nav-tabs shadow-2dp" role="tablist">
                      <li class="nav-item"><a href="#stats" aria-controls="home" role="tab" data-toggle="tab" class="active withoutripple nav-link "><i class="zmdi zmdi-home"></i> <span class="d-none d-sm-inline">Stats</span></a></li>
                      <li class="nav-item"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="withoutripple nav-link "><i class="zmdi zmdi-male"></i> <span class="d-none d-sm-inline">Profile</span></a></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    
                    <form v-on:submit.prevent="submit()" class="form-horizontal" autocomplete="off">
                      <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade active show" id="stats"> 

                          <!-- stats form -->
                          <fieldset>
                            <table class="table table-no-border table-striped">
                              <tr>
                                <th><i class="zmdi zmdi-account mr-1 color-royal"></i> Low Net Handicap</th>
                                <td>
                                  <input type="text" class="col-sm-4" id="lowNetHDCP" placeholder="Low-Net"v-model="user.low_net_handicap">
                                </td>
                                
                              </tr>
                              <tr>
                                <th><i class="zmdi zmdi-face mr-1 color-warning"></i> Skins Handicap</th>
                                <td>
                                  <input type="text" class="col-sm-4" id="skins" placeholder="Skins" v-model="user.skins_handicap">
                                </td>
                              </tr>
                              <tr>
                                <th><i class="zmdi zmdi-male-female mr-1 color-success"></i> GNC Average</th>
                                <td>
                                  <input type="text" class="col-sm-4" id="gncAverage" placeholder="GNC Avg"v-model="user.gnc_average">
                                </td>
                              </tr>
                              <tr>
                                <th><i class="zmdi zmdi-email mr-1 color-primary"></i> 
                                  Two Year Average
                                </th>
                                <td>
                                  <input type="text" class="col-sm-4" id="avg2017" placeholder="2yr Avg"v-model="user.two_year_average">
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <i class="zmdi zmdi-link mr-1 color-danger"></i>
                                  GNC Record
                                </th>
                                <!-- <td>
                                  <input type="text" class="col-sm-3" id="gncRecord" placeholder="W" v-model="user.ryder_cup_record.ryder_cup_wins"> --
                                  <input type="text" class="col-sm-3" id="gncRecord" placeholder="L" v-model="user.ryder_cup_record.ryder_cup_losses"> --
                                  <input type="text" class="col-sm-3" id="gncRecord" placeholder="T" v-model="user.ryder_cup_record.ryder_cup_ties">
                                </td> -->
                              </tr>
                              <tr>
                                <th class="">
                                  <i class="zmdi zmdi-calendar mr-1 color-info"></i> 
                                  2017 Record
                                </th>
                                <td class="">
                                  <input type="text" class="col-sm-3" id="2017Record" placeholder="W" v-model="wins2017"> --
                                  <input type="text" class="col-sm-3" id="2017Record" placeholder="L" v-model="losses2017"> --
                                  <input type="text" class="col-sm-3" id="2017Record" placeholder="T" v-model="ties2017">
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

                        <!-- Profile Form -->
                        <div role="tabpanel" class="tab-pane fade" id="profile">  
                          <fieldset>
                            <div class="form-group row">
                              <label for="firstName" class="col-md-2 control-label">
                                First Name
                              </label>
                              <div class="col-md-9">
                                <input type="text" class="form-control" id="firstName" placeholder="First Name" v-model="user.first_name">
                              </div>
                              
                              <label for="lastName" class="col-md-2 control-label">
                                Last Name
                              </label>
                              <div class="col-md-9">
                                <input type="text" class="form-control" id="lastName" placeholder="Last Name" v-model="user.last_name">
                              </div>
                              
                              <label for="phoneNumber" class="col-md-2 control-label">
                                Phone Number
                              </label>
                              <div class="col-md-9">
                                <input type="text" class="form-control" id="phoneNumber" placeholder="Phone Number" v-model="user.personal_info.phone_number">
                              </div>
                              
                              <label for="email" class="col-md-2 control-label">
                                Email
                              </label>
                              <div class="col-md-9">
                                <input type="text" class="form-control" id="email" placeholder="Email" v-model="user.personal_info.email">
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
      errors: [],
      wins2017: "",
      losses2017: "",
      ties2017: ""
    };
  },
  created: function() {
    axios.get("/api/users/me" ).then(response => {
      console.log("user", response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function(){
      var record2017 = this.wins2017 + " - " + this.losses2017 + " - " + this.ties2017;
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        phone_number: this.user.personal_info.phone_number,
        email: this.user.personal_info.email,
        avg_gnc: this.user.gnc_average,
        avg_two_year: this.user.two_year_average,
        // ryder_cup_wins: this.user.ryder_cup_record.ryder_cup_wins,
        ryder_cup_losses: this.user.ryder_cup_record.ryder_cup_losses,
        ryder_cup_ties: this.user.ryder_cup_record.ryder_cup_ties,
        record_2017: record2017,
        handicap_skins: this.user.skins_handicap,
        handicap_low_net: this.user.low_net_handicap
      }

      axios.patch("/api/users/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        this.$router.push('/')
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data;
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