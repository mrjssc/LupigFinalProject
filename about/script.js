document.addEventListener('DOMContentLoaded', () => {
    const aboutPage = document.querySelector('.second-wp');
    const aboutTitle = document.getElementById('about-title');
    const allText = document.querySelectorAll('.second-wp *:not(#about-title)');

    aboutPage.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
    aboutTitle.style.fontFamily = '"Shonar", serif';
    aboutTitle.style.color = 'black';
    aboutTitle.style.fontWeight = 'bold';
    aboutTitle.style.fontSize = '40px';

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
        title.style.fontWeight = 'bolder';
        title.style.fontSize = '16px';
        title.style.marginBottom = '10px';
        title.style.color = '#000991';
        title.style.textTransform = 'uppercase';
        title.style.fontStyle = 'italic';
    });

    const sideMainTitle = document.getElementById('sidemain-title');
    if (sideMainTitle) {
        sideMainTitle.style.fontFamily = '"Shonar", serif';
        sideMainTitle.style.color = 'black';
        sideMainTitle.style.fontWeight = 'bold';
        sideMainTitle.style.fontSize = '35px';
    }

    const aboutContent = document.querySelector('.about-content');
    const sideText = document.querySelector('.side-text');
    const sideBoxesContainer = document.querySelector('.side-boxes');

    if (aboutContent && sideText && sideBoxesContainer) {
        const divider = document.createElement('div');
        divider.classList.add('divider');
        aboutContent.insertBefore(divider, sideBoxesContainer);
    }
});
