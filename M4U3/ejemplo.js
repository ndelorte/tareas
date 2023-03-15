const moment = require('moment');

moment.locale('es');

console.log('Nací '+moment('050598','DD/MM/YY').fromNow())