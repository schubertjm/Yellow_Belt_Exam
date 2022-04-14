//Remove the Join button when clicked
function removeJoin (element) {
    element.remove();
}

//Add Likes when heart image is clicked on receipe #1
var countImg1 = document.querySelector("#likes_img_1_count").innerHTML

function addLike1 () {
    countImg1++;
    document.querySelector("#likes_img_1_count").innerHTML = countImg1
}

//Add Likes when heart image is clicked on receipe #2
var countImg2 = document.querySelector("#likes_img_2_count").innerHTML

function addLike2 () {
    countImg2++;
    document.querySelector("#likes_img_2_count").innerHTML = countImg2
}

//Add Likes when heart image is clicked on receipe #3
var countImg3 = document.querySelector("#likes_img_3_count").innerHTML

function addLike3 () {
    countImg3++;
    document.querySelector("#likes_img_3_count").innerHTML = countImg3
}

//Search Alert
var searchInput = document.querySelector("#search_txt")

function searchAlert () {
    alert ("You are searching for " + searchInput.value)
}