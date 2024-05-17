var students = ["Usman ", "Ali","Nouman"];
//let searchstudents = students.findIndex(findAli);
//students[5]="Zeeshan";
//students.sort();
students.splice(1,0, ...["Zahid","Anwar"]);

console.log(...students);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
}

