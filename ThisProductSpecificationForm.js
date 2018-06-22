/*
 * File: app/view/ThisProductSpecificationForm.js
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

Ext.define('cobuy.view.ThisProductSpecificationForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.thisproductspecificationform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Number'
    ],

    height: 620,
    itemId: 'specifications',
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
                    title: 'Product Specifications',
                    items: [
                        {
                            xtype: 'htmleditor',
                            height: 150,
                            margin: 5,
                            name: 'specifications'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    margin: 10,
                    layout: 'fit',
                    title: 'List of Items in product pack',
                    items: [
                        {
                            xtype: 'htmleditor',
                            height: 150,
                            margin: 5,
                            name: 'whats_in_a_park'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    hidden: true,
                    itemId: 'rentableContainer',
                    margin: 5,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            itemId: 'rentParameterContainer',
                            margin: 5,
                            title: 'Product Rent Additional Information',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'Cost of Rent per day(=N=)',
                                    labelWidth: 250,
                                    name: 'rent_cost_per_day',
                                    minValue: 0
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'Minimum Rent Quantity Per Cycle',
                                    labelWidth: 250,
                                    name: 'minimum_rent_quantity_per_cycle',
                                    minValue: 0
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'Maximum Rent Quantity Per Cycle',
                                    labelWidth: 250,
                                    name: 'maximum_rent_quantity_per_cycle',
                                    minValue: 0
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'Minimum Rent Duration(in days)',
                                    labelWidth: 250,
                                    name: 'minimum_rent_duration',
                                    minValue: 0
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'Maximum Rent Duration',
                                    labelWidth: 250,
                                    name: 'maximum_rent_duration',
                                    minValue: 0
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