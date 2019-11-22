Ext.define('YoutubeExtTut.view.main.Extra', {
    extend: 'Ext.grid.Panel', 
    xtype: 'extra',
    title: 'grid video',
    store: {type: 'extra'},

    columns: [
        {text: 'Name', dataIndex:'name', flex: 1},
        {text: 'e-mail', dataIndex:'email', flex: 1},
        {text: 'Phone', dataIndex:'phone', flex: 0.5},
    ],
    height: 300,
    width: 400
});