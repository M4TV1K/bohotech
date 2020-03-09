
let navBar;
let hideNavBar;

window.onload = () => {
    $('#headerContactUsBtn').click(requestAction);
    $('.requestContactBtn').click(requestAction);

    navBar = $('nav')[0];
    const showNav = (getComputedStyle(navBar, null).display);
    if (showNav === 'flex') {
        navBar.style.display = 'flex';
        hideNavBar = false;
    }
    else {
        navBar.style.display = 'none';
        hideNavBar = true;
    }

    $('#extendButton').click(() => {
        if (navBar.style.display === 'none') {
            $('#headerContainer').css({
                'position': 'fixed',
                'height': '100%',
                'background-image': 'none',
            });
            $('main').css({
                'filter': 'blur(30px)',
                'margin-top': '12vw'
            });
            $('footer').css('filter', 'blur(30px)');
            $('nav').css('display', 'flex');
        }
        else hideNavBarAction();
    });
};

function resizeWindow() {
    if (window.innerWidth > 890) {
        $('#headerContainer').css({
            'position': 'initial',
            'height': '7vw',
            'background-image': 'url("Images/Homepage/HeaderGradient.png")',
        });
        $('main').css({
            'filter': 'none',
            'margin-top': '0'
        });
        $('footer').css('filter', 'none');
        $('nav').css('display', 'flex');
        hideNavBar = false;
    }
    else if (!hideNavBar) {
        $('nav').css('display', 'none');
        hideNavBar = true
    }

    if (navBar.style.display === 'none') {
        if (window.innerWidth <= 890) {
            let height;
            if (window.innerWidth > 535) height = 9;
            else height = 14;
            $('#headerContainer').css('height', height + 'vw');
        }
    }
    if (window.innerWidth > 1300) {
        $('#headerContainer').css('height', '6vw');
    }
}

window.onresize = resizeWindow;

function hideNavBarAction() {
    let height;
    if (window.innerWidth > 535) height = 9;
    else height = 14;

    $('#headerContainer').css({
        'position': 'initial',
        'height': height + 'vw',
        'background-image': 'url("Images/Homepage/HeaderGradient.png")',
    });
    $('main').css({
        'filter': 'none',
        'margin-top': '0'
    });
    $('footer').css('filter', 'none');
    $('nav').css('display', 'none');
}


function hideNavButtons() {
    if (window.innerWidth <= 890) {
        hideNavBarAction();
        hideNavBar = false;
    }
}

function requestAction() {
    hideNavButtons();
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#inputName').offset().top
    }, 500);
    $('#inputName').focus();
}