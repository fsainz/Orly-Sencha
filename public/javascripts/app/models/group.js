Ext.regModel('Group', {
    fields: [
    {
        name: 'name'
    }
    ],
    proxy: {
        type: 'ajax',
        url: '/groups.json',
        reader: {
            type: 'json',
            record: 'group'
        },
        writer: {
            type: 'json',
            record: 'group'
        }
    }
});