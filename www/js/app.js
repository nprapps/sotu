$(function() {
    var schedule = JST.schedule();
    $('#schedule .modal-body').html(schedule);

    $('#live-chat').livechat({
        chat_id: APP_CONFIG['CHAT']['ID'],
        chat_token: APP_CONFIG['CHAT']['TOKEN'],
        update_interval: APP_CONFIG['CHAT']['UPDATE_INTERVAL'],
        alert_interval: 500,
        read_only: false,
        anonymous: true,
        filter_user_id: APP_CONFIG['CHAT']['FILTER_USER_ID']
    });

    $('.chat-schedule-wrap').append(schedule);

    // Cache offset before any scrolls
    var chat_entry = $('.chat-user-entry');
    var init_offset = chat_entry.offset();

    function position_header(chat_entry, init_offset) {
        var scroll_top = $(window).scrollTop();
        var height = chat_entry.height();

        if (scroll_top > init_offset.top + height) {
            chat_entry.css({ 'position': 'fixed', 'top': '0px', 'width': '100%' });
        }

        else {
            chat_entry.css({ 'position': 'relative', 'width': 'auto' });
        }
    }
    $(window).scroll(function() { position_header(chat_entry, init_offset) });
});
