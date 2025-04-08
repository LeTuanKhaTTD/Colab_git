document.getElementById("actionButton").addEventListener("click", function() {
    const members = ["Lê Tuấn Kha", "Trần Tấn Hưng", "Lâm Nhật Hào"];
    const message = "Các thành viên nhóm:\n" + members.join("\n");
    alert(message);
});