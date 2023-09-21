// Write your solution in this file!
const employee = {
    Name: "", 
    streetAddress: "" ,
};
function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    };
}
console.log(employee);
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(employee, key) {
    const copytOfEmployee = {...employee}
    delete copytOfEmployee[key];
    return copytOfEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}