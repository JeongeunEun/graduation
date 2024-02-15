function onClickCheckbox(className, id) {
    for(let checkbox of document.getElementsByClassName(className)) {
        if(checkbox.id == id) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    }
}

function onClickNextButton(next_page, callback=null) {
    if(next_page === null) {
        alert("체크 박스를 선택해 주세요.");
        return null;
    }

    textField = document.getElementById("input_field");
    if((textField) && (textField.value.length <= 0)) {
        alert("이름을 입력해 주세요.");
        return null;
    }

    if(callback !== null) {
        callback();
    }
    window.location.href = next_page;
}

function getPageWithCheckbox(className) {
    for(let chcekbox of document.getElementsByClassName(className)) {
        if(chcekbox.checked) {
            return `${chcekbox.id}.html`;
        }
    }

    return null;
}

function getText() {
    return sessionStorage.getItem("text");
}


function onLoadComputerImage(img_id, label_className) {
    let img = document.getElementById(img_id);
    let labels = document.getElementsByClassName(label_className);

    defaultPosition = {
        top1: 300,
        left1: 450,
        top2: 447,
        left2: 390,
        weight: 20
    }
    
    let name = getText();
    if(name.length > 3) {
        defaultPosition.left1 -= defaultPosition.weight;
        defaultPosition.left2 -= defaultPosition.weight;
    }

    // 공통 속성
    for(let label of labels) {
        label.style.position = "absolute";
        label.innerText = name;
        label.style.zIndex = 2;
    }

    // 개별 속성
    labels[0].style.top = defaultPosition.top1;
    labels[0].style.left = defaultPosition.left1;
    labels[0].style.fontSize = "340%";

    labels[1].style.top = defaultPosition.top2;
    labels[1].style.left = defaultPosition.left2;
    labels[1].style.fontSize = "200%";

    // 이미지 위치 조정에 따른 레이블 위치 가중치
    for(let label of labels) {
        label.style.top = parseFloat(label.style.top) + img.getBoundingClientRect().top;
        label.style.left = parseFloat(label.style.left) + img.getBoundingClientRect().left;
    }
}

function onLoadOtherImage(img_id, label_id) {
    let img = document.getElementById(img_id);
    let label = document.getElementById(label_id);

    defaultPosition = {
        top: 305,
        left: 100,
        weight: 45
    }
    
    let name = getText();
    if(name.length > 3) {
        defaultPosition.left -= defaultPosition.weight;
    }

    // 공통 속성
    label.style.position = "absolute";
    label.innerText = name;
    label.style.zIndex = 2;

    // 개별 속성
    label.style.top = defaultPosition.top;
    label.style.left = defaultPosition.left;
    label.style.fontSize = "320%";


    // 이미지 위치 조정에 따른 레이블 위치 가중치
    label.style.top = parseFloat(label.style.top) + img.getBoundingClientRect().top;
    label.style.left = parseFloat(label.style.left) + img.getBoundingClientRect().left;
}

function getNameComPage() {
    text1 = document.getElementById("main_text");
    text2 = document.getElementById("sub_text");

    name = getText();

    text1.innerText = `컴퓨터공학과 ${name}, 졸업하다.`;
    text2.innerText = `${name} 수고했다`
}

function getNameOtherPage() {
    text1 = document.getElementById("main_text");
    text1.innerText = `${getText()} 선배님, 졸업 축하드립니다`;
}