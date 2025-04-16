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
  deposit(amount) {
    this.balance += amount;
    this.history.push(`Deposited $${amount}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      this.history.push(`Attempted to withdraw $${amount} (Insufficient funds)`);
      console.log("Insufficient balance!");
      return;
    }
    this.balance -= amount;
    this.history.push(`Withdrew $${amount}`);
  }
  transferTo(anotherAccount, amount) {
    if (amount > this.balance) {
      this.history.push(`Attempted transfer of $${amount} to ${anotherAccount.ownerName} (Failed)`);
      console.log("Transfer failed: insufficient funds.");
      return;
    }
  
    this.withdraw(amount);             
    anotherAccount.deposit(amount);    
  
    this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`);
    anotherAccount.history.push(`Received $${amount} from ${this.ownerName}`);
  }
  getSummary() {
    return `${this.ownerName}'s balance is $${this.balance}`;
  }
  printHistory() {
    console.log(`Transaction history for ${this.ownerName}:`);
    this.history.forEach(entry => console.log("- " + entry));
  }

  function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
  const li = document.createElement("li");
      li.textContent = taskText;
      
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

}
  

