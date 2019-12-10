import axios from 'axios';

// Url API
const API_URL = "http://localhost:3030/users";

class API_USERS{
  constructor(){
    // var city; 
    // console.log(city_element.value);
    // if(city_element.value != "")
    // {
    //   city = city_element.value;
    // }
    // // Si la ville n'est pas définit alors la ville par défault est Paris
    // else {
    //   city = "lyon";
    // }
    // this.city = city;
  }

  fetchUsers(){
    return axios
    .get(`${API_URL}`, {
      crossdomain: true
    })
  }
}