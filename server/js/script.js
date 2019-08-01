let colors = require('colors');

colors.setTheme({
	info: 'green',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
})

onNet('colorsLogs:event', (text, type) => {
	if (type == 'info')
		console.log(colors.info('[INFORMATION] : %s'), text);
	else if (type === 'help')
        console.log(colors.help('[HELP] : %s'), text);
    else if (type === 'warn')
        console.log(colors.warn('[WARNING] : %s'), text);
    else if (type === 'debug')
        console.log(colors.debug('[DEBUG] : %s'), text);
    else if (type === 'error')
        console.log(colors.error('[ERROR] : %s'), text);
})
