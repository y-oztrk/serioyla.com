function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

var counter = 3
function addOption() {
    if (counter == null) {
        counter = 1
    }
    if (counter > 10) {
        alert("maksimum")
        return false
    }
    var newOptionDiv = $(document.createElement('div'))
        .attr("id", 'newOption' + counter)

    $(newOptionDiv).after().html('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="Anket seçeneği..." name="options-option-' + counter + '"><button class="btn btn-outline-secondary" type="button"><img src="images/delete-24px.svg" alt="trash"></button></div>')

    newOptionDiv.appendTo("#options-col")
    counter++
}

