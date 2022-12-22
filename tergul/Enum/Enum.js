const ProcessStatus = {
    ACCEPTED: 1,
    REJECTED: 2,
    COMPLETED: 3,
    WINNER: 4,
}

class Student {
    Status = ProcessStatus.ACCEPTED;
}

let Mosh = new Student()
let Eitan = new Student()
let Lev = new Student()
let Shlomi = new Student()

Mosh.Status = ProcessStatus.ACCEPTED
Eitan.Status = ProcessStatus.WINNER
Lev.Status = ProcessStatus.REJECTED
Shlomi.Status = ProcessStatus.COMPLETED

let students = [Mosh, Eitan, Lev, Shlomi];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].Status);
}

