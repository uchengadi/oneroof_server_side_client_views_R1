/*
 * File: app/view/AllProductDetailForm.js
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

Ext.define('cobuy.view.AllProductDetailForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.allproductdetailform',

    requires: [
        'cobuy.view.TheProductForm',
        'cobuy.view.ThisProductAllImagesForm',
        'cobuy.view.ProductDescriptionForm',
        'cobuy.view.ProductFeaturesForm',
        'cobuy.view.ThisProductSpecificationForm',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Fill',
        'Ext.form.Panel'
    ],

    height: 620,
    itemId: 'allproductdetailform',
    width: 1000,
    layout: 'card',
    bodyPadding: 10,

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
                            handler: function(button, e) {
                                var navigate = function(panel, direction){
                                    var layout = panel.getLayout();
                                    layout[direction]();
                                    button.up('panel').down('#previous_product').setDisabled(!layout.getPrev());
                                    button.up('panel').down('#next_product').setDisabled(!layout.getNext());
                                };

                                navigate(button.up("panel"), "prev");
                            },
                            disabled: true,
                            id: 'previous_product',
                            itemId: 'previous_product',
                            text: 'Back'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            itemId: 'saveBtn',
                            iconCls: 'save',
                            text: 'Save'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var navigate = function(panel, direction){
                                    var layout = panel.getLayout();
                                    layout[direction]();
                                    button.up('panel').down('#previous_product').setDisabled(!layout.getPrev());
                                    button.up('panel').down('#next_product').setDisabled(!layout.getNext());
                                };


                                navigate(button.up("panel"), "next");
                            },
                            id: 'next_product',
                            itemId: 'next_product',
                            text: 'Next'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    hidden: true,
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancelBtn',
                            iconCls: 'delete_1',
                            text: 'Close'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'theproductform'
                },
                {
                    xtype: 'thisproductallimagesform'
                },
                {
                    xtype: 'productdescriptionform'
                },
                {
                    xtype: 'productfeaturesform'
                },
                {
                    xtype: 'thisproductspecificationform'
                }
            ]
        });

        me.callParent(arguments);
    }

});