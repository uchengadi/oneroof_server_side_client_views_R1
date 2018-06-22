/*
 * File: app/view/FailedSubscriptionPaymentGridpanel.js
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

Ext.define('cobuy.view.FailedSubscriptionPaymentGridpanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.failedsubscriptionpaymentgridpanel',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View'
    ],

    height: 250,
    width: 400,
    store: 'FailedSubscriptionPayment',

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
                        var Number = Ext.getStore('AllMembers');
                        var thisnumber = Number.findRecord('id', value);
                        return thisnumber!== null ? thisnumber.get('membership_number'): value;
                    },
                    width: 300,
                    dataIndex: 'member_id',
                    text: 'Membership Number'
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
                    text: 'Member'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'status',
                    text: 'Payment Status'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'invoice_number',
                    text: 'Invoice Number'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'payment_mode',
                    text: 'Payment Mode'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'remark',
                    text: 'Remark'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'amount',
                    text: 'Amount'
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
                    dataIndex: 'paid_by_id',
                    text: 'Paid By'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var type = Ext.getStore('MembershipTypes');
                        var membertype = type.findRecord('id', value);
                        return membertype!== null ? membertype.get('name'): value;
                    },
                    width: 300,
                    dataIndex: 'membership_type_id',
                    text: 'Membership Type'
                },
                {
                    xtype: 'datecolumn',
                    width: 300,
                    dataIndex: 'payment_date',
                    text: 'Payment Date',
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
                    dataIndex: 'payment_confirmed_by',
                    text: 'Payment Confirmed By'
                },
                {
                    xtype: 'datecolumn',
                    width: 300,
                    dataIndex: 'date_of_confirmation',
                    text: 'Date of Confirmation',
                    format: 'd/m/Y'
                }
            ]
        });

        me.callParent(arguments);
    }

});