const openBtn = document.querySelector(".open-menu")


if (openBtn) {
    openBtn.addEventListener("click", () => {
        const openItems = document.querySelector("#menu-body")
        if (openItems.style.display == "none") {
            openItems.style.display = "flex"
            document.querySelector(".bar1").style.transform = "translateY(9px) rotate(44deg)";
            document.querySelector(".bar2").style.opacity = "0";
            document.querySelector(".bar3").style.transform = "translateY(-9px) rotate(-44deg)";
        }
        else {
            openItems.style.display = "none"
            document.querySelector(".bar1").style.transform = "translateY(0px) rotate(0deg)";
            document.querySelector(".bar2").style.opacity = "1";
            document.querySelector(".bar3").style.transform = "translateY(0px) rotate(0deg)";
        }
    })
}
const ChevronDown = document.getElementById("chevron_down_menu")


if (ChevronDown) {
    ChevronDown.addEventListener("click", () => {
        const OpenBody = document.querySelector(".desk_menu_body")
        if (OpenBody.style.display == "none") {
            OpenBody.style.display = "flex"
            
        }
        else {
            OpenBody.style.display = "none"
           
        }
    })
}

const NavSearchDiv = document.querySelectorAll(".nav_search")
const modal = document.querySelector("#modal_search")
const modalItem = document.querySelector("#modal_item")
if (NavSearchDiv) {
    for (let index = 0; index < NavSearchDiv.length; index++) {
        const element = NavSearchDiv[index];
        element.addEventListener("click", () => {
            modal.style.transform = "translateY(0px)"
            modal.style.opacity = "1"
            modalItem.style.transform = "translateY(0px)"
            modalItem.style.opacity = "1"
            //modal.style.display = "flex"
        })

    }
}

const closeBtn = document.querySelector(".close_button")

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modalItem.style.transform = "translateY(-200px)"
        modalItem.style.opacity = "0"
        modal.style.transform = "translateY(-800px)"
        modal.style.opacity = "0"
        
    })

}

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modalItem.style.transform = "translateY(-200px)"
        modalItem.style.opacity = "0"
        modal.style.transform = "translateY(-800px)"
        modal.style.opacity = "0"
        
    }
})


var swiper = new Swiper(".card_slide", {
    slidesPerView: 3.5,
    spaceBetween: 10,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        "340": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "405": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "600": {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        "768": {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        "900": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "992": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "1300": {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        "1420": {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        "1480": {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        "1500": {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
    },
});


