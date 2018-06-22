/*
 * File: app/view/ProductDescriptionForm.js
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

Ext.define('cobuy.view.ProductDescriptionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.productdescriptionform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Number',
        'Ext.form.field.Checkbox',
        'Ext.form.Label'
    ],

    height: 620,
    width: 1000,
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
                    margin: 10,
                    layout: 'fit',
                    title: 'Product Descriptions',
                    items: [
                        {
                            xtype: 'htmleditor',
                            height: 150,
                            margin: 5,
                            name: 'description'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    margin: 10,
                    title: 'Product Conditions & Other Parameters',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1.1,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'htmleditor',
                                    height: 150,
                                    margin: 5,
                                    name: 'condition'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1.3,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Product Additional Parameters',
                                    items: [
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
                                            fieldLabel: 'Origin',
                                            name: 'origin',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            fieldLabel: 'Weight(in kg)',
                                            name: 'weight',
                                            allowBlank: false,
                                            minValue: 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Warranty Information',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            itemId: 'hasWarrantyCheckbox',
                                            name: 'has_warranty',
                                            boxLabel: 'This Product has Warranty',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            anchor: '100%',
                                            disabled: true,
                                            itemId: 'warrantyNumberfield',
                                            fieldLabel: 'Months of Warranty',
                                            labelWidth: 150,
                                            name: 'months_of_warranty',
                                            minValue: 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Product Certifications',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            name: 'has_son_certification',
                                            boxLabel: 'This Product has SON Certification',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            name: 'has_nafdac_certification',
                                            boxLabel: 'This Product has NAFDAC Certification',
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'textfield',
                                            anchor: '100%',
                                            fieldLabel: 'Other Certifications',
                                            labelWidth: 150,
                                            name: 'other_certifications'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    title: 'Keywords & Keyphrases',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'First Keyword',
                            labelWidth: 120,
                            name: 'keyword1',
                            enforceMaxLength: true,
                            maxLength: 100
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Second Keyword',
                            labelWidth: 120,
                            name: 'keyword2',
                            enforceMaxLength: true,
                            maxLength: 100
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Third Keyword',
                            labelWidth: 120,
                            name: 'keyword3',
                            enforceMaxLength: true,
                            maxLength: 100
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Fourth Keyword',
                            labelWidth: 120,
                            name: 'keyword4',
                            enforceMaxLength: true,
                            maxLength: 100
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Fifth Keyword',
                            labelWidth: 120,
                            name: 'keyword5',
                            enforceMaxLength: true,
                            maxLength: 100
                        },
                        {
                            xtype: 'label',
                            html: '<strong><em>These Keywords and Keyphrases are the words or phrases that could be used to locate this product on the store</strong>'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});