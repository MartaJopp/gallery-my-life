var myApp = angular.module('myApp', []);

// on page load do all of this!
myApp.controller('myLifeController', function (){
    var life = this;
    life.message = 'Hello life.message';

    life.pictures = [{
        photo: '/pictures/family.jpg',
        caption: '"caption about picture"',
        likes: 0,
        photoShow: true,
        captionShow: false,
    },
{ photo: '/pictures/newborn.JPG',
caption: '"Dylan newborn"',
likes: 0,
photoShow: true,
captionShow: false,
}]

    life.clip = function (photo) {
        console.log(photo);
        photo.photoShow = !photo.photoShow
        photo.captionShow = !photo.captionShow
};

life.like = function (photo) {
    photo.likes = photo.likes + 1;
}


});