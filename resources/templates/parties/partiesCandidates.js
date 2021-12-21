const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const partyIdet = URLParams.get("partyId");
const partyCandidatesDiv = document.getElementById("party-candidates-table-tbody");
let localPartiesSaved = [];
let selectedPartyId;
let partyToCandidate;

fetch(baseurl + "/parties")
    .then(response => response.json())
    .then(parties => {
        parties.map(localParties => {
            localPartiesSaved.push(localParties);
        })
        console.log(localPartiesSaved)
        fetch(baseurl + "/candidates/party/" + partyIdet)
            .then(response => response.json())
            .then(kandidater => {
                console.log(kandidater)
                kandidater.map(addPartyCandidatesToTableRow);
            })
    });



function addPartyCandidatesToTableRow(candidate){
    const selectPartyCandidatesToDiv = document.createElement("div");
    selectPartyCandidatesToDiv.id=candidate.id;
    partyCandidatesDiv.appendChild(selectPartyCandidatesToDiv);
    constructPartyCandidatesTableRow(selectPartyCandidatesToDiv, candidate);
}

function constructPartyCandidatesTableRow(candidatesTableRow, candidate) {
    candidatesTableRow.innerHTML = `
    <div className="party-candidates-table">
        <tr className="row-candidate-name">${candidate.name}</tr>
        <tr className="row-candidate-party">${candidate.party.name}</></tr>
        <tr><button id="edit-button-${candidate.id}">Edit</button></tr>
        <tr><button onClick="deleteCandidate(${candidate.id})">Delete</button></tr>
    </div>
    `;
    document.getElementById(`edit-button-${candidate.id}`)
        .addEventListener("click", () => updateCandidate(candidate));
}
