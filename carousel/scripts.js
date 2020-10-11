let imagesData = [{
    photo: '1.jpg',
    title: 'First Slide',
    description: 'Why is this a very good image'
},
{
    photo: '2.jpg',
    title: 'Second Slide',
    description: 'Why is this a very good image'
},
{
    photo: '3.jpg',
    title: 'Third Slide',
    description: 'Why is this a very good image'
},
{
    photo: '4.jpg',
    title: 'Fourth Slide',
    description: 'Why is this a very good image'
},
{
    photo: '5.jpeg',
    title: 'Fifth Slide',
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