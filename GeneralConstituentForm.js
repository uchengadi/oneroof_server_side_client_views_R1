/*
 * File: app/view/GeneralConstituentForm.js
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

Ext.define('cobuy.view.GeneralConstituentForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.generalconstituentform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Hidden',
        'Ext.form.field.Number',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox'
    ],

    height: 620,
    width: 1000,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Product Details',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'General Information',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Name',
                                    name: 'name',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    fieldLabel: 'Parent Product',
                                    name: 'product',
                                    allowBlank: false,
                                    editable: false,
                                    displayField: 'name',
                                    store: 'Products',
                                    valueField: 'id'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Brand',
                                    name: 'brand',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Maker',
                                    name: 'maker',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Origin/Made In',
                                    name: 'origin',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'container',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'htmleditor',
                                            disabled: true,
                                            height: 150,
                                            margin: 3,
                                            fieldLabel: 'Product Conditions',
                                            name: 'condition'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'htmleditor',
                                            disabled: true,
                                            height: 150,
                                            margin: 3,
                                            fieldLabel: 'List items in this  product pack',
                                            name: 'whats_in_a_park'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'hiddenfield',
                            fieldLabel: 'Label',
                            name: 'id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            fieldLabel: 'Label',
                            name: 'category_id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            fieldLabel: 'Label',
                            name: 'service_id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            fieldLabel: 'Label',
                            name: 'product_type_id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            fieldLabel: 'Label',
                            name: 'product_id',
                            value: 0
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: '0 10 0 10',
                            title: 'Pricing & Additional Product Information',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1.5,
                                    title: 'Pricing Information',
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Maximum Quantity of Product on Sale',
                                            labelWidth: 280,
                                            name: 'quantity',
                                            minValue: -1
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Quantity of this Product in the Pack',
                                            labelWidth: 280,
                                            name: 'quantity_of_product_in_the_pack',
                                            minValue: -1
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Minimum Number of product item(s) to buy',
                                            labelWidth: 280,
                                            name: 'minimum_number_of_product_to_buy',
                                            allowDecimals: false,
                                            minValue: 1
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'What constitutes per item of this product',
                                            labelWidth: 280,
                                            name: 'whats_product_per_item',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Prevailing Retail Selling Price per Item(=N=)',
                                            labelWidth: 280,
                                            name: 'prevailing_retail_selling_price',
                                            allowBlank: false,
                                            minValue: 0
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Cobuy Member Price per item(=N=)',
                                            labelWidth: 280,
                                            name: 'per_portion_price',
                                            allowBlank: false,
                                            minValue: 0
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Headline Member Price Validity Period',
                                            labelWidth: 280,
                                            name: 'price_validity_period'
                                        },
                                        {
                                            xtype: 'datefield',
                                            anchor: '100%',
                                            fieldLabel: 'Start Member Special Price On',
                                            labelWidth: 280,
                                            name: 'start_price_validity_period',
                                            format: 'd/m/Y',
                                            submitFormat: 'm/d/Y'
                                        },
                                        {
                                            xtype: 'datefield',
                                            anchor: '100%',
                                            fieldLabel: 'End Member Special Price On',
                                            labelWidth: 280,
                                            name: 'end_price_validity_period',
                                            format: 'd/m/Y',
                                            submitFormat: 'm/d/Y'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    margin: '10 0 0 0',
                                    title: 'Display this product on the store?',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            name: 'displayable_on_store',
                                            boxLabel: 'Display this product on the store',
                                            inputValue: '1'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});