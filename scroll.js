// ScrollOut(
//     if we want animation only to occur once
//     once: true;
//     How much percent of the element should be scrolled down to fire the animation
//     threshold: 1;

// );
let el = document.getElementsByClassName("wrapper");
ScrollOut({
    onShown: function(el) {
        // remove the class
        el.classList.remove("animated", "bounceInLeft");

        // force reflow
        void el.offsetWidth;

        // re-add the animated cl
        el.classList.add("animated", "bounceInLeft");
    }
});