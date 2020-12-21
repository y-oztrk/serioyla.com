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