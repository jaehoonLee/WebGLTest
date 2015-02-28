/**
 * Created by jaehoonlee88 on 15. 1. 29..
 */

require.config({
    baseUrl: '/static/Demo3/Test'
});


require([
    'test2'
], function(test2){
    var t2 = new test2();
    console.log(t2.type);
   // console.log("value:" + t2.cal);
    t2.bob();

    //console.log(Object.keys(test2.prototype));

    function JH()
    {
        this.name = "JH";
    }

    var jh = new JH();

    //var proto = Object.keys(test2.prototype)[0];
    //test2.prototype[proto].apply(jh, []);
    // console.log(a);

});