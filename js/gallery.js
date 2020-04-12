const photoIds = ['lntb7cl5uzs31', '0pkj1x4r1bl41', 'r5nxyz10v2p41', 'eodk675sytm41', 'gy3k46k309o41', 'sx0e6jebqsq41', 'c1dmgplmbhp41', '2xmylvhhvmp41', 'j81yc8lig4m41', 'dt94tz18csp41'];
const photoUrls = photoIds.map(id => `https://i.redd.it/${id}.jpg`);
const container = $('#gallery');
var currentPage;

function addPhoto(url) {
    if (currentPage === undefined || currentPage.children().length >= 10) {
        currentPage = $('<ul></ul>');
        container.append(currentPage);
    }
    currentItem = $('<li></li>');

    let linkElement = $('<a></a>');
    linkElement.attr('href', url)
    linkElement.attr('target', '_blank')
    
    let imageElement = $('<img/>');
    imageElement.attr('src', url);

    linkElement.append(imageElement);
    currentItem.append(linkElement);
    currentPage.append(currentItem);
}

// Prepare gallery
photoUrls.forEach(addPhoto);