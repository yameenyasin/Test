$(document).ready(function () {
    'use strict';
    var myTest = new Test();
    myTest.parseJSON();
    $('.mySubmit').on('click', myTest.validateForm);
});
