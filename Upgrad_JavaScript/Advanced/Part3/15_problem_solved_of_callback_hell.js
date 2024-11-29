
// Code Snippet *:

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


// USING PROMISES
// the above code can be written like the following one
// function to fetch details of user in Student Management System
const fetchUserDetails1 = (username, password) => {
    database.authenticateUser(username, password)
        .then(userInfo => dataBase.getRoles(userInfo))
        .then(rolesInfo => dataBase.getPermissions(rolesInfo))
        .then(permissionsInfo => {
            // code written inside the function named 'callback'
        })
        .catch((err) => {
            // code to handle error
        });
};