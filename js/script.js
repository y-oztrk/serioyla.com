var counter = 3
function addOption() {
    if (counter == null) {
        counter = 1
    }
    if (counter > 5) {
        alert("Daha Fazla Anket Seçeneği Oluşturmak İçin Kaydolmanız Gereklidir :)")
        return false
    }
    var newOptionDiv = $(document.createElement('div'))
        .attr("id", 'div-option-' + counter)

    $(newOptionDiv).after().html('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="Anket seçeneği..." name="options-option-' + counter + '" id="options-option-' + counter + '"><button class="btn btn-outline-secondary" type="button" onclick="delOption(' + counter + ')"><img src="images/trash.svg" alt="trash"></button></div>')

    newOptionDiv.appendTo("#options-col")
    counter++
}

function delOption(id) {
    if (counter == 3) {
        alert("Anket Oluşturmak için Minimum 2 Anket Seçeneği Gereklidir");
        return false;
    }
    counter--;
    $("#div-option-" + id + "").remove();
}

$("#create-poll").click(function () {
    var form = document.querySelector("form");
    var title = $('#poll-title').val()
    var datas = [{
        'title': title
    }]
    for (let i = 1; i <= 10; i++) {
        var option = $('#options-option-' + i)
        if (option.val() != null) {
            console.log(option.val())
            datas.push({
                'option': option.val()
            })
        }
    }

    toJSON = JSON.stringify(datas)

    fetch('https://serioyla.com/api/create', {
        method: 'post',
        body: toJSON
    }).then(res => res.json())
        .then(function (res) {
            if (res.status == 200) {
                alert('anket sihirli bir şekilde veritabanına eklendi')
            }
        });
});