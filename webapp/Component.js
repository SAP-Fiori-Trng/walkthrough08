sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
  ],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("dw.ui5.walkthrough.08.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        const oData = {
          recipient: {
            name: "SAP Fiori 开发之创建描述符文件 manifest.json",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);
      }
    });
  }
);