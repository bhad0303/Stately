import data from './card.json';

let actualData = data.result?.pending_orders?.map((item)=>({
     id : item?.name || 'unknown' ,
     customerName : item.partner_id[1] || 'unknown customer',
     dateOrder : item.date_order.substring(0,10),
     activityType : item?.activities?.[0]?.activity_type || 'Re-Style Request ',
     state : item.state

}));





 
export default actualData;  