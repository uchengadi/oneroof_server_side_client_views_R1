/*
 * File: app/view/ListOfCountriesOnThePlatform.js
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

Ext.define('cobuy.view.ListOfCountriesOnThePlatform', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listofcountriesontheplatform',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.View'
    ],

    height: 250,
    width: 600,
    store: 'Countries',

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
                    hidden: true,
                    dataIndex: 'id',
                    text: 'Country Id'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'name',
                    text: 'Country Name'
                },
                {
                    xtype: 'gridcolumn',
                    width: 350,
                    dataIndex: 'description',
                    text: 'Country Description'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'continent',
                    text: 'Continent'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 200,
                    dataIndex: 'flag',
                    text: 'Flag Image'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 150,
                    dataIndex: 'create_time',
                    text: 'Date Created'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 150,
                    dataIndex: 'update_time',
                    text: 'Date Updated'
                }
            ]
        });

        me.callParent(arguments);
    }

});