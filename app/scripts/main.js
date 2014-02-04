









var Post = function(newMessage) {
  this.msg = $('.post').val();
}



$(document).on('click', '.btn', function() {
    var msg = new Post();
    // msgArray.push(msg);
    $('.here').prepend(postTemplate(msg));
    $('.post').val('');  
});


// msgArray = [];


var postTemplate = _.template($('.post-template').text());
