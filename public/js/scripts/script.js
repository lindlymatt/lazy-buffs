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
});