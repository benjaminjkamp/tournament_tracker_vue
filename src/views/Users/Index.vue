<template>
  <div class="users-index">
    
    <br><br>
  <!--   <div>
      <div v-bind:key="round.id" v-for="round in orderBy(rounds, 'name')">
        <router-link :to="'/rounds/' + round.id">{{ round.name }}</router-link>
      </div>
      <br>
      <router-link to="/rounds/new">
        <span>Add Round</span>
      </router-link>

    </div> -->
    <div class="ms-site-container">
      <div class="container">
        <h3 class="" v-if="isAdmin()">
          <router-link v-if="admin" :to="'/users/new'">
            <button class="btn btn-raised btn-white">
              <i class="zmdi zmdi-hc-lg text-dark zmdi-plus-circle"> Add Player</i>
            </button>
          </router-link>
        </h3>
        <div class="card card-primary">
          
          <table class="table table-no-border table-condensed">
            <thead class="thead-dark">
              <tr>
                <th scope="col"><span v-on:click="selectSort('name')">Name</span></th>
                <th scope="col"><span v-on:click="selectSort('team')">Team</span></th>
                
                <th scope="col"><span v-on:click="selectSort('low_net_handicap')">Low Net HDCP</span></th>
                <th scope="col"><span v-on:click="selectSort('skins_handicap')">Skins HDCP</span></th>
                <th scope="col"><span v-on:click="selectSort('gnc_average')">GNC AVG</span></th>
                <th scope="col"><span v-on:click="selectSort('two_year_average')">2yr AVG</span></th>
                <th scope="col"><span v-on:click="selectSort('ryder_cup_record.ryder_cup_wins')">GNC Record</span></th>
                <th scope="col"><span v-on:click="selectSort('last_year_record.wins')">Last Year's Record</span></th>        
                
              </tr>
            </thead>
            <tbody class="table-hover" v-bind:key="user.id" v-for="user in orderBy(users, sortAttribute, sortAscending)">
              <!-- <div v-if="user.id === currentUser.id"> -->
                <tr class="table-secondary active">
                  <router-link v-if="isAdmin()" class="text-dark" :to="'/users/' + user.id + '/edit/'"><th>{{user.name}}</th></router-link>
                  <th v-else scope="row">{{user.name}}</th>
                  <td>
                    <strong class="text-danger" v-if="user.team === 'Red'">{{user.team}}</strong>
                    <strong class="text-info" v-if="user.team === 'Blue'">{{user.team}}</strong>
                    <strong class="text-success" v-if="user.team === 'None'">{{user.team}}</strong>
                    
                  </td>
                  <td>{{user.low_net_handicap}}</td>
                  <td>{{user.skins_handicap}}</td>
                  <td>{{user.gnc_average}}</td>
                  <td>{{user.two_year_average}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_wins}} - 
                  {{user.ryder_cup_record.ryder_cup_losses}} - 
                  {{user.ryder_cup_record.ryder_cup_ties}}</td>
                  <td>{{user.last_year_record.wins}} - 
                  {{user.last_year_record.losses}} - 
                  {{user.last_year_record.ties}}</td>
                  
                </tr>
              <!-- </div> -->
              <!-- <div v-if="user.id !== currentUser.id"> -->
               <!--  <tr class="table-secondary active">
                  <th scope="row">{{user.name}}</th>
                  <td>{{user.low_net_handicap}}</td>
                  <td>{{user.skins_handicap}}</td>
                  <td>{{user.gnc_average}}</td>
                  <td>{{user.two_year_average}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_wins}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_losses}}</td>
                  <td>{{user.ryder_cup_record.ryder_cup_ties}}</td>
                  <td>{{user.record_2017}}</td>
                  
                </tr> -->
              <!-- </div> -->
              
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
      admin: false,
      currentUser: {},
      rounds: [],
      sortAttribute: 'team',
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      console.log("users", response.data);
      this.users = response.data;
    });
    axios.get("/api/rounds").then(response => {
      console.log("rounds", response.data);
      this.rounds = response.data;
    });
    axios.get("/api/users/1").then(response => {
      console.log("users", response.data);
      this.currentUser = response.data;
    });
  },
  methods: {
    isAdmin: function(){
      if (this.$parent.admin){
        this.admin = true;
        return true;
      } else {
        this.admin = false;
        return false;
      }
    },
    isCommissioner: function(){
      return true;
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