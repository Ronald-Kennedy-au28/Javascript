
// CALLBACK HELL
// function to fetch details of user in Student Management System

const fetchUserDetails = (username, password, callback) => {
    database.authenticateUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error);
        } else {
            database.getRoles(userInfo, (error, rolesInfo) => {
                if (error) {
                    callback(error);
                } else {
                    database.getPermissions(rolesInfo, (error, permissionsInfo) => {
                        if (error) {
                            callback(error);
                        } else {
                            callback(null, userInfo, rolesInfo, permissionsInfo);
                        }
                    });
                }
            });
        }
    });
}

const callback = (error, userInfo, rolesInfo, permissionsInfo) => {
    // some code here
}

// Example CALLBACK HELL
const getAddress = () => {
    getContinents(continent => {
      getCountries(continent, country => {
        getStates(country, state => {
          getCities(state, () => {
            done();
          });
        });
      });
    });
   };
   
const getContinents = callback => { // callback = getCountries()
    setTimeout(() => {
      // code to get all continents
      let continent = "Asia";
      console.log(continent);
      callback(continent);
    }, 1000);
};
   
const getCountries = (continent, callback) => { // callback = getStates()
    setTimeout(() => {
      // code to get all countries
      let country = "India";
      console.log(country);
      callback(country);
    }, 1000);
};
   
const getStates = (country, callback) => { // callback = getCities()
    setTimeout(() => {
      // code to get all states
      let state = "Rajasthan";
      console.log(state);
      callback(state);
    }, 1000);
};
   
const getCities = (state, callback) => { // callback = done()
    setTimeout(() => {
      // code to get all cities
      let city = "Jaipur";
      console.log(city);
      callback();
    }, 1000);
};
   
const done = () => {
    console.log("DONE!");
};
   
getAddress();