document.addEventListener('DOMContentLoaded', () => {
    const aboutPage = document.querySelector('.about-page');
    const aboutTitle = document.getElementById('about-title');
    const aboutLastUpdated = document.getElementById('about-last-updated');
    const aboutAbstract = document.querySelectorAll('.about-info');
    const aboutContent = document.querySelectorAll('.about-content');

    aboutPage.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
    aboutPage.style.fontFamily = '"MS Sans", sans-serif';

    aboutTitle.style.color = 'black';
    aboutTitle.style.fontWeight = 'bold';

    aboutLastUpdated.style.fontSize = '14px';
    aboutLastUpdated.style.color = 'gray';
    aboutLastUpdated.style.fontStyle = 'italic';

    aboutAbstract.forEach(abstract => {
        abstract.style.fontSize = '18px';
        abstract.style.color = 'black';
        abstract.style.fontWeight = 'bold';
        abstract.style.marginTop = '20px';
        abstract.style.marginBottom = '10px';
    });

    aboutContent.forEach(content => {
        content.style.fontSize = '16px';
        content.style.lineHeight = '1.5';
        content.style.color = 'black';
        content.style.backgroundColor = '#f9f9f9';
        content.style.padding = '10px';
        content.style.border = '1px solid #ddd';
        content.style.borderRadius = '4px';
    });
});
