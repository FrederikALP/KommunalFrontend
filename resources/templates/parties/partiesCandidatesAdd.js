function addCandidate() {
    const name = document.getElementById("new-candidate-name").value;
    const newCandidate = {
        name: name,
    };
    console.log(newCandidate);
    fetch(baseurl + "/candidates/" + partyIdet, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newCandidate)
    })
        .then(response => {
            if (response.status === 200) {
                console.log("New candidate created")
            } else {
                console.log("New candidate not created", response.status);
            }
        })
        .catch(error => console.log("Network related error: ", error));
}

document.getElementById("create-new-candidate-button")
    .addEventListener("click", addCandidate);