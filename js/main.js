// This js file is to create an interactive share button
const share_button = document.querySelector('.button_share');
const share_button2 = document.querySelector('.button_share2');
const share = document.querySelector('.share');
const personal_info = document.querySelector('.personal_info');

const shareFunction = function () {
    if (share.classList.contains('hidden')) {
        share.classList.remove('hidden');
        personal_info.classList.add('hidden');
    }
    else {
        share.classList.add('hidden');
        personal_info.classList.remove('hidden');
    }
}

if (window.innerWidth < 768) {
    window.onresize = function () {
        location.reload();
    }
    share_button.addEventListener('click', shareFunction);

    share_button2.addEventListener('click', shareFunction);
}
else if (window.innerWidth >= 768) {
    window.onresize = function () {
        location.reload();
    }
}