const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//TODO 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const languagesArray = users.filter((user) => {
    if (user.languages.length > 2) {
        return user;
    }
});

// console.log(languagesArray);

//TODO 2. Use .map to create an array of strings where each element is a user's email address

const userEmails = users.map((address) => {
    return address.email;
});

// console.log(userEmails);

//TODO 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const YearsOfExperience = users.reduce((currentSum, currentUser) => {
    return (currentSum + currentUser.yearsOfExperience);
}, 0);
    let average = YearsOfExperience / users.length;

    // console.log(average);

//TODO 4. Use .reduce to get the longest email from the list of users.

const emailLength = userEmails.reduce((currentEmail, nextEmail) => {
    if (nextEmail.length > currentEmail.length) {
        currentEmail = nextEmail;
    }
    return currentEmail;
}, "");

// console.log(emailLength);

//TODO 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const usersNames = users.reduce((currentName, nextName) => {
    return ` ${currentName} ${nextName.name},`
}, "Your instructors are:");

console.log(usersNames);