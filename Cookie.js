/*
server sẽ return về client data cookie và sẽ dc lưu ở client
khi gửi 1 req, client sẽ gửi data trong đó có cookie ở client đến serve
server sử dụng cookie parser để lấy data dc gửi từ client (req.cookie)
1 req đến server sẽ có data body,headers,params,cookie và các req khác

gửi cookie từ client đến server phải kèm withCredentials:true vào req
nếu muốn cookie server gửi về client dc lưu vào client(Storage Cookies) ở req cũng phải có withCredentials:true nếu ko cookie sẽ chỉ hiện ở response

ở server cũng phải có credentials:true để cho phep nhận cookie từ client
*/