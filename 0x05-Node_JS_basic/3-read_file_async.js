const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const data = fs
        .readFileSync(path, 'utf8')
        .toString('utf-8')
        .trim();
      const students = data
        .split('\n')
        .filter((student) => student)
        .slice(1);
      const fields = {};
      for (const student of students) {
        const studentData = student.split(',');
        const firstName = studentData[0];
        const field = studentData[studentData.length - 1];
        if (!fields[field]) {
          fields[field] = {
            count: 0,
            students: [],
          };
        }
        fields[field].count += 1;
        fields[field].students.push(firstName);
      }
      console.log(`Number of students: ${students.length}`);
      for (const field of Object.keys(fields)) {
        const { count, students } = fields[field];
        console.log(
          `Number of students in ${field}: ${count}. List: ${students.join(
            ', ',
          )}`,
        );
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
