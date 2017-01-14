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
        console.log('good');
      })
      .fail(() => {
        console.log('badd');
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
        console.log('good');
      })
      .fail(() => {
        console.log('badd');
      });
  });
});