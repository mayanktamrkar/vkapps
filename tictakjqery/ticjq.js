$(document).ready(function() {






    var one = $('#roo')
    var two = $('#rot')
    var three = $('#roth')
    var four = $('#rto')
    var five = $('#rtt')
    var six = $('#rtth')
    var seven = $('#rtho')
    var eight = $('#rtht')
    var nine = $('#rthth')



    var val = "x"

    $('#j').show().html(val)

    function turn() {

        if (val == "x") {
            val = "o"
        } else {
            val = "x"
        }
        $('#j').show().html(val)

    }
    $('#roo').click(function() {

        one.text(val)
        turn()
            ('#roo').attr("disabled", "disabled")
        check()
    })
    $('#rot').click(function() {
        $('#rot').text(val)
        turn()
        two.attr("disabled", "disabled")
        check()


    })

    three.click(function() {
        three.text(val)
        turn()
        three.attr("disabled", "disabled")
        check()


    })

    four.click(function() {
        four.text(val)
        turn()
        four.attr("disabled", "disabled")
        check()


    })

    five.click(function() {
        five.text(val)
        turn()
        five.attr("disabled", "disabled")
        check()


    })

    six.click(function() {
        six.text(val)
        turn()
        six.attr("disabled", "disabled")
        check()


    })

    seven.click(function() {
        seven.text(val)
        turn()
        seven.attr("disabled", "disabled")
        check()


    })

    eight.click(function() {
        eight.text(val)
        turn()
        eight.attr("disabled", "disabled")
        check()


    })

    nine.click(function() {
        nine.text(val)
        turn()
        nine.attr("disabled", "disabled")
        check()


    })

    function draw() {
        if (one.text() != "" && two.text() != "" && three.text() != "" &&
            four.text() != "" && five.text() != "" && six.text() != "" &&
            seven.text() != "" && eight.text() != "" && nine.text() != "") {
            alert('matched draw')
            dis()
        }


    }

    function check() {

        // x wining condition 
        if (one.text() == "x" && two.text() == "x" && three.text() == "x") {
            alert("x is in")
            dis()
        } else if (four.text() == "x" && five.text() == "x" && six.text() == "x") {
            alert('x is win')
            dis()
        } else if (seven.text() == "x" && eight.text() == "x" && nine.text() == "x") {

            alert('x is win')
            dis()
        } else if (one.text() == "x" && five.text() == "x" && nine.text() == "x") {
            alert('x is win')
            dis()

        } else if (seven.text() == "x" && five.innerTexttext() == "x" && three.text() == "x") {
            alert('x is win')
            dis()

        } else if (seven.text() == "x" && four.text() == "x" && one.text() == "x") {
            alert('x is win')
            dis()

        } else if (two.text() == "x" && five.text() == "x" && eight.text() == "x") {
            alert('x is win')
            dis()

        } else if (three.text() == "x" && six.text() == "x" && nine.text() == "x") {
            alert('x is win')
            dis()

        } else if (one.text() == "o" && two.text() == "o" && three.text() == "o") {
            alert("o is in")
            dis()
        } else if (four.text() == "o" && five.text() == "o" && six.text() == "o") {
            alert('o is win')
            dis()
        } else if (seven.text() == "o" && eight.text() == "o" && nine.text() == "o") {

            alert('o is win')
            dis()
        } else if (one.text() == "o" && five.text() == "o" && nine.text() == "o") {
            alert('o is win')
            dis()

        } else if (seven.text() == "o" && five.text() == "o" && three.text() == "o") {
            alert('x is win')
            dis()

        } else if (seven.text() == "o" && four.text() == "o" && one.text() == "o") {
            alert('o is win')
            dis()

        } else if (two.text() == "o" && five.text() == "o" && eight.text() == "o") {
            alert('o is win')
            dis()

        } else if (three.text() == "o" && six.text() == "o" && nine.text() == "o") {
            alert('o is win')
            dis()

        } else {

            draw()

        }
    }

    function dis() {
        one.attr("disabled", "disabled")
        two.attr("disabled", "disabled")
        three.attr("disabled", "disabled")
        four.attr("disabled", "disabled")
        five.attr("disabled", "disabled")
        six.attr("disabled", "disabled")
        seven.attr("disabled", "disabled")
        eight.attr("disabled", "disabled")
        nine.attr("disabled", "disabled")
        location.reload()
    }

})