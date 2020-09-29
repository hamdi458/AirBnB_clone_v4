$(document).ready(function () {
    let amn = {};
  
    $(document).on('change', "input[type='checkbox']", function () {
        
        if (this.checked) {
            amn[$(this).data('id')] = $(this).data('name');
          }
          else if($(this).is(':not(:checked)'))
          {
            delete amn[$(this).data('id')];
          }
        $('div.amenities > h4').text(Object.values(amn).join(', '));
        });
        $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
            if (textStatus === 'success' && data.status === 'OK') {
            
                $('#api_status').addClass('available'); }
             else {
                $('#api_status').removeClass('available');
            }
            
        });

        $.ajax({
            type: 'POST',
            url: "http://0.0.0.0:5001/api/v1/places_search/",
            data: {},
            contentType: 'application/json',
            success: function (data) {
                $.each(response1, function (i, item) {
                    var line = '<article><h2>' + item.name + 
                    '</h2><div class="price_by_night"><p>$' + item.price_by_night + 
                    '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + item.max_guest + 
                    '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + item.number_rooms + 
                    '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + item.number_bathrooms + 
                    '</p></div></div><div class="description"><p>' + item.description + 
                    '</p></div></article>';
                    $("#places").append(line);
    
                });
            }
        });
        $('.filters button').click(function () {
            $('.article').empty();
            $.ajax({
                type: 'POST',
                url: 'http://0.0.0.0:5001/api/v1/places_search',
                data: JSON.stringify({'amenities': (amn)}),
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    for (let item of data) {
                        var line = '<article><h2>' + item.name + 
                    '</h2><div class="price_by_night"><p>$' + item.price_by_night + 
                    '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + item.max_guest + 
                    '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + item.number_rooms + 
                    '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + item.number_bathrooms + 
                    '</p></div></div><div class="description"><p>' + item.description + 
                    '</p></div></article>';
                    $(".places").append(line);
                        
                    }
                }
            });
    
        }); 
  });