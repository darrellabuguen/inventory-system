
import firebaseConfig from "./config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, onAuthStateChanged, deleteUser, GoogleAuthProvider, signInWithPopup, linkWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
    getDatabase, ref, push, onValue, child,
    remove, set, query, orderByChild, get,
    startAt, endAt, limitToLast
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

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
        var del_btn = `<button class="delete-item">Delete</button>`
        var info_span = document.createElement("span");
        var info_btn = `<button class="item-info">Item Info</button>`
        div.classList.add("item-option-container");

        del_span.innerHTML = del_btn;
        info_span.innerHTML = info_btn;
        div.append(del_span);
        div.append(info_span);

        item_info_container.append(div);
        item_info_container.classList.remove("inactive");
    }

    //select the class for the created button options
    const item_info = document.querySelector(".item-info");
    const delete_item = document.querySelector(".delete-item");

    //add listener when clicked
    item_info.addEventListener("click", (e) => {
        showItemInfo(id);       //function that would show the information of selected item
        e.stopPropagation();
    })

    delete_item.addEventListener("click", (e) => {
        deleteItem(id);         //function for deleting the selected item
        e.stopPropagation();
    })
}

function showItemInfo(infos_id) {
    const userid = auth.currentUser.uid;
    const refr = query(ref(db, `User/${userid}/Items/${infos_id}`));

    //select class of hidden container and each input tag in the hidden container
    const info_container = document.querySelector(".item-info-container");
    const close_info = document.querySelector(".close-info");
    const name = document.querySelector(".item-info-name");
    const price = document.querySelector(".item-info-price");
    const qnty = document.querySelector(".item-info-qnty");
    const batch = document.querySelector(".batch-number");
    const expiry = document.querySelector("#item-info-expiry");
    const manufactured = document.querySelector("#item-info-manufactured");
    const added = document.querySelector("#item-info-added");
    const info_id = document.querySelector('.item-info-id');
    const edit_btn = document.querySelector(".item-info-edit");
    info_container.classList.remove("hidden");

    get(refr)
        .then((snapshot) => {
            const data = snapshot.val();
            var item_name = data.item_name;
            var item_batch = data.batch_no;
            var item_qnty = data.item_qnty;
            var item_price = data.item_price;
            var item_mdate = data.manufactured;
            var item_edate = data.expiry;
            var item_added = data.added;

            name.value = item_name;
            price.value = item_price;
            qnty.value = item_qnty;
            batch.value = item_batch;
            expiry.value = item_edate;
            manufactured.value = item_mdate;
            added.value = item_added;
            info_id.textContent = infos_id;
        })
        .catch((err) => {
            alert(err);
            console.error(err);
        })

    close_info.addEventListener('click', hideContainers);

    info_container.addEventListener("click", (e) => {
        e.stopPropagation();
    })

    edit_btn.addEventListener("click", () => {
        enableEdit(infos_id, name, price, qnty, batch, expiry, manufactured, edit_btn)
    })
}

function deleteItem(delete_id) {
    const userid = auth.currentUser.uid;
    const reff = ref(db, `User/${userid}/Items/${delete_id}`);
    hideContainers();
    var confirmation = confirm("Delete this item?");
    if (confirmation) {
        removeTable();
        remove(reff)
            .then(() => {
                alert("Item successfully deleted");
            })
            .catch((err) => {
                alert(err);
                console.error(err);
            })
    }
}

function enableEdit(edit_id, name, price, qnty, batch, expiry, manufactured, added, edit_btn) {
    const update_btn = document.querySelector(".item-info-update");     //select update button's class

    // add class enable edit that would allow pointer events
    name.classList.add("enable-edit");
    price.classList.add("enable-edit");
    qnty.classList.add("enable-edit");
    batch.classList.add("enable-edit");
    expiry.classList.add("enable-edit");
    manufactured.classList.add("enable-edit");
    added.classList.add("enable-edit");
    update_btn.classList.add("enable-edit");
}

export function hideContainers() {
    const account_container = document.querySelector(".account-container");
    const table_option_container = document.querySelector(".table-option-container");
    account_container.style.display = "none";
    table_option_container.style.display = "none";
    if (selected_item !== null) {
        var item_option = document.querySelector(`.item-option.${selected_item}`);
        var item_info_container = document.querySelector(".item-option-container");     //container of item option
        var info_container = document.querySelector(".item-info-container");            //container for information of item
        var inputss = document.querySelectorAll(".item-info-container input.enable-edit");
        var update_btn = document.querySelector(".item-info-update");

        item_info_container.remove();
        item_option.classList.add("inactive");
        item_option.classList.remove("opened");
        info_container.classList.add("hidden");
        update_btn.classList.remove("enable-edit");
        selected_item = null;

        inputss.forEach(tag => {
            tag.classList.remove("enable-edit");
        })
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