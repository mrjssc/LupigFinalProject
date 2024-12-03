document.addEventListener('DOMContentLoaded', () => {
    const aboutPage = document.querySelector('.first-wp'); 
    const aboutTitle = document.getElementById('about-title');
    const allText = document.querySelectorAll('.first-wp *:not(#about-title)'); 

    aboutPage.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
    aboutTitle.style.fontFamily = '"Shonar", serif';
    aboutTitle.style.color = 'black';
    aboutTitle.style.fontWeight = 'bold';
    aboutTitle.style.fontSize = '35px';

    allText.forEach(element => {
        element.style.fontFamily = 'Arial, sans-serif';
    });

    const aboutNames = document.querySelectorAll('.about-name');
    aboutNames.forEach(name => {
        name.style.color = '#8B0000';
        name.style.textDecoration = 'underline';
        name.style.fontWeight = '700';
    });

    const aboutDescriptions = document.querySelectorAll('.about-description');
    aboutDescriptions.forEach(description => {
        description.style.color = 'black';
        description.style.textDecoration = 'none';
    });

    const sideBoxes = document.querySelectorAll('.side-box-1, .side-box-2');
    sideBoxes.forEach(box => {
        box.style.width = '100%';
        box.style.padding = '15px';
        box.style.border = '2px solid black';
        box.style.textAlign = 'center';
        box.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
    });

    const sideBox1 = document.querySelector('.side-box-1');
    if (sideBox1) {
        sideBox1.style.backgroundColor = '#c79b3a';
    }

    const sideBox2 = document.querySelector('.side-box-2');
    if (sideBox2) {
        sideBox2.style.backgroundColor = '#62fffe';
    }

    const sideTitles = document.querySelectorAll('.side-title');
    sideTitles.forEach(title => {
        title.style.fontWeight = 'bold';
        title.style.fontSize = '18px';
        title.style.marginBottom = '10px';
        title.style.color = '#000991';
        title.style.textTransform = 'uppercase';
    });

    const sideInfos = document.querySelectorAll('.side-info');
    sideInfos.forEach(info => {
        info.style.fontSize = '14px';
        info.style.color = '#333';
        info.style.lineHeight = '1.3';
        info.style.marginTop = '5px';
        info.style.textAlign = "center";
    });

    const images = document.querySelectorAll('.about-image, .extra-image');
    images.forEach(image => {
        image.style.transition = 'transform 0.3s ease-in-out';  
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'rotate(15deg)'; 
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'rotate(0deg)'; 
        });
    });
});
