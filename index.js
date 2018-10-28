const Discord = require('discord.js')
const client =  new Discord.Client
//banner
console.log(' ######                                                                              ')
console.log(' #     #  #   ####    ####    ####   #    #    ##    #    #   ####   ######          ')
console.log(' #     #  #  #       #       #    #  ##   #   #  #   ##   #  #    #  #               ')
console.log(' #     #  #   ####    ####   #    #  # #  #  #    #  # #  #  #       #####           ')
console.log(' #     #  #       #       #  #    #  #  # #  ######  #  # #  #       #               ')
console.log(' #     #  #  #    #  #    #  #    #  #   ##  #    #  #   ##  #    #  #               ')
console.log(' ######   #   ####    ####    ####   #    #  #    #  #    #   ####   ######          ')
console.log('                                                                             ####### ')
console.log('\n')
console.log('Dissonance_ -Cappuchino 2018')

try{
    var token = process.argv[0]
}
catch(error) {
    if(!token){
        var {token} = require('./config.json')
        console.warn('Token not provided in argument, Assuming token in config')
    }
}




const blessed = require('./blessed/index')
blessed()