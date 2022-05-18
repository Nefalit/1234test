"use strict";
// const user = {
//   name: "Vasya",
//   email: "vasya@mail.com",
//   homeWorkResults: [],

//   getName() {
//     return this.name;
//   },
//   getEmail() {
//     return this.email;
//   },
//   getHomeWorkResults() {
//     return this.homeWorkResults;
//   },
//   addHomeWorkResults(topic, success) {
//     const homeWorkResult = {
//       topic,
//       success,
//     };
//     this.homeWorkResults.push(homeWorkResult);
//   },
// };

// console.log(user.getName());
// console.log(user.getEmail());
// console.log(user.addHomeWorkResults("math",true));
// console.log(user.getHomeWorkResults());
// class User {
//   #name;
//   #email;
//   #homeWorkResults;
//   constructor(name = "anonim", email = "test@mail.com") {
//     this.#name = name;
//     this.#email = email;
//     this.#homeWorkResults = [];
//   }
//   getName() {
//     return this.#name;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   getHomeWorkResults() {
//     return this.#homeWorkResults;
//   }
//   addHomeWorkResults(topic, success) {
//     const homeWorkResult = {
//       topic,
//       success,
//     };
//     this.#homeWorkResults.push(homeWorkResult);
//   }
// }

// const vasya = new User("Vasya", "super_vasya@mail.com")
// vasya.addHomeWorkResults("history",false)

// console.log(vasya);

const listOfStudents = [
  {
    name: "John",
    email: "john@gmail.com",
  },
  {
    name: "Jane",
    email: "jane@gmail.com",
  },
  {
    name: "Jack",
    email: "jack@gmail.com",
  },
  {
    name: "Mary",
    email: "mary@gmail.com",
  },
  {
    name: "Robert",
    email: "robert@gmail.com",
  },
  {
    name: "Ann",
    email: "ann@gmail.com",
  },
  {
    name: "Brad",
    email: "brad@gmail.com",
  },
  {
    name: "Lisa",
    email: "lisa@gmail.com",
  },
  {
    name: "Matthew",
    email: "matthew@gmail.com",
  },
  {
    name: "Sandra",
    email: "sandra@gmail.com",
  },
];

const homeworkResults = [
  {
    topic: "HTML Basics",
    results: [
      {
        email: "john@gmail.com",
        success: true,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: true,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: true,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "CSS Basics",
    results: [
      {
        email: "john@gmail.com",
        success: false,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: false,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: true,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: false,
      },
      {
        email: "matthew@gmail.com",
        success: true,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "JS Basics",
    results: [
      {
        email: "john@gmail.com",
        success: true,
      },
      {
        email: "jane@gmail.com",
        success: false,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: false,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: false,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "DOM",
    results: [
      {
        email: "john@gmail.com",
        success: false,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: false,
      },
      {
        email: "ann@gmail.com",
        success: true,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: false,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "AJAX",
    results: [
      {
        email: "john@gmail.com",
        success: false,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: false,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: false,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: true,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
];

const Student = function (name, email) {
  const homeWorkResults = [];

  this.getName = function () {
    return name;
  };
  this.getEmail = function () {
    return email;
  };
  this.getHomeWorkResults = function () {
    return homeWorkResults;
  };
  this.addHomeWorkResults = function (topic, success) {
    const homeWorkResult = {
      topic,
      success,
    };
    homeWorkResults.push(homeWorkResult);
  };
};

const petya = new Student("Петя", "petya_silach@mail.com");
// petya.addHomeWorkResults("asdasd", true)

// console.log(petya.getHomeWorkResults());

const FrontendSchool = function (students, failedLimit) {
  const studentsDataList = students.map(({ name, email } = {}) => {
    return new Student(name, email);
  });

  this.printStudentsList = function () {
    studentsDataList.forEach((element) => {
      const mVoh = element.getHomeWorkResults().map(({ topic, success }) => `topic:${topic} result:${success}\n`).join("");
      console.log(
        `Name: ${element.getName()}\nEmail: ${element.getEmail()}\nHomework:${mVoh}`
      );
    });
  };
  this.addHomeworkResults = function (array) {
    const topicArr = array.map((el, indx, arr) => {
      const top = el.topic;
      const res = el.results.filter(({ email, success },i) => {
        const student = studentsDataList.find(el => el.getEmail() === email);
        student.addHomeWorkResults(top, success)
      });
    });
  };
  this.printStudentsEligibleForProject = function () {
   const mVoh = studentsDataList.filter((el) => {
      const arrHomework = el.getHomeWorkResults();
     const failedHw = arrHomework.reduce((acc, el) => {
        if (!el.success) {
          return acc + 1; 
        }
        return acc
     }, 0)
      if (failedLimit <= failedHw) {
        return el;
     }
   });
    return mVoh.map(el=>el.getName());
  }
};

const goIt = new FrontendSchool(listOfStudents, 1);
goIt.addHomeworkResults(homeworkResults);
// console.log(goIt.printStudentsList());
console.log(goIt.printStudentsEligibleForProject());



// addHomeworkResults(homeworkResults): this method can be called with argument homeworkResult,
//   object with 2 fields: topic(string) and results(array of objects with 2 fields: email(string)
//   and success(boolean)). This method should update all student objects in FrontendLab studentsList.

// printStudentsEligibleForProject(): this method should log to console 
// list of students who didn’t fail more homework, than allowed failedLimit.

