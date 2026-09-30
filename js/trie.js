gsap.registerPlugin(Flip);

gsap.fromTo(".hip-hop", { xPercent: -200 }, { rotation: 360, xPercent: 0, duration: 1 });

gsap.fromTo(".rock", { xPercent: 200 }, { rotation: -360, xPercent: 0, duration: 1 });

gsap.fromTo(".RnB", { yPercent: -200 }, { rotation: 360, yPercent: 0, duration: 1 });

gsap.fromTo(".metal", { yPercent: 200 }, { rotation: 360, yPercent: 0, duration: 1 });

const disque = document.querySelectorAll("div.disque");

const genre = document.getElementById("genre");

genre.addEventListener("change", sort);
function sort() {
    const value = genre.value;
    const state = Flip.getState(".disque");
    disque.forEach(div => {
        if (value === "tous" || value === "" || div.classList.contains(value)) {
            div.classList.remove("cache")
        } else {
            div.classList.add("cache")
        };
    });
    Flip.from(state, {
        scale: true,
        duration: 1,
        absolute: true,
        ease: "power1.inOut",
        onEnter: elements => gsap.fromTo(elements, { yPercent: -200, opacity: 0 }, { opacity: 1, duration: 1, yPercent: 0, stagger: 0.2 }),
        onLeave: elements => gsap.to(elements, { opacity: 0, duration: 1, yPercent: 200, stagger: 0.2 }),
    })
}
