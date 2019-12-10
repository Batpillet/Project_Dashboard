function start() {
  // Création de l'objet apiUsers
  const apiUsers = new API_USERS();
  // Appel de la fonction fetchTodayForecast

  apiUsers
    

    .fetchUsers()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal pour aujourd'hui
      const id = data[0]._id;
      console.log(id);
      const location = data[0].location;
      console.log(location);
      const personsInHouse = data[0].personsInHouse;;
      console.log(personsInHouse);
      const houseSize = data[0].houseSize;;
      console.log(houseSize);
      
      // Modifier le DOM pour demain
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-Users-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // On récupère l'information principal pour demain
      const tmain = data.list[1].Users[0].main;
      console.log(tmain);
      const tdescription = data.list[1].Users[0].description;
      console.log(tdescription);
      const ttemp = data.list[1].temp.day;
      console.log(ttemp);
      const ticon = apiUsers.getHTMLElementFromIcon(data.list[1].Users[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('tomorrow-forecast-main').innerHTML = tmain;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = tdescription;
      document.getElementById('tomorrow-icon-Users-container').innerHTML = ticon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${ttemp}°C`;


      // On récupère l'information principal pour après-demain
      const ttmain = data.list[2].Users[0].main;
      console.log(ttmain);
      const ttdescription = data.list[2].Users[0].description;
      console.log(ttdescription);
      const tttemp = data.list[2].temp.day;
      console.log(tttemp);
      const tticon = apiUsers.getHTMLElementFromIcon(data.list[2].Users[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('j2-forecast-main').innerHTML = ttmain;
      document.getElementById('j2-forecast-more-info').innerHTML = ttdescription;
      document.getElementById('j2-icon-Users-container').innerHTML = tticon;
      document.getElementById('j2-forecast-temp').innerHTML = `${tttemp}°C`;

      // On récupère l'information principal pour encore après-demain
      const tttmain = data.list[3].Users[0].main;
      console.log(tttmain);
      const tttdescription = data.list[3].Users[0].description;
      console.log(tttdescription);
      const ttttemp = data.list[3].temp.day;
      console.log(ttttemp);
      const ttticon = apiUsers.getHTMLElementFromIcon(data.list[3].Users[0].icon);

      // Modifier le DOM pour demain
      document.getElementById('j3-forecast-main').innerHTML = tttmain;
      document.getElementById('j3-forecast-more-info').innerHTML = tttdescription;
      document.getElementById('j3-icon-Users-container').innerHTML = ttticon;
      document.getElementById('j3-forecast-temp').innerHTML = `${ttttemp}°C`;

    })


    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
