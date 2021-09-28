const express = require('express');
const path = require('path');

let app = express();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Server started on port ' + app.get('port'));
});
