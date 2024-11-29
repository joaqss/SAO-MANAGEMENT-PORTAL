document.addEventListener("DOMContentLoaded", function() {
    const ellipsis = document.querySelector(".fa-ellipsis");
    const ellipsisExtended = document.querySelector(".ellipsis-extended");

    ellipsis.addEventListener("click", function(event) {
        event.stopPropagation();
        if (ellipsisExtended.classList.contains("active")) {
            ellipsisExtended.classList.remove("active");
            setTimeout(() => {
                ellipsisExtended.style.display = "none";
            }, 300);
           
        } else {
            ellipsisExtended.style.display = "block";
            setTimeout(() => {
                ellipsisExtended.classList.add("active");
            }, 10);
        }
    });

    document.addEventListener("click", function(event) {
        if (!ellipsisExtended.contains(event.target) && !ellipsis.contains(event.target)) {
            ellipsisExtended.classList.remove("active");
            setTimeout(() => {
                ellipsisExtended.style.display = "none";
            }, 300);
        }
    });
});