function greetStudent(name) {
    return "Welcome to Switch, " + name
}

function canAffordSkill(userPoints, skillCost) {
    if (userPoints >= skillCost) {
        return "Enrolled successfully"
    } else {
        let pointsNeeded = skillCost - userPoints
        return "Need " + pointsNeeded + " more points"
    }
}

function earnPoints(currentPoints, sessionDuration) {
    if (sessionDuration >= 45) {
        return currentPoints + 50
    } else {
        return currentPoints + 20
    }
}

console.log(greetStudent("Shreya"))
console.log(canAffordSkill(140, 10))
console.log(canAffordSkill(140, 200))
console.log(earnPoints(140, 45))
console.log(earnPoints(140, 30))