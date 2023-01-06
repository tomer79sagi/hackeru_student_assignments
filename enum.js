
// 1. Classical enum in JS
const ProcessStatus = {
    CREATED: 1,
    DRAFT: 2,
    SENT: 3
}

// 2. ES6 capability, disabling the ability to change the properties
// const TaskStatus = Object.freeze({
//     CREATED: 1,
//     DRAFT: 2,
//     SENT: 3
// });

// GMAIL example
class Email {
    sender = "";
    recipient = "";
    subject = "";
    content = "";
    // status = 1;
    status = ProcessStatus.CREATED; // => 1

    send() {
        console.log("Sending email.");
        this.status = ProcessStatus.SENT;
    }

    print() {
        if (this.status === ProcessStatus.CREATED) {
            console.log("Just created, nothing to see");
        } else if (this.status === ProcessStatus.DRAFT) {
            console.log("It's in draft right now");
        }
    }
}

// The main program
// Create one email
let email_1 = new Email();
console.log(email_1.status); // => 1

email_1.send();
console.log(email_1.status); // => 3