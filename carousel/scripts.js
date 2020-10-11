let imagesData = [{
        photo: 'pic-01.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-02.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-03.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-04.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-05.jpeg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-06.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-07.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-08.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-09.jpeg',
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: 'pic-10.jpg',
        title: 'My title',
        description: 'Why is this a very good image'
    }
]

let currentPhoto = 0;


function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('.clicked').toggleClass('clicked');
    $(`.thumb${photoNumber}`).toggleClass('clicked');

};

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {

    if (currentPhoto < 9) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
        //currentPhoto++;
    }
    loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = 9;
    }
    loadPhoto(currentPhoto);
})


imagesData.forEach((item, index) => {
    $('#thumbnails-container').append(`<div class="thumbnail thumb${index}" data-index="${index}" style="background: url('${item.photo}') no-repeat center center; background-size: cover;"> </div>`);

});

$('.thumbnail').click((event) => {
    clicked = $(event.target).attr('data-index');
    loadPhoto(clicked);
    //$(event.target).addClass('clicked');
    //$(event.target).siblings().removeClass('clicked');
    currentPhoto = $(event.target).attr('data-index');

});