import data from './card.json';

let actualData = data.result?.pending_orders?.map((item) => ({
  id: item?.name || 'unknown',
  customerName: item.partner_id?.[1] || 'unknown customer',
  dateOrder: item.date_order?.substring(0, 10) || 'unknown date',
  activityType: item?.activities?.[0]?.activity_type || 'Re-Style Request',
  state: item.state || 'unknown',
  tags : item.tags, 
  products: item.products?.map((product, index) => ({
    productName: product.name || 'Unknown Product',
    size: product.size || 'N/A',
    price: product.price || 'N/A',
    // Use picsum.photos with unique image id based on index for variety
    photo: `https://picsum.photos/seed/${encodeURIComponent(product.name + index)}/150/120`,
  })) || [],
}));

export default actualData;
