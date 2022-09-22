const express = require('express');
const app = express();


// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')
})

app.listen(8080, function(){
    console.log('listening on 8080')
});
