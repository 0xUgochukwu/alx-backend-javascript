const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.split('\n').filter((student) => student).slice(1);
    const fields = {};
    for (const student of students) {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[studentData.length - 1];
      if (!fields[field]) {
        fields[field] = {
          count: 0,
          students: []
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
          ', '
        )}`
      );
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
