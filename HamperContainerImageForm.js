/*
 * File: app/view/HamperContainerImageForm.js
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

Ext.define('cobuy.view.HamperContainerImageForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.hampercontainerimageform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.view.View',
        'Ext.XTemplate',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    height: 350,
    width: 500,
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
                    xtype: 'container',
                    flex: 1.5,
                    margin: 10,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            layout: 'fit',
                            title: 'Hamper Container Image',
                            items: [
                                {
                                    xtype: 'dataview',
                                    cls: 'my-dataview-cls',
                                    itemId: 'hamperDataview',
                                    margin: '5 5 5 50',
                                    overflowY: 'auto',
                                    itemSelector: 'div.thumb-wrap',
                                    itemTpl: [
                                        '<tpl for=".">',
                                        '    <div style="float:left;padding:	10px 30px 30px 18px;  "class=thumb-wrap id="id">',
                                        '        <div class=thumb><img src="../cobuy_images/icons/{icon}"  height="200" width="200"></div>',
                                        '        <div>',
                                        '          ',
                                        '        <!--<spam>{description} </spam> -->',
                                        '        <!--  <span style=class=x-editable>{shortDesc}</span>-->',
                                        '        <!--<span style="padding-right:5px">price/user/yr:</span><span style=class=x-editable>{price}</span>-->',
                                        '        <!--<span style="padding-right:5px">visibility:</span><span style=class=x-editable>{visibility}</span>',
                                        '        <!--<span style="padding-right:5px">location:</span><span style=class=x-editable>{location}</span>-->',
                                        '        <!--<br>min subscription no.:<span style="padding-left:5px">{min_subs_no}</span></br>-->',
                                        '        </div>',
                                        '        ',
                                        '    </tpl>',
                                        '<div class=x-clear></div>'
                                    ],
                                    preserveScrollOnRefresh: true,
                                    store: 'SingleHamperContainer'
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancelBtn',
                            iconCls: 'cancel',
                            text: 'Close'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});