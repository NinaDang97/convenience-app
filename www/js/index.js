var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {		
        app.receivedEvent('deviceready');
		
		$(".fa.fa-bookmark-o.save").click(function(){
			  var name = $(".ui-block-b").find("strong").html();
			  alert("You have saved " + name);
			  $(this).addClass("already");
			  saveLocalStorage(name); 
            alert("FUCK THIS SHIT");
        })
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
     
		
		
    }
};
