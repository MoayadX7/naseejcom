var ppp=0;
on_l = true;

c_arr = ["homecont", "exx", "scont", "excont", "fmcont", "pfcont"];
function starrt() {
    // Get all the elements with class "item"
    const items = document.querySelectorAll('.icc');

    // Add click event listener to each item
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Remove "active" class from all items
            items.forEach(item => item.classList.remove('active'));

            // Add "active" class to clicked item
            item.classList.add('active');
        });
    });

    ic1 = document.getElementById("ic1");
    ic2 = document.getElementById("ic2");
    ic3 = document.getElementById("ic3");
    im1 = document.getElementById("imm1");
    im2 = document.getElementById("imm2");
    ic4 = document.getElementById("ic4");
    ic5 = document.getElementById("ic5");
    ic1.addEventListener('click', function () {
        document.getElementsByClassName("maintext")[0].innerHTML = ic1.dataset.wordee;
        slidee(ic1.dataset.slidee);
    });
    ic2.addEventListener('click', function () {
        document.getElementsByClassName("maintext")[0].innerHTML = ic2.dataset.wordee;

        slidee(ic2.dataset.slidee);
        if (on_l) {
            document.querySelector('.excont').style.opacity = "100";
            document.querySelector('.excont').style.visibility = "visible";
        }
        else {
            document.querySelector('.fmcont').style.opacity = "100";
            document.querySelector('.fmcont').style.visibility = "visible";
        }
    });


    ic3.addEventListener('click', function () {
        document.getElementsByClassName("maintext")[0].innerHTML = ic3.dataset.wordee;

        slidee(ic3.dataset.slidee);
    });

    ic5.addEventListener('click', function () {
        document.getElementsByClassName("maintext")[0].innerHTML = ic5.dataset.wordee;

        slidee(ic5.dataset.slidee);
    });
    im1.addEventListener('click', function () {
        document.getElementsByClassName("maintext")[0].innerHTML = ic2.dataset.wordee;

        slidee(ic2.dataset.slidee);
        if (on_l) {
            document.querySelector('.excont').style.opacity = "100";
            document.querySelector('.excont').style.visibility = "visible";
        }
        else {
            document.querySelector('.fmcont').style.opacity = "100";
            document.querySelector('.fmcont').style.visibility = "visible";
        }
    });


    im2.addEventListener('click', function () {
        document.getElementsByClassName("maintext")[0].innerHTML = ic3.dataset.wordee;

        slidee(ic3.dataset.slidee);
        // if (on_l) {
        //     document.querySelector('.excont').style.opacity = "100";
        //     document.querySelector('.excont').style.visibility = "visible";
        // }
        // else{
        //     document.querySelector('.fmcont').style.opacity = "100";
        //     document.querySelector('.fmcont').style.visibility = "visible";
        // }
    });
    //
    changer = document.getElementsByClassName("changer")[0];
    changer.addEventListener("click", function () { changee("fmcont") }, false);

    sim1 = document.getElementsByClassName("ss2")[0];
    sim1.addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("notee").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });
    sim1 = document.getElementsByClassName("ss2")[1];
    sim1.addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("notee").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });

    sim1 = document.getElementsByClassName("ss1")[0];
    sim1.addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("notee2").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });
    //---------------//
    document.getElementById("blurr").addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "hidden";
        document.getElementById("notee").style.visibility = "hidden";
        document.getElementById("ppl").style.visibility = "hidden";
        document.getElementById("notee2").style.visibility = "hidden";
        document.getElementById("ok").style.visibility = "hidden";
    });
    document.getElementById("notee").addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "hidden";
        document.getElementById("notee2").style.visibility = "hidden";
        document.getElementById("notee").style.visibility = "hidden";
        document.getElementById("ok").style.visibility = "hidden";
    });
    document.getElementById("notee2").addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "hidden";
        document.getElementById("notee2").style.visibility = "hidden";
        document.getElementById("notee").style.visibility = "hidden";
        document.getElementById("ok").style.visibility = "hidden";
    });
    document.getElementById("ok").addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "hidden";
        document.getElementById("notee2").style.visibility = "hidden";
        document.getElementById("notee").style.visibility = "hidden";
        document.getElementById("ppl").style.visibility = "hidden";
        document.getElementById("ok").style.visibility = "hidden";
    });
    document.getElementById("ppl").addEventListener('click', function () {
        document.getElementById("blurr").style.visibility = "hidden";
        document.getElementById("ppl").style.visibility = "hidden";
        document.getElementById("notee").style.visibility = "hidden";
        document.getElementById("ok").style.visibility = "hidden";
    });

    //--------------//

    document.getElementById("nc1").addEventListener('click', function () {
        document.getElementById("nc1").style.visibility = "hidden";
        document.getElementById("blurr2").style.visibility = "hidden";
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("ppl").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });
    document.getElementById("nc2").addEventListener('click', function () {
        document.getElementById("nc2").style.visibility = "hidden";
        document.getElementById("blurr2").style.visibility = "hidden";
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("ppl").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });
    document.getElementById("nc3").addEventListener('click', function () {
        document.getElementById("blurr2").style.visibility = "hidden";
        document.getElementById("nc3").style.visibility = "hidden";
        document.getElementById("ppl").style.visibility = "visible";
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });
    document.getElementById("nc4").addEventListener('click', function () {
        document.getElementById("blurr2").style.visibility = "hidden";
        document.getElementById("nc4").style.visibility = "hidden";
        document.getElementById("ppl").style.visibility = "visible";
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });

    document.getElementsByClassName("poi")[0].addEventListener('click', function () {
        // document.getElementById("nc4").style.visibility = "hidden";
        document.getElementById("ppl").style.visibility = "visible";
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });
    document.getElementsByClassName("poi")[1].addEventListener('click', function () {
        // document.getElementById("nc4").style.visibility = "hidden";
        document.getElementById("ppl").style.visibility = "visible";
        document.getElementById("blurr").style.visibility = "visible";
        document.getElementById("ok").style.visibility = "visible";
    });
    var tx = document.getElementsByClassName("final");

    tx[0].addEventListener('click', function () {
        document.getElementById("nc1").style.visibility = "visible";
        document.getElementById("blurr2").style.visibility = "visible";
    });
    tx[1].addEventListener('click', function () {
        document.getElementById("blurr2").style.visibility = "visible";
        document.getElementById("nc2").style.visibility = "visible";
    });
    tx[2].addEventListener('click', function () {
        document.getElementById("blurr2").style.visibility = "visible";
        document.getElementById("nc3").style.visibility = "visible";
    });
    tx[3].addEventListener('click', function () {
        document.getElementById("blurr2").style.visibility = "visible";
        document.getElementById("nc4").style.visibility = "visible";
    });


}
function slidee(the_c) {

    console.log(the_c)
    for (var i = 0; i < c_arr.length; i++) {
        if (c_arr[i] != the_c) {
            document.querySelector('.' + c_arr[i]).style.opacity = "0";
            document.querySelector('.' + c_arr[i]).style.visibility = "hidden";
            // document.querySelector('.' + c_arr[i]).style.display = "none";
        }
    }
    // document.querySelector('.' + c_arr[i]).style.display = "flex";
    document.querySelector('.' + the_c).style.opacity = "100";
    document.querySelector('.' + the_c).style.visibility = "visible";

}
function changee(the_cc) {
    if (on_l) {
        document.getElementsByClassName("inchanger")[0].style.left = "144.5px";
        document.getElementById("fm").style.filter = "invert(98%) sepia(100%) saturate(6%) hue-rotate(151deg) brightness(103%) contrast(104%)";
        on_l = 0;

        //

        document.querySelector('.excont').style.opacity = "0";
        document.querySelector('.excont').style.visibility = "hidden";

        // document.querySelector('.' + c_arr[i]).style.display = "flex";
        document.querySelector('.' + the_cc).style.opacity = "100";
        document.querySelector('.' + the_cc).style.visibility = "visible";
    }
    else {

        document.getElementsByClassName("inchanger")[0].style.left = "0px";
        on_l = 1;
        document.getElementById("fm").style.filter = null;
        document.querySelector('.' + the_cc).style.opacity = "0";
        document.querySelector('.' + the_cc).style.visibility = "hidden";
        document.querySelector('.excont').style.opacity = "100";
        document.querySelector('.excont').style.visibility = "visible";

    }

    //-----------------//
    console.log(the_cc)

}

// function nc1(xx) {
//     if (xx === true) {

//     }

// }
window.addEventListener("load", starrt, false);
