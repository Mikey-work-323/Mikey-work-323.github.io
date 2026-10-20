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
const fightVideo = document.getElementById("fight-video");
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
        const videoUrl = (selectedButton.dataset.video || "").trim();

    if (videoUrl) {
        fightVideo.href = videoUrl;
        fightVideo.hidden = false;
    } else {
        fightVideo.hidden = true;
        fightVideo.removeAttribute("href");
    }
}

function selectSanda() {
    showFightPhoto(
        "assets/sanda-2021.jpg",
        "MIKEY 於 2021 年 11 月參加散打比賽",
        "2021 年 11 月｜散打比賽｜第五名",
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
        "2022 年 6 月｜洄瀾勇士｜優勝",
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
        "2022 年 9 月｜T1 積分賽｜優勝",
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
        "2023 年 4 月｜WOTD-ETD09｜敗",
        wotdButton
    );
}

function selectT1Feb() {
    showFightPhoto(
        "assets/t1-2024-02.jpg",
        "MIKEY 於 2024 年 2 月參加 T1 積分賽",
        "2024 年 2 月｜T1 積分賽｜優勝",
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

function initStudentResults() {
    const studentResults = document.querySelector(".student-results");

    if (!studentResults) return;

    const studentButtons =
        studentResults.querySelectorAll(".student-trigger");

    const studentPhoto =
        document.getElementById("student-photo");

    const studentCaption =
        document.getElementById("student-caption");

    const studentVideo =
        document.getElementById("student-video");

    const studentStatus =
        document.getElementById("student-photo-status");

    if (
        !studentButtons.length ||
        !studentPhoto ||
        !studentCaption ||
        !studentVideo ||
        !studentStatus
    ) {
        return;
    }

    // 每次切換加一，避免較慢載入的舊照片覆蓋新場次
    let photoRequest = 0;

    function showStudentResult(selectedButton) {
        const currentRequest = ++photoRequest;

        const photoPath =
            (selectedButton.dataset.photo || "").trim();

        const photoDescription =
            selectedButton.dataset.alt || "學生參賽照片";

        const caption =
            selectedButton.dataset.caption || "";

        const videoUrl =
            (selectedButton.dataset.video || "").trim();

        // 只有目前這場維持選取
        studentButtons.forEach((button) => {
            button.setAttribute(
                "aria-pressed",
                String(button === selectedButton)
            );
        });

        studentCaption.textContent = caption;

        // 切換影片；沒有網址就清除上一場連結
        if (videoUrl) {
            studentVideo.href = videoUrl;
            studentVideo.hidden = false;
        } else {
            studentVideo.hidden = true;
            studentVideo.removeAttribute("href");
        }

        studentPhoto.hidden = true;
        studentStatus.hidden = false;

        if (!photoPath) {
            studentStatus.textContent = "這場比賽的照片待補";
            return;
        }

        studentStatus.textContent = "照片載入中…";

        const nextPhoto = new Image();

        nextPhoto.onload = () => {
            if (currentRequest !== photoRequest) return;

            studentPhoto.src = photoPath;
            studentPhoto.alt = photoDescription;
            studentPhoto.hidden = false;
            studentStatus.hidden = true;
        };

        nextPhoto.onerror = () => {
            if (currentRequest !== photoRequest) return;

            studentStatus.textContent =
                "照片載入失敗，請確認圖片路徑";
        };

        nextPhoto.src = photoPath;
    }

    studentButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            showStudentResult(button);
        });

        button.addEventListener("focus", () => {
            showStudentResult(button);
        });

        button.addEventListener("click", () => {
            showStudentResult(button);
        });
    });

    // 預設展示第一場
    showStudentResult(studentButtons[0]);
}

// 確保網頁元素建立完成後才執行
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initStudentResults,
        { once: true }
    );
} else {
    initStudentResults();
}
document.querySelectorAll("dialog.panel").forEach((panel) => {
    let startedOutside = false;

    // 判斷點擊位置是否在面板範圍外
    function isOutsidePanel(event) {
        const rect = panel.getBoundingClientRect();

        return (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        );
    }

    // 記錄滑鼠或手指按下的位置
    panel.addEventListener("pointerdown", (event) => {
        startedOutside = isOutsidePanel(event);
    });

    // 按下與放開都在面板外，才關閉
    panel.addEventListener("click", (event) => {
        if (startedOutside && isOutsidePanel(event)) {
            panel.close();
        }

        startedOutside = false;
    });
});