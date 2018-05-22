//dependencies
const axios = require('axios')

//exports the module that does all the gets
module.exports = (function(cb){
    _runIt = (function(_url, _i){
        axios.get(_url) //requests the url then runs the promise
            .then(function(res){

                //as long as the res.data object has a follow property, this runs
                if(res.data.follow){
                    _i++
                    //takes the new url, cuts it up and adds .json back to it, then recursively feeds it back
                    console.log(`GET ${_i}`, `${res.data.follow.split("?")[0]}.json?${res.data.follow.split("?")[1]}`)
                    let _newURL = `${res.data.follow.split("?")[0]}.json?${res.data.follow.split("?")[1]}`
                    _runIt(_newURL, _i)
                }
                else{
                    //runs the callback with the message property
                    return cb(res.data.message)
                }
            })
            .catch(err => console.log("err", err))
    })
    //allows access to the challenge method on this module
    return {
        //challenge(url) starts the private _runIt method
        challenge: function(url){_runIt(url,0)
    }}
})