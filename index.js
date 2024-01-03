//show password function
function showpass() {
    var showpass = document.querySelector(".show-pass");
    var passval = document.querySelector(".password");

    if (showpass.checked == true) {
        passval.type = "text";
    }
    else {
        passval.type = "password";
    }
}

function checkCategory(id) {
    var tag = document.querySelector(`#${id}`);
    const sub = document.querySelector(".sub-category");
    if (tag.value == "Pantry") {
        sub.style.display = "block";
    } else {
        sub.style.display = "none";
        sub.value = "";
    }
}

function createTable(snap_item_category, snap_itemn, snap_itemp, snap_manufactured, snap_expiry, snap_added) {
    var tbody = document.querySelector(".item-body");
    var trow = document.createElement("tr");
    var category = document.createElement("td");
    var item_name = document.createElement("td");
    var item_price = document.createElement("td");
    var manufactured_date = document.createElement("td");
    var expiration_date = document.createElement("td");
    var date_added = document.createElement("td");

    category.innerHTML = snap_item_category; item_name.innerHTML = snap_itemn; item_price.innerHTML = snap_itemp;
    manufactured_date.innerHTML = snap_manufactured; expiration_date.innerHTML = snap_expiry; date_added.innerHTML = snap_added;

    category.classList.add("iid");

    trow.appendChild(category); trow.appendChild(item_name); trow.appendChild(item_price);
    trow.appendChild(manufactured_date); trow.appendChild(expiration_date); trow.appendChild(date_added);

    tbody.appendChild(trow);
}

function getExp(expref, onValue) {
    document.querySelector(".title-nav").innerHTML = "Expired Items";
    onValue(expref, (expsnap) => {
        var expdata = expsnap.val();
        var exid = expdata.ex_id;
        var exname = expdata.ex_name;
        var exprice = expdata.ex_price;
        var exmanu = expdata.ex_manufactured;
        var exexp = expdata.ex_expiry;
        var exadd = expdata.ex_added;

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
}

function getAvailable(avref, onValue) {
    document.querySelector(".title-nav").innerHTML = "Available Items";
    onValue(avref, (avsnap) => {
        var avdata = avsnap.val();
        var avid = avdata.av_id;
        var avname = avdata.av_name;
        var avprice = avdata.av_price;
        var avmanu = avdata.av_manufactured;
        var avexp = avdata.av_expiry;
        var avadd = avdata.av_added;

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
}

function getToEx(toexref, onValue) {
    document.querySelector(".title-nav").innerHTML = "To Expired Items";
    onValue(toexref, (toexsnap) => {
        var toexdata = toexsnap.val();
        var toexid = toexdata.toex_id;
        var toexname = toexdata.toex_name;
        var toexprice = toexdata.toex_price;
        var toexmanu = toexdata.toex_manufactured;
        var toexexp = toexdata.toex_expiry;
        var toexadd = toexdata.toex_added;

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
}

function removeTable() {
    var tbody = document.querySelectorAll("td");

    tbody.forEach(trs => {
        trs.parentElement.remove();
        trs.remove();
    });
}