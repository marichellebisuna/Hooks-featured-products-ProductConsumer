import React from 'react';
import styled from 'styled-components';
import defaultImg from '../img/product-0.png';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';

import PropTypes from 'prop-types';

export default function Product({ product }) {
	return (
		<ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
			<div className="card">
				<div className="image-container">
					<img
						src={product.image || defaultImg}
						alt="product"
						className="card-img-top p-5"
						style={{ height: '320px' }}
					/>
					<div className="product-icon">
						<Link to={`/products/${product.id}`}>
							<FaSearch className="icon" />
						</Link>
						<FaCartPlus className="icon" />
					</div>
				</div>
				<div className="card-body d-flex justify-content-between">
					<p className="mb-0">{product.title}</p>
					<p className="mb-0 text-main">${product.price}</p>
				</div>
			</div>
		</ProductWrapper>
	);
}

const ProductWrapper = styled.div`
	.card {
		box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
		transition: all 0.5s ease;
		height: 100%;
	}
	.card:hover {
		box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.3);
		cursor: pointer;
	}
	.card-img-top {
		transition: all 0.5s ease;
	}
	.card-img-top:hover {
		transform: scale(1.15);
		opacity: 0.2;
	}
	.image-container {
		position: relative;
	}
	.product-icon {
		transition: all 0.5s ease;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	.icon {
		font-size: 2.5rem;
		margin-left: 1.5rem;
		padding: 0.5rem;
		color: lightskyblue;
		background: rgba(0, 0, 0, 0.9);
		border-radius: 0.5rem;
	}
	.card:hover .product-icon {
		opacity: 1;
	}
	.card-body {
		font-weight: bold;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
`;

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		image: PropTypes.arrayOf(PropTypes.string),
		price: PropTypes.number
	}).isRequired
};
