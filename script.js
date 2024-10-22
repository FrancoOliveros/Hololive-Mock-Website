document.querySelectorAll(".box").forEach((box) => {
    const video = box.querySelector("video");
    const shad = box.querySelector(".shad");

    box.addEventListener("mouseover", () => {
        video.play();
    });

    box.addEventListener("mouseout", () => {
        video.pause();
    });

    box.addEventListener("mouseover", () => {
        shad.style.opacity = "0.2";
    });

    box.addEventListener("mouseout", () => {
        shad.style.opacity = "1";
    });
});
