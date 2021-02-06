function toast(icon = 'warning', ms = 2500, message, position = 'top-end') {
    const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: ms,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: icon,
        title: message
    })
}

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

    newOptionDiv.appendTo("#options-col").hide().fadeIn()
    counter++
}

function delOption(id) {
    if (counter == 3) {
        toast('warning', 2500, 'Anket oluşturmak için minimum 2 seçenek gerekli!', 'top-end')
        return false
    }
    counter--
    // $("#div-option-" + id + "").fadeOut()
    // $("#div-option-" + id + "").remove()
    $("#div-option-" + id + "").fadeOut(200, function () {
        $("#div-option-" + id + "").remove()
    });
}

$("#create-poll").click(function () {
    var form = document.querySelector("form")
    var title = $('#poll-title').val()
    var datas = [{
        'title': title
    }]
    for (let i = 1; i <= 10; i++) {
        var option = $('#options-option-' + i)
        if (option.val() != null) {
            datas.push({
                'option': option.val()
            })
        }
    }

    toJSON = JSON.stringify(datas)
    if (datas[0].title != '' && datas[1].option != '' && datas[2].option != '') {
        fetch('https://serioyla.com/api/create', {
            method: 'post',
            body: toJSON
        }).then(res => res.json())
            .then(function (res) {
                if (res.status == 200) {
                    window.location.href = 'https://serioyla.com/' + res.pollID
                }
            });
    } else {
        toast('error', 2500, 'Başlık ve en az iki seçenek dolu olmalı!')
    }
});






