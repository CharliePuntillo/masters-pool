/* ============================================
   THE MASTERS POOL 2026 — Main Application
   ============================================ */

// ──────────────────────────────────────────────
// PLAYER DATA (2026 Masters Field — ~90 players)
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
    { name: "Shane Lowry", country: "IRL", rank: 12 },
    { name: "Matt Fitzpatrick", country: "ENG", rank: 13 },
    { name: "Brooks Koepka", country: "USA", rank: 14 },
    { name: "Bryson DeChambeau", country: "USA", rank: 15 },
    { name: "Sam Burns", country: "USA", rank: 16 },
    { name: "Robert MacIntyre", country: "SCO", rank: 17 },
    { name: "Sungjae Im", country: "KOR", rank: 18 },
    { name: "Russell Henley", country: "USA", rank: 19 },
    { name: "Cameron Young", country: "USA", rank: 20 },
    { name: "Max Homa", country: "USA", rank: 21 },
    { name: "Justin Thomas", country: "USA", rank: 22 },
    { name: "Corey Conners", country: "CAN", rank: 23 },
    { name: "Jordan Spieth", country: "USA", rank: 24 },
    { name: "Keegan Bradley", country: "USA", rank: 25 },
    { name: "Brian Harman", country: "USA", rank: 26 },
    { name: "Min Woo Lee", country: "AUS", rank: 27 },
    { name: "Jason Day", country: "AUS", rank: 28 },
    { name: "Cameron Smith", country: "AUS", rank: 29 },
    { name: "Dustin Johnson", country: "USA", rank: 30 },
    { name: "Sepp Straka", country: "AUT", rank: 31 },
    { name: "Akshay Bhatia", country: "USA", rank: 32 },
    { name: "Harris English", country: "USA", rank: 33 },
    { name: "Tyrrell Hatton", country: "ENG", rank: 34 },
    { name: "Adam Scott", country: "AUS", rank: 35 },
    { name: "Maverick McNealy", country: "USA", rank: 36 },
    { name: "Patrick Reed", country: "USA", rank: 37 },
    { name: "Sergio Garcia", country: "ESP", rank: 38 },
    { name: "Si Woo Kim", country: "KOR", rank: 39 },
    { name: "Alex Noren", country: "SWE", rank: 40 },
    { name: "Kurt Kitayama", country: "USA", rank: 41 },
    { name: "Bubba Watson", country: "USA", rank: 42 },
    { name: "Vijay Singh", country: "FIJ", rank: 43 },
    { name: "Fred Couples", country: "USA", rank: 44 },
    { name: "Zach Johnson", country: "USA", rank: 45 },
    { name: "Danny Willett", country: "ENG", rank: 46 },
    { name: "Charl Schwartzel", country: "RSA", rank: 47 },
    { name: "José María Olazábal", country: "ESP", rank: 48 },
    { name: "Mike Weir", country: "CAN", rank: 49 },
    { name: "Angel Cabrera", country: "ARG", rank: 50 },
    { name: "Jake Knapp", country: "USA", rank: 51 },
    { name: "Nick Taylor", country: "CAN", rank: 52 },
    { name: "Nicolai Højgaard", country: "DEN", rank: 53 },
    { name: "Justin Rose", country: "ENG", rank: 54 },
    { name: "Chris Gotterup", country: "USA", rank: 55 },
    { name: "J.J. Spaun", country: "USA", rank: 56 },
    { name: "Jacob Bridgeman", country: "USA", rank: 57 },
    { name: "Ben Griffin", country: "USA", rank: 58 },
    { name: "Gary Woodland", country: "USA", rank: 59 },
    { name: "Daniel Berger", country: "USA", rank: 60 },
    { name: "Rasmus Hojgaard", country: "DEN", rank: 61 },
    { name: "Marco Penge", country: "ENG", rank: 62 },
    { name: "Harry Hall", country: "ENG", rank: 63 },
    { name: "Ryan Gerard", country: "USA", rank: 64 },
    { name: "Sam Stevens", country: "USA", rank: 65 },
    { name: "Ryan Fox", country: "NZL", rank: 66 },
    { name: "Michael Kim", country: "USA", rank: 67 },
    { name: "Max Greyserman", country: "USA", rank: 68 },
    { name: "Kristoffer Reitan", country: "NOR", rank: 69 },
    { name: "Casey Jarvis", country: "RSA", rank: 70 },
    { name: "Carlos Ortiz", country: "MEX", rank: 71 },
    { name: "Aaron Rai", country: "ENG", rank: 72 },
    { name: "Haotong Li", country: "CHN", rank: 73 },
    { name: "Matt McCarty", country: "USA", rank: 74 },
    { name: "Andrew Novak", country: "USA", rank: 75 },
    { name: "Tom McKibbin", country: "NIR", rank: 76 },
    { name: "Rasmus Neergaard-Petersen", country: "DEN", rank: 77 },
    { name: "Nico Echavarria", country: "COL", rank: 78 },
    { name: "Sami Valimaki", country: "FIN", rank: 79 },
    { name: "Aldrich Potgieter", country: "RSA", rank: 80 },
    { name: "John Keefer", country: "USA", rank: 81 },
    { name: "Michael Brennan", country: "USA", rank: 82 },
    { name: "Davis Riley", country: "USA", rank: 83 },
    { name: "Mason Howell", country: "USA", rank: 84 },
    { name: "Brian Campbell", country: "USA", rank: 85 },
    { name: "Ethan Fang", country: "USA", rank: 86 },
    { name: "Pongsapak Laopakdee", country: "THA", rank: 87 },
    { name: "Naoyuki Kataoka", country: "JPN", rank: 88 },
    { name: "Brandon Holtz", country: "USA", rank: 89 },
    { name: "Mateo Pulcini", country: "ARG", rank: 90 },
    { name: "Jackson Herrington", country: "USA", rank: 91 },
];

// ──────────────────────────────────────────────
// HARDCODED ODDS (DraftKings, April 2026)
// win = outright winner, top5 = top 5 finish, top10 = top 10 finish
// winNum used for sorting (lower = better favorite)
// ──────────────────────────────────────────────
const HARDCODED_ODDS = {
    "Scottie Scheffler": { win: "+510", winNum: 510, top5: "+110", top10: "-186" },
    "Jon Rahm": { win: "+900", winNum: 900, top5: "+174", top10: "-120" },
    "Bryson DeChambeau": { win: "+1050", winNum: 1050, top5: "+210", top10: "+102" },
    "Rory McIlroy": { win: "+1175", winNum: 1175, top5: "+230", top10: "+110" },
    "Ludvig Aberg": { win: "+1650", winNum: 1650, top5: "+315", top10: "+152" },
    "Xander Schauffele": { win: "+1750", winNum: 1750, top5: "+300", top10: "+138" },
    "Cameron Young": { win: "+2200", winNum: 2200, top5: "+375", top10: "+176" },
    "Tommy Fleetwood": { win: "+2250", winNum: 2250, top5: "+365", top10: "+166" },
    "Matt Fitzpatrick": { win: "+2300", winNum: 2300, top5: "+385", top10: "+175" },
    "Hideki Matsuyama": { win: "+2700", winNum: 2700, top5: "+435", top10: "+196" },
    "Collin Morikawa": { win: "+3100", winNum: 3100, top5: "+485", top10: "+215" },
    "Min Woo Lee": { win: "+3300", winNum: 3300, top5: "+530", top10: "+240" },
    "Justin Rose": { win: "+3500", winNum: 3500, top5: "+580", top10: "+265" },
    "Robert MacIntyre": { win: "+3500", winNum: 3500, top5: "+540", top10: "+240" },
    "Brooks Koepka": { win: "+3700", winNum: 3700, top5: "+620", top10: "+285" },
    "Patrick Reed": { win: "+4200", winNum: 4200, top5: "+650", top10: "+290" },
    "Jordan Spieth": { win: "+4200", winNum: 4200, top5: "+640", top10: "+285" },
    "Chris Gotterup": { win: "+4300", winNum: 4300, top5: "+670", top10: "+305" },
    "Viktor Hovland": { win: "+4500", winNum: 4500, top5: "+690", top10: "+310" },
    "Si Woo Kim": { win: "+5000", winNum: 5000, top5: "+690", top10: "+295" },
    "Akshay Bhatia": { win: "+5100", winNum: 5100, top5: "+750", top10: "+325" },
    "Russell Henley": { win: "+5400", winNum: 5400, top5: "+730", top10: "+310" },
    "Justin Thomas": { win: "+5900", winNum: 5900, top5: "+900", top10: "+400" },
    "Adam Scott": { win: "+6000", winNum: 6000, top5: "+840", top10: "+360" },
    "Patrick Cantlay": { win: "+6400", winNum: 6400, top5: "+890", top10: "+380" },
    "Jake Knapp": { win: "+6400", winNum: 6400, top5: "+930", top10: "+405" },
    "Shane Lowry": { win: "+6600", winNum: 6600, top5: "+890", top10: "+375" },
    "Jason Day": { win: "+6800", winNum: 6800, top5: "+910", top10: "+385" },
    "J.J. Spaun": { win: "+6800", winNum: 6800, top5: "+970", top10: "+415" },
    "Sam Burns": { win: "+7000", winNum: 7000, top5: "+980", top10: "+420" },
    "Nicolai Hojgaard": { win: "+7400", winNum: 7400, top5: "+1025", top10: "+435" },
    "Sepp Straka": { win: "+7600", winNum: 7600, top5: "+1025", top10: "+430" },
    "Maverick McNealy": { win: "+7800", winNum: 7800, top5: "+1050", top10: "+440" },
    "Tyrrell Hatton": { win: "+8000", winNum: 8000, top5: "+1075", top10: "+455" },
    "Jacob Bridgeman": { win: "+8400", winNum: 8400, top5: "+1100", top10: "+455" },
    "Corey Conners": { win: "+8400", winNum: 8400, top5: "+1100", top10: "+455" },
    "Kurt Kitayama": { win: "+10000", winNum: 10000, top5: "+1300", top10: "+530" },
    "Harris English": { win: "+10000", winNum: 10000, top5: "+1275", top10: "+510" },
    "Ben Griffin": { win: "+11000", winNum: 11000, top5: "+1350", top10: "+540" },
    "Cameron Smith": { win: "+11000", winNum: 11000, top5: "+1450", top10: "+590" },
    "Sung-Jae Im": { win: "+11500", winNum: 11500, top5: "+1450", top10: "+580" },
    "Gary Woodland": { win: "+12000", winNum: 12000, top5: "+1500", top10: "+620" },
    "Max Homa": { win: "+12000", winNum: 12000, top5: "+1550", top10: "+650" },
    "Daniel Berger": { win: "+12000", winNum: 12000, top5: "+1450", top10: "+580" },
    "Rasmus Hojgaard": { win: "+13000", winNum: 13000, top5: "+1600", top10: "+660" },
    "Keegan Bradley": { win: "+14000", winNum: 14000, top5: "+1650", top10: "+670" },
    "Marco Penge": { win: "+14000", winNum: 14000, top5: "+1750", top10: "+710" },
    "Harry Hall": { win: "+15000", winNum: 15000, top5: "+1750", top10: "+700" },
    "Ryan Gerard": { win: "+15500", winNum: 15500, top5: "+1750", top10: "+700" },
    "Alex Noren": { win: "+16000", winNum: 16000, top5: "+1800", top10: "+710" },
    "Sam Stevens": { win: "+17000", winNum: 17000, top5: "+1950", top10: "+760" },
    "Nick Taylor": { win: "+19000", winNum: 19000, top5: "+2050", top10: "+780" },
    "Ryan Fox": { win: "+20000", winNum: 20000, top5: "+2250", top10: "+870" },
    "Wyndham Clark": { win: "+20000", winNum: 20000, top5: "+2450", top10: "+970" },
    "Michael Kim": { win: "+21000", winNum: 21000, top5: "+2350", top10: "+910" },
    "Max Greyserman": { win: "+21000", winNum: 21000, top5: "+2350", top10: "+920" },
    "Brian Harman": { win: "+21000", winNum: 21000, top5: "+2350", top10: "+890" },
    "Kristoffer Reitan": { win: "+22000", winNum: 22000, top5: "+2450", top10: "+940" },
    "Casey Jarvis": { win: "+23000", winNum: 23000, top5: "+2450", top10: "+950" },
    "Carlos Ortiz": { win: "+23000", winNum: 23000, top5: "+2500", top10: "+970" },
    "Sergio Garcia": { win: "+25000", winNum: 25000, top5: "+2700", top10: "+1000" },
    "Dustin Johnson": { win: "+25000", winNum: 25000, top5: "+2700", top10: "+1025" },
    "Aaron Rai": { win: "+25000", winNum: 25000, top5: "+2600", top10: "+1000" },
    "Haotong Li": { win: "+27000", winNum: 27000, top5: "+2800", top10: "+1075" },
    "Matt McCarty": { win: "+28000", winNum: 28000, top5: "+2900", top10: "+1075" },
    "Andrew Novak": { win: "+29000", winNum: 29000, top5: "+3000", top10: "+1100" },
    "Tom McKibbin": { win: "+29000", winNum: 29000, top5: "+3000", top10: "+1100" },
    "Rasmus Neergaard-Petersen": { win: "+31000", winNum: 31000, top5: "+3200", top10: "+1200" },
    "Nico Echavarria": { win: "+32500", winNum: 32500, top5: "+3200", top10: "+1200" },
    "Sami Valimaki": { win: "+36000", winNum: 36000, top5: "+3600", top10: "+1275" },
    "Aldrich Potgieter": { win: "+36000", winNum: 36000, top5: "+3700", top10: "+1375" },
    "John Keefer": { win: "+36000", winNum: 36000, top5: "+3600", top10: "+1325" },
    "Michael Brennan": { win: "+39000", winNum: 39000, top5: "+3900", top10: "+1425" },
    "Bubba Watson": { win: "+52500", winNum: 52500, top5: "+4900", top10: "+1700" },
    "Zach Johnson": { win: "+52500", winNum: 52500, top5: "+4700", top10: "+1600" },
    "Charl Schwartzel": { win: "+62500", winNum: 62500, top5: "+5400", top10: "+1800" },
    "Davis Riley": { win: "+82500", winNum: 82500, top5: "+7200", top10: "+2450" },
    "Mason Howell": { win: "+200000", winNum: 200000, top5: "+15500", top10: "+4700" },
    "Danny Willett": { win: "+225000", winNum: 225000, top5: "+16500", top10: "+4900" },
    "Angel Cabrera": { win: "+300000", winNum: 300000, top5: "+22000", top10: "+6700" },
    "Brian Campbell": { win: "+325000", winNum: 325000, top5: "+21000", top10: "+6000" },
    "Ethan Fang": { win: "+325000", winNum: 325000, top5: "+23000", top10: "+6700" },
    "Pongsapak Laopakdee": { win: "+350000", winNum: 350000, top5: "+26000", top10: "+7600" },
    "Naoyuki Kataoka": { win: "+450000", winNum: 450000, top5: "+32500", top10: "+9000" },
    "Brandon Holtz": { win: "+500000", winNum: 500000, top5: "+41000", top10: "+17000" },
    "Vijay Singh": { win: "+500000", winNum: 500000, top5: "+49000", top10: "+17500" },
    "Mike Weir": { win: "+500000", winNum: 500000, top5: "+49000", top10: "+23000" },
    "Fred Couples": { win: "+500000", winNum: 500000, top5: "+49000", top10: "+18500" },
    "Jose Maria Olazabal": { win: "+500000", winNum: 500000, top5: "+50000", top10: "+35000" },
    "Mateo Pulcini": { win: "+500000", winNum: 500000, top5: "+50000", top10: "+24000" },
    "Jackson Herrington": { win: "+500000", winNum: 500000, top5: "+49000", top10: "+18500" },
};

// ──────────────────────────────────────────────
// STATE (synced via Supabase)
// ──────────────────────────────────────────────
const SUPABASE_URL = "https://phdexjpwjweinjnciaqn.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZGV4anB3andlaW5qbmNpYXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MjcxMTgsImV4cCI6MjA4NjUwMzExOH0.5Zq1e-8WvR0ixs5qC3u3928dvw-rliJ_qMuZibhmD7U";
let sb = null;
function getSupabase() {
    if (!sb && window.supabase) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
    return sb;
}

// Wait for Supabase CDN to be available (up to 5s)
function waitForSupabase() {
    return new Promise(resolve => {
        if (window.supabase) return resolve(getSupabase());
        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            if (window.supabase || attempts > 50) {
                clearInterval(check);
                resolve(getSupabase());
            }
        }, 100);
    });
}

const STORAGE_KEY = "mastersPool2026";
const PAR = 72; // Augusta National par

const DEFAULT_STATE = {
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

let state = { ...DEFAULT_STATE };
let _savingToSupabase = false;

// Load from Supabase first, fall back to direct REST, then localStorage
async function loadStateFromSupabase() {
    // Try 1: Direct REST fetch with 3s timeout (faster than client init)
    try {
        const ctl = new AbortController();
        const timer = setTimeout(() => ctl.abort(), 3000);
        const resp = await fetch(`${SUPABASE_URL}/rest/v1/draft_state?id=eq.1&select=state`, {
            headers: { "apikey": SUPABASE_ANON, "Authorization": `Bearer ${SUPABASE_ANON}` },
            signal: ctl.signal
        });
        clearTimeout(timer);
        if (resp.ok) {
            const arr = await resp.json();
            if (arr[0]?.state && Object.keys(arr[0].state).length > 0) {
                return arr[0].state;
            }
        }
    } catch (e) { console.warn("REST load failed:", e); }

    // Try 2: localStorage (try current key, then legacy key)
    try {
        const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("mastersPool2025");
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

// Save to both Supabase (shared) and localStorage (offline fallback)
async function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (_savingToSupabase) return;
    _savingToSupabase = true;
    try {
        // Only sync draft-related state (not liveScores — those are fetched independently)
        const shared = { ...state };
        delete shared.liveScores; // too large + fetched independently per client
        delete shared.oddsCache;
        const client = getSupabase();
        if (client) {
            await client
                .from("draft_state")
                .update({ state: shared, updated_at: new Date().toISOString() })
                .eq("id", 1);
        }
    } catch (e) { console.warn("Supabase save failed:", e); }
    _savingToSupabase = false;
}

// Real-time subscription — when another device saves, update local state
async function subscribeToRealtimeUpdates() {
    const client = await waitForSupabase();
    if (!client) return;
    client
        .channel("draft_state_changes")
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "draft_state" }, (payload) => {
            const remote = payload.new?.state;
            if (!remote) return;
            const prevPhase = state.draftPhase;
            // Merge: keep local liveScores/oddsCache, take everything else from remote
            const localScores = state.liveScores;
            const localOdds = state.oddsCache;
            Object.assign(state, remote);
            state.liveScores = localScores;
            state.oddsCache = localOdds;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            // Re-render current view
            refreshUI();
            // Auto-switch to leaderboard only on the transition to complete
            if (remote.draftPhase === "complete" && prevPhase !== "complete") {
                showTab("leaderboard");
                fetchLiveScores();
            }
        })
        .subscribe();
}

function refreshUI() {
    const activeTab = document.querySelector(".tab-content.active");
    if (activeTab?.id === "tab-draft") renderDraft();
    else if (activeTab?.id === "tab-leaderboard") renderLeaderboard();
}

// ──────────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────────
function showTab(tabId) {
    // Normalize legacy "setup" references to "draft"
    if (tabId === "setup") tabId = "draft";

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

    // Enable/disable inputs based on draft phase
    const isSetup = state.draftPhase === "setup";
    document.getElementById("memberNameInput").disabled = !isSetup;
    document.getElementById("addMemberBtn").disabled = !isSetup;
    document.querySelectorAll(".pick-btn").forEach(b => b.disabled = !isSetup);
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

let _pickInProgress = false;
async function makePick(playerName) {
    if (_pickInProgress) return;
    const totalPicks = state.members.length * state.picksPerPerson;
    if (state.currentPickIndex >= totalPicks) return;
    // Prevent double-picks from race conditions
    if (state.picks.some(p => p.playerName === playerName)) return;

    _pickInProgress = true;
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
        await saveState();
        launchConfetti();
        fetchLiveScores();
        setTimeout(() => showTab("leaderboard"), 2500);
    } else {
        await saveState();
        renderDraft();
    }
    _pickInProgress = false;
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
    showTab("draft");
}

// ──────────────────────────────────────────────
// DRAFT UI
// ──────────────────────────────────────────────
let oddsData = {}; // {playerName: string}

function renderDraft() {
    const setup = document.getElementById("draftSetup");
    const inProgress = document.getElementById("draftInProgress");
    const complete = document.getElementById("draftComplete");

    setup.style.display = "none";
    inProgress.style.display = "none";
    complete.style.display = "none";

    if (state.draftPhase === "setup" || state.draftPhase === "ordering") {
        setup.style.display = "";
        renderSetup();
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

let playerSortCol = "win"; // "win", "top5", "top10"

function parseOddsNum(str) {
    if (!str || str === "—") return Infinity;
    return parseInt(str.replace("+", ""), 10);
}

function renderPlayerPool() {
    const container = document.getElementById("playerPool");
    const searchInput = document.getElementById("playerSearch");
    const search = (searchInput?.value || "").toLowerCase();
    const available = getAvailablePlayers();

    // Attach odds data for sorting
    const withOdds = available.map(p => {
        const odds = getOddsForPlayer(p.name);
        return { ...p, odds };
    });

    // Sort by selected odds column (best/lowest first)
    withOdds.sort((a, b) => {
        let aNum, bNum;
        if (playerSortCol === "top5") {
            aNum = parseOddsNum(a.odds?.top5);
            bNum = parseOddsNum(b.odds?.top5);
        } else if (playerSortCol === "top10") {
            aNum = parseOddsNum(a.odds?.top10);
            bNum = parseOddsNum(b.odds?.top10);
        } else {
            aNum = a.odds?.winNum ?? Infinity;
            bNum = b.odds?.winNum ?? Infinity;
        }
        return aNum - bNum;
    });

    const filtered = search
        ? withOdds.filter(p => p.name.toLowerCase().includes(search) || p.country.toLowerCase().includes(search))
        : withOdds;

    container.innerHTML = filtered.map(p => {
        const o = p.odds;
        const win = o?.win || "—";
        const top5 = o?.top5 || "—";
        const top10 = o?.top10 || "—";
        const hasOdds = o?.win;
        return `<div class="player-row" onclick="makePick('${escapeAttr(p.name)}')">
            <span class="player-name-cell">${escapeHtml(p.name)}</span>
            <span class="player-odds ${hasOdds ? '' : 'no-odds'}">${win}</span>
            <span class="player-odds ${hasOdds ? 'odds-top5' : 'no-odds'}">${top5}</span>
            <span class="player-odds ${hasOdds ? 'odds-top10' : 'no-odds'}">${top10}</span>
            <span><button class="btn-pick">Draft</button></span>
        </div>`;
    }).join("");

    if (filtered.length === 0) {
        container.innerHTML = '<div style="padding:2rem;text-align:center;color:#888;">No players found</div>';
    }

    // Wire up search and sort headers
    if (!searchInput._wired) {
        let _searchTimer;
        searchInput.addEventListener("input", () => {
            clearTimeout(_searchTimer);
            _searchTimer = setTimeout(() => renderPlayerPool(), 150);
        });
        document.querySelectorAll(".ph-sort").forEach(btn => {
            btn.addEventListener("click", () => {
                playerSortCol = btn.dataset.sort;
                document.querySelectorAll(".ph-sort").forEach(b => {
                    b.classList.remove("active");
                    b.textContent = b.textContent.replace(/ ▼$/, "").replace(/ ▲$/, "");
                });
                btn.classList.add("active");
                btn.textContent = btn.textContent + " ▼";
                renderPlayerPool();
            });
        });
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
                html += `<td class="${cellClass}"><div class="draft-pick-name">${escapeHtml(pick.playerName)}</div></td>`;
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
                html += `<td class="pick-cell filled"><div class="draft-pick-name">${escapeHtml(pick.playerName)}</div></td>`;
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
                        oddsMap[o.name] = { win: formatted, winNum: price };
                    });
                }
            }
            // Check all bookmakers for top 5 / top 20 markets
            const top5Market = bookmakers.flatMap(b => b.markets || []).find(m => /top.*5/i.test(m.key));
            const top20Market = bookmakers.flatMap(b => b.markets || []).find(m => /top.*20/i.test(m.key));
            if (top5Market) {
                top5Market.outcomes.forEach(o => {
                    const entry = oddsMap[o.name] || (oddsMap[o.name] = {});
                    entry.top5 = o.price > 0 ? `+${o.price}` : `${o.price}`;
                });
            }
            if (top20Market) {
                top20Market.outcomes.forEach(o => {
                    const entry = oddsMap[o.name] || (oddsMap[o.name] = {});
                    entry.top20 = o.price > 0 ? `+${o.price}` : `${o.price}`;
                });
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

// Strip diacritics and normalize for comparison
function normalize(s) {
    return s.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/ø/g, "o").replace(/æ/g, "ae").replace(/ð/g, "d")
        .replace(/-/g, " ").replace(/[.']/g, "").replace(/\s+/g, " ").trim();
}

// Returns { win, winNum, top5, top10 } or null
// Merges hardcoded odds (has top5/top10) with live cache (may have fresher win odds)
function getOddsForPlayer(playerName) {
    function lookup(src, name) {
        if (!src) return null;
        if (src[name]) return src[name];
        const norm = normalize(name);
        const firstName = norm.split(" ")[0];
        const lastName = norm.split(" ").pop();
        for (const [key, val] of Object.entries(src)) {
            const nk = normalize(key);
            if (nk === norm || (nk.includes(lastName) && nk.includes(firstName))) return val;
        }
        return null;
    }

    const hardcoded = lookup(HARDCODED_ODDS, playerName);
    const cached = lookup(state.oddsCache?.data, playerName);

    if (!hardcoded && !cached) return null;

    // Merge: hardcoded is the base (has top5/top10), cache overlays win odds
    return {
        ...(hardcoded || {}),
        ...(cached?.win ? { win: cached.win, winNum: cached.winNum } : {}),
    };
}

// ──────────────────────────────────────────────
// LIVE SCORES (ESPN API)
// ──────────────────────────────────────────────
async function fetchLiveScores() {
    const infoEl = document.getElementById("tourneyInfo");
    if (infoEl) infoEl.innerHTML = '<span class="spinner"></span> Fetching live scores...';

    try {
        // Masters.com via Supabase Edge Function proxy (avoids CORS)
        // ESPN scoreboard is the fallback if proxy is down
        const mastersResp = await fetch(`${SUPABASE_URL}/functions/v1/scores-proxy`, {
            headers: { "Authorization": `Bearer ${SUPABASE_ANON}` }
        }).catch(() => null);

        const scoreData = {};
        const allRoundScores = { 1: [], 2: [], 3: [], 4: [] };
        let tournamentName = "The Masters";
        let currentRound = 0;
        let tournamentStatus = "pre";

        if (mastersResp?.ok) {
            const mastersData = await mastersResp.json();
            const roundStatus = mastersData.data?.statusRound || "NNNN"; // N=not started, C=complete, A=active
            const activeRound = roundStatus.indexOf("A") + 1;
            const lastComplete = roundStatus.lastIndexOf("C") + 1;
            currentRound = activeRound || lastComplete || 0;

            if (activeRound > 0) tournamentStatus = "in";
            else if (lastComplete === 4) tournamentStatus = "post";
            else if (lastComplete > 0) tournamentStatus = "pre"; // between rounds

            (mastersData.data?.player || []).forEach(p => {
                const name = p.full_name || `${p.first_name} ${p.last_name}`;
                const scores = {};

                // Parse round scores (each round is an object with .total)
                for (let r = 1; r <= 4; r++) {
                    const roundData = p[`round${r}`];
                    const roundTotal = parseInt(roundData?.total);
                    if (!isNaN(roundTotal) && roundTotal > 0) {
                        scores[`r${r}`] = roundTotal;
                        allRoundScores[r].push(roundTotal);
                    }
                }

                let statusFlag = "";
                const pStatus = (p.status || "").toUpperCase();
                if (pStatus === "C" || pStatus === "CUT") statusFlag = "MC";
                else if (pStatus === "W" || pStatus === "WD") statusFlag = "WD";

                // Convert epoch to Central time (more reliable than string parsing)
                let teeTime = "";
                if (p.epoch) {
                    const d = new Date(parseInt(p.epoch) * 1000);
                    if (!isNaN(d)) {
                        teeTime = d.toLocaleTimeString("en-US", {
                            timeZone: "America/Chicago",
                            hour: "numeric",
                            minute: "2-digit",
                        });
                    }
                } else if (p.teetime) {
                    teeTime = p.teetime;
                }
                const thru = p.thru || "";

                // Live to-par from masters.com (covers both completed and in-progress rounds)
                let liveToPar = null;
                if (p.topar !== undefined && p.topar !== null && p.topar !== "") {
                    if (p.topar === "E" || p.topar === 0 || p.topar === "0") liveToPar = 0;
                    else liveToPar = parseInt(p.topar);
                }

                scoreData[name] = { ...scores, status: statusFlag, teeTime, thru, liveToPar, mastersId: p.id };
            });
        }

        // Fallback to ESPN if masters.com had no data
        if (Object.keys(scoreData).length === 0) {
            const scoreResp = await fetch("https://site.api.espn.com/apis/site/v2/sports/golf/pga/scoreboard");
            if (scoreResp.ok) {
                const data = await scoreResp.json();
                const events = data.events || [];
                const mastersEvent = events.find(e => e.name?.toLowerCase().includes("masters")) || events[0];
                const competition = mastersEvent?.competitions?.[0];
                if (competition) {
                    (competition.competitors || []).forEach(c => {
                        const name = c.athlete?.displayName || "";
                        const linescores = c.linescores || [];
                        const scores = {};
                        linescores.forEach((ls, i) => {
                            if (ls.value && ls.value > 0) {
                                scores[`r${i + 1}`] = ls.value;
                                allRoundScores[i + 1]?.push(ls.value);
                            }
                        });
                        let statusFlag = "";
                        const ps = c.status?.type?.name || "";
                        if (ps === "STATUS_CUT") statusFlag = "MC";
                        else if (ps.includes("WITHDRAWN")) statusFlag = "WD";
                        scoreData[name] = { ...scores, status: statusFlag, teeTime: "", thru: "" };
                    });
                }
            }
        }

        // Status text
        if (infoEl) {
            let statusText = tournamentName;
            if (tournamentStatus === "in") statusText += ` — Round ${currentRound} In Progress`;
            else if (tournamentStatus === "post") statusText += " — Final";
            else if (currentRound > 0) statusText += ` — Round ${currentRound} Complete`;
            infoEl.textContent = statusText;
        }

        // Calculate daily averages
        const dailyAvg = {};
        for (let r = 1; r <= 4; r++) {
            if (allRoundScores[r].length > 0) {
                dailyAvg[`r${r}`] = Math.round((allRoundScores[r].reduce((a, b) => a + b, 0) / allRoundScores[r].length) * 10) / 10;
            }
        }

        state.liveScores = { scores: scoreData, dailyAvg, tournament: tournamentName, status: tournamentStatus, lastUpdated: Date.now() };
        saveState();
        renderLeaderboard();
    } catch (err) {
        console.warn("Score fetch error:", err);
        if (infoEl) infoEl.textContent = "Could not fetch live scores.";
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
        // Find by exact name or fuzzy match (with diacritics normalization)
        scoreSource = state.liveScores.scores[playerName];
        if (!scoreSource) {
            const norm = normalize(playerName);
            const firstName = norm.split(" ")[0];
            const lastName = norm.split(" ").pop();
            for (const [key, val] of Object.entries(state.liveScores.scores)) {
                const nk = normalize(key);
                if (nk === norm || (nk.includes(lastName) && nk.includes(firstName))) {
                    scoreSource = val;
                    break;
                }
            }
        }
        dailyAvg = state.liveScores?.dailyAvg || {};
    }

    if (!scoreSource) return { total: null, rounds: [], status: "", teeTime: "", thru: "", mastersId: "", detail: "No scores" };

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
    let totalToPar = total - (PAR * completedRounds.length);

    // Prefer live to-par from masters.com (covers in-progress rounds)
    const hasLiveToPar = scoreSource.liveToPar !== null && scoreSource.liveToPar !== undefined;
    if (hasLiveToPar) {
        totalToPar = scoreSource.liveToPar;
    }

    const toParStr = totalToPar === 0 ? "E" : (totalToPar > 0 ? `+${totalToPar}` : `${totalToPar}`);
    const hasAnyData = completedRounds.length > 0 || hasLiveToPar;

    return {
        total: completedRounds.length > 0 ? total : null,
        toPar: hasAnyData ? totalToPar : null,
        toParStr: hasAnyData ? toParStr : "—",
        rounds,
        status,
        teeTime: scoreSource.teeTime || "",
        thru: scoreSource.thru || "",
        mastersId: scoreSource.mastersId || "",
        detail: hasAnyData
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
        const hasScores = players.some(p => p.toPar !== null);
        const toParStr = !hasScores ? "—" : (totalToPar === 0 ? "E" : (totalToPar > 0 ? `+${totalToPar}` : `${totalToPar}`));

        return {
            member,
            players,
            totalScore: hasScores ? totalScore : null,
            totalToPar: hasScores ? totalToPar : null,
            toParStr,
        };
    });

    // Sort: lowest to-par first (null = no score = sort last)
    standings.sort((a, b) => {
        if (a.totalToPar === null && b.totalToPar === null) return 0;
        if (a.totalToPar === null) return 1;
        if (b.totalToPar === null) return -1;
        return a.totalToPar - b.totalToPar;
    });

    return standings;
}

function renderLeaderboard() {
    const container = document.getElementById("poolLeaderboard");

    if (state.draftPhase !== "complete") {
        container.innerHTML = '<p class="text-center text-muted pad">Complete the draft to see standings.</p>';
        return;
    }

    const standings = calculatePoolStandings();
    const numPicks = state.picksPerPerson;

    // Build header: TOTAL | TEAM | R1 ... Rn
    let roundHeaders = "";
    for (let r = 1; r <= numPicks; r++) {
        roundHeaders += `<th class="lb-round-header">R${r}</th>`;
    }

    // Updated timestamp
    let updatedStr = "";
    if (state.liveScores) {
        const d = new Date(state.liveScores.lastUpdated);
        updatedStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }

    let html = `<div class="lb-header-bar">
        <div class="lb-title">Leader Board</div>
        ${updatedStr ? `<div class="lb-updated">Updated: ${updatedStr}</div>` : ""}
    </div>
    <div class="lb-scroll">
    <table class="lb-table">
        <thead>
            <tr class="lb-head-top">
                <th class="lb-total-head">Tot</th>
                <th class="lb-team-head">Team</th>
                ${roundHeaders}
            </tr>
        </thead>
        <tbody>`;

    standings.forEach((s, i) => {
        const rank = i + 1;
        const isLeader = rank === 1 && s.totalToPar !== null;

        let cells = "";
        for (let r = 0; r < numPicks; r++) {
            const p = s.players[r];
            if (p) {
                const statusTag = p.status ? ` <span class="lb-status">${p.status}</span>` : "";
                let scoreDisplay = p.toParStr || "—";
                const isLive = p.thru && p.thru !== "F" && p.status !== "MC" && p.status !== "WD";
                if (p.teeTime && p.toPar === null) {
                    scoreDisplay = `<span class="lb-tee">${p.teeTime}</span>`;
                } else if (p.thru && p.thru !== "F") {
                    scoreDisplay += ` <span class="lb-thru">Thru ${p.thru}</span>`;
                } else if (p.thru === "F") {
                    scoreDisplay += ` <span class="lb-thru">F</span>`;
                }
                const mcClass = p.status === "MC" || p.status === "WD" ? " lb-mc" : "";
                const cellMcClass = p.status === "MC" || p.status === "WD" ? " lb-cell-mc" : "";
                const underClass = p.toPar !== null && p.toPar < 0 ? " lb-under" : "";
                const liveClass = isLive ? " lb-live" : "";
                const nameParts = p.name.split(" ");
                const shortName = nameParts.length > 1 ? nameParts[0][0] + ". " + nameParts.slice(1).join(" ") : p.name;
                const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : p.name;
                const nameContent = `<span class="lb-name-full">${escapeHtml(shortName)}</span><span class="lb-name-short">${escapeHtml(lastName)}</span>${statusTag}`;
                const nameEl = p.mastersId
                    ? `<a class="lb-pname lb-link" href="https://www.masters.com/en_US/players/player_${p.mastersId}.html?promo=minilb" target="_blank" rel="noopener">${nameContent}</a>`
                    : `<span class="lb-pname">${nameContent}</span>`;
                cells += `<td class="lb-cell${liveClass}${cellMcClass}">${nameEl}<span class="lb-pscore${mcClass}${underClass}">${scoreDisplay}</span></td>`;
            } else {
                cells += `<td class="lb-cell">—</td>`;
            }
        }

        const teamUnder = s.totalToPar !== null && s.totalToPar < 0 ? ' lb-under' : '';
        html += `<tr class="lb-row${isLeader ? ' lb-leader' : ''}">
            <td class="lb-team-total${isLeader ? ' lb-leader' : ''}${teamUnder}">${s.toParStr}</td>
            <td class="lb-team">${escapeHtml(s.member.name)}</td>
            ${cells}
        </tr>`;
    });

    // ───── BEST OF THE REST ─────
    // Top numPicks lowest-scoring undrafted players (rendered as a row in the main table)
    const draftedNames = new Set();
    state.picks.forEach(p => {
        draftedNames.add(state.replacements[p.playerName] || p.playerName);
    });
    const undraftedScored = MASTERS_FIELD
        .filter(p => !draftedNames.has(p.name))
        .map(p => ({ name: p.name, ...getPlayerScore(p.name) }))
        .filter(p => p.status !== "MC" && p.status !== "WD")
        .sort((a, b) => {
            if (a.toPar === null && b.toPar === null) return 0;
            if (a.toPar === null) return 1;
            if (b.toPar === null) return -1;
            return a.toPar - b.toPar;
        })
        .slice(0, numPicks);

    const restToPar = undraftedScored.reduce((sum, p) => sum + (p.toPar || 0), 0);
    const restHasScores = undraftedScored.some(p => p.toPar !== null);
    const restToParStr = !restHasScores ? "—" : (restToPar === 0 ? "E" : (restToPar > 0 ? `+${restToPar}` : `${restToPar}`));

    let restCells = "";
    for (let r = 0; r < numPicks; r++) {
        const p = undraftedScored[r];
        if (p) {
            const statusTag = p.status ? ` <span class="lb-status">${p.status}</span>` : "";
            let scoreDisplay = p.toParStr || "—";
            const isLive = p.thru && p.thru !== "F" && p.status !== "MC" && p.status !== "WD";
            if (p.teeTime && p.toPar === null) {
                scoreDisplay = `<span class="lb-tee">${p.teeTime}</span>`;
            } else if (p.thru && p.thru !== "F") {
                scoreDisplay += ` <span class="lb-thru">Thru ${p.thru}</span>`;
            } else if (p.thru === "F") {
                scoreDisplay += ` <span class="lb-thru">F</span>`;
            }
            const liveClass = isLive ? " lb-live" : "";
            const nameParts = p.name.split(" ");
            const shortName = nameParts.length > 1 ? nameParts[0][0] + ". " + nameParts.slice(1).join(" ") : p.name;
            const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : p.name;
            const nameContent = `<span class="lb-name-full">${escapeHtml(shortName)}</span><span class="lb-name-short">${escapeHtml(lastName)}</span>${statusTag}`;
            const nameEl = p.mastersId
                ? `<a class="lb-pname lb-link" href="https://www.masters.com/en_US/players/player_${p.mastersId}.html?promo=minilb" target="_blank" rel="noopener">${nameContent}</a>`
                : `<span class="lb-pname">${nameContent}</span>`;
            const restUnderClass = p.toPar !== null && p.toPar < 0 ? " lb-under" : "";
            restCells += `<td class="lb-cell${liveClass}">${nameEl}<span class="lb-pscore${restUnderClass}">${scoreDisplay}</span></td>`;
        } else {
            restCells += `<td class="lb-cell">—</td>`;
        }
    }

    // Append separator row + Best of the Rest row to the SAME table for column alignment
    html += `<tr class="lb-rest-separator"><td colspan="${numPicks + 2}">Best of the Rest</td></tr>
        <tr class="lb-row lb-rest-row">
            <td class="lb-team-total${restHasScores && restToPar < 0 ? ' lb-under' : ''}">${restToParStr}</td>
            <td class="lb-team lb-team-wrap">Best of Rest</td>
            ${restCells}
        </tr>`;

    html += `</tbody></table></div>`;

    // Preserve scroll positions across re-render
    const oldScroll = container.querySelector(".lb-scroll");
    const savedScrollLeft = oldScroll?.scrollLeft || 0;
    const savedScrollTop = window.scrollY;

    container.innerHTML = html;

    // Restore scroll positions
    const newScroll = container.querySelector(".lb-scroll");
    if (newScroll && savedScrollLeft) newScroll.scrollLeft = savedScrollLeft;
    if (savedScrollTop) window.scrollTo({ top: savedScrollTop, behavior: "instant" });

    // Check for WD before R1 replacements
    checkReplacements();
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
    const usedReplacements = new Set(Object.values(state.replacements));
    const undrafted = getAvailablePlayers().filter(p => !usedReplacements.has(p.name));

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
    document.getElementById("closeManualModal")?.addEventListener("click", closeManualModal);
    document.getElementById("cancelManualBtn")?.addEventListener("click", closeManualModal);
    document.getElementById("saveManualBtn")?.addEventListener("click", saveManualScores);
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
document.addEventListener("DOMContentLoaded", async () => {
    // Hard safety: hide loading spinner after 4s no matter what
    const safetyTimer = setTimeout(() => {
        const el = document.getElementById("appLoading");
        if (el) el.style.display = "none";
    }, 4000);

    try {
        // Load shared state from Supabase (or localStorage fallback)
        const saved = await loadStateFromSupabase();
        if (saved) {
            Object.assign(state, saved);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
    } catch (e) {
        console.warn("State load error:", e);
        // Try localStorage as last resort
        try {
            const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("mastersPool2025");
            if (raw) Object.assign(state, JSON.parse(raw));
        } catch {}
    }
    clearTimeout(safetyTimer);

    // Load API key from injected meta tag
    if (!state.oddsApiKey) {
        const meta = document.querySelector('meta[name="odds-api-key"]');
        if (meta && meta.content && meta.content !== "__ODDS_API_KEY__") {
            state.oddsApiKey = meta.content;
        }
    }

    // Subscribe to real-time updates from other devices
    try { subscribeToRealtimeUpdates(); } catch (e) { console.warn("Realtime sub error:", e); }

    // Nav
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => showTab(btn.dataset.tab));
    });

    try { initSetup(); } catch (e) { console.warn("initSetup error:", e); }
    try { initManualScores(); } catch (e) { console.warn("initManualScores error:", e); }

    // Restore odds cache from localStorage (not shared)
    try {
        const localRaw = localStorage.getItem(STORAGE_KEY);
        if (localRaw) {
            const local = JSON.parse(localRaw);
            if (local.oddsCache?.data) { state.oddsCache = local.oddsCache; oddsData = local.oddsCache.data; }
            if (local.liveScores) state.liveScores = local.liveScores;
        }
    } catch {}

    // ALWAYS hide loading spinner and show UI, no matter what
    const loadingEl = document.getElementById("appLoading");
    if (loadingEl) loadingEl.style.display = "none";

    // Show appropriate tab based on draft state
    if (state.draftPhase === "complete") showTab("leaderboard");
    else showTab("draft");

    // Auto-refresh scores every 10 seconds when draft is complete
    if (state.draftPhase === "complete") fetchLiveScores();
    setInterval(() => {
        if (state.draftPhase === "complete" && !document.hidden) fetchLiveScores();
    }, 10000);

    // Refresh immediately when tab becomes visible (e.g. switching back from another app)
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && state.draftPhase === "complete") {
            fetchLiveScores();
        }
    });
});
