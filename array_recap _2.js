function students() {
  const student_names = [];
  for (let i = 0; i < 5; i++) {
    a = prompt("please enter your name");
    student_names.push(a);
  }
  return student_names;
}
document.write(student());
