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
                    toast('success', 2500, 'Anket sihirli bir şekilde veritabanına eklendi :)')
                }
            });
    } else {
        toast('error', 2500, 'Başlık ve en az iki seçenek dolu olmalı!')
    }
});






document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.getElementsByName('items');
    var fill = document.getElementById('fill');
    var hasSelection = false;
    var prevRect, checkedButton;

    function updateOffsets() {
      if (checkedButton) {
        var rect = checkedButton.nextElementSibling.getBoundingClientRect();
        fill.style.transition = 'none';
        fill.style.top = (rect.top + 5  + document.body.scrollTop) + 'px';
        fill.style.left = (rect.left + 5 + document.body.scrollLeft) + 'px';
        prevRect = rect;
      }
    }

    window.addEventListener('resize', updateOffsets);
    window.addEventListener('scroll', updateOffsets);

    document.addEventListener('change', function (e) {
       if (e.target.name === 'items') {


        Array.from(radioButtons).forEach(function (radioButton) {
          if (radioButton.checked) {
            checkedButton = radioButton;
            radioButton.parentNode.className = 'selected';
            var rect = radioButton.nextElementSibling.getBoundingClientRect();

            if (!hasSelection) {
              fill.style.transition = 'none';
              fill.style.top = (rect.top + 5 + document.body.scrollTop) + 'px';
              fill.style.left = (rect.left + 5 + document.body.scrollLeft) + 'px';

              fill.style.transform = 'scale(.2)';

              setTimeout(function () {
                fill.style.transition = '';
                fill.style.opacity = 1;
                fill.style.transform = 'scale(1)';
              }, 25);
            } else {
              fill.style.transition = 'none';
              fill.style.top = (rect.top + 5 + document.body.scrollTop) + 'px';
              fill.style.left = (rect.left + 5 + document.body.scrollLeft) + 'px';
              fill.style.transform = 'scale(1) translateY(' + (0 - (rect.top - prevRect.top - 5)) + 'px)';

              setTimeout(function () {
                fill.style.transition = '';
                fill.style.opacity = 1;
                fill.style.transform = 'scale(1) translateY(0px) translateX(0px)';
              }, 25);

            }

            hasSelection = true;
            prevRect = rect;
          } else {
            radioButton.parentNode.className = '';
          }
        });

        return;
      }
    });
  });