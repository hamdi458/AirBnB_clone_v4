$(document).ready(function () {
    let amn = {};

    $(document).on('change', "input[type='checkbox']", function () {
        
        if (this.checked) {
            checkedAmenities[$(this).data('id')] = $(this).data('name');
          }
          else if($(this).is(':not(:checked)'))
          {
            delete amn[$(this).data('id')];
          }
        $('div.amenities > h4').text(Object.values(amn).join(', '));
        });
});