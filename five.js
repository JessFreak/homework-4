export const task5 = {
    students: new Map(),
    security: new Map(),

    makeStudent(student) {
        if ( !Object.keys(student).includes("security") ) {         //цю перевірку зробив окремою,
            throw new Error("Incomplete data");                     // бо нижче з цього об'єкта дістаються поля
        }

        const { name, surname, course, faculty, security:{password, mail}, ...subjects } = student;
        if (!name || !surname || !course || !faculty || !password || !mail) {
            throw new Error("Incomplete data");
        }

        if ( typeof(name) !== "string" || typeof(surname) !== "string" || typeof(mail) !== "string") { //це точно мають бути рядки
            throw new Error("Name/surname/mail is not a string");
        }

        if ( isNaN(+course) ) {
            throw new Error("Course is not a number");
        }

        if ( course < 1 || course > 10 ) {               //хз який максимум у курсів
            throw new Error("Went beyond the course");
        }

        const studentInfo = {
            username: this.makeUsername(name, surname),
            mail: mail,
            average: this.findAverage( this.takeMarks(subjects) ),
            subjects: subjects,
        }

        this.students.set(studentInfo.username, studentInfo);
        this.security.set(studentInfo.username, password);

        return studentInfo;
    },

    averageByUsername(username, password) {
        const [studentInfo, pass] = [this.students.get(username), this.security.get(username)];
        if (password !== pass) {
            throw new Error("Invalid password");
        } else {
            return studentInfo.average;
        }
    },

    makeUsername(name, surname) {
        return "" + name + " "+ surname;
    },

    takeMarks(subjects) {
        if (!subjects) return 0;
        else {
            const marks = Object.values(subjects);

            if ( marks.some( (mark) => isNaN(+mark) || !Number.isFinite(mark) ) ) {
                throw new Error("Mark is not a number");

            } else return marks;
        }
    },

    findAverage(marks) {
        if (marks.length !== 0) {
            const sum = marks.reduce( (sum, mark) => (+sum) + (+mark) );
            return sum / marks.length;

        } else return 0;
    }
}