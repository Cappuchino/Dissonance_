const blessed = require('blessed');
//banner
console.log(' ######                                                                              ')
console.log(' #     #  #   ####    ####    ####   #    #    ##    #    #   ####   ######          ')
console.log(' #     #  #  #       #       #    #  ##   #   #  #   ##   #  #    #  #               ')
console.log(' #     #  #   ####    ####   #    #  # #  #  #    #  # #  #  #       #####           ')
console.log(' #     #  #       #       #  #    #  #  # #  ######  #  # #  #       #               ')
console.log(' #     #  #  #    #  #    #  #    #  #   ##  #    #  #   ##  #    #  #               ')
console.log(' ######   #   ####    ####    ####   #    #  #    #  #    #   ####   ######          ')
console.log('                                                                             ####### ')
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




function start(){

    // Create a screen object.
    var screen = blessed.screen({
        smartCSR: true,
    	useBCE: true,
    	cursor: {
    		artificial: true,
    		blink: true,
    		shape: 'underline'
    	},
    	log: `${__dirname}/application.log`,
    	debug: true,
    	dockBorders: true
      });

    screen.title = 'Dissonance_';
}