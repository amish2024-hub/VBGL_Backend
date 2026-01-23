// const { Duration } = require("luxon");
// const db = require("./firebase");

// // Collection reference
// const studentRef = db.collection("students");

// // Create
// async function addStudent() {
//   await studentRef.add({
//     name: "amish",
//     email: "amit@gmail.com",
//     age: 21,
//   });
//   console.log("Students added");
// }

// // Get data
// async function getStudents() {
//   const getStudentsData = await studentRef.get();
//   getStudentsData.forEach((doc) => {
//     console.log(doc.id, doc.data());
//   });
// }

// // UPDATE
// async function updateStudent(id) {
//   await studentRef.doc(id).update({
//     age: 35,
//   });
//   console.log("student Update");
// }

// // Delete
// async function deleteStudent(id) {
//   await studentRef.doc(id).delete();
//   console.log("Student deleted");
// }

// async function addCourse(studentId) {
//   await db.collection("students").doc(studentId).collection("courses").add({
//     courseName: "Web Development",
//     duration: "3 Months",
//   });
//   console.log("Course added");
// }

// // call function at one time
// // getStudents();
// // addStudent();
// // updateStudent("yYHU5FSzk4UxoTq6MCMW");
// // deleteStudent("yYHU5FSzk4UxoTq6MCMW");

// addCourse("RUbWdeSBFN3eFX4vt26S");
