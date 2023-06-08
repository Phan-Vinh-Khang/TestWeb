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
*/