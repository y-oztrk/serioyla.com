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


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Anket Linki Kopyalandı: " + copyText.value);
  }
  $(function() {
    var scntDiv = $('#p_scents');
    var i = $('#p_scents p').size() + 1;
    
    $('#addScnt').live('click', function() {
            $('<p><label for="p_scnts"><input type="text" id="p_scnt" size="20" name="p_scnt_' + i +'" value="" placeholder="Input Value" /></label> <a href="#" id="remScnt">Remove</a></p>').appendTo(scntDiv);
            i++;
            return false;
    });
    
    $('#remScnt').live('click', function() { 
            if( i > 2 ) {
                    $(this).parents('p').remove();
                    i--;
            }
            return false;
    });
});
//share button açılır pencere
$(document).ready(function(){
    $('.share-icon').on ('click', () => {
        $('.hide').toggle();
    })
});


//charts
var myChart = echarts.init(document.getElementById('main'));

// Specify configurations and data graphs 
var option = {


title: {
text: 'Customized Pie',
left: 'center',
top: 20,
textStyle: {
    color: '#ccc'
}
},

tooltip : {
trigger: 'item',
formatter: "{a} <br/>{b} : {c} ({d}%)"
},

visualMap: {
show: false,
min: 80,
max: 600,
inRange: {
    colorLightness: [0, 1]
}
},
series : [
{
    name:'Access Sources',
    type:'pie',
    radius : '55%',
    center: ['50%', '50%'],
    data:[
        {value:335, name:'python'},
        {value:310, name:'C++'},
        {value:274, name:'C#'},
        {value:235, name:'Video Ads'},
        {value:400, name:'Javascript'}
    ].sort(function (a, b) { return a.value - b.value}),
    roseType: 'angle',
    label: {
        normal: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        }
    },
    labelLine: {
        normal: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
        }
    },
    itemStyle: {
        normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
}
]
};

// Use just the specified configurations and data charts. 
myChart.setOption(option);