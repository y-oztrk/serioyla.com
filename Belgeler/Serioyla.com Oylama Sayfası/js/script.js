//Pasta Dilimi Grafik JS Kodları
google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['C++',     11],
        ['C#',      2],
        ['Java',  2],
        ['Kotlin', 2],
        ['python',    7]
      ]);

      var options = {
        title: 'Programlama Dilleri',
        pieHole: 0.4,
        backgroundColor : 'transparent'
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }
    //Pasta Dilimi Grafik JS Kodları Bitişi
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
