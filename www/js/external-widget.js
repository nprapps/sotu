/*
* Prepare the live chat widget.
*/
$(function(){
    $('#live-chat-widget').livechatwidget({
        chat_id: APP_CONFIG['CHAT']['ID'],
        chat_token: APP_CONFIG['CHAT']['TOKEN'],
        update_interval: APP_CONFIG['CHAT']['UPDATE_INTERVAL'],
    });
    if($(window).width() < 500) {
        $('body').addClass('skinny');
    }
});
