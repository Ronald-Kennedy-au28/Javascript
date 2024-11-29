
// USING PROMISES
// function to fetch details of user in Student Management System
const fetchUserDetails = (username, password) => {
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


const fetchUserDetails1 = async (username, password) => {
    try {
        const userInfo = await dataBase.authenticateUser(username, password);
        const rolesInfo = await dataBase.getRoles(userInfo);
        const permissionsInfo = await dataBase.getPermissions(rolesInfo);
    } catch (e) {
        //code to handle error
    }
};