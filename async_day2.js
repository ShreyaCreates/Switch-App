// Fake database functions — pretend these talk to Firebase
const getUserFromDB = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Shreya", points: 140, skill: "Python" })
        }, 1000)
    })
}

const getSkillsFromDB = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Python", "Flutter", "Design", "React"])
        }, 1500)
    })
}

const loadUserProfile = async () => {
    try {
        const user = await getUserFromDB()
        console.log(user.name)
        console.log(user.points)
    } catch (error) {
        console.log("Error:", error)
    }
}

const loadSkills = async () => {
    try {
        const skills = await getSkillsFromDB()
        for (let skill of skills) {
            console.log(skill)
        }
    } catch (error) {
        console.log("Error:", error)
    }
}

loadUserProfile()
loadSkills()