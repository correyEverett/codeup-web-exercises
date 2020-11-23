


'use strict';

    const wait = (number) => {
        new Promise((resolve, reject) => {
            const timer = number * 1000;
            setTimeout((timer * 1000) => {
                if (typeof number === 'number') {
                    resolve(true);
                } else {
                    reject(false);
                }
            }, timer);
        });
    }

    wait().then(() => {
        console.log(`You'll see this after ${number} second(s).` );
    }).catch(() => {
        console.log(`You're input is invalid. Pleae try again!`);
    });