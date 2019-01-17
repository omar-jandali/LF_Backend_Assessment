# LF_Backend_Assessment
This is the backend assessment. It is a webpage that, when loaded up, will make a call to twitters api based on the search that the user enters. Once the user hits the search button, the api will display tweets realted to that search. It will then update every 10 seconds and display new tweets that have been posted.

DISCLAIMER:
I was having trouble getting credentials from Twitters Dev side. Because I couldn't access their api directly, I had to 
fake temporary data to be used as a place holder until I got my Twitter API crednetials. Because of this, you should
start your server and then load the html file directly into the web browser.

Clone the repo to your local machine:

`git clone https://github.com/omar-jandali/LF_Backend_Assessment.git LF_Backend_Assessment` 
** this will create a folder with the content inside of it

move into the directory:

`cd LF_Backend_Assessment`

Install the packages and scripts:

`npm install`

Input your Twitter API credentials into the config.js file

`module.export = {
    customer_key: '',
    customer_secret: '',
    token: '',
    token_secret: ''
}`

Go into the client.js file

uncomment the top two lines 

`// import Twitter from 'twitter';
// import config from './config'`

and 

       `// params = {
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
        // })`
        
        Comment out the tweets array at the top
        
   `var tweets = [
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

]`
        
        
Run the project:

`npm run build`
        
Open your preferred browser and run the command to open a file directly.
Go to the html page in the cloned repository and load it up that way.
        
        
