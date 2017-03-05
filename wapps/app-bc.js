

self.addEventListener('install', function(event) {
  // 'install' event is fired when the SW registration is successfully completed.
  console.log("[app-bc] is installed");
});


self.addEventListener('activate', function(event) {
  // 'activate' event is fired after 'install' event.
  console.log("[app-bc] is activated");
});


self.addEventListener('paymentrequest', function(paymentrequestEvent) {
  console.log("[app-bc] Got paymentrequest " + JSON.stringify(paymentrequestEvent.data));

  // Send back selected option to the payment requester (Payee/Merchant, PISP,...)
  paymentrequestEvent.respondWith(new Promise(function(resolve, reject) {

    try {
      // Retrive payment card options
      var optionIds = paymentrequestEvent.data.optionId.split(';');

      // Build Basic-Card response according to the specific BasicCardResponse dictionary model
      var basicCardResponse = {
        methodName: "basic-card",
        details: {
          cardholderName: optionIds[0],
          cardNumber: optionIds[1],
          expiryMonth: optionIds[2],
          expiryYear: optionIds[3],
          cardSecurityCode: optionIds[4],
          billingAddress: null
        }
      };

      // Callback Promise
      resolve(basicCardResponse);

    } catch (exception) { reject(exception) }

  }));

});

