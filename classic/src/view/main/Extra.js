Ext.define('YoutubeExtTut.view.main.Extra', {
    extend: 'Ext.grid.Panel', 
    xtype: 'extra',
    title: 'grid video',
    store: [
        { name: 'Mariusz Budzisz', email:'mbudzisz@mail.com', phone:'123456789'},
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444"},
    ],
    // somethin is wrong here, app recognizes the number of 5 entries but
    // the data fields are empty in the grid.
    columns: [
        {text: 'Name', dataIndex:'name', flex: 1},
        {text: 'e-mail', dataIndex:'email', flex: 1},
        {text: 'Phone', dataIndex:'phone', flex: 0.5},
    ],
    height: 300,
    width: 400
});