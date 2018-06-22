/*
 * File: app/view/TasksGrid.js
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

Ext.define('cobuy.view.TasksGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tasksgrid',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.View'
    ],

    height: 250,
    width: 400,
    store: 'Tasks',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 35,
                    dataIndex: 'string',
                    text: 'S/n'
                },
                {
                    xtype: 'gridcolumn',
                    width: 200,
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'type',
                    text: 'Type'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 250,
                    dataIndex: 'bizrule',
                    text: 'Business Rule'
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'description',
                    text: 'Description'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    width: 200,
                    dataIndex: 'data',
                    text: 'Data'
                }
            ]
        });

        me.callParent(arguments);
    }

});