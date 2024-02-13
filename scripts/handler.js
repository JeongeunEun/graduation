function onClickCheckbox(className, id) {
    for(let checkbox of document.getElementsByClassName(className)) {
        if(checkbox.id == id) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    }
}

function onClickNextButton(next_page) {
    window.location.href = next_page;
}

function getPageWithCheckbox(className) {
    for(let chcekbox of document.getElementsByClassName(className)) {
        if(chcekbox.checked) {
            return `/pages/${chcekbox.id}.html`;
        }
    }
}
