/*
 * File: app/view/CurrencyExchangeRateGridpanel.js
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

Ext.define('cobuy.view.CurrencyExchangeRateGridpanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.currencyexchangerategridpanel',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.View'
    ],

    height: 250,
    width: 400,
    store: 'CurrencyExchanges',

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
                        var currency = Ext.getStore('Currencies');
                        var thiscurrency = currency.findRecord('id', value);
                        return thiscurrency!== null ? thiscurrency.get('name'): value;
                    },
                    width: 300,
                    dataIndex: 'base_currency_id',
                    text: 'Base Currency'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var currency = Ext.getStore('Currencies');
                        var thiscurrency = currency.findRecord('id', value);
                        return thiscurrency!== null ? thiscurrency.get('name'): value;
                    },
                    width: 300,
                    dataIndex: 'currency_id',
                    text: 'Currency'
                },
                {
                    xtype: 'numbercolumn',
                    width: 300,
                    dataIndex: 'exchange_rate',
                    text: 'Exchange Rate'
                },
                {
                    xtype: 'datecolumn',
                    width: 300,
                    dataIndex: 'create_time',
                    text: 'Date Created',
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
                    dataIndex: 'created_by',
                    text: 'Created By'
                },
                {
                    xtype: 'datecolumn',
                    width: 300,
                    dataIndex: 'update_time',
                    text: 'Date Updated',
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
                    dataIndex: 'updated_by',
                    text: 'Updated By'
                }
            ]
        });

        me.callParent(arguments);
    }

});