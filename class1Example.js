class student {
    constructor (name, standared, sex){
        this.name = name,
        this.standared = standared,
        this.sex = sex
    }
    getDetails() {
        console.log(`${this.name} ${this.standared} ${this.sex}`)
    }
}

let student1 = new student ("Anand", 8, "Male");
student1.getDetails()

