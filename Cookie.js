/*
server sẽ return về client data cookie và sẽ dc lưu ở client
khi gửi 1 req, client sẽ gửi data trong đó có cookie ở client đến serve
server sử dụng cookie parser để lấy data dc gửi từ client (req.cookie)
1 req đến server sẽ có data body,headers,params,cookie và các req khác
*/