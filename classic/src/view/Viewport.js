Ext.define('YoutubeExtTut.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id: 'viewport',
    items: [
        {
            region: 'north',
            html: '<h1>Header part from Viewport</h1>'
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            activeTab: 0,
            itemId: 'viewport-target',
        },
        {
            region: 'south',
            html: '<h1>Footer part from Viewport</h1>'
        }
    ]
})