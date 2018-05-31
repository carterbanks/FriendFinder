// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Clarence",
        photo:
            "https://github.com/carterbanks/FriendFinder/blob/master/app/public/images/clarence.jpg?raw=true",
        scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
        name: "Gob",
        photo:
            "https://github.com/carterbanks/FriendFinder/blob/master/app/public/images/gob.jpg?raw=true",
        scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
    },
    {
        name: "Patrice",
        photo: "https://github.com/carterbanks/FriendFinder/blob/master/app/public/images/patrice.jpg?raw=true",
        scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
    },
    {
        name: "Estaban",
        photo:
            "https://github.com/carterbanks/FriendFinder/blob/master/app/public/images/estaban.jpg?raw=true",
        scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
    },
    {
        name: "Grant",
        photo:
            "https://github.com/carterbanks/FriendFinder/blob/master/app/public/images/grant.jpg?raw=true",
        scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
    },
    {
        name: "Francine",
        photo:
            "https://github.com/carterbanks/FriendFinder/blob/master/app/public/images/francine.jpg?raw=true",
        scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
    },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
