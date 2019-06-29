<template>
  <div class="users-edit">
    <div class="ms-site-container">
      <div>
      <form v-on:submit.prevent="submit()" class="form-horizontal" autocomplete="off">
          <fieldset>
            <div class="form-group row">
              <legend class="col-lg-8 ">{{user.name}}</legend>

              <div class="col-lg-8">
                <div class="form-group label-floating">
                  <label class="control-label" for="2017Record">2017 Record</label><br>
                  <input type="text" class="col-sm-1" id="2017Record" placeholder="Wins" v-model="wins2017">--<input type="text" class="col-sm-1" id="2017Record" placeholder="Losses" v-model="losses2017">--<input type="text" class="col-sm-1" id="2017Record" placeholder="Ties" v-model="ties2017">
                </div>
              </div>

              <div class="col-lg-8">
                <div class="form-group label-floating">
                  <label for="gncRecord" class="control-label">GNC Record</label><br>
                  <input type="text" class="col-sm-1" id="gncRecord" placeholder="Wins" v-model="user.ryder_cup_record.ryder_cup_wins">--<input type="text" class="col-sm-1" id="gncRecord" placeholder="Losses" v-model="user.ryder_cup_record.ryder_cup_losses">--<input type="text" class="col-sm-1" id="gncRecord" placeholder="Ties" v-model="user.ryder_cup_record.ryder_cup_ties">
                </div>
              </div>

              <div class="col-lg-8">
                <div class="form-group label-floating">
                  <label for="gncAverage" class="control-label">GNC Average</label><br>
                  <input type="text" class="col-sm-1" id="gncAverage" placeholder="Wins"v-model="user.gnc_average">
                </div>
              </div>

              <div class="col-lg-8">
                <div class="form-group label-floating">
                  <label for="avg2017" class="control-label">Two Year Average</label><br>
                  <input type="text" class="col-sm-1" id="avg2017" placeholder="Wins"v-model="user.two_year_average">
                </div>
              </div>

              <div class="col-lg-8">
                <div class="form-group label-floating">
                  <label for="skins" class="control-label">Skins Handicap</label><br>
                  <input type="text" class="col-sm-1" id="skins" placeholder="Skins" v-model="user.skins_handicap">
                </div>
              </div>

              <div class="col-lg-8">
                <div class="form-group label-floating">
                  <label for="lowNetHDCP" class="control-label">Low Net Handicap</label><br>
                  <input type="text" class="col-sm-1" id="lowNetHDCP" placeholder="Low-Net"v-model="user.low_net_handicap">
                </div>
              </div>

              
            </div>
              
              
            <div class="form-group row justify-content-end">
                <div class="col-lg-10">
                    <button type="submit" class="btn btn-raised btn-primary">Submit</button>
                    <button type="button" class="btn btn-danger" v-on:click="$router.go(-1)">Cancel</button>
                </div>
            </div>
          </fieldset>
      </form>
      </div>
    </div>


    <br><br>
    <h1>{{user.name}}</h1><br><br>
    <div>
      <form v-on:submit.prevent="submit()">
        GNC Average: <input type="number" step="any" v-model="user.gnc_average"><br>
        Two Year Average: <input type="number" step=".01" v-model="user.two_year_average"><br>
        Wins: <input type="number" step="any" v-model="user.ryder_cup_record.ryder_cup_wins">
        Losses: <input type="number" step="any" v-model="user.ryder_cup_record.ryder_cup_losses">
        Ties: <input type="number" step="any" v-model="user.ryder_cup_record.ryder_cup_ties"><br>
        2017 Record: <input type="text" step="any" v-model="user.record_2017"><br>
        Skins Handicap: <input type="number" step="any" v-model="user.skins_handicap"><br>
        Low Net Handicap: <input type="number" step="any" v-model="user.low_net_handicap"><br>
        
        
        <button type="submit">Update Player</button><br><br>
        <button v-on:click="destroy()">Resign</button>
      </form>
    </div>
    <br><br>
  </div>
</template>

<style>
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
    axios.get("/api/users/1" ).then(response => {
      console.log("user", response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function(){
      var record2017 = this.wins2017 + " - " + this.losses2017 + " - " + this.ties2017;
      var params = {
        avg_gnc: this.user.gnc_average,
        avg_two_year: this.user.two_year_average,
        ryder_cup_wins: this.user.ryder_cup_record.ryder_cup_wins,
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