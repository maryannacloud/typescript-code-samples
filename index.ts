import products from './products';

const productName: string = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '123 Main Street, New York, NY 10001';

const product = products.find((item) => item.name === productName);

if (product) {
  console.log(`Found product:`, product);

  if (product.preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
  } else {
    console.log('The product is not available for pre-order.');
  }

  if (parseFloat(product.price) > 25) {
    shipping = 0;
    console.log('We will provide free shipping for this product.');
  } else {
    shipping = 5;
  }

  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  }

  total = calculate(parseFloat(product.price), taxPercent, shipping);

  taxTotal = parseFloat(product.price) * taxPercent;
  console.log('\n--- Receipt ---');
  console.log(`Product name: ${product.name}`);
  console.log(`Shipping address: ${shippingAddress}`);
  console.log(`Price of the product: $${parseFloat(product.price).toFixed(2)}`);
  console.log(`Tax total: $${taxTotal.toFixed(2)}`);
  console.log(`Shipping: $${shipping.toFixed(2)}`);
  console.log(`Total amount: $${total.toFixed(2)}`);
} else {
  console.log('Product not found!');
}

function calculate(price: number, taxPercent: number, shipping: number): number {
  const taxTotal = price * taxPercent;
  const total = price + taxTotal + shipping;
  return total;
}
