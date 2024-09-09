// Define the function createClassRoom
function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }
// Creates an array to store the closure for each student seat
    const students = [];

// Use a loop to create closure for each seat from 1 to numberOfStudents
    for (let i = 0; i < numberOfStudents; i++) {

        // Add each closure to the students array
        students.push(studentSeat(i + 1));
    }

    // Return the array of closure
    return students;
}

// Create a closure classRoom by calling createClassRoom with 10 students
const classRoom = createClassRoom(10);