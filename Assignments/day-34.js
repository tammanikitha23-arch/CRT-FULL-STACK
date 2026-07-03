//Task-1:
let students = [
    {
        id: 101,
        name: "Rahul",
        age: 20,
        course: "JavaScript",
        marks: [90, 85, 80, 95, 88],
        address: {
            city: "Hyderabad",
            state: "Telangana"
        }
    },
    {
        id: 102,
        name: "Priya",
        age: 21,
        course: "Python",
        marks: [78, 82, 85, 80, 90],
        address: {
            city: "Vijayawada",
            state: "Andhra Pradesh"
        }
    }
];
function addStudent(student = {}) {
    const newStudent = {
        id: student.id || 0,
        name: student.name || "Unknown",
        age: student.age || 18,
        course: student.course || "Not Assigned",
        marks: student.marks || [0, 0, 0, 0, 0],
        address: {
            ...student.address
        }
    };
    students.push(newStudent);
   console.log("Student Added Successfully!");
}
const calculateAverage = (marks) => {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total / marks.length;
};
function findTopper() {
    let topper = students[0];
    let highestAverage = calculateAverage(topper.marks);
    for (let student of students) {
        let avg = calculateAverage(student.marks);
        if (avg > highestAverage) {
            highestAverage = avg;
            topper = student;
        }
    }
    console.log("\n TOPPER ");
    console.log(`Name : ${topper.name}`);
    console.log(`Course : ${topper.course}`);
    console.log(`Average : ${highestAverage.toFixed(2)}`);
}
function displayStudents() {
    console.log("\n STUDENT DETAILS");
    students.forEach((student, index) => {
        const {
            id,
            name,
            age,
            course,
            marks,
            address: { city, state }
        } = student;
        console.log(`
Name     : ${name}
Age      : ${age}
Course   : ${course}
Marks    : ${marks.join(", ")}
Average  : ${calculateAverage(marks).toFixed(2)}
City     : ${city}
State    : ${state}
`);
    });
}
addStudent({
    id: 103,
    name: "Anjali",
    age: 22,
    course: "Full Stack",
    marks: [95, 96, 94, 98, 97],
    address: {
        city: "Guntur",
        state: "Andhra Pradesh"
    }
});
displayStudents();
findTopper();