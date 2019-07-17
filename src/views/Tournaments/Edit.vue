<template>
  <div class="tournaments-edit">
    <div class="ms-site-container">
      <div class="container">
        <div class="card card-primary col-lg-10">
          <form class="form-horizontal" v-on:submit.prevent="submit()">
            <table class="table table-no-border table-condensed">
              
              <thead class="thead-dark">
                <tr>
                  <th scope="col"><span v-on:click="selectSort('name')">Standings</span></th>
                  <th scope="col"><span v-on:click="selectSort('skins_handicap')">Red Team</span></th>
                  <th scope="col"><span v-on:click="selectSort('gnc_average')">Blue Team</span></th>
                          
                  
                </tr>
              </thead>
             <!--  v-for="tournament in orderBy(tournaments, sortAttribute, sortAscending)" -->
              <tbody class="table-hover">
                <tr class="table-secondary active">
                  <th scope="row">2-Man Total Score</th>
                  <td><input type="text" class="col-lg-3" v-model="tournament.red_team_2mantotal"></td>
                  <td><input type="text" class="col-lg-3" v-model="tournament.blue_team_2mantotal"></td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">2-Man Best Ball</th>
                  <td><input type="text" class="col-lg-3" v-model="tournament.red_team_2manbb"></td>
                  <td><input type="text" class="col-lg-3" v-model="tournament.blue_team_2manbb"></td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">Alternate Shot</th>
                  <td><input type="text" class="col-lg-3" v-model="tournament.red_team_altshot"></td>
                  <td><input type="text" class="col-lg-3" v-model="tournament.blue_team_altshot"></td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">Stableford</th>
                  <td><input type="text" class="col-lg-3" v-model="tournament.red_team_stableford"></td>
                  <td><input type="text" class="col-lg-3" v-model="tournament.blue_team_stableford"></td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">Head to Head</th>
                  <td><input type="text" class="col-lg-3" v-model="tournament.red_team_head2head"></td>
                  <td><input type="text" class="col-lg-3" v-model="tournament.blue_team_head2head"></td>
                </tr>
                
              </tbody>
              <div class="form-group row justify-content-end">
                <div class="col-lg-10">
                  <button type="submit" class="btn btn-raised btn-primary">Update Standings</button>
                  <router-link :to="'/tournaments/' + tournament.id + '/standings'">
                    <button type="button" class="btn btn-danger">
                      Cancel
                    </button>
                  </router-link>
                  
                </div>
              </div>
            </table>
          </form>

        </div>

      </div>
    </div>
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
      tournament: {},
      sortAttribute: 'name',
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      console.log("users", response.data);
      this.users = response.data;
    });
    axios.get("/api/tournaments/" + this.$route.params.id).then(response => {
      console.log("tournament", response.data);
      this.tournament = response.data;
    })
  },
  methods: {
    submit: function() {
      var params = {

        red_team_2mantotal: this.tournament.red_team_2mantotal,
        red_team_2manbb: this.tournament.red_team_2manbb,
        red_team_altshot: this.tournament.red_team_altshot,
        red_team_stableford: this.tournament.red_team_stableford,
        red_team_head2head: this.tournament.red_team_head2head,

        blue_team_2mantotal: this.tournament.blue_team_2mantotal,
        blue_team_2manbb: this.tournament.blue_team_2manbb,
        blue_team_altshot: this.tournament.blue_team_altshot,
        blue_team_stableford: this.tournament.blue_team_stableford,
        blue_team_head2head: this.tournament.blue_team_head2head
      };

      axios.patch("/api/tournaments/" + this.tournament.id, params).then(response => {
        console.log("tournament", response.data);
        this.tournament = response.data;
        this.$router.push("/tournaments/" + this.tournament.id + "/standings");
      }).catch(error => {
        console.log(error.data);
        this.errors = error.data;
      });
    },
    selectSort: function(attribute){
      
      if (this.sortAttribute === attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        if (attribute === 'ryder_cup_record.ryder_cup_wins' || 
        attribute === 'ryder_cup_record.ryder_cup_losses' || 
        attribute === 'ryder_cup_record.ryder_cup_ties' || 
        attribute === 'record_2017') 
      {
        this.sortAscending = -1;
      } else{
        this.sortAscending = 1;
      }
      };
      this.sortAttribute = attribute;
    }
  }
};
</script>