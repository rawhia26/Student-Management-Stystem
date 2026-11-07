// 1. إنشاء كلاس الطالب

class Student {

  constructor(id, name, grades, attendance) {

    this.id = id;

    this.name = name;

    this.grades = grades;

    this.attendance = attendance;

  }

  // 2. حساب المتوسط باستخدام reduce

  calculateAverage() {

    let total = this.grades.reduce((sum, grade) => sum + grade, 0);

    return total / this.grades.length;

  }

  // 3. حساب التقدير

  getGrade(average) {

    if (average >= 90) return "A";

    else if (average >= 80) return "B";

    else if (average >= 70) return "C";

    else if (average >= 60) return "D";

    else if (average >= 50) return "E";

    else return "F";

  }

  // 4. تحديد النتيجة النهائية

  getResult() {

    if (this.calculateAverage() >= 50 && this.attendance >= 75) {

      return "ناجح";

    } else {

      return "يحتاج مراجعة";

    }

  }

}

// 5. إنشاء مصفوفة الطلاب

let studentsList = [

  new Student(1, "Ahmed", [90, 85, 95], 90),

  new Student(2, "Sara", [45, 40, 48], 80),

  new Student(3, "Mona", [60, 70, 65], 90),

  new Student(4, "Ali", [42, 45, 48], 70)

];

// 6. استخراج الطلاب المتعثرين باستخدام filter

let weakStudents = studentsList.filter(student => {

  let avg = student.calculateAverage();

  return avg >= 40 && avg <= 49;

});

// 7. إضافة درجات الرأفة باستخدام map

let mercyStudents = weakStudents.map(student => {

  return {

    id: student.id,

    name: student.name,

    oldAverage: student.calculateAverage(),

    newAverage: student.calculateAverage() + 5

  };

});

// 8. جمع المتوسطات الجديدة باستخدام reduce

let totalAfterMercy = mercyStudents.reduce((sum, student) => {

  return sum + student.newAverage;

}, 0);

// 9. حساب متوسط الرأفة مع الحماية من القسمة على صفر

let mercyAverage = mercyStudents.length > 0

  ? totalAfterMercy / mercyStudents.length

  : 0;

// 10. طباعة تقرير جميع الطلاب

console.log("===== تقرير الطلاب =====");

studentsList.forEach(student => {

  let avg = student.calculateAverage();

  console.log("الاسم:", student.name);

  console.log("المتوسط:", avg.toFixed(2));

  console.log("التقدير:", student.getGrade(avg));

  console.log("النتيجة:", student.getResult());

  console.log("----------------------");

});

// 11. طباعة طلاب لجنة الرأفة

console.log("===== لجنة الرأفة =====");

console.log(mercyStudents);

// 12. طباعة متوسط الرأفة

console.log("متوسط درجات الطلاب بعد الرأفة:", mercyAverage.toFixed(2));
