// import getCountyByName from './data.js';

// Main application logic
let currentCounty = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Populate county dropdown
    populateCountyDropdown();

    // Set up event listeners
    setupEventListeners();

    // Display last updated date
    displayLastUpdated();

    // Display all counties grid
    displayAllCounties();
});

// Set up event listeners
function setupEventListeners() {
    // Zip code search
    const zipCodeInput = document.getElementById('zipCodeInput');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', () => {
        const zipCode = zipCodeInput.value.trim();
        if (zipCode) {
            searchByZipCode(zipCode);
        }
    });

    // Enter key on zip code input
    zipCodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const zipCode = zipCodeInput.value.trim();
            if (zipCode) {
                searchByZipCode(zipCode);
            }
        }
    });

    // County dropdown
    const countySelect = document.getElementById('countySelect');
    countySelect.addEventListener('change', (e) => {
        const countyName = e.target.value;
        if (countyName) {
            displayCountyData(countyName);
        }
    });
}

// Search by zip code
function searchByZipCode(zipCode) {
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = '';

    // Validate zip code format
    if (!/^\d{5}$/.test(zipCode)) {
        errorMsg.textContent = 'Please enter a valid 5-digit zip code.';
        return;
    }

    const county = getCountyByZipCode(zipCode);

    if (!county) {
        errorMsg.textContent = 'No data found for that zip code. Please try another or select a county from the dropdown.';
        return;
    }

    // Display the county data
    displayCountyData(county.name);

    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

// Display county data
function displayCountyData(countyName) {
    const county = getCountyByName(countyName);

    if (!county) {
        console.error('County not found:', countyName);
        return;
    }

    currentCounty = county;

    // Show results section
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';

    // Set county name and zip codes
    document.getElementById('countyName').textContent = county.name;
    // document.getElementById('countyZips').textContent = 'Zip Codes: ' + county.zip_codes.join(', ');

    // Display candidates
    displayCandidates(county);

    // Display referendums
    displayReferendums(county);

    // Display voter questions
    displayVoterQuestions(county);
}

// Display candidates
function displayCandidates(county) {
    const federalCandidatesEl = document.getElementById('federalCandidates');
    const stateCandidatesEl = document.getElementById('stateCandidates');
    const countyCandidatesEl = document.getElementById('countyCandidates');

    // Clear previous content
    federalCandidatesEl.innerHTML = '';
    stateCandidatesEl.innerHTML = '';
    countyCandidatesEl.innerHTML = '';

    const candidates = county.candidates || {};

    // Federal candidates
    if (candidates.federal) {
        displayCandidateCategory(federalCandidatesEl, candidates.federal);
        // federalCandidatesEl.href = "https://ballotpedia.org/" + candidates.federal[0].name.replaceAll(" ", "_");
    } else {
        federalCandidatesEl.innerHTML = '<p class="empty-state">No federal candidates found.</p>';
    }

    // State candidates
    if (candidates.state) {
        displayCandidateCategory(stateCandidatesEl, candidates.state);
    } else {
        stateCandidatesEl.innerHTML = '<p class="empty-state">No state candidates found.</p>';
    }

    // County candidates
    if (candidates.county) {
        displayCandidateCategory(countyCandidatesEl, candidates.county);
    } else {
        countyCandidatesEl.innerHTML = '<p class="empty-state">No county candidates found.</p>';
    }
}

// Display candidate category (federal, state, or county)
function displayCandidateCategory(container, categoryCandidates) {
    const candidateList = document.createElement('div');
    candidateList.className = 'candidate-list';

    for (const [office, candidates] of Object.entries(categoryCandidates)) {
        if (candidates && candidates.length > 0) {
            const raceDiv = document.createElement('div');
            raceDiv.className = 'candidate-item';

            const raceTitle = document.createElement('div');
            raceTitle.className = 'race-title';
            raceTitle.textContent = office;
            raceDiv.appendChild(raceTitle);

            const candidatesList = document.createElement('div');
            candidatesList.className = 'candidates-in-race';

            candidates.forEach(candidate => {
                const candidateDiv = document.createElement('div');
                candidateDiv.className = 'candidate-detail';

                const candidateName = document.createElement('a');
candidateName.className = 'candidate-name';

if (candidate.incumbent) {
    candidateName.classList.add('incumbent');
}

// Create Ballotpedia URL
const ballotpediaName = candidate.name.replaceAll(" ", "_");

candidateName.href = `https://ballotpedia.org/${encodeURIComponent(ballotpediaName).replaceAll("%28", "(").replaceAll("%29", ")")}`;

candidateName.textContent = candidate.name;
candidateName.target = "_blank";
candidateName.rel = "noopener noreferrer";

candidateDiv.appendChild(candidateName);

                // const candidateName = document.createElement('span');
                // candidateName.className = 'candidate-name';
                // if (candidate.incumbent) {
                //     candidateName.classList.add('incumbent');
                // }
                // candidateName.textContent = candidate.name;
                // candidateDiv.appendChild(candidateName);

                const candidateInfo = document.createElement('span');
                candidateInfo.className = `candidate-details party-${candidate.party.toLowerCase()}`;
                candidateInfo.textContent = ` (${candidate.party})`;
                candidateDiv.appendChild(candidateInfo);

                candidatesList.appendChild(candidateDiv);
            });

            raceDiv.appendChild(candidatesList);
            candidateList.appendChild(raceDiv);
        }
    }

    if (candidateList.children.length === 0) {
        container.innerHTML = '<p class="empty-state">No candidates found in this category.</p>';
    } else {
        container.innerHTML = '';
        container.appendChild(candidateList);
    }
}

// Display referendums
function displayReferendums(county) {
    const referendumsListEl = document.getElementById('referendumsList');
    const referendums = county.referendums || [];

    if (referendums.length === 0) {
        referendumsListEl.innerHTML = '<p class="empty-state">No referendums found for this county.</p>';
        return;
    }

    referendumsListEl.innerHTML = '';

    referendums.forEach(referendum => {
        const referendumItem = document.createElement('div');
        referendumItem.className = 'referendum-item';

        const title = document.createElement('div');
        title.className = 'referendum-title';
        title.textContent = referendum.title;
        referendumItem.appendChild(title);

        const question = document.createElement('div');
        question.className = 'referendum-question';
        question.textContent = referendum.question;
        referendumItem.appendChild(question);

        const meta = document.createElement('div');
        meta.className = 'referendum-meta';

        const typeSpan = document.createElement('span');
        typeSpan.textContent = `Type: ${referendum.type}`;
        meta.appendChild(typeSpan);

        const yearSpan = document.createElement('span');
        yearSpan.textContent = `Year: ${referendum.year}`;
        meta.appendChild(yearSpan);

        const statusSpan = document.createElement('span');
        statusSpan.className = `status-${referendum.status.toLowerCase()}`;
        statusSpan.textContent = `Status: ${referendum.status}`;
        meta.appendChild(statusSpan);

        referendumItem.appendChild(meta);
        referendumsListEl.appendChild(referendumItem);
    });
}

// Display voter questions
function displayVoterQuestions(county) {
    const voterQuestionsListEl = document.getElementById('voterQuestionsList');
    const voterQuestions = county.voter_questions || [];

    if (voterQuestions.length === 0) {
        voterQuestionsListEl.innerHTML = '<p class="empty-state">No voter questions found for this county.</p>';
        return;
    }

    voterQuestionsListEl.innerHTML = '';

    voterQuestions.forEach(question => {
        const questionItem = document.createElement('div');
        questionItem.className = 'voter-question-item';

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        questionItem.appendChild(questionText);

        const meta = document.createElement('div');
        meta.className = 'question-meta';

        const typeSpan = document.createElement('span');
        typeSpan.textContent = `Type: ${question.type}`;
        meta.appendChild(typeSpan);

        const yearSpan = document.createElement('span');
        yearSpan.textContent = `Year: ${question.year}`;
        meta.appendChild(yearSpan);

        questionItem.appendChild(meta);
        voterQuestionsListEl.appendChild(questionItem);
    });
}

// Populate county dropdown
function populateCountyDropdown() {
    const countySelect = document.getElementById('countySelect');
    const countyNames = getAllCountyNames();

    // Clear existing options (except the default)
    while (countySelect.options.length > 1) {
        countySelect.remove(1);
    }

    countyNames.forEach(countyName => {
        const option = document.createElement('option');
        option.value = countyName;
        option.textContent = countyName;
        countySelect.appendChild(option);
    });
}

// Display all counties grid
function displayAllCounties() {
    // const countiesGridEl = document.getElementById('countiesGrid');
    const countyNames = getAllCountyNames();

    // countiesGridEl.innerHTML = '';

    countyNames.forEach(countyName => {
        const county = getCountyByName(countyName);
        if (!county) return;

        const countyCard = document.createElement('div');
        countyCard.className = 'county-card';
        countyCard.addEventListener('click', () => {
            displayCountyData(countyName);
            document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
        });

        const nameEl = document.createElement('h4');
        nameEl.textContent = county.name;
        countyCard.appendChild(nameEl);

        const zipsEl = document.createElement('p');
        zipsEl.textContent = `Zip Codes: ${county.zip_codes.slice(0, 3).join(', ')}...`;
        countyCard.appendChild(zipsEl);

        const infoEl = document.createElement('p');
        const candidateCount = countCandidates(county);
        const referendumCount = county.referendums ? county.referendums.length : 0;
        const questionCount = county.voter_questions ? county.voter_questions.length : 0;
        infoEl.textContent = `${candidateCount} candidates | ${referendumCount} referendums | ${questionCount} questions`;
        countyCard.appendChild(infoEl);

        // countiesGridEl.appendChild(countyCard);
    });
}

// Count candidates for a county
function countCandidates(county) {
    const candidates = county.candidates || {};
    let count = 0;

    for (const category in candidates) {
        for (const office in candidates[category]) {
            count += candidates[category][office].length;
        }
    }

    return count;
}

// Display last updated date
function displayLastUpdated() {
    const metadata = getMetadata();
    const lastUpdatedEl = document.getElementById('lastUpdated');

    if (metadata && metadata.last_updated) {
        lastUpdatedEl.textContent = metadata.last_updated;
    } else {
        lastUpdatedEl.textContent = 'Unknown';
    }
}
