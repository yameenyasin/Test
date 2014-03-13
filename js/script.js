$(document).ready(function () {
    'use strict';
    var myTest = new Test();
    myTest.parseJSON();
    $('#fullName').on('focusout', function (event) {
        myTest.hideAlerts(event, 'hi');
    });
});
