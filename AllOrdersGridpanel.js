/*
 * File: app/view/AllOrdersGridpanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('cobuy.view.AllOrdersGridpanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allordersgridpanel',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View'
    ],

    height: 250,
    width: 400,
    store: 'Orders',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 50,
                    dataIndex: 'string',
                    text: 'S/n'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'order_number',
                    text: 'Order number'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'status',
                    text: 'Status'
                },
                {
                    xtype: 'datecolumn',
                    width: 300,
                    dataIndex: 'order_initiation_date',
                    text: 'Date Initiated',
                    format: 'd/m/Y'
                },
                {
                    xtype: 'datecolumn',
                    width: 300,
                    dataIndex: 'last_updated_date',
                    text: 'Date Last Updated',
                    format: 'd/m/Y'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var userStore = Ext.getStore('AllMembers');
                        var user = userStore.findRecord('id', value);
                        if(user.get('middlename') === null || user.get('middlename') === undefined){
                            var name = user.get('firstname') + " " + user.get('lastname');
                        }else{
                            var name = user.get('firstname') + " " + user.get('middlename') + " " + user.get('lastname');
                        }

                        return user!== null ? name: value;
                    },
                    width: 300,
                    dataIndex: 'order_initiated_by',
                    text: 'Order Initiated By'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var userStore = Ext.getStore('AllMembers');
                        var user = userStore.findRecord('id', value);
                        if(user.get('middlename') === null || user.get('middlename') === undefined){
                            var name = user.get('firstname') + " " + user.get('lastname');
                        }else{
                            var name = user.get('firstname') + " " + user.get('middlename') + " " + user.get('lastname');
                        }

                        return user!== null ? name: value;
                    },
                    width: 300,
                    dataIndex: 'order_updated_by',
                    text: 'Updated By'
                }
            ]
        });

        me.callParent(arguments);
    }

});