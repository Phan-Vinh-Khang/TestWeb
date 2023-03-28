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

POST
luu data
ref.body return obj data from client
properties obj sẽ là name trong tag input
properties obj sẽ ref vào value input

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
*/