const candidateDiv = document.getElementById("candidate-wrapper");

fetch(baseurl + "/candidates")
    .then(response => response.json())
    .then(candidates => {
        console.log(candidates);
        candidates.map(addCandidateToDiv);
    })

function addCandidateToDiv(candidate){
    const selectCandidateToDiv = document.createElement("div");
    selectCandidateToDiv.id=candidate.id;
    candidateDiv.appendChild(selectCandidateToDiv);
    constructCandidate(selectCandidateToDiv, candidate);
}

function constructCandidate(divElement, candidate){
    divElement.innerHTML = `
    <div class="candidate-card">  
    <table>    
    <td className="candidate-name">${escapeHTML(candidate.name)}</td>
    <td className="candidate-party">${escapeHTML(candidate.party.name)}</td>
    <table/>
    </div>`;
}