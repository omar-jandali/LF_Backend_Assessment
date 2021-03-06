import Twitter from 'twitter';
import config from './config';
console.log('the client and server are connected');

params = {
    q: searched,
    count: 30,
    result_type: 'recent',
    lang: 'en'
};
var tw = new Twitter(config);

function fetchData(){
    tw.get('search/tweets', params, function(err, data, response){
        if(err){
            console.log(err);
        } else {
            for(let i = 0; i < data.statuses.length; i++){
                let text = data.statuses[i].text;
                let name = data.statuses[i].user.screen_name;
                tweets.push({text, name});
            }
        }
    })
}

function clearMessage(){
    $('#tweets').empty();
}

function search() {
    fetchData()
    setTimeout(function(){  
        clearMessage();
        fetchData();
        var searched = document.getElementById("search").value;
        console.log(searched);
        for(var i = 0; i < tweets.length; i++){
            var $text = '<p id="text">' + tweets[i].text + '</p>';
            var $username = '<p id="username">' + tweets[i].name + '</p>';
            var $tweets = $('#tweets');
            $tweets.append($text);
            $tweets.append($username);
        }
    }, 10000);
}
