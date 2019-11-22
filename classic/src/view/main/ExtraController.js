Ext.define('YoutubeExtTut.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',
    init: function()
    {
            this.control({
                '#callController':{
                    click: 'callOnClick'
                }
            })
    },
    callOnClick: function (){
        alert('Hello from Controller!');
    }
})