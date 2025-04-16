const students = [
  { name: "TAha", scores: [90, 85, 92] },
  { name: "maria", scores: [70, 68, 72] },
  { name: "nabiha", scores: [100, 100, 100] }
];
function generateReports(students) {
  return students.map(student => {
    const average = Math.round(
      student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
    )});
  }
