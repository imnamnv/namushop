function setTotalPrice() {
    var refTab = document.getElementById("cart")
    var ttl;
    // Loop through all rows and columns of the table and popup alert with the value
    // /content of each cell.
    var total = 0;
    for (var i = 0; row = refTab.rows[i]; i++) {
        row = refTab.rows[i];
        col = row.cells[2];
        total += parseInt(col.value);
    }
    document.getElementById("total").innerHTML = "total";
}
