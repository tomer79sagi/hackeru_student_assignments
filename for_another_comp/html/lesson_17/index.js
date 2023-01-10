const Standing = {
    Accepted : 1,
    Rejected : 2,
    Completed : 3,
    Winner : 4
}

class Student{
    status = "";
    constructor(status){
        this.status = status;
    }
}


let student_1 = new Student(Standing.Accepted);
let student_2 = new Student(Standing.Rejected);
let student_3 = new Student(Standing.Completed);
let student_4 = new Student(Standing.Winner);
let studArr = [student_1, student_2, student_3, student_4];
for (let i = 0; i<studArr.length; i++){
    console.log(studArr[i].status);
}
