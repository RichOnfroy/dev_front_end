$(document).ready(function() {
    const listForm = $('#lista-form');
    const formInput = $('#form-input');
    const listList =  $('#list-list');

    listForm.on('submit', function(event) {
        event.preventDefault();
        const listText =formInput.val().trim();
        if (listText) {
            const newlist = $('<li>').text(listText);
            listList.append(newlist);
            formInput.val('')
        }

    })

    listList.on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});