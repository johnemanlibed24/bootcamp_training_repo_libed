/*global QUnit*/

sap.ui.define([
	"sapips/training/jsonbinding/controller/JSONbinding.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JSONbinding Controller");

	QUnit.test("I should test the JSONbinding controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
