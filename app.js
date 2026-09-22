function getMembershipType() {
    let membershipType = prompt("Enter your membership type (student or regular):");
    
    while (membershipType !== "student" && membershipType !== "regular") {
        membershipType = prompt("Wrong! Enter student or regular only:");
    }
    
    return membershipType;
}

function collectUserData() {
    let x = prompt("Enter your name:");
    let membershipType = getMembershipType(); 
    let type = prompt("Non-fiction or fiction?");
    let title = prompt("Write the title:");
    
    alert("Your book reservation is being processed!");

    const myinfo = [x, membershipType, type, title];
    return myinfo;
}

function applyDishount(userArray) {
    if (userArray[1] === "student") {
        userArray.push("20% Discount");
    } else if (userArray[1] === "regular") {
        userArray.push("No Discount");
    }
    
    return userArray;
}

function addNewGenre(genre) {
    availableGenres.push(genre);
}

function displayGenres() {
    for (let i = 0; i < availableGenres.length; i++) {
        console.log("- We offer: " + availableGenres[i]);
    }
}

let availableGenres = ["Fiction", "Science", "History", "Biography"];

displayGenres();

let userArray = collectUserData();

let finalUserArray = applyDishount(userArray);

console.log("Updated User Array:", finalUserArray);

for (let i = 0; i < finalUserArray.length; i++) {
    console.log(finalUserArray[i]);
}