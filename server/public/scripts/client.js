var myApp = angular.module('myApp', []);

// on page load do all of this!
myApp.controller('myLifeController', function (){
    var life = this;
    life.message = 'Hello life.message';

    life.pictures = [{
        photo: '/pictures/family1.jpg',
        caption: '"My family."',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
    },
        { photo: '/pictures/Dylan.JPG',
            caption: '"Dylan in the early fall of 2017."',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
    },
        { photo: '/pictures/Paisley.jpg',
        caption: '"Our dog Paisley."',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
        },
        {
        photo: '/pictures/boys.JPG',
        caption: '"California nephews."',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
        },
        {
            photo: '/pictures/mnmade.jpg',
            caption: '"Born, raised and lived in Minnesota entire life.  Love to support local products and businesses."',
        likes: 0,
        photoShow: true,
        captionShow: false,
        commentShow: false,
        clicked: 0,
        comments: []
    },
    {
        photo: '/pictures/gif.gif',
        caption: '"Coaching gymnastics is one of my favorite hobbies."',
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