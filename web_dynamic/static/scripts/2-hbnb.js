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
  });
  $(document).ready(function(){
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
        if (textStatus === 'success' && data.status === 'OK') {
        
            $('#api_status').addClass('available'); }
         else {
            $('#api_status').removeClass('available');
        }
        
    });
    });
