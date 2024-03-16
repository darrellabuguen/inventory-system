
//function for showing the password in login page
function showPass() {
    const checkbox = document.querySelector("#show-password");
    const password = document.querySelector("#password");
    checkbox.checked ? password.type = "text" : password.type = "password";
}

//function for showing the password in signup page
function showPassword() {
    const checkbox = document.querySelector("#show-password");
    const password = document.querySelector("#password");
    const confirm_pass = document.querySelector("#repassword");
    if (checkbox.checked) {
        password.type = "text";
        confirm_pass.type = "text"
    } else {
        password.type = "password";
        confirm_pass.type = "password";
    }
}

//function for creating table of items
function createTable(snap_item_id, snap_itemn, snap_itemp, snap_quantity, snap_expiry, snap_batch) {
    var tbody = document.querySelector(".item-body");
    var trow = document.createElement("tr");
    var tdata1 = document.createElement("td");
    var tdata2 = document.createElement("td");
    var tdata3 = document.createElement("td");
    var tdata4 = document.createElement("td");
    var tdata5 = document.createElement("td");
    var tdata6 = document.createElement("td");
    var tdata8 = document.createElement("td");

    tdata1.innerHTML = snap_item_id; tdata2.innerHTML = snap_itemn; tdata3.innerHTML = "₱" + snap_itemp;
    tdata4.innerHTML = snap_batch; tdata5.innerHTML = snap_quantity; tdata6.innerHTML = snap_expiry;
    tdata8.innerHTML = `<div class='item-option ${snap_item_id} inactive'><div>&hellip;</div></div>`;
    tdata8.addEventListener("click", (e) => {
        e.stopPropagation();
    })
    tdata1.classList.add("iid");

    trow.appendChild(tdata1); trow.appendChild(tdata2); trow.appendChild(tdata3);
    trow.appendChild(tdata4); trow.appendChild(tdata5); trow.appendChild(tdata6);
    trow.appendChild(tdata8);

    tbody.appendChild(trow);
}

function removeTable() {
    var tbody = document.querySelectorAll("td");
    tbody.forEach(trs => {
        trs.parentElement.remove();
        trs.remove();
    });
}

function openTableOptions() {
    const container = document.querySelector(".table-option-container");
    container.style.display = "flex";
}