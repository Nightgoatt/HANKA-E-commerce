import {productServices} from '../services/products-services.js';

const createEditProduct = (img, name, price, link) => {
  const product = document.createElement('div');
  const content = `<div class="card">
              <img class="card__image" src="${img}" />
              <div class="card__icons">
                <a class="icon" href=""><i id="pen" class="fa-solid fa-pen"></i></a>
                <a class="icon_2" href=""><i id="trash" class="fa-solid fa-trash"></i></a>
              </div>
              <div class="card__info">
                <h4 class="card__name">${name}</h4>
                <p class="card__price">${price}</p>
                <a class="card__link" href="${link}">See product</a>
              </div>
            </div>
`;
  product.innerHTML = content;
  return product;
};

const allProducts = document.querySelector('[data-products-page]');

const main = async () => {
  try {
    const firstSection = await productServices.prosthSection();
    const secondSection = await productServices.brainSection();
    const thirdSection = await productServices.militarySection();

    firstSection.forEach((element) => {
      allProducts.appendChild(createEditProduct(element.img, element.name, element.price, element.link));
    });

    secondSection.forEach((element) => {
      allProducts.appendChild(createEditProduct(element.img, element.name, element.price, element.link));
    });

    thirdSection.forEach((element) => {
      allProducts.appendChild(createEditProduct(element.img, element.name, element.price, element.link));
    });
  } catch (error) {
    console.log(error);
  }
};

main();
