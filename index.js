console.log ('app is loading')

const lambda_url = 'http://localhost:9000/getusers'
const getUsers = () => {
    axios.get(lambda_url)
    .then(response => {
     const {data} = response;
     document.getElementById('root').innerText = `get number of github public repos for NathanKr using netflix serverless : ${data.public_repos}`   
   })
    .catch(error => console.error(error));
   };

