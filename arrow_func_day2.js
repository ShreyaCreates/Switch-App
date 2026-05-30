const greetUser = (name) => {
    return "Welcome to Switch, " + name
}
const getPointPrice = (skillName) => {
    if (skillName === "Python") {
        return 10;
    } else if (skillName === "Flutter") {
        return 150;
    } else {
        return 50;
    }
}
const isEligibleToTeach = (rating) => rating>3

console.log(greetUser("John"));
console.log(getPointPrice("Flutter"));
console.log(isEligibleToTeach(4));