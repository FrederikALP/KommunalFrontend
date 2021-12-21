<div className="party-candidates-table">
        <p className="row-candidate-name">${candidate.name}</p>
        <p className="row-candidate-party">${candidate.party.name}</p>
        <button id="edit-button-${candidate.id}">🥯</button>
        <button onClick="deleteCandidate(${candidate.id})">❌</button>
</div>


<div className="party-candidates-table">
    <td>
        <p className="row-candidate-name">${candidate.name}</p>
    </td>
    <td>
        <p className="row-candidate-party">${candidate.party.name}</p>
    </td>
    <td>
        <button id="edit-button-${candidate.id}">🥯</button>
    </td>
    <td>
        <button onClick="deleteCandidate(${candidate.id})">❌</button>
    </td>
</div>


<div className="party-candidates-edit-table">
        <input id="edit-candidate-name-${candidate.id}" value="${candidate.name}">
        <select id="selector" value="${selectedPartyId}"></select>
        <button id="cancel-edit-${candidate.id}">✖️</button>
        <button onClick="updateSelectedCandidate(${candidate.id})">✅</button>
        <button onClick="deleteCandidate(${candidate.id})">❌</button>
        </div>

<td>
    <input id="edit-candidate-name-${candidate.id}" value="${candidate.name}">
</td>

<td>
    <select id="selector" value="${selectedPartyId}"></select>
</td>
<td>
    <td>
        <button id="cancel-edit-${candidate.id}">✖️</button>
        <button onClick="updateSelectedCandidate(${candidate.id})">✅</button>
    </td>
    <td>
        <button onClick="deleteCandidate(${candidate.id})">❌</button>
    </td>