(async () => {
    await loadStarsPreset(tsParticles);

    await tsParticles.load("tsparticles", {
        fpsLimit: 120,
        preset: "stars",
        background: {
            color: "#0F172A"
        },
        particles: {
            color: { value: "#ffffff" },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 100
            },
            opacity: {
                // animation: {
                //     enable: true,
                //     speed: 0.5,
                //     sync: false,
                //     startValue: "max",
                //     count: 1,
                //     destroy: "min"
                // },
                value: {
                    min: 0,
                    max: 1
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: { min: 0.1, max: 2.5 }
            }
        }
    });
})();

(() => {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    /**
     * Scrolls to an element with header offset
     */
    // const scrollto = (el) => {
    //     let header = select('#header')
    //     let offset = header.offsetHeight

    //     let elementPos = select(el).offsetTop
    //     window.scrollTo({
    //         top: elementPos - offset,
    //         behavior: 'smooth'
    //     })
    // }


    // /**
    //  * Back to top button
    //  */
    // let backtotop = select('.back-to-top')
    // if (backtotop) {
    //     const toggleBacktotop = () => {
    //         if (window.scrollY > 100) {
    //             backtotop.classList.add('active')
    //         } else {
    //             backtotop.classList.remove('active')
    //         }
    //     }
    //     window.addEventListener('load', toggleBacktotop)
    //     onscroll(document, toggleBacktotop)
    // }

    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    });

    /**
   * Porfolio isotope and filter
   */
    window.addEventListener('load', () => {
        let isotopeContainer = select('.isotope-container');
        if (isotopeContainer) {
            let isotopeIsotope = new Isotope(isotopeContainer, {
                itemSelector: '.isotope-item',
            });
        }

    });

    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    let portfolionIsotope = document.querySelector('.portfolio-isotope');

    if (portfolionIsotope) {

        window.addEventListener('load', () => {
            let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
                itemSelector: '.portfolio-item',
                layoutMode: portfolioLayout,
                filter: portfolioFilter,
                sortBy: portfolioSort
            });
        });
    }

})()

var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', function (event) {
    var lbox = document.querySelectorAll('.lbox');
    lbox.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("trans");
        } else {
            element.classList.remove("trans")
        }
    });
}, false);


feather.replace()
