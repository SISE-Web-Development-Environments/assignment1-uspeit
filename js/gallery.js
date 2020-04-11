this.photoUrls = ['https://i.redd.it/lntb7cl5uzs31.jpg', 
'https://i.redd.it/0pkj1x4r1bl41.jpg',
'https://i.redd.it/r5nxyz10v2p41.jpg',
 'https://i.redd.it/eodk675sytm41.jpg',
 'https://i.redd.it/gy3k46k309o41.jpg', 
 'https://i.redd.it/sx0e6jebqsq41.jpg',
 'https://i.redd.it/c1dmgplmbhp41.jpg', 
 'https://i.redd.it/2xmylvhhvmp41.jpg',
 'https://i.redd.it/j81yc8lig4m41.jpg', 
 'https://i.redd.it/dt94tz18csp41.jpg'];
const container = $('#gallery');
var currentPage;

function addPhoto(url) {
    if (currentPage === undefined || currentPage.children().length >= 10) { 
        currentPage = $('<ul></ul>');
        container.append(currentPage);
    }
    currentItem = $('<li></li>');

    let imageElement = $('<img/>');
    imageElement.attr('src', url);
    
    currentItem.append(imageElement);
    currentPage.append(currentItem);
}

// Prepare gallery
photoUrls.forEach(addPhoto);