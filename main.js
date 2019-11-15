// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Creating content (documents, files, etc)',     40],
  ['Storing content you found',      40],
  ['Sharing content with others',  20]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'What do you use your preferred cloud storage app for the most?', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('survey1'));
  chart.draw(data, options);
}
