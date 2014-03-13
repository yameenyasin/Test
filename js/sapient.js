function Test() {
    'use strict';
    this.logoPath = function () {
        return '../assets/sapient-logo.png';
    };
    this.parseJSON = function () {
        jQuery.ajax({
            url: "data.json",
            dataType: 'json'
        }).done(function (data) {
            $('#mobile-carousel').carousel();
            $('#desktop-carousel').carousel();
            var carouselInner = $('.carousel-inner'),
                i = 0;

            for (; i < 2; i += 1) {
                var carousel = carouselInner[i];
                $(data).each(function (index, key) {
                    $($(carousel).children()[index]).html('<section><img  src="' + key.image + '"/><div class="contentWrapper"><h2>' + key.heading + '</h2><div id="text">' + key.text + '</div></div></section>');
                });
            }


        });
        return this;
    };
    this.validateName = function (event, alert) {
        console.log(event, alert);
        /*var fullName = $(event.target).val().split(' ');
        if ((fullName[0] === "") || (fullName[0].length < 3)) {
            $('.alert-error').html('<h5>Please enter a valid name in characters</h5>').fadeIn(600);
        } else {
            console.log({ firsName: fullName[0], lastName: fullName[1]});
        }*/
    };
    this.validatePassword = function (event) {
        console.log(event.target)
    };
    this.hideAlerts = function () {
        $('.alert').fadeOut(600);
    };
}
