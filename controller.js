const ducks = require('./db.json')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '50f1a241feb243f9a63ea25bf835d927',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


module.exports = {
  incCount: (req,res) => {
    let duckType = req.params.type
    for(let i=0; i<ducks.length; i++){
      if(ducks[i].type === duckType){
        ducks[i].count++
        rollbar.log('Plain Duck was clicked')
        res.status(200).send(`${ducks[i].count}`)
        return
      }
    }
    res.status(400).send('Duck not in database found')
  },
  getCounts: (req,res) => {
    res.status(200).send(ducks)
  }
}