const image = document.querySelectorAll('.container img')

for(let i = 0; i < image.length; i++)
{
    image[i].addEventListener('click', () => {
        image[i].classList.toggle('expand-img')
    })
}