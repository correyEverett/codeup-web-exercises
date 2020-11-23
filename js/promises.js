


'use strict';

    const wait = (number) => {
        return new Promise((resolve, reject) => {
            const timer = number * 1000;
            setTimeout(() => {
                if (typeof number === 'number') {
                    resolve();
                } else {
                    reject();
                }
            }, timer);
        });
    }

    wait(2).then((number) => {
        console.log(`You'll see this after ${number} second(s).` );
    }).catch(() => {
        console.log(`You're input is invalid. Pleae try again!`);
    });