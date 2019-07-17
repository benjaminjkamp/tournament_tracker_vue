<template>
  <div class="standings">
    
    <br><br>
  
    <div class="ms-site-container">
      <div class="container">
            
        <!-- standings card -->
        <router-link :to="'/tournaments/' + tournament.id + '/edit'">
          <div class="card card-primary col-lg-10">
            
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
                  <td>{{tournament.red_team_2mantotal}}</td>
                  <td>{{tournament.blue_team_2mantotal}}</td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">2-Man Best Ball</th>
                  <td>{{tournament.red_team_2manbb}}</td>
                  <td>{{tournament.blue_team_2manbb}}</td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">Alternate Shot</th>
                  <td>{{tournament.red_team_altshot}}</td>
                  <td>{{tournament.blue_team_altshot}}</td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">Stableford</th>
                  <td>{{tournament.red_team_stableford}}</td>
                  <td>{{tournament.blue_team_stableford}}</td>
                </tr>

                <tr class="table-secondary active">
                  <th scope="row">Head to Head</th>
                  <td>{{tournament.red_team_head2head}}</td>
                  <td>{{tournament.blue_team_head2head}}</td>
                </tr>

                
                
              </tbody>
            </table>
          </div>
        </router-link>

        <!-- player stats card -->
        <div class="card card-primary col-lg-10">
          
          <table class="table table-no-border table-condensed">
            <thead class="thead-dark">
              <tr>
                <th scope="col"><span v-on:click="selectSort('name')">Players</span></th>
                <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                <th scope="col"><span v-on:click="selectSort('gnc_average')">GNC AVG</span></th>
                <th scope="col"><span v-on:click="selectSort('two_year_average')">2yr AVG</span></th>
                <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">Wins</span></th>
                <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_losses')">Losses</span></th>
                <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_ties')">Ties</span></th>
                <th scope="col"><span v-on:click="selectSort('record_2017')">2017 Record</span></th>        
                
              </tr>
            </thead>
            <tbody class="table-hover" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">
              <tr class="table-secondary active">
                <th scope="row">{{user.name}}</th>
                <td>{{user.low_net_handicap}}</td>
                <td>{{user.skins_handicap}}</td>
                <td>{{user.gnc_average}}</td>
                <td>{{user.two_year_average}}</td>
                <td>{{user.ryder_cup_record.ryder_cup_wins}}</td>
                <td>{{user.ryder_cup_record.ryder_cup_losses}}</td>
                <td>{{user.ryder_cup_record.ryder_cup_ties}}</td>
                <td>{{user.record_2017}}</td>
                
              </tr>
              
            </tbody>
          </table>
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