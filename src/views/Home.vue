<template>
  <div class="home">
    
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

    <br><br>
    <div class="card card-primary">
      
      <table class="table table-no-border table-condensed">
        <thead class="thead-dark">
          <tr>
            <th scope="col"><span v-on:click="selectSort('name')">Name</span></th>
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
            <th scope="row">{{user.id}} {{user.name}}</th>
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
      rounds: [],
      sortAttribute: 'name',
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