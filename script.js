function applyCustomScrollbarStyles() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .web-results::-webkit-scrollbar {
            width: 20px;
            background: #c0c0c0;
        }

        .web-results::-webkit-scrollbar-thumb {
            background: gray;
            border: 3px outset #dcdcdc;
        }

        .web-results::-webkit-scrollbar-thumb:hover {
            background: darkgray;
        }

        .web-results::-webkit-scrollbar-track {
            background: silver;
            border: 2px inset #dcdcdc;
        }

        .web-results::-webkit-scrollbar-button {
            background: #f0f0f0;
            height: 20px;
            position: relative;
            border: 2px outset #dcdcdc;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .web-results::-webkit-scrollbar-button:increment {
            background-image: url('images/arrow-bottom.png');
        }

        .web-results::-webkit-scrollbar-button:decrement {
            background-image: url('images/arrow-top.png');
        }

        .web-results::-webkit-scrollbar-button:increment:hover, 
        .web-results::-webkit-scrollbar-button:decrement:hover {
            background-color: #e0e0e0;
        }

        .web-results {
            scrollbar-face-color: gray;
            scrollbar-highlight-color: #e0e0e0;
            scrollbar-shadow-color: #707070;
            scrollbar-3dlight-color: #f0f0f0;
            scrollbar-darkshadow-color: #a0a0a0;
            scrollbar-track-color: silver;
            scrollbar-arrow-color: black;
        }
    `;
    document.head.appendChild(style);
}

applyCustomScrollbarStyles();

document.querySelector('button').addEventListener('click', function handleClick() {
    const button = document.querySelector('button');
    button.removeEventListener('click', handleClick);

    const navContainer = document.querySelector('.nav');
    const ul = document.createElement('ul');
    const listItems = [
        'Search', 'Images', 'Maps', 'Play', 'Youtube', 'News', 'Gmail', 'Drive', 'More >>'
    ];

    listItems.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item;

        if (item === 'Search') {
            a.style.color = 'black';
            a.style.fontWeight = '500';
        } else {
            a.style.color = 'blue';
            a.style.textDecoration = 'underline';
            a.style.cursor = 'pointer';
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    ul.style.display = 'flex';
    ul.style.justifyContent = 'flex-start';
    ul.style.textAlign = 'left';
    ul.style.padding = '0';
    ul.style.marginTop = '10px';
    ul.style.marginBottom = '5px';
    ul.style.borderBottom = "1px dotted blue";
    ul.style.paddingBottom = '10px';

    const listItemsStyle = ul.getElementsByTagName('li');
    for (let li of listItemsStyle) {
        li.style.listStyle = 'none';
        li.style.margin = '0 10px';
    }

    navContainer.appendChild(ul);

    const searchBarContainer = document.querySelector('.search-bar');
    searchBarContainer.style.display = 'flex';
    searchBarContainer.style.alignItems = 'center';

    const searchBar = document.querySelector('.search-bar p');
    searchBar.style.border = '1px solid #ccc';
    searchBar.style.borderLeft = '2px solid black';
    searchBar.style.borderTop = '2px solid black';
    searchBar.style.padding = '5px 5px';
    searchBar.style.borderRadius = '2px';
    searchBar.style.fontSize = '16px';
    searchBar.style.width = '380px';
    searchBar.style.minHeight = '20px';

    const img = document.createElement('img');
    img.src = 'images/Google.png';
    img.alt = 'Google';
    img.style.width = '150px';
    img.style.height = '50px';
    img.style.marginRight = '10px';
    img.style.verticalAlign = 'middle';

    searchBarContainer.insertBefore(img, searchBar);

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.alignItems = 'center';

    button.style.backgroundColor = '#c0c4c8';
    button.style.border = '1px solid #ccc';
    button.style.borderRight = '2px solid black';
    button.style.borderBottom = '2px solid black';

    const advancedSearchText = document.createElement('span');
    advancedSearchText.textContent = 'Advanced Search Preferences';
    advancedSearchText.style.marginLeft = '10px';
    advancedSearchText.style.fontSize = '14px';
    advancedSearchText.style.color = 'blue';
    advancedSearchText.style.cursor = 'pointer';
    advancedSearchText.style.textDecoration = 'underline';

    buttonContainer.appendChild(button);
    buttonContainer.appendChild(advancedSearchText);

    searchBarContainer.appendChild(buttonContainer);

    const webSearchDiv = document.querySelector('.web-search');

    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.style.display = 'flex';
    searchResultsContainer.style.justifyContent = 'center';
    searchResultsContainer.style.padding = '6px 12px';
    searchResultsContainer.style.gap = '32rem';
    searchResultsContainer.style.backgroundColor = 'rgba(141, 196, 252, 0.3)';
    searchResultsContainer.style.borderTop = '1px solid #0c82f8';

    const webText = document.createElement('span');
    webText.textContent = 'WEB';
    webText.style.fontSize = '16px';
    webText.style.fontFamily = 'MS Sans, sans-serif';
    webText.style.color = 'black';
    webText.style.fontWeight = 'bold';

    const resultsText = document.createElement('span');
    resultsText.textContent = 'About 23,000 results (0.28 seconds)';
    resultsText.style.fontSize = '16px';
    resultsText.style.fontFamily = 'MS Sans, sans-serif';
    resultsText.style.color = 'black';

    searchResultsContainer.appendChild(webText);
    searchResultsContainer.appendChild(resultsText);

    webSearchDiv.appendChild(searchResultsContainer);

    const webResultsDiv = document.querySelector('.web-results');
    webResultsDiv.style.display = 'block';
    webResultsDiv.style.marginTop = '20px';
    webResultsDiv.style.padding = '0 12px';

    function addSearchResult(title, description, link) {
        const resultContainer = document.createElement('div');
        resultContainer.style.marginBottom = '20px'; 
        resultContainer.style.width = '100%'; 
        resultContainer.style.paddingLeft = '10px'; 
        resultContainer.style.boxSizing = 'border-box'; 
    
        const webResultsText = document.createElement('a');
        webResultsText.textContent = title;
        webResultsText.href = link;
        webResultsText.style.fontSize = '18px';
        webResultsText.style.color = 'blue';
        webResultsText.style.fontFamily = 'MS Sans, sans-serif';
        webResultsText.style.cursor = 'pointer';
        webResultsText.target = '_self';
    
        const webResultsDescription = document.createElement('p');
        webResultsDescription.textContent = description;
        webResultsDescription.style.fontSize = '14px';
        webResultsDescription.style.fontFamily = 'MS Sans, sans-serif';
        webResultsDescription.style.color = 'black';
        webResultsDescription.style.marginBottom = '10px'; 
    
        const webResultsLink = document.createElement('span');
        webResultsLink.textContent = link;
        webResultsLink.style.fontSize = '14px';
        webResultsLink.style.fontFamily = 'MS Sans, sans-serif';
        webResultsLink.style.color = 'green';
    
        resultContainer.appendChild(webResultsText);
        resultContainer.appendChild(webResultsDescription);
        resultContainer.appendChild(webResultsLink);
    
        webResultsDiv.appendChild(resultContainer);
        
        webResultsText.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = link;
        });
    }
    
    addSearchResult('maiwebarchive | about page', 'Maria Jessica J. Lupig - A dedicated IT student with a knack for solving problems, writing clean code, and occasionally asking my computer to “please cooperate.”', './about/index.html');
    addSearchResult('maiwebarchive | skills page', 'Description for projects page.', '#');
    addSearchResult('maiwebarchive | projects page', 'Description for projects page.', '#');
    addSearchResult('maiwebarchive | contact page', 'Description for contact page.', '#');
});
