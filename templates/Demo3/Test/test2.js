/**
 * Created by jaehoonlee88 on 15. 1. 29..
 */


define([

], function() {

        'use strict';

        function test2()
        {
            this.type = "Hello World!!";
            this.cal = [10, 20];
            this.value = 3;
        }

        test2.prototype = {
            bob: function()
            {
                var cal_ = this.cal;
                var value_ = this.value;
                //console.log("value:" + this.cal);
                cal_[0] = 2;
                value_ = 2;

                console.log(this.value);


                //console.log(this);
                //console.log("bob23");
            },
            jessy: function()
            {
                //console.log("jessy222");
            }
        };

        return test2;
    }
);

