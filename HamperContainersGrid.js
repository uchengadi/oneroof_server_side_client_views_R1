/*
 * File: app/view/HamperContainersGrid.js
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

Ext.define('cobuy.view.HamperContainersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.hampercontainersgrid',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.View'
    ],

    height: 250,
    width: 400,
    store: 'AllHamperContainers',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    dataIndex: 'string',
                    text: 'S/n'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'name',
                    text: 'Hamper Container Name'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'description',
                    text: 'Description'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'code',
                    text: 'Code'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'amount',
                    text: 'Amount'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'service_charge_in_percentages',
                    text: 'Service Charge (in %)'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'minimum_service_charge',
                    text: 'Minimum Service Charge'
                }
            ]
        });

        me.callParent(arguments);
    }

});