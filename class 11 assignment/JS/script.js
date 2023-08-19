//Data with filter, map and foreach
let staff = [
    {
        id: 1,
        name: 'John',
        age: 25,
        position: "Developer",
        salary: "$30k",
        work: true
    },
    {
        id: 2,
        name: 'Maria',
        age: 35,
        position: "Developer",
        salary: "$30k",
        work: false
    },
    {
        id: 3,
        name: 'Tanaka',
        age: 25,
        position: "Software Engineer",
        salary: "$30k",
        work: true
    },
    {
        id: 4,
        name: 'Mary',
        age: 23,
        position: "Manager",
        salary: "$30k",
        work: false
    }
];

//filter and map 
const openToWork = staff.filter(function(open) {

    console.log(open.work === true)

    return (open["work"] === true);  // filter the array to only include employees who are working
}).map(function(staff) {

    console.log(staff.name);

    console.log(`The employee with the id: ${staff.id} is open to work. ${staff.name} and works as a ${staff.position}`);

    return `The employee with the id: ${staff.id} is open to work. ${staff.name} and works as a ${staff.position}`;
});


console.log(openToWork);


const open = staff.filter(function(open) {

    return open.work === true;

}).map(function(emOp) {

    return emOp.name;
});

console.log(open);

//foreach
staff.forEach(function(staff) {

    console.log(staff.name);
});

//map
const empName = staff.map(function(emp) {

    return emp.name
});

console.log(empName);