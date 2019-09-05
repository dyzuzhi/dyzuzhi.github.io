(function(w) {
    function init() {
        var host = document.domain;
        $('.header_title').html(host);
        configFav();
        $(".google-down").on('click', function() {
            openGoogleDown($(this).attr("data-id"))
        })
        $("#enter_btt").on('click', function() {
            window.open(window.btt_url, "_blank");
        });
        $("#enter_home").on('click', function() {
            window.open(window.home_url, "_blank");
        });
        $("#mail_url").html(window.mail_url);

        var btt=$("#divBtt");
        if(btt.length>0)
        {
            if(window.btt_url=="")
            {
                btt.hide();
            }
            else
            {
                btt.show();
            }
        }
    }


    window.addEventListener("DOMContentLoaded", init, !1);
})(window);