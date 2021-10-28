/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comamar./basketball/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
