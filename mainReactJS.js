/*
React.createElement('element',{'properties'},'block đặt trên block hiện tại','block đặt trên block hiện tại',....)
từ 'properties' đến 'childn' devtool sẽ hiển thị ở props

class,for properties HTML ,ở JsX sẽ là className, htmlFor

properties sẽ nhận tất cả values và hiển thị nó ở props
nếu values nó là properties element(style="",title="",className="") sẽ hoạt động như html properties element
nếu ko sẽ hiển thị và ko hoạt động(str="")

muốn viết Js trong X(<div></div>) phải có {}
<div//X>{//Js}</div//X>

1 func return về elements sẽ gọi là component
1 func return về elements ở props sẽ chỉ xem dc block nền, các elements đặt
trên block nền sẽ ko hiển thị ở props(devtool)
sử dụng 1 func ở JsX sẽ ghi <func1/>,<func1></func1> thay cho { func() }
nếu ghi { func() } thì nó sẽ return về element trong Js, sẽ ko hợp lệ
<func1 title="a",content="b"/>

nên sử dụng camelCase cho properties (chữ sau sẽ uppercase)

1 func return về elements funcname phải uppcase char đầu(required)
var uppcase char đầu sẽ thay dc ElementsName (var ElementA='a')

trong js {} có thể sử dụng html ( {if() <a></a>} )

useState() function,view sẽ thay đổi theo nếu values bị thay đổi(như timer,thread)
useState() sẽ tương tự như đặt 1 var ngoài funcreturnvềelement
[test,setTest]=useState(init);
useState() func return value static
test var
setTest() func return value static
setTest(test+10) sẽ return về 11
khi sử dụng setTest() sẽ call funcreturnvềelement 1 lần nữa
những lần call sau var test sẽ ref đến value static setTest
preState=>preState+1 return về value (có thể dùng setState(preState) để call setState() nhiều lần)
preState var
có thể ref function vào useState(()=>{return 1;})
useState chỉ lấy value return về để chạy
useState() sẽ return undefine hoặc false
useState() return true
mỗi lần setTest() sẽ render lại từng element trong funcreturnvềelement
static ko bị xóa khi reload lại funcreturnvềelement
sau khi call setTest() funcreturnvềelement sẽ reload lại khi chạy hết function
khi reload reload lại var useState sẽ ref vào data setTest() vừa cập nhật











*/
