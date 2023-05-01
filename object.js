const employeeObj = {
    firstName: "Anand", 
    lastName: "RP",
    printName: function () {
        let output = `Employee name is ${this.firstName} ${this.lastName}`;
        return output;
    },
    ageObj: {
        empAge: 23
    }
}

console.log(employeeObj.printName())