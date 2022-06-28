const input = document.getElementById('input'); //accessing the input
const grid = document.getElementsByClassName('grid')[0]//accessing the grid

window.addEventListener('load',DayandNight)//our day and in night mode function
input.addEventListener('keydown',function(event){
    if(event.key=== 'Enter')
    loadImg(); //this enables the user to press 'Enter' to review the images
})

//const url =


function loadImg(){
    removeimg();
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page= 9&'
    client_id = LBI7cgq3pbM;
    fetch(url) 
    .then(response =>{
        if(response.ok)
        return response.json();
        else
        alert(response.status)
    })
    .then(data=>{
        const imagenodes = [];
        for(let i=0;i < data.results.length;i++){
            imagenodes[i] = document.createElement('div');
            imagenodes[i].className = 'img';
            imagenodes[i].style.backgroundImage ='url('+data.results[i].urls.raw+')';
            imagenodes[i].addEventListener('dblclick'),
            function(){
                window.open(data.results[i].links.download,'_blank')
            }

        }
    })
    grid.appendChild(imagenodes[i]);
}

function removeimgs(){
    grid.innerHTML ='';
}

function DayandNight(){
    const date = new Date();//gettin the date
    const hour= date.getHours();//getting hours

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.backgroundColor = 'black'
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'white'

    }

}