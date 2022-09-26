$(document).ready(function() {
    $('#city').change(function() {
        var first = $('#city').val()
        $('#city2').removeAttr('disabled')
        console.log(first)
    })

    $('#city2').change(function() {
        var second = $('#city2').val()
        var first = $('#city').val()

        if (first != second) {
            $('#city3').removeAttr('disabled')
            $('#city').attr("disabled", "disabled")
            console.log(second)
        } else {
            $('#b').show().html("pls enter different city")
            $('#city2').val("")

            e.preventDefault()
        }

    })

    $('#city3').change(function() {
        var second = $('#city2').val()
        var first = $('#city').val()

        var third = $('#city3').val()
        if (first != second && first != third && second != third) {

            $('#city').attr("disabled", "disabled")
            $('#city2').attr("disabled", "disabled")
            $('#city3').attr("disabled", "disabled")
            console.log(third)
        } else {
            $('#b').show().html("pls enter different city")
            $('#city3').val("")
            e.preventDefault()


        }
    })

    $('#btn').click(function() {


        checkC()
    })

    function checkC() {

        let first = $('#city').val()
        let second = $('#city2').val()
        let third = $('#city3').val()

        if (first == "") {
            $('#b').show().html("pls enter first city")
            e.preventDefault()

        } else if (first != second && first != third && second != third && second != "") {
            alert("Your form is submiited.....")
        } else if (first != "" && second == "" && third == "") {
            alert("Your form is submiited ")
        } else if (first == "" && second == "" && third == "") {
            $('#b').show().html("pls enter city ->")
            e.preventDefault()
        } else if (first == second) {
            $('#b').show().html("pls not enter same city")
            alert('this')


            e.preventDefault()


        }
        e.preventDefault()


    }


})