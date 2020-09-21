#! /usr/bin/env node

const {
    default: Axios
} = require('axios');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    prompt: 'enter command > '
});

readline.prompt();
readline.on('line', line => {
    switch (line.trim()) {
        case 'list vegan food':
            {
                Axios.get('http://localhost:3001/food').then(({data}) => {
               const veganIterable = {

                }
                })
 
            }
            break;
        case 'log': {

            rl.question('What would you like to log today?', async (item) => {
                const {
                    data
                } = await Axios.get('http://localhost:3001/food');
                let it = data[Symbol.iterator]();
                let position = it.next();
                while (!position.done) {
                    const food = position.value.name;
                    if (food === item) {
                        console.log('${item} has ${position.value.calories}')
                    }
                    position = it.next();
                }
                readline.prompt()
            })
        }
    }
})