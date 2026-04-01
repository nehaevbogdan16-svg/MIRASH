// Получаем кланы из localStorage или пустой массив
let clans = JSON.parse(localStorage.getItem("clans")) || [];

// ===================== ДОБАВИТЬ КЛАН =====================
function addClan(){
    const clan = {
        id: document.getElementById("clanId").value,
        name: document.getElementById("clanName").value,
        avatar: document.getElementById("clanAvatar").value,
        logo: document.getElementById("clanAvatar").value,
        level: document.getElementById("clanLevel").value,
        membersCount: "0/60",
        main: false,
        leaders: [],
        members: [],
        top: []
    };

    clans.push(clan);
    localStorage.setItem("clans", JSON.stringify(clans));

    alert("Клан добавлен ✅");
}

// ===================== ДОБАВИТЬ УЧАСТНИКА =====================
function addMember(){
    const clanId = document.getElementById("memberClan").value;

    const clan = clans.find(c => c.id === clanId);

    if(!clan){
        alert("Клан не найден ❌");
        return;
    }

    const member = {
        name: document.getElementById("memberName").value,
        avatar: document.getElementById("memberAvatar").value,
        tag: document.getElementById("memberTag").value,
        rank: "Алмаз",
        role: "Член клана",
        roleClass: "member-role"
    };

    clan.members.push(member);

    // обновляем количество
    clan.membersCount = clan.members.length + "/60";

    localStorage.setItem("clans", JSON.stringify(clans));

    alert("Участник добавлен ✅");
}
