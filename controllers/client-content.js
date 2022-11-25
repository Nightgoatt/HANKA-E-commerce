import {productServices} from '../services/products-services.js';

const createProduct = (img, name, price, link) => {
	const product = document.createElement('div');
	const content = `
	<div class="card">
		<img class="card__image" src="${img}" />
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

const prostheticsSection = document.querySelector('[data-prosthetics]');
const brainSection = document.querySelector('[data-brain]');

const rend = async () => {
	try {
		const firstSection = await productServices.prosthSection();
		const secondSection = await productServices.brainSection();

		firstSection.forEach((element) => {
			prostheticsSection.appendChild(
				createProduct(
					element.img,
					element.name,
					element.price,
					element.link
				)
			);
		});

		secondSection.forEach((element) => {
			brainSection.appendChild(
				createProduct(
					element.img,
					element.name,
					element.price,
					element.link
				)
			);
		});
	} catch (error) {
		console.log(error);
	}
};

rend();
