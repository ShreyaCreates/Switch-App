const user = {
    name: "Shreya",
    points: 140,
    skill: "Python",
    isVerified: false
}

const { name, points } = user
console.log(name)
console.log(points)

const updatedUser = { ...user, points: 200, isVerified: true}
console.log(updatedUser)

const getUserSummary = ({name, points}) => {
    return name + " has " + points + " points."
}
console.log(getUserSummary(user))