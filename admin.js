// ===================== НАСТРОЙКИ =====================
const ADMIN_LOGIN = "admin";
const ADMIN_PASSWORD = "1234";

let clans = JSON.parse(localStorage.getItem("clans")) || [];
let editIndex = null;

// ===================== АВТОРИЗАЦИЯ =====================
function login(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if(login === ADMIN_LOGIN && password === ADMIN_PASSWORD){
        localStorage.setItem("auth", "true");
        showAdmin();
    } else {
        alert("Неверный логин или пароль ❌");
    }
}

function showAdmin(){
    document.getElementById("loginBlock").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    renderClans();
}

if(localStorage.getItem("auth") === "true"){
    showAdmin();
}

// ===================== СОХРАНИТЬ КЛАН =====================
function saveClan(){
    const clanData = {
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

    if(editIndex !== null){
        clans[editIndex] = clanData;
        editIndex = null;
    } else {
        clans.push(clanData);
    }

    localStorage.setItem("clans", JSON.stringify(clans));
    clearInputs();
    renderClans();
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
    clan.membersCount = clan.members.length + "/60";

    localStorage.setItem("clans", JSON.stringify(clans));
    alert("Участник добавлен ✅");
}

// ===================== ОТОБРАЖЕНИЕ КЛАНОВ =====================
function renderClans(){
    const container = document.getElementById("clansList");
    container.innerHTML = "";

    clans.forEach((clan, index)=>{
        container.innerHTML += `
        <div style="margin:10px; padding:10px; border:1px solid #555;">
            <b>${clan.name}</b> (ID: ${clan.id})
            <br>Уровень: ${clan.level}
            <br>Участники: ${clan.membersCount}
            <br><br>

            <button onclick="editClan(${index})">Редактировать</button>
            <button onclick="deleteClan(${index})">Удалить</button>

            <h4>Участники:</h4>
            ${clan.members.map((m, i)=>`
                <div style="margin:5px 0;">
                    ${m.name}
                    <button onclick="deleteMember('${clan.id}', ${i})">❌</button>
                </div>
            `).join("")}
        </div>
        `;
    });
}

// ===================== УДАЛЕНИЕ КЛАНА =====================
function deleteClan(index){
    if(confirm("Удалить клан?")){
        clans.splice(index,1);
        localStorage.setItem("clans", JSON.stringify(clans));
        renderClans();
    }
}

// ===================== РЕДАКТИРОВАНИЕ =====================
function editClan(index){
    const clan = clans[index];

    document.getElementById("clanName").value = clan.name;
    document.getElementById("clanId").value = clan.id;
    document.getElementById("clanLevel").value = clan.level;
    document.getElementById("clanAvatar").value = clan.avatar;

    editIndex = index;
}

// ===================== УДАЛЕНИЕ УЧАСТНИКА =====================
function deleteMember(clanId, memberIndex){
    const clan = clans.find(c=>c.id===clanId);

    clan.members.splice(memberIndex,1);
    clan.membersCount = clan.members.length + "/60";

    localStorage.setItem("clans", JSON.stringify(clans));
    renderClans();
}

// ===================== ОЧИСТКА ПОЛЕЙ =====================
function clearInputs(){
    document.getElementById("clanName").value = "";
    document.getElementById("clanId").value = "";
    document.getElementById("clanLevel").value = "";
    document.getElementById("clanAvatar").value = "";
}
