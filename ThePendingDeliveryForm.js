/*
 * File: app/view/ThePendingDeliveryForm.js
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

Ext.define('cobuy.view.ThePendingDeliveryForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.thependingdeliveryform1',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill'
    ],

    height: 623,
    width: 700,
    bodyPadding: 10,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'Order Delivery Details',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Order Number',
                            labelWidth: 180,
                            name: 'order_number'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Order Assigned By',
                            labelWidth: 180,
                            name: 'order_assigned_by'
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Date of Assignment',
                            labelWidth: 180,
                            name: 'date_of_assignment',
                            readOnly: true,
                            editable: false,
                            format: 'd/m/Y'
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'order_id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'member_id',
                            value: 0
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1.8,
                    title: 'Courier Officer Delivery Report',
                    items: [
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'Status',
                            labelWidth: 180,
                            name: 'status'
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            fieldLabel: 'Commenced Delivery on',
                            labelWidth: 180,
                            name: 'ontransit_commencement_date',
                            allowBlank: false,
                            editable: false
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            disabled: true,
                            fieldLabel: 'Delivered By',
                            labelWidth: 180,
                            name: 'order_delivered_by',
                            displayField: 'lastname',
                            store: 'StaffMembers',
                            valueField: 'id'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: 'On Transit Remark',
                            labelWidth: 180,
                            name: 'ontransit_remark'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 2,
                    disabled: true,
                    title: 'Member/Customer Delivery Assessment',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Status',
                            labelWidth: 180,
                            name: 'status'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Delivery Confirmed By',
                            labelWidth: 180,
                            name: 'delivery_confirmed_by'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Date of Confirmation',
                            labelWidth: 180,
                            name: 'date_of_delivery_confirmation'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Date of Delivery',
                            labelWidth: 180,
                            name: 'date_of_delivery'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100%',
                            fieldLabel: 'Member Remark',
                            labelWidth: 180,
                            name: 'member_remark'
                        }
                    ]
                }
            ],
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
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'commencedeliveryBtn',
                            iconCls: 'ordering',
                            text: 'Commence Delivery'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});