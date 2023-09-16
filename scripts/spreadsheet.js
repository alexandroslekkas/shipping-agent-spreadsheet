$(document).ready(function() {

  // Read the spreadsheet.json file
  $.getJSON('./public/data/spreadsheet.json', function(data) {

    // Iterate over the products in the spreadsheet and add a row for each product
    for (var i = 0; i < data.length; i++) {

      // Get the product information
      var image = data[i].image;
      var name = data[i].name;
      var priceYuan = data[i].priceYuan;
      var priceUSD = data[i].priceUSD;
      var url = data[i].url;

      // Create a row for the product
      var row = $('<tr>');
      row.append('<td><img src="' + image + '" alt="' + name + '" width="100px"></td>');
      row.append('<td>' + name + '</td>');
      row.append('<td>' + priceYuan + '</td>');
      row.append('<td>' + priceUSD + '</td>');
      row.append('<td><a href="' + url + '">' + url + '</a></td>');
      $('#product_table').append(row);
    }

  });

});
