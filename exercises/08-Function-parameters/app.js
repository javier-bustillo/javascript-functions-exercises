const renderPerson = (name, birthDay, eyeColor, age, gender) => {
    result = name + " " + "is a" + " " + age + " " +
        "years old " + gender + " " + "born in" + " " + birthDay +
        " " + "with" + " " + eyeColor +
        " " + "eyes";
    return result;
}

///*** Do not edit below this line ****/
console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));