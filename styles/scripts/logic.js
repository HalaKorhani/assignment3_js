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
 
  function getGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
  }
class Bankaccount{
  constructor(ownerName, initialBalance){
    this.ownerName=ownerName;
    this.initialBalance=initialBalance;
    this.history=[];
  }

}
