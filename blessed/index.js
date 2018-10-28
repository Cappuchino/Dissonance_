const blessed = require('blessed');
module.exports = function start(){


    // Create a screen object.
    var screen = blessed.screen({
        smartCSR: true,
    	useBCE: true,
    	cursor: {
    		artificial: true,
    		blink: true,
    		shape: 'underline'
    	},
    	debug: true,
    	dockBorders: true
      });

    screen.title = 'Dissonance_';
    var form = blessed.form({
        parent: screen,
        name: 'form',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    });
    
    var input = blessed.input({
        parent: form,
        name: 'input',
        input: true,
        keys: true,
        top: 0,
        left: 0,
        height: 1,
        width: '100%',
        style: {
            fg: 'white',
            bg: 'black',
            focus: {
                bg: 'red',
                fg: 'white'
            }
        }
    });
    
    input.focus();
    
    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
      return process.exit(0);
    });
    
}