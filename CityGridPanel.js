/*
 * File: app/view/CityGridPanel.js
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

Ext.define('cobuy.view.CityGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.citygridpanel',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View'
    ],

    height: 250,
    width: 400,
    store: 'Cities',

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
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var State = Ext.getStore('States');
                        var thiscity = State.findRecord('id', value);
                        return thiscity!== null ? thiscity.get('name'): value;
                    },
                    width: 300,
                    dataIndex: 'state_id',
                    text: 'State'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'zip_code',
                    text: 'Zip Code'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'city_number',
                    text: 'City Number'
                },
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'description',
                    text: 'Description'
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
                    dataIndex: 'create_user_id',
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
                    dataIndex: 'update_user_id',
                    text: 'Updated By'
                }
            ]
        });

        me.callParent(arguments);
    }

});