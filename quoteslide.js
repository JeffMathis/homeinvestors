const floatingBtn = document.querySelector(".floating-button");
const form = document.querySelector(".form-wrapper");

const options = {
    threshold: 0.40
};

const formobserver = new IntersectionObserver(function(entries, formobserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            floatingBtn.classList.remove("disappear");
            console.log();
        } else {
            floatingBtn.classList.add("disappear")
            console.log();
        }
    });
});

formobserver.observe(form);
