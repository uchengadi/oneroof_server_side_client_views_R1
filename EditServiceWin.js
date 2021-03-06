/*
 * File: app/view/EditServiceWin.js
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

Ext.define('cobuy.view.EditServiceWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.editservicewin',

    requires: [
        'cobuy.view.TheServicesForm',
        'Ext.form.Panel'
    ],

    height: 600,
    width: 800,
    layout: 'fit',
    title: 'Edit Service',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'theservicesform'
                }
            ]
        });

        me.callParent(arguments);
    }

});