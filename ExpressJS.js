/*
SSR
server sẽ return về các html và elements cần thiết
mỗi khi user tương tác server sẽ phải return elements(reload lại trang)
CSR
server sẽ return về file js có tất cả các html và elements
sẽ hiển thị tab hiện tại các element khác sẽ bị ấn đi đến khi user chọn thì sẽ hiển thị các elements bị ấn đó
khi user tương tác sẽ ko reload lại trang vì server đã return các element cần thiết trước đó
khi user cần hiển htị gì sẽ ấn elements và hiển thị elements user cần

NodeJS
package: library nhung o nodeJS su dung tu package
các lib có các static đã dc define sẵn

static file
sẽ return client các file khi truy cập web lan dau
client sẽ có thể truy cập dc những file này nếu mở source hoặc ghi link ở URL
server return html và các className, để elient có thể css dc elements
client phai truy cap dc file css

HTTPS
GET
server return data,html to client
ref.params return obj data from client 
properties obj sẽ là :var trong reftocontroller
properties obj sẽ ref vào value url
action,link dc active với get,post,put,....sẽ hiển thị path trên url
sử dụng GET controller chỉ nhận dc 1 value data từ client

POST
luu data
ref.body return obj data from client
properties obj sẽ là name trong tag input
properties obj sẽ ref vào value input
sử dụng POST controller có thể nhận dc nhiều value data client
(sử dụng POST và ref.params.var để ref vào data url vẫn dc nhưng các dev thuong ko dùng như vậy(RESTful))

Client gui data to controller phải có
<form action="" method="POST">
<input name="var"/> //var sẽ ref vào value input
</form>
và <button type="subbmit"></button>

{var,var,var}=obj
var ref vào properties obj(varname phải chinh xac nhu trong properties trong obj)

Api controller return file json về view
sử dụng get post put delete trong router(sử dụng post để thêm data vẫn dc nhưng để các dev đọc,router nào là thêm,sửa nên đặt theo post,put,....)

Router URL website to controller chỉ ref theo router GET
sử dụng tag <form> có thể ref theo router POST hoặc GET
hoặc sử dụng platform API có thể ref theo router POST,PUT,DELELE,....

Sequelize
sử dụng để query trong terminal để create table,....

trong file models/index.js var db sẽ ref vào database, sử dụng var này để query
create file table trong models để ref vào dc khi sử dụng var db,
các properties file trong models phải có trong database nếu ko lúc query sẽ error
(file có column Des trong table products nhưng database lại ko có,lúc chạy select ko có column des trong db sẽ error)

JS sẽ readline và chạy line đó và tiếp tục readline và chạy line tiếp theo
line1 //line1 cần 3s để return js sẽ ko chờ xử lí xong line1,sau khi read và chạy line1 khi line1 đang sử lí js sẽ tiếp tục read và chạy line2
line2 //nếu line2 cần data của line1 để xử lí sẽ error(line1 chưa return về data)
sử dụng async và await để xử lí xong line1 mới chạy line2
*/