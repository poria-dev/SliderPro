const imgs = document.querySelectorAll(".boxorg>figure")
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

const list = document.querySelectorAll("ul > li")


let x = null

let stopp;

let lamp = false



imgs.forEach((val) => {

    x = Number(val.getAttribute("data-status"))
    val.style.filter = "blur(1.5px)"


    swi(val, x)

})


active()
runner_auto()


btnright.addEventListener("click", () => {

    if (lamp == true) {

        return

    }

    clickright()
    active()
    lamp = true

    setTimeout(() => {
        lamp = false
    }, 500);
    // console.log(lamp);


})


btnright.addEventListener("mousemove", () => {

    clearInterval(stopp)

})


btnright.addEventListener("mouseleave", () => {

    runner_auto()

})


// //////////////////////////////////////////////////////////////////////////


btnleft.addEventListener("mousemove", () => {

    clearInterval(stopp)

})


btnleft.addEventListener("mouseleave", () => {

    runner_auto()

})


btnleft.addEventListener("click", () => {


    if (lamp == true) {

        return

    }

    lamp = true


    imgs.forEach((val) => {

        x = Number(val.getAttribute("data-status"))


        if (x > 0) {

            x--

        } else {

            x = 6

        }


        val.setAttribute("data-status", x)


        swi(val, x)

    })

    active()

    setTimeout(() => {
        lamp = false
    }, 500);

})


// conditions //////////////////////////////////

function swi(val, x) {


    val.classList.remove("center")
    val.classList.remove("left1")
    val.classList.remove("left2")
    val.classList.remove("right1")
    val.classList.remove("right2")
    val.classList.remove("out1")
    val.classList.remove("out2")



    switch (x) {


        case 0:

            val.classList.add("out1")

            break



        case 1:

            val.classList.add("left1")

            break



        case 2:

            val.classList.add("left2")

            break



        case 3:

            val.classList.add("center")

            break



        case 4:

            val.classList.add("right1")

            break



        case 5:

            val.classList.add("right2")

            break



        case 6:

            val.classList.add("out2")

            break


    }

    if (x == 3) {

        val.style.filter = "blur(0px)"



    } else if (x == 2 || x == 4) {
        val.style.filter = "blur(0.5px)"

    } else if (x == 1 || x == 5) {
        val.style.filter = "blur(1.5px)"
    } else {
        val.style.filter = "blur(2.5px)"

    }

}


function clickright() {

    imgs.forEach((val) => {

        x = Number(val.getAttribute("data-status"))


        if (x < 6) {

            x++

        } else {


            x = 0


        }


        val.setAttribute("data-status", x)


        swi(val, x)

    })

}


// list /////////////

function active() {

    list.forEach((val) => {

        val.classList.remove("wh")
        val.classList.add("bg-gray-500")

    })


    imgs.forEach((item, i) => {

        let x = Number(item.getAttribute("data-status"))


        if (x == 3) {

            list[i].classList.add("wh")
            list[i].classList.remove("bg-gray-500")

        }

    })

}


// for auto run list

function runner_auto() {

    clearInterval(stopp)

    stopp = setInterval(() => {

        btnright.click()

    }, 3000)

}




