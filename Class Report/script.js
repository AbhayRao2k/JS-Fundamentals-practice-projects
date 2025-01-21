const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 75 },
  { name: "Charlie", marks: 90 },
  { name: "David", marks: 95 },
];

// Total marks and average marks
const totalMarks = students.reduce(
  (student, score) => student + score.marks,
  0
);
console.log(`Total marks of the class: ${totalMarks}`);

const averageMarks = totalMarks / students.length;
console.log(`Average marks of the class: ${averageMarks}`);

// Top scorer of the class
const topScorer = students.reduce((top, student) => {
  return student.marks > top.marks ? student : top;
});
console.log(`Name of the top scoring student: ${topScorer.name}`);

// Categorize students by performance
const excellent = students
  .filter((student) => student.marks >= 90)
  .map((student) => student.name);
const good = students
  .filter((student) => student.marks >= 70 && student.marks < 90)
  .map((student) => student.name);
const needsImprovement = students
  .filter((student) => student.marks < 70)
  .map((student) => student.name);

const categories = { excellent, good, needsImprovement };
console.log(categories);

// Displaying the report
console.log(`Total Marks: ${totalMarks} and Average Marks: ${averageMarks}`);
console.log(`Top Scorer of the class: ${topScorer.name}`);

console.log("=== Class Performance Report ===");

for (const category in categories) {
  console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}:`);
  if (categories[category].length === 0) {
    console.log("  None");
  } else {
    categories[category].forEach((name) => console.log(`  - ${name}`));
  }
}
