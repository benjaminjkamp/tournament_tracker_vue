<template>
  <div class="standings">
    
    <br><br>
  
    <div class="ms-site-container">
      <div class="container">
        <div class="row">
          <div id="standings" class="col-xl-4 order-xl-1"> 
        <!-- standings card -->
            <!-- <router-link :to="'/tournaments/' + tournament.id + '/edit'"> -->
              <!-- <div class="card card-primary col-lg-10"> -->
                
              <table id="standings" class=" table ">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Standings</th>
                    <th scope="col" class="color-danger">Red Team</th>
                    <th scope="col" class="color-primary">Blue Team</th>
                            
                    
                  </tr>
                </thead>
               <!--  v-for="tournament in orderBy(tournaments, sortAttribute, sortAscending)" -->
                <tbody class="text-center table-hover">
                  <tr class="table-secondary active">
                    <th scope="row">2-Man Total Score</th>
                    <td class="text-danger" v-if="tournament.red_team_2mantotal > tournament.blue_team_2mantotal"><strong>{{tournament.red_team_2mantotal}}</strong></td>
                    <td v-else><strong>{{tournament.red_team_2mantotal}}</strong></td>
                    <td class="text-info" v-if="tournament.red_team_2mantotal < tournament.blue_team_2mantotal"><strong>{{tournament.blue_team_2mantotal}}</strong></td>
                    
                    <td v-else><strong>{{tournament.blue_team_2mantotal}}</strong></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row">2-Man Best Ball</th>
                    <td class="text-danger" v-if="tournament.red_team_2manbb > tournament.blue_team_2manbb"><strong>{{tournament.red_team_2manbb}}</strong></td>
                    <td v-else><strong>{{tournament.red_team_2manbb}}</strong></td>
                    <td class="text-info" v-if="tournament.red_team_2manbb < tournament.blue_team_2manbb"><strong>{{tournament.blue_team_2manbb}}</strong></td>
                    <td v-else><strong>{{tournament.blue_team_2manbb}}</strong></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row">Alternate Shot</th>
                    <td class="text-danger" v-if="tournament.red_team_altshot > tournament.blue_team_altshot"><strong>{{tournament.red_team_altshot}}</strong></td>
                    <td v-else><strong>{{tournament.red_team_altshot}}</strong></td>

                    <td class="text-info" v-if="tournament.red_team_altshot < tournament.blue_team_altshot"><strong>{{tournament.blue_team_altshot}}</strong></td>
                    <td v-else><strong>{{tournament.blue_team_altshot}}</strong></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row">Stableford</th>
                    <td class="text-danger" v-if="tournament.red_team_stableford > tournament.blue_team_stableford"><strong>{{tournament.red_team_stableford}}</strong></td>
                    <td v-else><strong>{{tournament.red_team_stableford}}</strong></td>

                    <td class="text-info" v-if="tournament.red_team_stableford < tournament.blue_team_stableford"><strong>{{tournament.blue_team_stableford}}</strong></td>
                    <td v-else><strong>{{tournament.blue_team_stableford}}</strong></td>
                  </tr>

                  <tr class="table-secondary active">
                    <th scope="row">Head to Head</th>
                    <td class="text-danger" v-if="tournament.red_team_head2head > tournament.blue_team_head2head"><strong>{{tournament.red_team_head2head}}</strong></td>
                    <td v-else><strong>{{tournament.red_team_head2head}}</strong></td>

                    <td class="text-info" v-if="tournament.red_team_head2head < tournament.blue_team_head2head"><strong>{{tournament.blue_team_head2head}}</strong></td>
                    <td v-else><strong>{{tournament.blue_team_head2head}}</strong></td>
                  </tr>
                  <tr class="table-dark active">
                    <th scope="row"><h2><strong>TOTAL</strong></h2></th>
                    <td class="text-danger"><h2><strong>{{totalRed}}</strong></h2></td>
                    <td class="text-info"><h2><strong>{{totalBlue}}</strong></h2></td>
                  </tr>
                  

                  
                  
                </tbody>
              </table>
            <!-- </div> -->
            <!-- </router-link> -->
          </div>
        
        
        <!-- player stats card -->
        <!-- <div class="card card-primary col-lg-10"> -->

          <!-- Red Team -->
          <div id="player-info" class="col-xl-4 order-xl-2">
            <table class="table table-condensed">
              <thead class="color-danger-inverse">
                <tr>
                  <th scope="col"><span v-on:click="selectSort('name')">Players</span></th>
                  <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">Record</span></th>    
                  
                </tr>
              </thead>
              <tbody id="player-info" class="table-hover table-condensed" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">

                <tr v-if="user.team === 'Red'" class="table-secondary active">
                  <th scope="row">{{user.name}}</th>
                  <td>{{user.low_net_handicap}}</td>
                  <td>{{user.skins_handicap}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                  
                </tr>
                
              </tbody>
            </table>
          </div>

          <!-- Blue Team -->
          <div id="player-info" class="col-xl-4 order-xl-2">
            <table class="table table-condensed">
              <thead class="color-info-inverse">
                <tr>
                  <th scope="col"><span v-on:click="selectSort('name')">Players</span></th>
                  <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                  <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">Record</span></th>    
                  
                </tr>
              </thead>
              <tbody id="player-info" class="table-hover table-condensed" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">

                <tr v-if="user.team === 'Blue'" class="table-secondary active">
                  <th scope="row">{{user.name}}</th>
                  <td>{{user.low_net_handicap}}</td>
                  <td>{{user.skins_handicap}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_wins}}-{{user.ryder_cup_record.ryder_cup_losses}}-{{user.ryder_cup_record.ryder_cup_ties}}</td>
                  
                </tr>
                
              </tbody>
            </table>
          </div>
        <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #standings {
    min-height: 500px;
    max-height: 500px;
  }
  #player-info {
    overflow: scroll;
    max-height: 500px;
    max-width: 1000px;
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
      tournament: {},
      sortAttribute: 'name',
      sortAscending: 1,
      totalRed: 0,
      totalBlue: 0
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
      this.totalRed = this.tournament.red_team_2manbb + this.tournament.red_team_2mantotal + this.tournament.red_team_altshot + this.tournament.red_team_head2head + this.tournament.red_team_stableford;
      this.totalBlue = this.tournament.blue_team_2manbb + this.tournament.blue_team_2mantotal + this.tournament.blue_team_altshot + this.tournament.blue_team_head2head + this.tournament.blue_team_stableford;
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