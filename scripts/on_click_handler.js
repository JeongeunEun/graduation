function on_click_checkbox(current_id, other_id) {
    let current_checkbox = document.getElementById(current_id)
    let other_checkbox = document.getElementById(other_id)

    if(current_checkbox.checked) {
        other_checkbox.checked = false
    }
}

function get_page() {
    for(let chcekbox of document.getElementsByClassName("index_checkbox")) {
        if(chcekbox.checked) {
            return `./pages/${chcekbox.id}.html`
        }
    }
}

function on_click_next_button(next_page) {
    window.location.href = next_page
}