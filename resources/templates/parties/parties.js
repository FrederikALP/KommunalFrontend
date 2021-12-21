const partyDiv = document.getElementById("party-wrapper");

fetch(baseurl + "/parties")
    .then(response => response.json())
    .then(parties => {
        parties.map(addPartyToDiv);
    })

function addPartyToDiv(party){
    const selectPartyToDiv = document.createElement("div");
    selectPartyToDiv.id=party.id;
    partyDiv.appendChild(selectPartyToDiv);
    constructParty(selectPartyToDiv, party);
}

function constructParty(divElement, party){
    divElement.innerHTML = `
    <div class="party-card">
        
    <a class="party-name" href="./partiesCandidates.html?partyId=${party.id}">${escapeHTML(party.name)}</a>
    </div>`;
}