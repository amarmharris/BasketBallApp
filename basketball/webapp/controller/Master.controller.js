sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
	"sap/f/library"
], function(
	JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox, fioriLibrary
) {
	"use strict";

	return Controller.extend("com.amar.basketball.controller.Master", {
        onInit: function() {
			var oView = this.getView();
			this.loadData();
			this._bDescendingSort=false;
			this.countriesTable = oView.byId("countriesTable");
			this.oRouter = this.getOwnerComponent().getRouter();
            
        },
		loadData: function() {
			var that = this;
			var oView = that.getView();

			var settings = {
				"url": "https://api-basketball.p.rapidapi.com/countries",
				"method": "GET",
				"timeout": 0,
				"headers": {
				  "x-rapidapi-key": "f92da5e175mshdcb3e240c50ecb7p1086afjsnd08e1f700086"
				},
			  };
			  
			  $.ajax(settings).done(function (response) {
				var bBallModel = new JSONModel(response.response);
				oView.setModel(bBallModel, 'bball');
				console.log(response.response);
				console.log(bBallModel);
			  });
		},

		onSearch: function(oEvent) {
			var aFilter = [],
				sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("name", FilterOperator.Contains, sQuery);
				aFilter.push(filter);
			}
			this.countriesTable.getBinding("items").filter(aFilter, "Application")
		},

		onSelectionChange: function(oEvent) {

		},

		onAdd: function(oEvent) {
			
		},

		onSort: function(oEvent) {
			
		},

		onItemPress: function(oEvent) {
			var oFCL = this.oView.getParent().getParent();
			oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
		}
	});
});