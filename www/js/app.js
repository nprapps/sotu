$(function() {
    var schedule = JST.schedule();
    $('#schedule .modal-body').html(schedule);

    $('#live-chat').livechat({
        chat_id: APP_CONFIG['CHAT']['ID'],
        chat_token: APP_CONFIG['CHAT']['TOKEN'],
        update_interval: APP_CONFIG['CHAT']['UPDATE_INTERVAL'],
        alert_interval: 500,
        read_only: false
    });

    $('.chat-schedule-wrap').append(schedule);
});
