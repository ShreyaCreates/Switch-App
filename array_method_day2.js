//data
const students = [
    { name: "Shreya", points: 140, skill: "Python" },
    { name: "Rahul", points: 80, skill: "Flutter" },
    { name: "Priya", points: 220, skill: "Design" },
    { name: "Aryan", points: 45, skill: "React" },
    { name: "Neha", points: 190, skill: "Java" }
]

//map
const studentNames= students.map((student) => student.name);
console.log(studentNames);

//filter
const highPoints = students.filter((student) => student.points >100);
console.log(highPoints);

//find
const skillFinder = students.find((student) => student.skill === "Design");
console.log(skillFinder);