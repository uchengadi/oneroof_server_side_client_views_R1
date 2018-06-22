/*
 * File: app/view/DeactivateMemberWin.js
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

Ext.define('cobuy.view.DeactivateMemberWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.deactivatememberwin',

    requires: [
        'cobuy.view.ToDeactivateMemberForm',
        'Ext.form.Panel'
    ],

    height: 700,
    width: 1300,
    layout: 'fit',
    title: 'Deactivate Member',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'todeactivatememberform'
                }
            ]
        });

        me.callParent(arguments);
    }

});