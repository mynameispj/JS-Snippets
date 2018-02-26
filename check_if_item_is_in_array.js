/**
 * @description determine if an array contains one or more items from another array.
 * @param {array} haystack the array to search.
 * @param {array} arr the array providing items to check for in the haystack.
 * @return {boolean} true|false if haystack contains at least one item from arr.
 */
var findOne = function (haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};

//Use like: 
//Checking to see if a value in data is within the filteredTags array
/*
var tag = JSON.stringify(data.Tag);
filteredTags = ["Tagged","Total"]

if (findOne(tag,filteredTags)) {
    console.log("Found one!");
}
*/