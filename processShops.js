//import {shops} from './shops.js';

const articlesWrapper = document.querySelector('.articles-wrapper');
shops.forEach(item =>{
    let article = document.createElement('article');
    article.className = 'article';
    article.setAttribute('data-code', item.dataCode);

    let articleWrapper = document.createElement('div');
    articleWrapper.className = 'article__wrapper';
    article.append(articleWrapper);

    let articleRegion = document.createElement('p');
    articleRegion.className = 'article__region';
    articleRegion.textContent = item.region;
    articleWrapper.append(articleRegion);

    let title = document.createElement('h4');
    title.className = 'article__title';
    title.textContent = item.title;
    articleWrapper.append(title);

    let address = document.createElement('p');
    address.className = 'article__address';
    address.textContent = item.address;
    articleWrapper.append(address);

    if (item.tel) {
        item.tel.forEach(number => {
            let phoneNumber = document.createElement('a');
            phoneNumber.className = 'article__tel';
            phoneNumber.setAttribute('href', `tel:${number}`);
            phoneNumber.textContent = number;

            articleWrapper.append(phoneNumber);
        });
    }

    articlesWrapper.appendChild(article);
});