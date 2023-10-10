document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");
    const gallery = document.querySelector(".gallery");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            image.classList.toggle("expanded");
            gallery.classList.toggle("expanded-gallery");
        });
    });

    gallery.addEventListener("click", function (event) {
        if (event.target.classList.contains("expanded")) {
            event.target.classList.remove("expanded");
            gallery.classList.remove("expanded-gallery");
        }
    });

    // Navegación entre imágenes mientras están ampliadas
    document.addEventListener("keydown", function (event) {
        if (gallery.classList.contains("expanded-gallery")) {
            const expandedImages = document.querySelectorAll(".image.expanded");
            const currentIndex = Array.from(expandedImages).indexOf(
                document.querySelector(".image.expanded")
            );

            if (event.key === "ArrowLeft" && currentIndex > 0) {
                expandedImages[currentIndex].classList.remove("expanded");
                expandedImages[currentIndex - 1].classList.add("expanded");
            } else if (
                event.key === "ArrowRight" &&
                currentIndex < expandedImages.length - 1
            ) {
                expandedImages[currentIndex].classList.remove("expanded");
                expandedImages[currentIndex + 1].classList.add("expanded");
            }
        }
    });
});



