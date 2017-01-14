'use strict';

$(document).ready(() => {
  $('#parterButton').click(() => {
    $('#partnerInfo').hide();
    $('#partnerForm').show();
  });

  $('#driverButton').click(() => {
    $('#driverInfo').hide();
    $('#driverForm').show();
  });
});