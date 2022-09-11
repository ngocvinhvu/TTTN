const list = document.getElementById('')

getData();

async function getData() {
    const resposeAPI = await fetch('');
    const data = await resposeAPI.json();
    console.log('data: ', data);
}