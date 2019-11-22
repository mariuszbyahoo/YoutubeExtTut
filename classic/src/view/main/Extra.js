Ext.define('YoutubeExtTut.view.main.Extra', {
    extend: 'Ext.container.Container',
    xtype: 'Extra',
    controller: 'extra',
    items: [
        {
            title: 'Extra View',
            html: 'Dom will be here'
        },
        {
            xtype: 'button',
            name: 'click',
            text: 'Call Controller',
            itemId: 'callController'
        }
    ]
});