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