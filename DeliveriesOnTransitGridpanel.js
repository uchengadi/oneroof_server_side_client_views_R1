/*
 * File: app/view/DeliveriesOnTransitGridpanel.js
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

Ext.define('cobuy.view.DeliveriesOnTransitGridpanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.deliveriesontransitgridpanel',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View'
    ],

    height: 250,
    width: 400,
    store: 'OnTransitOrders',

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
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var orders = Ext.getStore('Orders');
                        var thisorder = orders.findRecord('id', value);
                        return thisorder!== null ? thisorder.get('order_number'): value;
                    },
                    width: 300,
                    dataIndex: 'order_id',
                    text: 'Order Number'
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
                    dataIndex: 'member_id',
                    text: 'Courier Officer'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'status',
                    text: 'Delivery Status'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'ontransit_remark',
                    text: 'Member Remark'
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
                    dataIndex: 'order_assigned_by',
                    text: 'Order Assigned By'
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
                    dataIndex: 'order_assigned_to',
                    text: 'Order Assigned To'
                },
                {
                    xtype: 'datecolumn',
                    width: 300,
                    dataIndex: 'date_of_assignment',
                    text: 'Date of Assignment',
                    format: 'd/m/Y'
                }
            ]
        });

        me.callParent(arguments);
    }

});