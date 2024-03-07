var selected_item = null;

export function openAdd() {
    var add_section = document.querySelector(".add-item-section");
    var add_container = document.querySelector(".add-item-container");
    var exit_add = document.querySelector(".exit-add");
    var menu = document.querySelector("main");
    var browsersize = window.innerWidth;
    var screensize = screen.width;
    if (screensize < 768 || browsersize < 768) {
        add_section.style.width = "100%";
        add_container.style.borderTop = "none";
        add_section.style.display = "block";
        menu.style.display = "block";
        document.querySelector(".items-container").style.display = "none";
    }
    else {
        add_section.style.width = "50%";
        exit_add.style.display = "block";
        add_section.classList.add("show");
    }
}

export function showItemOption(id) {
    const item_info_container = document.querySelector(`.item-option.${id}`);
    var status = item_info_container.classList.contains("inactive");
    item_info_container.classList.add("opened");
    selected_item = id;

    if (status) {
        var div = document.createElement("div");
        var del_span = document.createElement("span");
        var del_btn = `<button id="${id}" class="delete-item">Delete</button>`
        var info_span = document.createElement("span");
        var info_btn = `<button id="${id}" class="item-info">Item Info</button>`
        div.classList.add("item-option-container");

        del_span.innerHTML = del_btn;
        info_span.innerHTML = info_btn;
        div.append(del_span);
        div.append(info_span);

        item_info_container.append(div);
        item_info_container.classList.remove("inactive");
    }
}

export function hideContainers() {
    const account_container = document.querySelector(".account-container");
    const table_option_container = document.querySelector(".table-option-container");
    account_container.style.display = "none";
    table_option_container.style.display = "none";
    if (selected_item !== null) {
        var item_option = document.querySelector(`.item-option.${selected_item}`);
        var item_info_container = document.querySelector(".item-option-container");
        item_info_container.remove();
        item_option.classList.add("inactive");
        item_option.classList.remove("opened");
        selected_item = null;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const account_container = document.querySelector(".account-container");
    const table_option_container = document.querySelector(".table-option-container");
    const menu_bttn = document.querySelector(".menu_bttn");
    const add_item_bottom = document.querySelector(".add-item-bottom");
    var item_option = document.querySelector(`table`);

    document.addEventListener("click", (e) => {
        var target = e.target;
        if (target !== menu_bttn && target !== account_container ||
            target !== add_item_bottom && target !== table_option_container ||
            target !== item_option) {
            hideContainers();
        }
    })

    account_container.addEventListener("click", (e) => {
        e.stopPropagation();
    })

    menu_bttn.addEventListener("click", (e) => {
        e.stopPropagation();
    })

    add_item_bottom.addEventListener("click", (e) => {
        e.stopPropagation();
    })

    table_option_container.addEventListener("click", (e) => {
        e.stopPropagation();
    })
})