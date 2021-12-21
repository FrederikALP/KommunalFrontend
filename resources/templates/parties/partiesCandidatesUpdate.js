function updateCandidate(candidate) {
    const tableRowToUpdate = document.getElementById(candidate.id);

    tableRowToUpdate.innerHTML = `
        <div className="party-candidates-edit-table">
        <input id="edit-candidate-name-${candidate.id}" value="${candidate.name}">
        <select id="selector" value="${selectedPartyId}"></select>
        <button id="cancel-edit-${candidate.id}">Cancel</button>
        <button onClick="updateSelectedCandidate(${candidate.id})">Update</button>
        <button onClick="deleteCandidate(${candidate.id})">Delete</button>
        </div>
    `;

    document.getElementById(`cancel-edit-${candidate.id}`)
        .addEventListener("click", () => undoUpdateTableRow(candidate));

    localPartiesSaved.forEach(function (item) {
        var option = document.createElement('option');
        option.value = item.id;
        option.innerHTML = item.name;
        selector.appendChild(option)
    })

    selector.onchange = function () {
        selectedPartyId = this.value;
        fetch(baseurl + "/parties/" + selectedPartyId)
            .then(response => response.json())
            .then(party => {
                partyToCandidate = party;
            });
    }
}

function undoUpdateTableRow(candidate) {
    const candidateTableRow = document.getElementById(candidate.id);
    constructPartyCandidatesTableRow(candidateTableRow, candidate);
}

function updateSelectedCandidate(candidateId) {
    console.log(partyToCandidate);
    const tableRowToUpdate = document.getElementById(candidateId);
    const candidateToEdit = {
        id: candidateId,
        name: document.getElementById(`edit-candidate-name-${candidateId}`).value,
        party: partyToCandidate
    };

    console.log(candidateToEdit);
    fetch(baseurl + "/candidates/" + candidateId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(candidateToEdit)
    }).then(response => {
        if (response.status === 200) {
            constructPartyCandidatesTableRow(tableRowToUpdate, candidateToEdit);
        }
    });
}