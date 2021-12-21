const votedDiv = document.getElementById("voted-wrapper");
var allParties = [];
let totalVotes;

fetch(baseurl + "/parties")
    .then(response => response.json())
    .then(partiesSum => {
        partiesSum.map(localPartiesSum => {
            allParties.push(localPartiesSum);
        })
        fetch(baseurl + "/parties")
            .then(response => response.json())
            .then(parties => {
                parties.map(addPartyVotesToDiv);
            });
        console.log(allParties)
        let sum = allParties.reduce(function (a, b) {
            return {
                partyVotes: a.partyVotes + b.partyVotes
            };
        });
        console.log(sum.partyVotes)
        totalVotes = sum.partyVotes;
        console.log(totalVotes);
        const voteHeader = document.createElement("header");
        voteHeader.innerHTML =
            `<div class="header">Totale stemmer i regionen - ${(totalVotes)}</div>
                <th>Parti Navn</th>
                <th>Parti Stemmer</th>
                <th>Procent af stemmer</th>
`
        votedDiv.appendChild(voteHeader);
    });

function addPartyVotesToDiv(party) {
    const selectPartyToDiv = document.createElement("div");
    selectPartyToDiv.id = party.id;
    votedDiv.appendChild(selectPartyToDiv);
    constructPartyVote(selectPartyToDiv, party);
};

function constructPartyVote(divElement, party) {
    divElement.innerHTML = `
    <div class="party-card">
    <table>
        <td class="party-name"> Parti Navn - ${(party.name)}</td>
        <td class="party-votes"> Parti stemmer - ${(party.partyVotes)}</td>
        <td class="total-votes"> Procent af totale stemmer i regionen - %${(parseFloat(party.partyVotes/totalVotes*100)).toFixed(2)  }</td>
    </table>
    </div>`;
};