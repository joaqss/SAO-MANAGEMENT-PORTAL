document.addEventListener("DOMContentLoaded", function() {
    const announcementsButton = document.querySelector(".fa-envelope");
    const announcementsTab = document.querySelector(".envelope-extended");
    const closeButton = document.querySelector(".fa-x");
    

    announcementsButton.addEventListener("click", function(event) {
        event.stopPropagation();
        if (announcementsTab.classList.contains("active")) {
            announcementsTab.classList.remove("active");
            setTimeout(() => {
                announcementsTab.style.display = "flex";
            }, 300); 
        } else {
            announcementsTab.style.display = "flex";
            setTimeout(() => {
                announcementsTab.classList.add("active");
            }, 10);
        }
    });

    closeButton.addEventListener("click", function(event) {
        event.stopPropagation();
        if (announcementsTab.classList.contains("active")) {
            announcementsTab.classList.remove("active");
            setTimeout(() => {
                announcementsTab.style.display = "flex";
            }, 300); 
        } else {
            announcementsTab.style.display = "flex";
            setTimeout(() => {
                announcementsTab.classList.add("active");
            }, 10);
        }
    });

  


    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && !barsIcon.contains(event.target)) {
            dropdown.classList.remove("active");
            setTimeout(() => {
                dropdown.style.display = "none";
            }, 300); 
        }

        if (!bellDropdown.contains(event.target) && !bellIcon.contains(event.target)) {
            bellDropdown.classList.remove("active");
            setTimeout(() => {
                bellDropdown.style.display = "none";
            }, 300);
        }
    });
});