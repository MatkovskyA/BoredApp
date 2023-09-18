const textTitle = document.querySelector('#header-title')
const textActivity = document.querySelector('#action__text');
const button = document.querySelector('#button')

function fetchActivity() {
    textTitle.innerHTML = 'Now we have something to do🙃'
    

    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        if (data.status !== 'success') {
            textActivity.innerHTML = data.activity;
        } else {
            console.log('Error')
        }
    })
}

button.addEventListener('click', fetchActivity)

