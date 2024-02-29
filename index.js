
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
function createTable(snap_item_id, snap_itemn, snap_itemp, snap_manufactured, snap_expiry, snap_added) {
    var tbody = document.querySelector(".item-body");
    var trow = document.createElement("tr");
    var tdata1 = document.createElement("td");
    var tdata2 = document.createElement("td");
    var tdata3 = document.createElement("td");
    var tdata4 = document.createElement("td");
    var tdata5 = document.createElement("td");
    var tdata6 = document.createElement("td");
    var tdata7 = document.createElement("td");

    tdata1.innerHTML = snap_item_id; tdata2.innerHTML = snap_itemn; tdata3.innerHTML = snap_itemp;
    tdata4.innerHTML = snap_manufactured; tdata5.innerHTML = snap_expiry; tdata6.innerHTML = snap_added;
    tdata7.innerHTML = "<div class='item-option'>&hellip;</div>";

    tdata1.classList.add("iid");

    trow.appendChild(tdata1); trow.appendChild(tdata2); trow.appendChild(tdata3);
    trow.appendChild(tdata4); trow.appendChild(tdata5); trow.appendChild(tdata6);
    trow.appendChild(tdata7);

    trow.classList.add("item-tr");

    tbody.appendChild(trow);
}

function getExp(expref, onValue) {
    document.querySelector(".title-nav").innerHTML = "Expired Items";
    setTimeout(() => {
        onValue(expref, (expsnap) => {
            var expdata = expsnap.val();
            var exid = expdata.ex_id;
            var exname = expdata.ex_name;
            var exprice = expdata.ex_price;
            var exmanu = expdata.ex_manufactured;
            var exexp = expdata.ex_expiry;
            var exadd = "<button class='delete-exx'>delete</button>";

            var exrow = document.createElement("tr");
            var extd1 = document.createElement("td");
            var extd2 = document.createElement("td");
            var extd3 = document.createElement("td");
            var extd4 = document.createElement("td");
            var extd5 = document.createElement("td");
            var extd6 = document.createElement("td");

            extd1.innerHTML = exid; extd2.innerHTML = exname; extd3.innerHTML = exprice;
            extd4.innerHTML = exmanu; extd5.innerHTML = exexp; extd6.innerHTML = exadd;

            extd1.classList.add("iid");

            exrow.appendChild(extd1); exrow.appendChild(extd2); exrow.appendChild(extd3);
            exrow.appendChild(extd4); exrow.appendChild(extd5); exrow.appendChild(extd6);

            var first = document.querySelector(".item-body");
            first.appendChild(exrow);
        });
    }, 500);
}

function getAvailable(avref, onValue) {
    document.querySelector(".title-nav").innerHTML = "Available Items";
    setTimeout(() => {
        onValue(avref, (avsnap) => {
            var avdata = avsnap.val();
            var avid = avdata.av_id;
            var avname = avdata.av_name;
            var avprice = avdata.av_price;
            var avmanu = avdata.av_manufactured;
            var avexp = avdata.av_expiry;
            var avadd = "<button class='delete-exx'>delete</button>";

            var avrow = document.createElement("tr");
            var avtd1 = document.createElement("td");
            var avtd2 = document.createElement("td");
            var avtd3 = document.createElement("td");
            var avtd4 = document.createElement("td");
            var avtd5 = document.createElement("td");
            var avtd6 = document.createElement("td");

            avtd1.innerHTML = avid; avtd2.innerHTML = avname; avtd3.innerHTML = avprice;
            avtd4.innerHTML = avmanu; avtd5.innerHTML = avexp; avtd6.innerHTML = avadd;

            avtd1.classList.add("iid");

            avrow.appendChild(avtd1); avrow.appendChild(avtd2); avrow.appendChild(avtd3);
            avrow.appendChild(avtd4); avrow.appendChild(avtd5); avrow.appendChild(avtd6);

            var first = document.querySelector(".item-body");
            first.appendChild(avrow);
        });
    }, 500);
}

function getToEx(toexref, onValue) {
    document.querySelector(".title-nav").innerHTML = "To Expired Items";
    setTimeout(() => {

        onValue(toexref, (toexsnap) => {
            var toexdata = toexsnap.val();
            var toexid = toexdata.toex_id;
            var toexname = toexdata.toex_name;
            var toexprice = toexdata.toex_price;
            var toexmanu = toexdata.toex_manufactured;
            var toexexp = toexdata.toex_expiry;
            var toexadd = "<button class='delete-exx'>delete</button>";

            var toexrow = document.createElement("tr");
            var toextd1 = document.createElement("td");
            var toextd2 = document.createElement("td");
            var toextd3 = document.createElement("td");
            var toextd4 = document.createElement("td");
            var toextd5 = document.createElement("td");
            var toextd6 = document.createElement("td");

            toextd1.innerHTML = toexid; toextd2.innerHTML = toexname; toextd3.innerHTML = toexprice;
            toextd4.innerHTML = toexmanu; toextd5.innerHTML = toexexp; toextd6.innerHTML = toexadd;

            toextd1.classList.add("iid");

            toexrow.appendChild(toextd1); toexrow.appendChild(toextd2); toexrow.appendChild(toextd3);
            toexrow.appendChild(toextd4); toexrow.appendChild(toextd5); toexrow.appendChild(toextd6);

            var first = document.querySelector(".item-body");
            first.appendChild(toexrow);
        });
    }, 500);
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