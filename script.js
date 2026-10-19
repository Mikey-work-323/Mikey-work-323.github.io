//關於我面板
const aboutButton = document.getElementById("about-button");
const aboutPanel = document.getElementById("about-panel");
const closeButton = document.getElementById("close-about");

function openAbout() {
    aboutPanel.showModal();
}

function closeAbout() {
    aboutPanel.close();
}

aboutButton.addEventListener("click", openAbout);
closeButton.addEventListener("click", closeAbout);

//作品面板
const workButton = document.getElementById("work-button");
const workPanel = document.getElementById("work-panel");
const closeWorkButton = document.getElementById("close-work");

function openWork() {
    workPanel.showModal();
}

function closeWork() {
    workPanel.close();
}

workButton.addEventListener("click", openWork);
closeWorkButton.addEventListener("click", closeWork);


//格鬥面板
const fightButton = document.getElementById("fight-button");
const fightPanel = document.getElementById("fight-panel");
const closeFightButton = document.getElementById("close-fight");

function openFight() {
    fightPanel.showModal();
}

function closeFight() {
    fightPanel.close();
}

fightButton.addEventListener("click", openFight);
closeFightButton.addEventListener("click", closeFight);


const sandaButton = document.getElementById("sanda-button");
const fightPhoto = document.getElementById("fight-photo");
const fightCaption = document.getElementById("fight-caption");
const fightPhotoStatus = document.getElementById("fight-photo-status");

function showFightPhoto(photoPath, photoDescription, caption, selectedButton) {
    fightPhoto.hidden = true;
    fightPhotoStatus.hidden = false;
    fightPhotoStatus.textContent = "照片載入中…";

    fightPhoto.alt = photoDescription;
    fightCaption.textContent = caption;
    fightPhoto.src = photoPath;

    const fightButtons = document.querySelectorAll(".fight-trigger");

    for (const button of fightButtons) {
        button.setAttribute(
            "aria-pressed",
            String(button === selectedButton)
        );
    }
}

function selectSanda() {
    showFightPhoto(
        "assets/sanda-2021.jpg",
        "MIKEY 於 2021 年 11 月參加散打比賽",
        "2021 年 11 月｜散打比賽",
        sandaButton
    );
}

sandaButton.addEventListener("click", selectSanda);
sandaButton.addEventListener("mouseenter", selectSanda);
sandaButton.addEventListener("focus", selectSanda);

const hualienButton = document.getElementById("hualien-button");

function selectHualien() {
    showFightPhoto(
        "assets/hualien-2022.jpg",
        "MIKEY 於 2022 年 6 月參加洄瀾勇士比賽",
        "2022 年 6 月｜洄瀾勇士",
        hualienButton
    );
}

hualienButton.addEventListener("click", selectHualien);
hualienButton.addEventListener("mouseenter", selectHualien);
hualienButton.addEventListener("focus", selectHualien);

const t1Button2022 = document.getElementById("t1-2022-button");

function selectT1_2022() {
    showFightPhoto(
        "assets/t1-2022.jpg",
        "MIKEY 於 2022 年 9 月參加 T1 積分賽",
        "2022 年 9 月｜T1 積分賽",
        t1Button2022
    );
}

t1Button2022.addEventListener("click", selectT1_2022);
t1Button2022.addEventListener("mouseenter", selectT1_2022);
t1Button2022.addEventListener("focus", selectT1_2022);

const wotdButton = document.getElementById("wotd-button");
const t1FebButton = document.getElementById("t1-feb-button");
const t1MayButton = document.getElementById("t1-may-button");

function selectWotd() {
    showFightPhoto(
        "assets/wotd-2023.jpg",
        "MIKEY 於 2023 年 4 月參加 WOTD-ETD09",
        "2023 年 4 月｜WOTD-ETD09",
        wotdButton
    );
}

function selectT1Feb() {
    showFightPhoto(
        "assets/t1-2024-02.jpg",
        "MIKEY 於 2024 年 2 月參加 T1 積分賽",
        "2024 年 2 月｜T1 積分賽",
        t1FebButton
    );
}

function selectT1May() {
    showFightPhoto(
        "assets/t1-2024-05.jpg",
        "MIKEY 於 2024 年 5 月參加 T1 積分賽",
        "2024 年 5 月｜T1 積分賽｜敗",
        t1MayButton
    );
}

wotdButton.addEventListener("click", selectWotd);
wotdButton.addEventListener("mouseenter", selectWotd);
wotdButton.addEventListener("focus", selectWotd);

t1FebButton.addEventListener("click", selectT1Feb);
t1FebButton.addEventListener("mouseenter", selectT1Feb);
t1FebButton.addEventListener("focus", selectT1Feb);

t1MayButton.addEventListener("click", selectT1May);
t1MayButton.addEventListener("mouseenter", selectT1May);
t1MayButton.addEventListener("focus", selectT1May);

const ironmanButton = document.getElementById("ironman-button");
const ironmanPanel = document.getElementById("ironman-panel");
const closeIronmanButton = document.getElementById("close-ironman");

function openIronman() {
    ironmanPanel.showModal();
}

function closeIronman() {
    ironmanPanel.close();
}

ironmanButton.addEventListener("click", openIronman);
closeIronmanButton.addEventListener("click", closeIronman);

function handlePhotoLoad() {
    fightPhoto.hidden = false;
    fightPhotoStatus.hidden = true;
}

function handlePhotoError() {
    fightPhoto.hidden = true;
    fightPhotoStatus.hidden = false;
    fightPhotoStatus.textContent = "照片暫時無法顯示，請稍後再試。";
}

fightPhoto.addEventListener("load", handlePhotoLoad);
fightPhoto.addEventListener("error", handlePhotoError);