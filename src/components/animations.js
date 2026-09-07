export function initAnimations() {
    // SLIDE LEFT

    const animation_elements_left = document.querySelectorAll(".slide-left");

    const observer_left = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-left");
            } else {
                entry.target.classList.remove("animate-slide-left");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_left.length; i++){
        const el = animation_elements_left[i];
        observer_left.observe(el);
    }

    // SLIDE RIGHT

    const animation_elements_right = document.querySelectorAll(".slide-right");

    const observer_right = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-right");
            } else {
                entry.target.classList.remove("animate-slide-right");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_right.length; i++){
        const el = animation_elements_right[i];
        observer_right.observe(el);
    }

    // SLIDE TOP

    const animation_elements_top = document.querySelectorAll(".slide-top");

    const observer_top = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-top");
            } else {
                entry.target.classList.remove("animate-slide-top");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_top.length; i++){
        const el = animation_elements_top[i];
        observer_top.observe(el);
    }

    // SLIDE BOTTOM

    const animation_elements_bottom = document.querySelectorAll(".slide-bottom");

    const observer_bottom = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-bottom");
            } else {
                entry.target.classList.remove("animate-slide-bottom");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_bottom.length; i++){
        const el = animation_elements_bottom[i];
        observer_bottom.observe(el);
    }

    const animation_elements_bottom_left = document.querySelectorAll(".slide-bottom-left");

    const observer_bottom_left = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-bottom-left");
            } else {
                entry.target.classList.remove("animate-slide-bottom-left");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_bottom_left.length; i++){
        const el = animation_elements_bottom_left[i];
        observer_bottom_left.observe(el);
    }

    const animation_elements_bottom_right = document.querySelectorAll(".slide-bottom-right");

    const observer_bottom_right = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-bottom-right");
            } else {
                entry.target.classList.remove("animate-slide-bottom-right");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_bottom_right.length; i++){
        const el = animation_elements_bottom_right[i];
        observer_bottom_right.observe(el);
    }

    const animation_elements_top_left = document.querySelectorAll(".slide-top-left");

    const observer_top_left = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-top-left");
            } else {
                entry.target.classList.remove("animate-slide-top-left");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_top_left.length; i++){
        const el = animation_elements_top_left[i];
        observer_top_left.observe(el);
    }

    const animation_elements_top_right = document.querySelectorAll(".slide-top-right");

    const observer_top_right = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-top-right");
            } else {
                entry.target.classList.remove("animate-slide-top-right");
            }
        })
    }, {
        threshold: 0.45
    });

    for (let i = 0; i < animation_elements_top_right.length; i++){
        const el = animation_elements_top_right[i];
        observer_top_right.observe(el);
    }
}