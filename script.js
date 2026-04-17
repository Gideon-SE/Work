document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let position = document.getElementById("position").value;

    if (name === "" || age === "") {
        document.getElementById("output").innerHTML = "Please fill all fields!";
        return;
    }

    document.getElementById("output").innerHTML =
        "✅ Registered Player: " + name +
        " | Age: " + age +
        " | Position: " + position;
});
