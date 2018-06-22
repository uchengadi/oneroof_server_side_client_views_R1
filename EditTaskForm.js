/*
 * File: app/view/EditTaskForm.js
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

Ext.define('cobuy.view.EditTaskForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.edittaskform',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.form.FieldSet',
        'Ext.form.field.TextArea'
    ],

    height: 300,
    width: 490,
    bodyPadding: 10,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'cancelBtn',
                            iconCls: 'cancel',
                            text: 'Cancel'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'editBtn',
                            iconCls: 'edit',
                            text: 'Edit'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'Task Info',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Name',
                            name: 'name',
                            readOnly: true
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: 'Description',
                            name: 'description'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            disabled: true,
                            fieldLabel: 'Business Rule',
                            name: 'bizrule'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            disabled: true,
                            fieldLabel: 'Data',
                            name: 'data'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});