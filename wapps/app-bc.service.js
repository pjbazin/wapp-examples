function appbc_register() {
  console.log("[app-bc] Payment-App Service worker registration in progress...");

  navigator.serviceWorker
      .register("./app-bc.js", { scope: "./" })
      .then(function(registration) {

        // Set Registration methods & options
        if (registration.paymentAppManager) {
          registration.paymentAppManager.setManifest({
            name: "app-bc_key",
            options: [{
              enabledMethods: ["basic-card"],
              name: "app-bc for MyCard",
              id: "M. JAUNE D'EAU;4111111111111111;12;25;987"
            }]
          });
        }

        // Forward registration object to the next function
        return (registration);

      }).then(function(sw) {
        // Previous step is successfully completed
        console.log("[app-bc] Payment-App Service Worker is " + (sw.installing || sw.waiting || sw.active).state);

      }).catch(function(exception) {
        alert("[app-bc] Dev.Exception: " + exception);
      });
}


function appbc_register_new() {
  console.log("[app-bc] Payment-App Service worker registration in progress...");

  navigator.serviceWorker
      .register('/app-bc.js')
      .then(function(registration) {
        console.log("[app-bc] registration " + JSON.stringify(registration));

        // Set Registration methods & options
        if (registration.paymentAppManager) {
          registration.paymentAppManager.options.set("app-bc_key", {
            enabledMethods: ["basic-card"],
            name: "app-bc for MyCard",
            id: "M. JAUNE D'EAU;4111111111111111;12;25;987"
          });
        }

        // Forward registration object to the next function
        return (registration);

      }).then(function(sw) {
        // Previous step is successfully completed
        console.log("[app-bc] Payment-App Service Worker is " + (sw.installing || sw.waiting || sw.active).state);

      }).catch(function(exception) {
        alert("[app-bc] Dev.Exception: " + exception);
      });
}