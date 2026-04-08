/* ============================================
   THE MASTERS POOL 2025 — Main Application
   ============================================ */

// ──────────────────────────────────────────────
// PLAYER DATA (2025 Masters Field — ~90 players)
// ──────────────────────────────────────────────
const MASTERS_FIELD = [
    { name: "Scottie Scheffler", country: "USA", rank: 1 },
    { name: "Xander Schauffele", country: "USA", rank: 2 },
    { name: "Rory McIlroy", country: "NIR", rank: 3 },
    { name: "Collin Morikawa", country: "USA", rank: 4 },
    { name: "Ludvig Åberg", country: "SWE", rank: 5 },
    { name: "Wyndham Clark", country: "USA", rank: 6 },
    { name: "Jon Rahm", country: "ESP", rank: 7 },
    { name: "Viktor Hovland", country: "NOR", rank: 8 },
    { name: "Patrick Cantlay", country: "USA", rank: 9 },
    { name: "Hideki Matsuyama", country: "JPN", rank: 10 },
    { name: "Tommy Fleetwood", country: "ENG", rank: 11 },
    { name: "Sahith Theegala", country: "USA", rank: 12 },
    { name: "Shane Lowry", country: "IRL", rank: 13 },
    { name: "Matt Fitzpatrick", country: "ENG", rank: 14 },
    { name: "Tony Finau", country: "USA", rank: 15 },
    { name: "Brooks Koepka", country: "USA", rank: 16 },
    { name: "Bryson DeChambeau", country: "USA", rank: 17 },
    { name: "Sam Burns", country: "USA", rank: 18 },
    { name: "Robert MacIntyre", country: "SCO", rank: 19 },
    { name: "Sungjae Im", country: "KOR", rank: 20 },
    { name: "Russell Henley", country: "USA", rank: 21 },
    { name: "Tom Kim", country: "KOR", rank: 22 },
    { name: "Cameron Young", country: "USA", rank: 23 },
    { name: "Max Homa", country: "USA", rank: 24 },
    { name: "Justin Thomas", country: "USA", rank: 25 },
    { name: "Corey Conners", country: "CAN", rank: 26 },
    { name: "Jordan Spieth", country: "USA", rank: 27 },
    { name: "Keegan Bradley", country: "USA", rank: 28 },
    { name: "Brian Harman", country: "USA", rank: 29 },
    { name: "Min Woo Lee", country: "AUS", rank: 30 },
    { name: "Jason Day", country: "AUS", rank: 31 },
    { name: "Joaquin Niemann", country: "CHI", rank: 32 },
    { name: "Cameron Smith", country: "AUS", rank: 33 },
    { name: "Dustin Johnson", country: "USA", rank: 34 },
    { name: "Davis Thompson", country: "USA", rank: 35 },
    { name: "Sepp Straka", country: "AUT", rank: 36 },
    { name: "Akshay Bhatia", country: "USA", rank: 37 },
    { name: "Billy Horschel", country: "USA", rank: 38 },
    { name: "Denny McCarthy", country: "USA", rank: 39 },
    { name: "Will Zalatoris", country: "USA", rank: 40 },
    { name: "Chris Kirk", country: "USA", rank: 41 },
    { name: "Eric Cole", country: "USA", rank: 42 },
    { name: "Taylor Moore", country: "USA", rank: 43 },
    { name: "Nick Dunlap", country: "USA", rank: 44 },
    { name: "Harris English", country: "USA", rank: 45 },
    { name: "Tyrrell Hatton", country: "ENG", rank: 46 },
    { name: "Adam Scott", country: "AUS", rank: 47 },
    { name: "Lucas Glover", country: "USA", rank: 48 },
    { name: "Maverick McNealy", country: "USA", rank: 49 },
    { name: "Patrick Reed", country: "USA", rank: 50 },
    { name: "Sergio Garcia", country: "ESP", rank: 51 },
    { name: "Si Woo Kim", country: "KOR", rank: 52 },
    { name: "Christiaan Bezuidenhout", country: "RSA", rank: 53 },
    { name: "Thomas Detry", country: "BEL", rank: 54 },
    { name: "Byeong Hun An", country: "KOR", rank: 55 },
    { name: "Alex Noren", country: "SWE", rank: 56 },
    { name: "Kurt Kitayama", country: "USA", rank: 57 },
    { name: "Stephan Jaeger", country: "GER", rank: 58 },
    { name: "Tiger Woods", country: "USA", rank: 59 },
    { name: "Phil Mickelson", country: "USA", rank: 60 },
    { name: "Bubba Watson", country: "USA", rank: 61 },
    { name: "Vijay Singh", country: "FIJ", rank: 62 },
    { name: "Fred Couples", country: "USA", rank: 63 },
    { name: "Zach Johnson", country: "USA", rank: 64 },
    { name: "Danny Willett", country: "ENG", rank: 65 },
    { name: "Charl Schwartzel", country: "RSA", rank: 66 },
    { name: "Adam Hadwin", country: "CAN", rank: 67 },
    { name: "José María Olazábal", country: "ESP", rank: 68 },
    { name: "Mike Weir", country: "CAN", rank: 69 },
    { name: "Larry Mize", country: "USA", rank: 70 },
    { name: "Sandy Lyle", country: "SCO", rank: 71 },
    { name: "Ian Woosnam", country: "WAL", rank: 72 },
    { name: "Bernhard Langer", country: "GER", rank: 73 },
    { name: "Jack Nicklaus", country: "USA", rank: 74 },
    { name: "Tom Watson", country: "USA", rank: 75 },
    { name: "Gary Player", country: "RSA", rank: 76 },
    { name: "Ben Crenshaw", country: "USA", rank: 77 },
    { name: "Mark O'Meara", country: "USA", rank: 78 },
    { name: "Angel Cabrera", country: "ARG", rank: 79 },
    { name: "Trevor Immelman", country: "RSA", rank: 80 },
    { name: "Craig Stadler", country: "USA", rank: 81 },
    { name: "Fuzzy Zoeller", country: "USA", rank: 82 },
    { name: "J.T. Poston", country: "USA", rank: 83 },
    { name: "Jake Knapp", country: "USA", rank: 84 },
    { name: "Nick Taylor", country: "CAN", rank: 85 },
    { name: "Nicolai Højgaard", country: "DEN", rank: 86 },
    { name: "Matthieu Pavon", country: "FRA", rank: 87 },
    { name: "Austin Eckroat", country: "USA", rank: 88 },
    { name: "Lee Hodges", country: "USA", rank: 89 },
    { name: "Mackenzie Hughes", country: "CAN", rank: 90 },
];

// ──────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────
const STORAGE_KEY = "mastersPool2025";
const PAR = 72; // Augusta National par

let state = loadState() || {
    members: [],           // [{id, name}]
    picksPerPerson: 4,
    draftOrder: [],        // member ids in randomized order
    picks: [],             // [{round, pickIndex, memberId, playerName}]
    currentPickIndex: 0,
    draftPhase: "setup",   // "setup" | "ordering" | "drafting" | "complete"
    oddsApiKey: "",
    oddsCache: null,       // {timestamp, data: {playerName: oddsString}}
    liveScores: null,      // fetched score data
    manualScores: null,    // {playerName: {r1,r2,r3,r4,status}, dailyAvg: {r1,r2,r3,r4}}
    replacements: {},      // {originalPlayerName: replacementPlayerName}
};

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ──────────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────────
function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));
    const tab = document.getElementById("tab-" + tabId);
    if (tab) tab.classList.add("active");
    const btn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
    if (btn) btn.classList.add("active");

    if (tabId === "draft") renderDraft();
    if (tabId === "leaderboard") renderLeaderboard();
}

// ──────────────────────────────────────────────
// SETUP
// ──────────────────────────────────────────────
function initSetup() {
    const input = document.getElementById("memberNameInput");
    const addBtn = document.getElementById("addMemberBtn");
    const startBtn = document.getElementById("startDraftBtn");
    const rerollBtn = document.getElementById("rerollBtn");
    const confirmBtn = document.getElementById("confirmDraftBtn");

    addBtn.addEventListener("click", () => addMember());
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") addMember(); });

    startBtn.addEventListener("click", () => {
        randomizeDraftOrder();
        state.draftPhase = "ordering";
        saveState();
        renderSetup();
    });

    rerollBtn.addEventListener("click", () => {
        randomizeDraftOrder();
        saveState();
        renderDraftOrder();
    });

    confirmBtn.addEventListener("click", () => {
        state.draftPhase = "drafting";
        state.currentPickIndex = 0;
        state.picks = [];
        saveState();
        showTab("draft");
    });

    // Picks selector
    document.querySelectorAll(".pick-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".pick-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.picksPerPerson = parseInt(btn.dataset.picks);
            saveState();
            renderSetup();
        });
    });

    // Odds API key
    const oddsInput = document.getElementById("oddsApiKey");
    oddsInput.value = state.oddsApiKey || "";
    oddsInput.addEventListener("change", () => {
        state.oddsApiKey = oddsInput.value.trim();
        saveState();
    });

    renderSetup();
}

function addMember() {
    const input = document.getElementById("memberNameInput");
    const name = input.value.trim();
    if (!name) return;
    if (state.members.length >= 20) return alert("Maximum 20 members!");
    if (state.members.some(m => m.name.toLowerCase() === name.toLowerCase())) return alert("Name already exists!");

    state.members.push({ id: crypto.randomUUID(), name });
    input.value = "";
    input.focus();
    saveState();
    renderSetup();
}

function removeMember(id) {
    state.members = state.members.filter(m => m.id !== id);
    saveState();
    renderSetup();
}

function randomizeDraftOrder() {
    const shuffled = [...state.members];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    state.draftOrder = shuffled.map(m => m.id);
}

function renderSetup() {
    // Member list
    const list = document.getElementById("memberList");
    if (state.members.length === 0) {
        list.innerHTML = '<li class="member-empty">Add family members to get started</li>';
    } else {
        list.innerHTML = state.members.map((m, i) => `
            <li>
                <span class="member-name"><span class="member-num">${i + 1}</span> ${escapeHtml(m.name)}</span>
                ${state.draftPhase === "setup" ? `<button class="member-remove" onclick="removeMember('${m.id}')">&times;</button>` : ""}
            </li>
        `).join("");
    }

    // Counts
    document.getElementById("memberCount").textContent = `${state.members.length} / 20`;
    document.getElementById("summMembers").textContent = state.members.length;
    document.getElementById("summPicks").textContent = state.picksPerPerson;
    document.getElementById("summTotal").textContent = state.members.length * state.picksPerPerson;

    // Active picks button
    document.querySelectorAll(".pick-btn").forEach(b => {
        b.classList.toggle("active", parseInt(b.dataset.picks) === state.picksPerPerson);
    });

    // Start button state
    const startBtn = document.getElementById("startDraftBtn");
    startBtn.disabled = state.members.length < 2 || state.draftPhase !== "setup";
    if (state.draftPhase !== "setup") {
        startBtn.textContent = state.draftPhase === "complete" ? "Draft Complete" : "Draft In Progress";
    }

    // Draft order card
    const orderCard = document.getElementById("draftOrderCard");
    if (state.draftPhase === "ordering") {
        orderCard.style.display = "";
        renderDraftOrder();
    } else {
        orderCard.style.display = "none";
    }

    // Disable inputs if draft already started
    if (state.draftPhase !== "setup") {
        document.getElementById("memberNameInput").disabled = true;
        document.getElementById("addMemberBtn").disabled = true;
        document.querySelectorAll(".pick-btn").forEach(b => b.disabled = true);
    }
}

function renderDraftOrder() {
    const container = document.getElementById("draftOrderList");
    container.innerHTML = state.draftOrder.map((id, i) => {
        const member = state.members.find(m => m.id === id);
        return `<div class="draft-order-item">
            <span class="draft-order-num">${i + 1}</span>
            <span>${escapeHtml(member?.name || "?")}</span>
        </div>`;
    }).join("");
}

// ──────────────────────────────────────────────
// DRAFT ENGINE
// ──────────────────────────────────────────────
function getSnakePick(pickIndex) {
    const numMembers = state.draftOrder.length;
    const round = Math.floor(pickIndex / numMembers);
    const posInRound = pickIndex % numMembers;
    const isReversed = round % 2 === 1;
    const memberIndex = isReversed ? (numMembers - 1 - posInRound) : posInRound;
    return {
        round: round + 1,
        memberIndex,
        memberId: state.draftOrder[memberIndex],
    };
}

function getDraftedPlayerNames() {
    const names = new Set(state.picks.map(p => p.playerName));
    // Also exclude replaced players (originals that were swapped out are still "used")
    return names;
}

function getAvailablePlayers() {
    const drafted = getDraftedPlayerNames();
    return MASTERS_FIELD.filter(p => !drafted.has(p.name));
}

function getMemberById(id) {
    return state.members.find(m => m.id === id);
}

function makePick(playerName) {
    const totalPicks = state.members.length * state.picksPerPerson;
    if (state.currentPickIndex >= totalPicks) return;

    const { round, memberId } = getSnakePick(state.currentPickIndex);
    state.picks.push({
        round,
        pickIndex: state.currentPickIndex,
        memberId,
        playerName,
    });
    state.currentPickIndex++;

    if (state.currentPickIndex >= totalPicks) {
        state.draftPhase = "complete";
        saveState();
        renderDraft();
        launchConfetti();
    } else {
        saveState();
        renderDraft();
    }
}

function undoLastPick() {
    if (state.picks.length === 0) return;
    state.picks.pop();
    state.currentPickIndex--;
    state.draftPhase = "drafting";
    saveState();
    renderDraft();
}

function resetDraft() {
    if (!confirm("Are you sure? This will erase all picks and return to setup.")) return;
    state.picks = [];
    state.currentPickIndex = 0;
    state.draftPhase = "setup";
    state.draftOrder = [];
    state.replacements = {};
    document.getElementById("memberNameInput").disabled = false;
    document.getElementById("addMemberBtn").disabled = false;
    document.querySelectorAll(".pick-btn").forEach(b => b.disabled = false);
    saveState();
    renderSetup();
    showTab("setup");
}

// ──────────────────────────────────────────────
// DRAFT UI
// ──────────────────────────────────────────────
let oddsData = {}; // {playerName: string}

function renderDraft() {
    const notStarted = document.getElementById("draftNotStarted");
    const inProgress = document.getElementById("draftInProgress");
    const complete = document.getElementById("draftComplete");

    notStarted.style.display = "none";
    inProgress.style.display = "none";
    complete.style.display = "none";

    if (state.draftPhase === "setup" || state.draftPhase === "ordering") {
        notStarted.style.display = "";
        return;
    }

    if (state.draftPhase === "complete") {
        complete.style.display = "";
        renderFinalBoard();
        document.getElementById("resetDraftBtn").onclick = resetDraft;
        return;
    }

    // Drafting
    inProgress.style.display = "";

    const totalPicks = state.members.length * state.picksPerPerson;
    const { round, memberId } = getSnakePick(state.currentPickIndex);
    const member = getMemberById(memberId);

    document.getElementById("pickRound").textContent = round;
    document.getElementById("pickNum").textContent = state.currentPickIndex + 1;
    document.getElementById("pickTotal").textContent = totalPicks;
    document.getElementById("pickName").textContent = member?.name || "---";

    const undoBtn = document.getElementById("undoPickBtn");
    undoBtn.disabled = state.picks.length === 0;
    undoBtn.onclick = undoLastPick;

    renderPlayerPool();
    renderDraftBoard();

    // Fetch odds if we have a key and no recent cache
    if (state.oddsApiKey && (!state.oddsCache || Date.now() - state.oddsCache.timestamp > 300000)) {
        fetchOdds();
    }
}

function renderPlayerPool() {
    const container = document.getElementById("playerPool");
    const searchInput = document.getElementById("playerSearch");
    const search = (searchInput?.value || "").toLowerCase();
    const available = getAvailablePlayers();

    const filtered = search
        ? available.filter(p => p.name.toLowerCase().includes(search) || p.country.toLowerCase().includes(search))
        : available;

    container.innerHTML = filtered.map(p => {
        const odds = getOddsForPlayer(p.name);
        return `<div class="player-row" onclick="makePick('${escapeAttr(p.name)}')">
            <span class="player-rank">${p.rank}</span>
            <span class="player-name-cell">${escapeHtml(p.name)} <span class="player-country">${p.country}</span></span>
            <span class="player-odds ${odds === '—' ? 'no-odds' : ''}">${odds}</span>
            <span><button class="btn-pick">Draft</button></span>
        </div>`;
    }).join("");

    if (filtered.length === 0) {
        container.innerHTML = '<div style="padding:2rem;text-align:center;color:#888;">No players found</div>';
    }

    // Wire up search
    if (!searchInput._wired) {
        searchInput.addEventListener("input", () => renderPlayerPool());
        searchInput._wired = true;
    }
}

function renderDraftBoard() {
    const table = document.getElementById("draftBoard");
    const numMembers = state.draftOrder.length;
    const numRounds = state.picksPerPerson;
    const totalPicks = numMembers * numRounds;

    let html = "<thead><tr><th>Member</th>";
    for (let r = 1; r <= numRounds; r++) html += `<th class="round-header">R${r}</th>`;
    html += "</tr></thead><tbody>";

    for (let m = 0; m < numMembers; m++) {
        const memberId = state.draftOrder[m];
        const member = getMemberById(memberId);
        html += `<tr><td class="member-col">${escapeHtml(member?.name || "?")}</td>`;

        for (let r = 0; r < numRounds; r++) {
            // Find pick index for this member in this round
            const isReversed = r % 2 === 1;
            const posInRound = isReversed ? (numMembers - 1 - m) : m;
            const pickIdx = r * numMembers + posInRound;
            const pick = state.picks.find(p => p.pickIndex === pickIdx);
            const isCurrent = pickIdx === state.currentPickIndex;

            let cellClass = "pick-cell";
            if (isCurrent) cellClass += " current-pick";
            if (pick) cellClass += " filled";

            if (pick) {
                const player = MASTERS_FIELD.find(p => p.name === pick.playerName);
                html += `<td class="${cellClass}"><div class="draft-pick-name">${escapeHtml(pick.playerName)}</div><div class="draft-pick-sub">${player?.country || ""}</div></td>`;
            } else {
                html += `<td class="${cellClass}">${isCurrent ? '<span style="color:var(--gold);font-weight:700;">◄</span>' : ""}</td>`;
            }
        }
        html += "</tr>";
    }
    html += "</tbody>";
    table.innerHTML = html;
}

function renderFinalBoard() {
    const table = document.getElementById("finalDraftBoard");
    const numMembers = state.draftOrder.length;
    const numRounds = state.picksPerPerson;

    let html = "<thead><tr><th>Member</th>";
    for (let r = 1; r <= numRounds; r++) html += `<th class="round-header">R${r}</th>`;
    html += "</tr></thead><tbody>";

    for (let m = 0; m < numMembers; m++) {
        const memberId = state.draftOrder[m];
        const member = getMemberById(memberId);
        html += `<tr><td class="member-col">${escapeHtml(member?.name || "?")}</td>`;

        for (let r = 0; r < numRounds; r++) {
            const isReversed = r % 2 === 1;
            const posInRound = isReversed ? (numMembers - 1 - m) : m;
            const pickIdx = r * numMembers + posInRound;
            const pick = state.picks.find(p => p.pickIndex === pickIdx);

            if (pick) {
                const player = MASTERS_FIELD.find(p => p.name === pick.playerName);
                html += `<td class="pick-cell filled"><div class="draft-pick-name">${escapeHtml(pick.playerName)}</div><div class="draft-pick-sub">${player?.country || ""}</div></td>`;
            } else {
                html += `<td class="pick-cell">—</td>`;
            }
        }
        html += "</tr>";
    }
    html += "</tbody>";
    table.innerHTML = html;
}

// ──────────────────────────────────────────────
// ODDS API
// ──────────────────────────────────────────────
async function fetchOdds() {
    if (!state.oddsApiKey) return;

    try {
        const url = `https://api.the-odds-api.com/v4/sports/golf_masters_tournament_winner/odds/?apiKey=${encodeURIComponent(state.oddsApiKey)}&regions=us&markets=outrights&oddsFormat=american`;
        const resp = await fetch(url);
        if (!resp.ok) {
            console.warn("Odds API error:", resp.status);
            return;
        }
        const data = await resp.json();
        const oddsMap = {};

        // Parse odds — prefer DraftKings, then first bookmaker
        if (Array.isArray(data) && data.length > 0) {
            const event = data[0];
            const bookmakers = event.bookmakers || [];
            const dk = bookmakers.find(b => b.key === "draftkings") || bookmakers[0];
            if (dk) {
                const market = dk.markets?.find(m => m.key === "outrights");
                if (market) {
                    market.outcomes.forEach(o => {
                        const price = o.price;
                        const formatted = price > 0 ? `+${price}` : `${price}`;
                        oddsMap[o.name] = formatted;
                    });
                }
            }
        }

        state.oddsCache = { timestamp: Date.now(), data: oddsMap };
        saveState();
        oddsData = oddsMap;
        renderPlayerPool();
    } catch (err) {
        console.warn("Failed to fetch odds:", err);
    }
}

function getOddsForPlayer(playerName) {
    // Check cached odds
    if (state.oddsCache?.data) {
        // Try exact match first, then fuzzy
        if (state.oddsCache.data[playerName]) return state.oddsCache.data[playerName];
        // Try last name match
        const lastName = playerName.split(" ").pop().toLowerCase();
        for (const [key, val] of Object.entries(state.oddsCache.data)) {
            if (key.toLowerCase().includes(lastName) && key.toLowerCase().includes(playerName.split(" ")[0].toLowerCase())) {
                return val;
            }
        }
    }
    return "—";
}

// ──────────────────────────────────────────────
// LIVE SCORES (ESPN API)
// ──────────────────────────────────────────────
async function fetchLiveScores() {
    const infoEl = document.getElementById("tourneyInfo");
    infoEl.innerHTML = '<span class="spinner"></span> Fetching live scores...';

    try {
        // Try ESPN PGA scoreboard
        const resp = await fetch("https://site.api.espn.com/apis/site/v2/sports/golf/pga/scoreboard");
        if (!resp.ok) throw new Error("ESPN API error");
        const data = await resp.json();

        const events = data.events || [];
        // Find Masters event (search for "Masters" in name)
        let mastersEvent = events.find(e => e.name?.toLowerCase().includes("masters"));
        // Fallback to first event
        if (!mastersEvent && events.length > 0) mastersEvent = events[0];

        if (!mastersEvent) {
            infoEl.textContent = "No active tournament found. Use Manual Entry for scores.";
            return;
        }

        const competition = mastersEvent.competitions?.[0];
        if (!competition) {
            infoEl.textContent = "No competition data available.";
            return;
        }

        // Parse tournament status
        const status = competition.status?.type?.name || "STATUS_SCHEDULED";
        let statusText = mastersEvent.name || "The Masters";
        if (status === "STATUS_IN_PROGRESS") statusText += " — In Progress";
        else if (status === "STATUS_FINAL") statusText += " — Final";
        else if (status === "STATUS_SCHEDULED") statusText += " — Not Started";
        else statusText += ` — ${competition.status?.type?.description || status}`;

        const roundNum = competition.status?.period || 0;
        if (roundNum > 0 && status === "STATUS_IN_PROGRESS") statusText += ` (Round ${roundNum})`;

        infoEl.textContent = statusText;

        // Parse player scores
        const competitors = competition.competitors || [];
        const scoreData = {};
        const allRoundScores = { 1: [], 2: [], 3: [], 4: [] };

        competitors.forEach(c => {
            const name = c.athlete?.displayName || "";
            const linescores = c.linescores || [];
            const playerStatus = c.status?.type?.name || "";
            const scores = {};
            linescores.forEach((ls, i) => {
                const roundScore = ls.value;
                if (roundScore && roundScore > 0) {
                    scores[`r${i + 1}`] = roundScore;
                    allRoundScores[i + 1]?.push(roundScore);
                }
            });

            let statusFlag = "";
            if (playerStatus === "STATUS_CUT") statusFlag = "MC";
            else if (playerStatus === "STATUS_WITHDRAWN" || c.status?.type?.description?.toLowerCase().includes("withdraw")) statusFlag = "WD";

            scoreData[name] = { ...scores, status: statusFlag };
        });

        // Calculate daily averages
        const dailyAvg = {};
        for (let r = 1; r <= 4; r++) {
            if (allRoundScores[r].length > 0) {
                dailyAvg[`r${r}`] = Math.round((allRoundScores[r].reduce((a, b) => a + b, 0) / allRoundScores[r].length) * 10) / 10;
            }
        }

        state.liveScores = { scores: scoreData, dailyAvg, tournament: mastersEvent.name, status, lastUpdated: Date.now() };
        saveState();
        renderLeaderboard();
    } catch (err) {
        console.warn("Score fetch error:", err);
        infoEl.textContent = "Could not fetch live scores. Use Manual Entry instead.";
    }
}

// ──────────────────────────────────────────────
// SCORING & LEADERBOARD
// ──────────────────────────────────────────────
function getPlayerScore(playerName) {
    // Check manual scores first, then live
    let scoreSource = null;
    let dailyAvg = {};

    if (state.manualScores) {
        scoreSource = state.manualScores[playerName] || null;
        dailyAvg = state.manualScores._dailyAvg || {};
    }

    if (!scoreSource && state.liveScores?.scores) {
        // Find by exact name or fuzzy match
        scoreSource = state.liveScores.scores[playerName];
        if (!scoreSource) {
            const lastName = playerName.split(" ").pop().toLowerCase();
            const firstName = playerName.split(" ")[0].toLowerCase();
            for (const [key, val] of Object.entries(state.liveScores.scores)) {
                if (key.toLowerCase().includes(lastName) && key.toLowerCase().includes(firstName)) {
                    scoreSource = val;
                    break;
                }
            }
        }
        dailyAvg = state.liveScores?.dailyAvg || {};
    }

    if (!scoreSource) return { total: null, rounds: [], status: "", detail: "No scores" };

    const rounds = [];
    let total = 0;
    const status = scoreSource.status || "";
    const isMCWD = status === "MC" || status === "WD";

    for (let r = 1; r <= 4; r++) {
        const key = `r${r}`;
        if (scoreSource[key]) {
            rounds.push(scoreSource[key]);
            total += scoreSource[key];
        } else if (isMCWD) {
            // Apply daily avg + 3 rule
            const avg = dailyAvg[key];
            if (avg) {
                const penalty = Math.round(avg) + 3;
                rounds.push(penalty);
                total += penalty;
            } else {
                rounds.push(null);
            }
        } else {
            rounds.push(null);
        }
    }

    const completedRounds = rounds.filter(r => r !== null);
    const totalToPar = total - (PAR * completedRounds.length);
    const toParStr = totalToPar === 0 ? "E" : (totalToPar > 0 ? `+${totalToPar}` : `${totalToPar}`);

    return {
        total: completedRounds.length > 0 ? total : null,
        toPar: completedRounds.length > 0 ? totalToPar : null,
        toParStr: completedRounds.length > 0 ? toParStr : "—",
        rounds,
        status,
        detail: completedRounds.length > 0
            ? `${rounds.map(r => r ?? "—").join("-")} (${toParStr})`
            : "No scores"
    };
}

function calculatePoolStandings() {
    if (state.draftPhase !== "complete") return [];

    const standings = state.members.map(member => {
        const memberPicks = state.picks.filter(p => p.memberId === member.id);
        const players = memberPicks.map(p => {
            // Check for replacement
            const actualName = state.replacements[p.playerName] || p.playerName;
            const score = getPlayerScore(actualName);
            return { name: actualName, originalName: p.playerName, ...score };
        });

        const totalScore = players.reduce((sum, p) => sum + (p.total || 0), 0);
        const totalToPar = players.reduce((sum, p) => sum + (p.toPar || 0), 0);
        const hasScores = players.some(p => p.total !== null);
        const toParStr = !hasScores ? "—" : (totalToPar === 0 ? "E" : (totalToPar > 0 ? `+${totalToPar}` : `${totalToPar}`));

        return {
            member,
            players,
            totalScore: hasScores ? totalScore : null,
            totalToPar: hasScores ? totalToPar : null,
            toParStr,
        };
    });

    // Sort: lowest total first (null = no score = sort last)
    standings.sort((a, b) => {
        if (a.totalScore === null && b.totalScore === null) return 0;
        if (a.totalScore === null) return 1;
        if (b.totalScore === null) return -1;
        return a.totalScore - b.totalScore;
    });

    return standings;
}

function renderLeaderboard() {
    const container = document.getElementById("poolLeaderboard");

    if (state.draftPhase !== "complete") {
        container.innerHTML = '<p class="text-center text-muted pad">Complete the draft to see standings.</p>';
        return;
    }

    // Update status bar
    const infoEl = document.getElementById("tourneyInfo");
    if (state.liveScores) {
        const updated = new Date(state.liveScores.lastUpdated);
        infoEl.textContent = `${state.liveScores.tournament || "The Masters"} — Last updated: ${updated.toLocaleTimeString()}`;
    } else if (state.manualScores) {
        infoEl.textContent = "Scores entered manually";
    } else {
        infoEl.textContent = "No scores loaded. Click Refresh or use Manual Entry.";
    }

    const standings = calculatePoolStandings();

    let html = `<table>
        <thead><tr>
            <th>#</th>
            <th>Member</th>
            <th>Total</th>
            <th>To Par</th>
            <th>Players</th>
        </tr></thead><tbody>`;

    standings.forEach((s, i) => {
        const rank = i + 1;
        const rankClass = rank === 1 && s.totalScore !== null ? " first" : "";

        html += `<tr class="pool-row" onclick="toggleDetail(${i})">
            <td class="pool-rank${rankClass}">${s.totalScore !== null ? rank : "—"}</td>
            <td class="pool-member-name">${escapeHtml(s.member.name)} <span class="pool-expand" id="expand-${i}">&#9660;</span></td>
            <td class="pool-score${rank === 1 && s.totalScore !== null ? ' leader' : ''}">${s.totalScore ?? "—"}</td>
            <td class="pool-score${rank === 1 && s.totalScore !== null ? ' leader' : ''}">${s.toParStr}</td>
            <td style="font-size:0.78rem;color:var(--gray-500);">${s.players.map(p => p.name.split(" ").pop()).join(", ")}</td>
        </tr>`;

        html += `<tr class="pool-players-detail" id="detail-${i}"><td colspan="5">
            <div class="player-detail-grid">
                ${s.players.map(p => {
                    const statusClass = p.status === "MC" ? " mc" : (p.status === "WD" ? " wd" : "");
                    return `<div class="player-detail-item${statusClass}">
                        <span class="pdname">${escapeHtml(p.name)}</span>
                        <span class="pdscore">${p.toParStr || "—"}</span>
                        <div class="pdstatus">${p.rounds.map(r => r ?? "—").join(" - ")}${p.status ? ` (${p.status})` : ""}</div>
                    </div>`;
                }).join("")}
            </div>
        </td></tr>`;
    });

    html += "</tbody></table>";
    container.innerHTML = html;

    // Check for WD before R1 replacements
    checkReplacements();
}

function toggleDetail(index) {
    const row = document.getElementById(`detail-${index}`);
    const arrow = document.getElementById(`expand-${index}`);
    if (row) {
        row.classList.toggle("open");
        if (arrow) arrow.innerHTML = row.classList.contains("open") ? "&#9650;" : "&#9660;";
    }
}

// ──────────────────────────────────────────────
// WD BEFORE R1 REPLACEMENTS
// ──────────────────────────────────────────────
function checkReplacements() {
    const card = document.getElementById("replacementCard");
    const list = document.getElementById("replacementList");

    if (state.draftPhase !== "complete") {
        card.style.display = "none";
        return;
    }

    // Find drafted players who WD before R1 (have WD status and no R1 score)
    const wdBeforeR1 = [];
    const draftedNames = state.picks.map(p => state.replacements[p.playerName] || p.playerName);

    draftedNames.forEach(name => {
        const score = getPlayerScore(name);
        if (score.status === "WD" && (!score.rounds[0] || score.rounds[0] === null)) {
            const pick = state.picks.find(p => (state.replacements[p.playerName] || p.playerName) === name);
            if (pick && !state.replacements[pick.playerName]) {
                wdBeforeR1.push({ pick, playerName: name });
            }
        }
    });

    if (wdBeforeR1.length === 0) {
        card.style.display = "none";
        return;
    }

    card.style.display = "";
    const undrafted = getAvailablePlayers();

    list.innerHTML = wdBeforeR1.map(({ pick, playerName }) => {
        const member = getMemberById(pick.memberId);
        return `<div class="replacement-item">
            <div class="replacement-info">
                <strong>${escapeHtml(playerName)}</strong> (WD before R1) — drafted by <strong>${escapeHtml(member?.name || "?")}</strong>
            </div>
            <select class="replacement-select" onchange="makeReplacement('${escapeAttr(pick.playerName)}', this.value)">
                <option value="">Select replacement...</option>
                ${undrafted.map(p => `<option value="${escapeAttr(p.name)}">${p.name} (${p.country})</option>`).join("")}
            </select>
        </div>`;
    }).join("");
}

function makeReplacement(originalPlayerName, replacementName) {
    if (!replacementName) {
        delete state.replacements[originalPlayerName];
    } else {
        state.replacements[originalPlayerName] = replacementName;
    }
    saveState();
    renderLeaderboard();
}

// ──────────────────────────────────────────────
// MANUAL SCORE ENTRY
// ──────────────────────────────────────────────
function initManualScores() {
    document.getElementById("manualScoresBtn").addEventListener("click", openManualModal);
    document.getElementById("closeManualModal").addEventListener("click", closeManualModal);
    document.getElementById("cancelManualBtn").addEventListener("click", closeManualModal);
    document.getElementById("saveManualBtn").addEventListener("click", saveManualScores);
}

function openManualModal() {
    const modal = document.getElementById("manualScoreModal");
    const form = document.getElementById("manualScoreForm");

    if (state.draftPhase !== "complete") {
        alert("Complete the draft first.");
        return;
    }

    // Get all drafted players (with replacements)
    const draftedPlayers = new Set();
    state.picks.forEach(p => {
        draftedPlayers.add(state.replacements[p.playerName] || p.playerName);
    });

    const players = Array.from(draftedPlayers).sort();

    form.innerHTML = players.map(name => {
        const existing = state.manualScores?.[name] || {};
        return `<div class="manual-player-row">
            <label>${escapeHtml(name)}</label>
            <div class="score-inputs">
                <input type="number" class="score-input" data-player="${escapeAttr(name)}" data-round="r1" value="${existing.r1 || ""}" placeholder="R1" min="60" max="100">
                <input type="number" class="score-input" data-player="${escapeAttr(name)}" data-round="r2" value="${existing.r2 || ""}" placeholder="R2" min="60" max="100">
                <input type="number" class="score-input" data-player="${escapeAttr(name)}" data-round="r3" value="${existing.r3 || ""}" placeholder="R3" min="60" max="100">
                <input type="number" class="score-input" data-player="${escapeAttr(name)}" data-round="r4" value="${existing.r4 || ""}" placeholder="R4" min="60" max="100">
                <select data-player="${escapeAttr(name)}" data-field="status">
                    <option value="">Active</option>
                    <option value="MC" ${existing.status === "MC" ? "selected" : ""}>MC</option>
                    <option value="WD" ${existing.status === "WD" ? "selected" : ""}>WD</option>
                </select>
            </div>
        </div>`;
    }).join("");

    // Fill daily averages
    const avg = state.manualScores?._dailyAvg || {};
    document.getElementById("avgR1").value = avg.r1 || "";
    document.getElementById("avgR2").value = avg.r2 || "";
    document.getElementById("avgR3").value = avg.r3 || "";
    document.getElementById("avgR4").value = avg.r4 || "";

    modal.style.display = "flex";
}

function closeManualModal() {
    document.getElementById("manualScoreModal").style.display = "none";
}

function saveManualScores() {
    const scores = {};
    const inputs = document.querySelectorAll("#manualScoreForm .score-input");
    inputs.forEach(input => {
        const player = input.dataset.player;
        const round = input.dataset.round;
        if (!scores[player]) scores[player] = {};
        const val = parseInt(input.value);
        if (!isNaN(val)) scores[player][round] = val;
    });

    // Get status selects
    document.querySelectorAll("#manualScoreForm select[data-field='status']").forEach(sel => {
        const player = sel.dataset.player;
        if (!scores[player]) scores[player] = {};
        scores[player].status = sel.value;
    });

    // Daily averages
    scores._dailyAvg = {
        r1: parseFloat(document.getElementById("avgR1").value) || null,
        r2: parseFloat(document.getElementById("avgR2").value) || null,
        r3: parseFloat(document.getElementById("avgR3").value) || null,
        r4: parseFloat(document.getElementById("avgR4").value) || null,
    };

    state.manualScores = scores;
    saveState();
    closeManualModal();
    renderLeaderboard();
}

// ──────────────────────────────────────────────
// CONFETTI
// ──────────────────────────────────────────────
function launchConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#006747", "#d4af37", "#FFD700", "#cf6694", "#ffffff", "#1a9e6e"];
    const pieces = [];
    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: -10 - Math.random() * canvas.height,
            w: 6 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 3,
            vy: 2 + Math.random() * 4,
            rot: Math.random() * Math.PI * 2,
            vr: (Math.random() - 0.5) * 0.2,
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vr;
            p.vy += 0.05;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        frame++;
        if (frame < 180) requestAnimationFrame(animate);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    animate();
}

// ──────────────────────────────────────────────
// UTILITIES
// ──────────────────────────────────────────────
function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function escapeAttr(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

// ──────────────────────────────────────────────
// INITIALIZATION
// ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    // Load API key from URL hash fragment if present (hash is never sent to server)
    // Usage: https://yoursite.github.io/masters-pool/#key=YOUR_API_KEY
    const hash = window.location.hash;
    if (hash.startsWith("#key=")) {
        state.oddsApiKey = hash.slice(5);
        saveState();
        // Clear the hash from the URL bar so it's not visible if someone looks over your shoulder
        history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // Nav
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => showTab(btn.dataset.tab));
    });

    initSetup();
    initManualScores();

    // Refresh scores button
    document.getElementById("refreshScoresBtn").addEventListener("click", fetchLiveScores);

    // Restore odds cache
    if (state.oddsCache?.data) oddsData = state.oddsCache.data;

    // If draft was in progress, go to draft tab
    if (state.draftPhase === "drafting") showTab("draft");
    else if (state.draftPhase === "complete") showTab("leaderboard");

    // Auto-fetch scores on leaderboard if draft is complete
    if (state.draftPhase === "complete" && !state.liveScores && !state.manualScores) {
        // Wait a beat then try to fetch
        setTimeout(() => fetchLiveScores(), 500);
    }
});
