/*
include chỉ sử dụng dc nếu đã set association cho table
nên set mối quan hệ 2 chiều cho table để truy xuất dữ liệu của 2 table dựa vào association (1 table hasbelongsTo thìtablekia hasMany)

belongsTo: Mối quan hệ này tạo ra một khóa ngoại trong mô hình nguồn. Ví dụ, nếu bạn có Products.belongsTo(TypeProducts), Sequelize sẽ thêm một khóa ngoại typeprodid vào mô hình Products1.

hasMany: Mối quan hệ này tạo ra một khóa ngoại trong mô hình đích. Ví dụ, nếu bạn có TypeProducts.hasMany(Products), Sequelize sẽ thêm một khóa ngoại typeprodid vào mô hình Products1.

khi sử dụng sequelize để truy vấn table ở csdl, table ở csdl nên có 's' o cuối như products
nếu ko có gay ra err (sequelize sẽ tự thêm 's' vào cuối mà table ở csdl lại ko có 's')
nếu ko muốn sequelize tự thệm 's' vào cưới phải thêm freezeTableName: true

*/