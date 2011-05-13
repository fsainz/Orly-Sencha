ToolbarDemo.GroupListStore = new Ext.data.Store({
    model: 'Group',
      autoLoad : true,

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