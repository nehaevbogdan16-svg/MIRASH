// ===================== ДАННЫЕ КЛАНОВ =====================
const clans = [
    {
        id: "mirash",
        name: "2PIK",
        avatar: "img/2PIK.png",
        logo: "img/2PIK.png",
        level: 9,
        membersCount: "16/60",
        main: true,
        leaders: [
            { name: "2PIK丨GRESHNCA", avatar: "img/margo.png", role: "Заместитель", roleClass: "leader-role", uid: "51514497454" },
            { name: "2PIK丨GRESHNIK", avatar: "img/bogdan.png", role: "Лидер", roleClass: "leader-role", main: true },
            { name: "2PIK丨SCAM", avatar: "img/SCAM.png", role: "Заместитель", roleClass: "zam-role", uid: "51655879673" },
            { name: "2PIK丨SPEED", avatar: "img/SPEED.png", role: "Заместитель", roleClass: "zam-role", uid: "51900179636" },
            { name: "2PIK丨Ｌｉｎｋ", avatar: "img/vlad.png", role: "Заместитель", roleClass: "zam-role", uid: "5958320567" }
        ],
        members: [
           // ===================== Лидер Заместитель =====================
            { name: "2PIK丨GRESHNIK", avatar: "img/bogdan.png", tag: "ТГ: @no2PIK", rank: "", role: "Лидер", roleClass: "leader-role" },
            { name: "2PIK丨GRESHNCA", avatar: "img/margo.png", tag: "ТГ: @ofiwxlz", rank: "", role: "Заместитель", roleClass: "leader-role" },
            { name: "2PIK丨Ｌｉｎｋ", avatar: "img/vlad.png", tag: "ТГ: @Likorinenko", rank: "", role: "Заместитель", roleClass: "zam-role" },
            { name: "2PIK丨SCAM", avatar: "img/SCAM.png", tag: "ТГ: @Solo_Leveling_666", tag: "UID: 5438651452", rank: "", role: "Заместитель", roleClass: "zam-role" },
            { name: "2PIK丨SPEED", avatar: "img/SPEED.png", tag: "UID: 51900179636", rank: "", role: "Заместитель", roleClass: "zam-role" },
            // ===================== Элита =====================
            { name: "2PIK丨RICH", avatar: "img/RICH.png", tag: "UID: 51859443069", rank: "", role: "Элита", roleClass: "elite-role" },
            { name: "2PIK丨RAIL", avatar: "img/RAIL.png", tag: "UID: 52291257528", rank: "", role: "Элита", roleClass: "elite-role" },
            { name: "2PIK丨ARGONAFT", avatar: "img/ARGONAFT.png", tag: "UID: 5796280595", rank: "", role: "Элита", roleClass: "elite-role" },
            { name: "2PIK丨AZART", avatar: "img/AZART.png", tag: "UID: 5939911678", rank: "", role: "Элита", roleClass: "elite-role" },
            { name: "2PIK丨FoWeska7", avatar: "img/FoWeska7.png", tag: "UID: 5413564659", rank: "", role: "Элита", roleClass: "elite-role" },
            // ===================== Член клана =====================
            { name: "2PIK丨stalik", avatar: "img/stalik.png", tag: "UID: 5717071471", rank: "", role: "Член клана", roleClass: "member-role" },
            { name: "2PIK丨ARES", avatar: "img/ARES.png", tag: "UID: 51468324125", rank: "", role: "Член клана", roleClass: "member-role" },
            { name: "2PIK丨Haizen", avatar: "img/Haizen.png", tag: "UID: 52216804594", rank: "", role: "Член клана", roleClass: "member-role" },
            { name: "2PIK丨Miyabi", avatar: "img/Miyabi.png", tag: "UID: 51893217266", rank: "", role: "Член клана", roleClass: "member-role" },
            { name: "2PIK丨PIZDUK", avatar: "img/PIZDUK.png", tag: "UID: 52295397626", rank: "", role: "Член клана", roleClass: "member-role" },
            { name: "2PIK丨doup", avatar: "img/doup.png", tag: "UID: 5400577570", rank: "", role: "Член клана", roleClass: "member-role" },
        ],
        top: ["🥇 2PIK丨GRESHNIK", "🥈 2PIK丨GRESHNCA", "🥉 2PIK丨SCAM", "4 2PIK丨Ｌｉｎｋ"]
    },
    { id: "storm", 
     name: "2PIK STORM", 
     avatar: "img/clan2.png", 
     logo: "img/clan2.png", 
     level: 1, 
     membersCount: "2/30", 
     main: false, 
     leaders: [
         { name: "2PIK丨FENRIR", uid: "51619988168", avatar: "img/FENRIR.png", role: "Лидер", roleClass: "leader-role", main: true },
     ], 
     members: [
         { name: "2PIK丨FENRIR", avatar: "img/FENRIR.png", tag: "ТГ: @God_FENRIR", rank: "51619988168", role: "Лидер", roleClass: "leader-role" },
         { name: "2PIK丨Шут", avatar: "img/Шут.png", rank: "52453042310", role: "Заместитель", roleClass: "zam-role" },
         { name: "", avatar: "img/.png", tag: "UID: ", rank: "", role: "", roleClass: "" },
     ], 
     top: ["🥇 2PIK丨FENRIR", "🥈 2PIK丨Шут"] },
    
    { id: "ghost", 
     name: "Свободное место", 
     avatar: "img/clan3.png", 
     logo: "img/clan3.png", 
     level: 0, 
     membersCount: "0/30", 
     main: false, 
     leaders: [], 
     members: [], 
     top: [] }
];

// ===================== Главная =====================
const mainClanBlock = document.getElementById("mainClan");
const clanList = document.getElementById("clanList");

if (mainClanBlock) {
    const mainClan = clans.find(c => c.main);
    mainClanBlock.innerHTML = `
        <div class="main-clan" style="text-align:center; margin:30px 0;">
            <img src="${mainClan.avatar}" style="height:120px;">
            <h2 style="color:#facc15;">${mainClan.name}</h2>
            <p>Уровень: ${mainClan.level}</p>
            <p>Участники: ${mainClan.membersCount}</p>
            <a href="clan.html?id=${mainClan.id}" style="color:#38bdf8;">Подробнее</a>
        </div>
    `;
}

if (clanList) {
    clans.forEach(clan => {
        if (!clan.main) {
            clanList.innerHTML += `
            <div class="clan-card" style="text-align:center; background:rgba(255,255,255,0.03); padding:20px; border-radius:12px; border:1px solid rgba(255,255,255,0.1);">
                <img src="${clan.avatar}" style="width:100px; height:100px; border-radius:12px;">
                <h3 style="color:#facc15;">${clan.name}</h3>
                <p>Уровень ${clan.level}</p>
                <a href="clan.html?id=${clan.id}" style="color:#38bdf8;">Открыть</a>
            </div>
            `;
        }
    });
}

// ===================== Страница клана =====================
const clanPageExists = document.getElementById("clanName");
if (clanPageExists) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const clan = clans.find(c => c.id === id);

    if (clan) {
        document.getElementById("clanName").innerText = clan.name;
        document.getElementById("clanLogo").src = clan.logo;
        document.getElementById("clanLevel").innerText = "Ур. " + clan.level;
        document.getElementById("clanCount").innerText = clan.membersCount;

        const leadersBlock = document.getElementById("leaders");
        clan.leaders.forEach(l => {
            leadersBlock.innerHTML += `
            <div class="leader ${l.main ? 'main' : ''}">
                <span class="role ${l.roleClass}">${l.role}</span>
                <img src="${l.avatar}">
                <span>${l.name}</span>
                ${l.uid ? `<span>${l.uid}</span>` : ''}
            </div>
            `;
        });

        const membersBlock = document.getElementById("membersList");
        clan.members.forEach(m => {
            membersBlock.innerHTML += `
            <div class="member">
                <img src="${m.avatar}">
                <div>
                    ${m.name}<br>
                    <small>${m.tag}</small><br>
                    <small>${m.rank}</small><br>
                    <span class="role ${m.roleClass}">${m.role}</span>
                </div>
            </div>
            `;
        });

        const topBlock = document.getElementById("topList");
        clan.top.forEach(t => {
            topBlock.innerHTML += `<div class="top-item">${t}</div>`;
        });

    } else {
        document.body.innerHTML = "<h1 style='text-align:center;margin-top:100px;'>Клан не найден</h1>";
    }
}
