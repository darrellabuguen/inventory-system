function openAdd() {
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

document.addEventListener("DOMContentLoaded", () => {
    const account_container = document.querySelector(".account-container");
    const table_option_container = document.querySelector(".table-option-container");
    const menu_bttn = document.querySelector(".menu_bttn");
    const add_item_bottom = document.querySelector(".add-item-bottom");

    function hideContainers() {
        account_container.style.display = "none";
        table_option_container.style.display = "none";
    }

    document.addEventListener("click", (e) => {
        var target = e.target;
        if (target !== menu_bttn && target !== account_container || target !== add_item_bottom && target !== table_option_container) {
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