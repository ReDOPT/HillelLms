class Student {
    constructor(name, surname, birthYear, grades = []) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null); // Массив из 25 элементов, изначально пустой
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return this.grades.length ? total / this.grades.length : 0;
    }

    present() {
        const nextIndex = this.attendance.indexOf(null);
        if (nextIndex !== -1) {
            this.attendance[nextIndex] = true;
        } else {
            console.log("Все места посещаемости заполнены.");
        }
    }

    absent() {
        const nextIndex = this.attendance.indexOf(null);
        if (nextIndex !== -1) {
            this.attendance[nextIndex] = false;
        } else {
            console.log("Все места посещаемости заполнены.");
        }
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const attendanceRate = this.attendance.filter(day => day === true).length / this.attendance.length;

        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодец!";
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Иван", "Иванов", 2000, [95, 90, 92, 85]);
const student2 = new Student("Мария", "Петрова", 2001, [78, 85, 82, 80]);
const student3 = new Student("Алексей", "Сидоров", 1999, [60, 70, 75, 65]);


student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.present();

student3.absent();
student3.absent();
student3.present();


console.log(`${student1.name} ${student1.surname}: ${student1.summary()}`);
console.log(`${student2.name} ${student2.surname}: ${student2.summary()}`);
console.log(`${student3.name} ${student3.surname}: ${student3.summary()}`);