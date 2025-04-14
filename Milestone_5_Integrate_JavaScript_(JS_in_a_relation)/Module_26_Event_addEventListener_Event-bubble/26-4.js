
document.getElementById('btn-update-title').addEventListener('click', function(){
    document.getElementById('title').innerText = 'I am Updated Event Handler';
})

document.getElementById('btn-update-title').addEventListener('mouseover', function(){
    document.getElementById('title').innerText = 'Event handler';
})

document.getElementById('btn-reset').addEventListener('click', function(){
    document.getElementById('title').innerText = 'Event Handler';
})