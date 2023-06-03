/*
Nếu sử dụng localStorage để lưu thông tin user,user có thể vào localStorage để đổi
thông tin lại thành position admin để gửi req đến những route yêu cầu quyền admin
lúc này sẽ gửi req kèm data user ở localStorage(data lúc này đã bị đổi position thành admin)
và có thể truy cập vào những route cần quyền admin
JWT sẽ encode thông tin user thành 1 mã code và khi decode cần có 1 secret key mới decode dc
secret key chỉ dc lưu ở server,user sẽ k biết secret key này để decode và cũng k thể chỉnh sửa thông tin user ở localStorage

sẽ encode data thành 1 mã string và gửi về client
ở server sẽ giữ 1 mã tương tự
khi gửi 1 req khác sẽ kém theo mã JWT đó và ở func(err,data) check sẽ check xem JWT ở client và server có giong không
nếu giong và thời hạn còn sẽ decode đoạn mã JWT đó và var data sẽ ref vào

verify token để check người gửi req có phải là người vừa đăng nhập trước đó hay không
khi có 3 người dùng đăng nhập thành công server sẽ xác nhận có 3 user vừa đăng nhập với 3 token dc lưu ở server

nếu chỉ dùng localStorage để lưu mà ko dùng JWT khi đăng nhập sẽ return về client 1 obj user và dc lưu ở localStorage
người dùng có thể chính sửa id:1 thành id:2,position:user thành admin
và lúc này nếu gửi req đến server sẽ gửi req với obj userdata đã dc chỉnh sửa lúc này người dùng đó có thể truy cập vào
các thông tin dành cho admin hoặc người dùng khác
hoặc nếu chưa đăng nhập cũng có thể tự thêm data cho obj localStorage và gửi req với data vừa tự thêm

khi gửi 1 req với token nếu như có token trong server tức là nguồi này này là 1 trong những người dùng đã đăng nhập thành công trước đó
sẽ decode token này thành 1 objuser và check thông tin để có thể tiep tuc req đến server hay ko

sẽ return về client 2 objuser dc mã hóa(2 token)
1 cái là ngắn hạn
1 cái dài hạn
khi cái ngắn hạn hết thời gian sẽ tu dong gửi req và data dài hạn xuống server
check nếu decode dc token dài hạn thì đó là user vừa đăng nhập thành công trước đó
sẽ create lại 2 token ngắn và dài hạn và return lại client
(ko return lại token dài hạn vì nếu để token dài hạn là 10ngày sau 10ngày token đó sẽ hết hạn các yêu req người dùng đó ko thể gửi đến server dc nữa(token hết hạn)
người dùng phải đăng nhập lại để có 2token mới lại
sử dụng 1 token dài hạn(chỉ cần dài hơn vài giây so với token access?) để cấp lại 2 token mới
và người dùng sẽ ko cần phải đăng nhập lại nữa (sẽ liên tục dc cấp 2token mới khi token access hết hạn)
)
*/