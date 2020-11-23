


'use strict';

    // const wait = (number) => {
    //     return new Promise((resolve, reject) => {
    //         const timer = number * 1000;
    //         setTimeout(() => {
    //             if (typeof number === 'number') {
    //                 resolve(number);
    //             } else {
    //                 reject();
    //             }
    //         }, timer);
    //     });
    // }
    //
    // wait(5).then((number) => {
    //     console.log(`You'll see this after ${number} second(s).` );
    // }).catch(() => {
    //     console.log(`You're input is invalid. Pleae try again!`);
    // });

    fetch('https://api.github.com/users/correyEverett/events/public', {headers: {'Authorization': 'gitHubKey'}})
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            console.log(users);
        })
        .catch(() => {

        });

    const aPromise = (username) => {

    }