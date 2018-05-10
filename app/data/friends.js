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
            "https://cdn.pixabay.com/photo/2018/05/04/16/50/cat-3374422_1280.jpg",
        scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
        name: "Gob",
        photo:
            "https://cdn.pixabay.com/photo/2016/11/18/19/54/animal-1836651_1280.jpg",
        scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
    },
    {
        name: "Patrice",
        photo: "http://1.bp.blogspot.com/-oueclaCFYgM/TbwxDP3l_HI/AAAAAAAAKbE/z1f3eO2xozo/s640/manul+cat+palluss+cat+pallus+1.jpg",
        scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
    },
    {
        name: "Estaban",
        photo:
            "https://cdn.pixabay.com/photo/2018/04/29/16/28/animal-3360397_1280.jpg",
        scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
    },
    {
        name: "Grant",
        photo:
            "https://cdn.pixabay.com/photo/2018/03/22/23/21/cute-3252251_1280.jpg",
        scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
    },
    {
        name: "Francine",
        photo:
            "https://cdn.pixabay.com/photo/2018/01/05/13/00/cat-3062885_1280.jpg",
        scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
    },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
