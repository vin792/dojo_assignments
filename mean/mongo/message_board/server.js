var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path');

app.search(express.static(path.join(__dirname,'./static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
var assert = require('assert');
mongoose.connect('mongodb://localhost/message_board');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 1},
    name: {type: String, required: true, minlength: 4},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

var CommentSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 1},
    name: {type: String, required: true, minlength: 4},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'}
}, {timestamps: true})

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(req, res){
    Post.find({}, function(err, posts){
        if(err) {
            console.log("Failed to retrieve Posts");
            console.log(posts.error);
        } 
    })
    .populate("comments")
    .exec(function(err, posts){
        data = {posts: posts};
        res.render('index', data);
    })         
})

app.post('/addpost', function(req, res){
    var post = new Post(req.body);
    post.save(function(err){
        if(err){
            console.log("failed to save");
            console.log(post.errors);
        } 
        res.redirect('/');
    })
})

app.post('/addcomment/:id', function(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment(req.body);
        comment._post = post._id;

        comment.save(function(err){
            post.comments.push(comment);
            post.save(function(err){
                if(err){
                    console.log("Failed to save comment");
                } 
                res.redirect('/');
            })
        })
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})
