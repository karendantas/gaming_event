const button = document.getElementById('button')
const form =document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})


button.addEventListener('click', 
    ()=> {
        button.style= 'transform:translateY(5px)';
    }
)