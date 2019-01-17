// var Twitter = require('twitter')
// var config = require('./config')
// var tweets = []
// import Twitter from 'twitter';
// import config from './config'

console.log('the client and server are connected')

var tweets = [
    {
        text:'This is the first tweet',
        name:'Omar Jandali'
    },
    {
        text:'This is the second tweet',
        name:'Omar Jandali'
    },
    {
        text:'This is the third tweet',
        name:'Omar Jandali'
    },
    {
        text:'This is the forth tweet',
        name:'Omar Jandali'
    }

]

function clearMessage(){
    $('#tweets').empty()
}

function search() {
    for(var i = 0; i < tweets.length; i++){
        var $text = '<p id="text">' + tweets[i].text + '</p>'
        var $username = '<p id="username">' + tweets[i].name + '</p>'
        var $tweets = $('#tweets');
        $tweets.append($text)
        $tweets.append($username)
    }
    setTimeout(function(){  
        clearMessage();
        var searched = document.getElementById("search").value;
        console.log(searched)
        // params = {
        //     q: searched,
        //     count: 30,
        //     result_type: 'recent',
        //     lang: 'en'
        // }
        // var tw = new Twitter(config)
        // tw.get('search/tweets', params, function(err, data, response){
        //     if(err){
        //         console.log(err)
        //     } else {
        //         for(let i = 0; i < data.statuses.length; i++){
        //             let text = data.statuses[i].text
        //             let name = data.statuses[i].user.screen_name
        //             tweets.push({text, name})
        //         }
        //     }
        // })
        for(var i = 0; i < tweets.length; i++){
            var $text = '<p id="text">' + tweets[i].text + '</p>'
            var $username = '<p id="username">' + tweets[i].name + '</p>'
            var $tweets = $('#tweets');
            $tweets.append($text)
            $tweets.append($username)
        }
    }, 10000);
}
