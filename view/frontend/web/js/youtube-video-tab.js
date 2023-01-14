define(
    ["jquery","tabs"], function ($,tabs) {

        "use strict";

        return function () {
            $('.product.data.items').tabs('activate', 3);
        };

    });
