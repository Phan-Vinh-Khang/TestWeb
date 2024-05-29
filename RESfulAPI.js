/*
phải xử lí những case ko ton tai
nếu user sử dụng các postAPI để gửi req
nếu 1 req mà k tồn tại sẽ lỗi server
(
detail user sẽ tim theo id của req dc gửi từ client nhưng nếu 1 user sử dụng postAPI để gửi id ko ton tai trong
db,db sẽ k tim dc và sẽ return err lỗi server
thêm if(!dataUser) res.json({message:'ko tim thay user'}) se ko
bi loi server
)

khi gửi 1 request sẽ gửi 1 objreq đến server,có thể sử dụng config để thêm các properties trong objreq
(có thể sử dụng config để thêm các varproperti trong varproperti headers)
varproperties sau khi dc gửi đến sẽ chuyển thành lowercase
({
    fileName:'a'
    sau khi đến server varproperti sẽ thành filename
})
*/