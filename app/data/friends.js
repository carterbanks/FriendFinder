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
            "../public/images/clarence.jpg",
        scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
        name: "Gob",
        photo:
            "../public/images/gob.jpg",
        scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
    },
    {
        name: "Patrice",
        photo: "../public/images/patrice.jpg",
        scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
    },
    {
        name: "Estaban",
        photo:
            "../public/images/estaban.jpg",
        scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
    },
    {
        name: "Grant",
        photo:
            "../public/images/grant.jpg",
        scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
    },
    {
        name: "Francine",
        photo:
            "../public/images/francine.jpg",
        scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
    },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
