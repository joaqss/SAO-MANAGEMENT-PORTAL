document.addEventListener("DOMContentLoaded", function() {
    const barsIcon = document.querySelector(".fa-bars");
    const dropdown = document.querySelector(".bars-dropdown");
    const bellIcon = document.querySelector(".fa-bell");
    const bellDropdown = document.querySelector(".notif-dropdown");

    barsIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        if (dropdown.classList.contains("active")) {
            dropdown.classList.remove("active");
            setTimeout(() => {
                dropdown.style.display = "none";
            }, 300); 
        } else {
            dropdown.style.display = "flex";
            setTimeout(() => {
                dropdown.classList.add("active");
            }, 10);
        }
    });

    bellIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        if (bellDropdown.classList.contains("active")) {
            bellDropdown.classList.remove("active");
            setTimeout(() => {
                bellDropdown.style.display = "none";
            }, 300);
        } else {
            bellDropdown.style.display = "flex";
            setTimeout(() => {
                bellDropdown.classList.add("active");
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