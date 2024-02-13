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
        alert("재학생 또는 졸업생을 선택해 주세요.");
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
