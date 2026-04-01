// ===================== ДАННЫЕ КЛАНОВ =====================
const clans = [
    {
        id: "mirash",
        name: "MIRASH FAMILY",
        avatar: "img/clan1.png",
        logo: "img/logo.png",
        level: 8,
        membersCount: "12/60",
        main: true,
        leaders: [
            { name: "ツGU×Margosha", avatar: "img/margo.png", role: "Заместитель", roleClass: "leader-role", uid: "51514497454" },
            { name: "ツGU×Bogdan", avatar: "img/bogdan.png", role: "Лидер", roleClass: "leader-role", main: true },
            { name: "ツGU×Ｐｒｅｓ", avatar: "img/vlad.png", role: "Заместитель", roleClass: "zam-role", uid: "5958320567" }
        ],
        members: [
            { name: "ツGU×Bogdan", avatar: "img/bogdan.png", tag: "ТГ: @Bogdan_10_07_24", rank: "Корона", role: "Лидер", roleClass: "leader-role" },
            { name: "ツGU×Margosha", avatar: "img/margo.png", tag: "ТГ: @ofiwxlz", rank: "Корона", role: "Заместитель", roleClass: "leader-role" },
            { name: "ツGU×Ｐｒｅｓ", avatar: "img/vlad.png", tag: "ТГ: @Likorinenko", rank: "Корона", role: "Заместитель", roleClass: "zam-role" },
            { name: "ツGU×ГАЗ", avatar: "img/GAS.png", tag: "UID: 5438651452", rank: "Алмаз", role: "Член клана", roleClass: "member-role" },
           { name: "ツGU×DRANNIK", avatar: "img/DRANNIK.png", tag: "UID: 5647598839", rank: "Платина", role: "Член клана", roleClass: "member-role" }
        ],
        top: ["🥇 ツGU×Bogdan", "🥈 ツGU×Margosha", "🥉 ツGU×Ｐｒｅｓ", "4 ツGU×DRANNIK"]
    },
    { id: "storm", 
     name: "ツGU×STORM", 
     avatar: "img/clan2.png", 
     logo: "img/clan2.png", 
     level: 1, 
     membersCount: "1/30", 
     main: false, 
     leaders: [
         { name: "ツGU×FENRIR", uid: "51619988168", avatar: "img/FENRIR.png", role: "Лидер", roleClass: "leader-role", main: true },
     ], 
     members: [
         { name: "ツGU×FENRIR", avatar: "img/FENRIR.png", tag: "ТГ: @God_FENRIR", rank: "51619988168", role: "Лидер", roleClass: "leader-role" },
         { name: "ツGU×Girl", avatar: "img/ксения.png", rank: "52453042310", role: "Член клана", roleClass: "member-role" }
     ], 
     top: ["🥇 ツGU×FENRIR", "ツGU×Girl"] },
    
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
