var chat = $.connection.chatHub;

chat.client.addNewMessageToChatBox = function (name, message) {
    console.log("RECEIVED")
    $(".chat-box").prepend("<div class=\"chat-item left\">" +
        "<div class=\"avatar\" style=\"background-image: url('../../libs/assets/myavt.jpg');\"></div>" +
        "<div class=\"content\">" +
        "<p>" + message + "</p>" +
        "<strong class=\"limit-1\"> @DateTime.Now.ToString(\"HH:mm dd/MM/yyyy\") - " + name + "</strong>" +
        "</div>" +
        "</div>");
}

$.connection.hub.start().done(function () {
    $('#sendButton').click(function () {
        if ($('#chatMessage').val().length > 0) {
            chat.server.send("sender01", $('#chatMessage').val());
            $('#chatMessage').val('').focus();
            console.log("SENT")
        }
    });
});