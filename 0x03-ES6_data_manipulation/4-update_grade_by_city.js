export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => (
        {
          ...student,
          grade: (newGrades
            .find((grade) => grade.studentId === student.id) || { grade: 'N/A' }
          ).grade,
        }
      ));
  }

  return [];
}
