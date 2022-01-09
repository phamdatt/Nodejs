const Products = require("../model/Products");
const Orders = require("../model/Order");

class OrdersControllers {
    getOrderDetail(request, response) {
        const orderIds = request.params.orderId; {
            Orders.findOne({ orderId: orderIds }).populate("itemList").then((resp) => {
                response.json({
                    code: 0,
                    message: 'success',
                    payload: resp
                });
            }).catch((err) => {
                response.json({
                    code: 0,
                    message: err,
                });
            })
        }
    }
    addOrder(request, response) {
        const orderId = Math.floor(Math.random() * 10000);
        const productId = request.body.productId;
        Products.findById({ _id: productId }, function (err, product) {
            if (err) {
                response.json({
                    code: 1,
                    message: 'err',
                });
            } else {
                const newOrder = new Orders({
                    orderId: 'DH' + `${orderId}`,
                    email: request.body.email,
                    address: request.body.address,
                    itemList: product._id,
                    totalPrice: request.body.totalPrice,
                    orderStatus: request.body.orderStatus,
                    phone: request.body.phone,
                    name: request.body.name,
                });
                Orders.create(newOrder, function (err, data) {
                    if (err) {

                        console.log(err)
                        response.json({
                            code: 1,
                            message: 'err'
                        })
                    } else {
                        response.json({
                            code: 0,
                            message: 'success',
                            payload: data
                        })
                    }
                })
            }
        })
    }

    getOrderList(request, response) {
        Orders.find().then((resp) => {
            response.json({
                code: 0,
                message: 'success',
                payload: resp
            })
        }).catch((err) => {
            response.json({
                code: 1,
                message: err,
            })
        })
    }
}
module.exports = new OrdersControllers();
