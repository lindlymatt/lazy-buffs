'use strict';

$(document).ready(() => {
  $('#partnerButton').click(() => {
    $('#partnerInfo').hide();
    $('#partnerForm').show();
  });

  $('#driverButton').click(() => {
    $('#driverInfo').hide();
    $('#driverForm').show();
  });

  $('#driverForm form').submit((event) => {   
    event.preventDefault();
    const form = $('#driverForm form');
    const name = form.find('input[name="name"]').val();
    const address = form.find('input[name="address"]').val(); 
    const number = form.find('input[name="number"]').val(); 
    const email = form.find('input[name="email"]').val();
    
    $.post('/applications/drivers', {
      name,
      address,
      number,
      email
    })
      .done(() => {
        form.find('input').val('');
        $('#driverSubmitButton')
          .css('background-color', '#5cb85c')
          .css('border', '1px solid #5cb85c')
          .html('<i class="fa fa-check" aria-hidden="true"></i> Submitted');
        $('#driverFormMsg')
          .html('We will contact you within 24 hours.<br><br>')
          .show();
      })
      .fail(() => {
        $('#driverSubmitButton')
          .css('background-color', '#d9534f')
          .css('border', '1px solid #d9534f')
          .html('<i class="fa fa-times" aria-hidden="true"></i> Try Again');
        $('#driverFormMsg').show();
      });
  });

  $('#partnerForm form').submit((event) => {   
    event.preventDefault();
    const form = $('#partnerForm form');
    const name = form.find('input[name="name"]').val();
    const company = form.find('input[name="company"]').val();
    const address = form.find('input[name="address"]').val(); 
    const number = form.find('input[name="number"]').val(); 
    const email = form.find('input[name="email"]').val();
    
    $.post('/applications/partners', {
      name,
      company,
      address,
      number,
      email
    })
      .done(() => {
        form.find('input').val('');
        $('#partnerSubmitButton')
          .css('background-color', '#5cb85c')
          .css('border', '1px solid #5cb85c')
          .html('<i class="fa fa-check" aria-hidden="true"></i> Submitted');
        $('#partnerFormMsg')
            .html('We will contact you within 24 hours.<br><br>')
            .show();
      })
      .fail(() => {
        $('#partnerSubmitButton')
          .css('background-color', '#d9534f')
          .css('border', '1px solid #d9534f')
          .html('<i class="fa fa-times" aria-hidden="true"></i> Try Again');
        $('#partnerFormMsg').show();
      });
  });
});