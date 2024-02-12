function on_click_checkbox(current_id, other_id) {
    let current_checkbox = document.getElementById(current_id)
    let other_checkbox = document.getElementById(other_id)

    if(current_checkbox.checked) {
        other_checkbox.checked = false
    }
}

function get_page() {
    for(let chcekbox of document.getElementsByClassName("home_chcekbox")) {
        if(chcekbox.checked) {
            return chcekbox.id
        }
    }
}

function on_click_next_button(next_page) {
    alert(get_page())
}