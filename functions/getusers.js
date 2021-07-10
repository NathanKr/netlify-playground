const axios = require('axios');
const userName = 'NathanKr'

async function getPublicReposNum(){
    const baseUrlApi = `https://api.github.com/users/${userName}`
    const res = await axios.get(baseUrlApi);
    // num of public reops
    return res.data.public_repos;
}

exports.handler = async function(event, context) {
    const {headers} = event
    console.log(`host : ${headers.host}`);
    const public_repos = await getPublicReposNum()

    return {
        statusCode: 200,
        body: JSON.stringify({public_repos}),
        headers : {'Access-Control-Allow-Origin': '*'}
    };
}
