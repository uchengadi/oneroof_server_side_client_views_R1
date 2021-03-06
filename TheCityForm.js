/*
 * File: app/view/TheCityForm.js
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

Ext.define('cobuy.view.TheCityForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.thecityform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Number',
        'Ext.form.field.Hidden',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill'
    ],

    height: 340,
    width: 900,
    bodyPadding: 10,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'City Details',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Name',
                            name: 'name'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Zip Code',
                            name: 'zip_code'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'City Number',
                            name: 'city_number'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            fieldLabel: 'State',
                            name: 'state',
                            editable: false,
                            displayField: 'name',
                            store: 'States',
                            valueField: 'id'
                        },
                        {
                            xtype: 'htmleditor',
                            anchor: '100%',
                            height: 300,
                            margin: 5,
                            fieldLabel: 'Description',
                            name: 'description'
                        },
                        {
                            xtype: 'fieldset',
                            margin: 5,
                            title: 'Payment on delivery',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    anchor: '100%',
                                    margin: 5,
                                    name: 'accept_payment_on_delivery',
                                    boxLabel: 'Customers in this city should have the option to pay on delivery',
                                    inputValue: '1'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    margin: '0 0 0 10',
                    title: 'Delivery to City Cost',
                    items: [
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Top Priority Delivery (in %)',
                            labelWidth: 300,
                            name: 'top_priority_delivery_in_percentage',
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Priority Delivery(in %)',
                            labelWidth: 300,
                            name: 'priority_delivery_in_percentage',
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Standard Delivery (in %)',
                            labelWidth: 300,
                            name: 'standard_delivery_in_percentage',
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Minimum Amount for Top Priority Delivery',
                            labelWidth: 300,
                            name: 'minimum_top_priority_delivery_amount',
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Minimum Amount for Priority Delivery',
                            labelWidth: 300,
                            name: 'minimum_priority_delivery_amount',
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Minimum Amount for Standard Delivery',
                            labelWidth: 300,
                            name: 'minimum_standard_delivery_amount',
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Top Priority Estimated Number of Days',
                            labelWidth: 300,
                            name: 'estimated_number_of_days_for_top_priority_delivery',
                            editable: false,
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Priority Estimated Number of Days',
                            labelWidth: 300,
                            name: 'estimated_number_of_days_for_priority_delivery',
                            editable: false,
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            fieldLabel: 'Standard Delivery Estimated Number of Days',
                            labelWidth: 300,
                            name: 'estimated_number_of_days_for_standard_delivery',
                            editable: false,
                            minValue: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            anchor: '100%',
                            fieldLabel: 'Label',
                            name: 'state_id'
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
                            itemId: 'addBtn',
                            iconCls: 'add',
                            text: 'Save'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});