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

    function position_header() {
        var initial_chat_entry = $('.init');
        var fixed_chat_entry = $('#fixed-container');

        var offset = initial_chat_entry.offset();
        var scroll_top = $(window).scrollTop();

        if (scroll_top > offset.top + initial_chat_entry.height()) {
            fixed_chat_entry.css({ 'visibility': 'visible'});
        }

        else {
            fixed_chat_entry.css({ 'visibility': 'hidden'});
        }
    }
    $(window).scroll(position_header);
});
