
const barsIcon = document.querySelector(".fa-bars");
const dropdown = document.querySelector(".bars-dropdown");
const ellipsis = document.querySelector(".fa-ellipsis");
const ellipsisExtended = document.querySelector(".ellipsis-extended");

barsIcon.addEventListener("click", function(event) {
    event.stopPropagation(); 
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
});

document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target) && !barsIcon.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

ellipsis.addEventListener("click", function(event) {
    event.stopPropagation();
    if (ellipsisExtended.style.display ==="none" || ellipsisExtended.style.display === "") {
        ellipsisExtended.style.display = "block";
    } else {
        ellipsisExtended.style.display = "none";
    }
});


