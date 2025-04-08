document.getElementById("pressBtn").addEventListener("click", function() {
    const members = ["Lê Tuấn Kha", "Trần Tấn Hưng", "Lâm Nhật Hào"];
    const container = document.getElementById("teamMembers");
    container.innerHTML = "<ul>" + members.map(name => `<li>${name}</li>`).join("") + "</ul>";
});
