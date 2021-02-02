var counter = 3
function addOption() {
    if (counter == null) {
        counter = 1
    }
    if (counter > 5) {
        alert("maksimum")
        return false
    }
    var newOptionDiv = $(document.createElement('div'))
        .attr("id", 'div-option-' + counter)

    $(newOptionDiv).after().html('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="Anket seçeneği..." name="options-option-' + counter + '"><button class="btn btn-outline-secondary" type="button" onclick="delOption(' + counter + ')"><img src="images/trash.svg" alt="trash"></button></div>')

    newOptionDiv.appendTo("#options-col")
    counter++
}

function delOption(id) {
    if (counter == 3) {
        alert("minimum 2 seçenek olmalı");
        return false;
    }
    counter--;
    $("#div-option-" + id + "").remove();
}