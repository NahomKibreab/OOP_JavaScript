class Person {
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  age(age) {
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, quirkyFact, email, studentID) {
    super(name, quirkyFact, email);
    this.studentID = studentID;
  }

  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

class Mentor extends Person {
  mentorID(id) {
    this.mentorID = id;
  }

  onShift() {
    this.onShift = true;
  }

  offShift() {
    this.offShift = false;
  }

  onMeeting() {
    this.onMeeting = false;
  }

  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

const student = new Student(
  "Nahom",
  `I don't eat chicken`,
  "nknahom@gmail.com",
  "001"
);
const mentor = new Mentor(
  "Nahom",
  `I don't eat chicken`,
  "nahom.mehanzel@gmai.com"
);

console.log("student-> ", student.bio());
console.log("mentor-> ", mentor.bio());
