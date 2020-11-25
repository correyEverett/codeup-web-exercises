


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

function extractDateOfLastPushEvent (events) {
    for (let event of events) {
        if (evnet.type === 'PushEvent') {
            return new Date(event.created_at).toDateString();
        }
    }
    return null;
}



const aPromise = (username) => {
    const url = `https://api.github.com/users/${username}/events/public`;
    const options = {headers: {'Authorization': 'gitHubKey'}};

    return fetch(url, options)
    .then((response) => {
        return response.json();
    })
    .then((extractDateOfLastPushEvent) => {

    })
    .catch(() => {

    });
}

console.log(aPromise('correyEverett'))