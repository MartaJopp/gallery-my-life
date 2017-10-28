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
        commentShow: false,
        clicked: 0,
        comments: []
    },
        { photo: '/pictures/newborn.JPG',
        caption: '"Dylan newborn"',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
    },
        { photo: '/pictures/newborn.JPG',
        caption: '"Dylan newborn"',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
        },
        {
        photo: '/pictures/newborn.JPG',
        caption: '"Dylan newborn"',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
        },
        {
        photo: '/pictures/newborn.JPG',
        caption: '"Dylan newborn"',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
    },
    {
        photo: '/pictures/newborn.JPG',
        caption: '"Dylan newborn"',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
    },
]

    life.clip = function (photo) {
        console.log(photo);
        photo.photoShow = !photo.photoShow;
        photo.captionShow = !photo.captionShow;
        photo.clicked = photo.clicked + 1;
};

life.like = function (photo) {
    photo.likes = photo.likes + 1;
}

    life.submit = function (photo) {
       

        console.log(photo.comment);
        photo.comments.push({ comment: photo.comment });
        console.log(photo.comments);
        console.log(life.pictures);
        photo.comment = '';
    }

    life.showComment = function (photo) {
        console.log(photo.comment);
        photo.commentShow = !photo.commentShow
    }

});