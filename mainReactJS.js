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

useState() function
useState() sẽ tương tự như đặt 1 var ngoài funcreturnvềelement
[test,setTest]=useState(1);
useState() func return value static
test var
setTest() func return value static
setTest(test+10) sẽ return về 11
khi sử dụng setTest() sẽ reload lại funcreturnvềelement
những lần call sau var test sẽ ref đến value static setTest
preState=>preState+1 return về value
preState var
có thể đặt function vào useState(()=>{return 1;})
useState chỉ lấy value return về để chạy
useState() sẽ return undefine hoặc false
useState() return true
mỗi lần call setTest() sẽ reload lại funcreturnvềelement
static ko bị xóa khi reload lại funcreturnvềelement
sau khi call setTest() funcreturnvềelement sẽ reload lại khi chạy hết function
khi reload web lại var useState sẽ ref vào data static setTest() vừa cập nhật
setState phải đặt ở event như onclick,.... để ko liên tục callback lại function

useEffect(()=>{})
đặt setState() trong useEffect() sẽ call và reload func liên tục nếu ko đặt trong event(onClick,....)
sẽ ko reload nữa nếu data trong static data giống với static data trước đó 
default useEffect() sẽ tự check static data hiện tại và static data trước đó
nếu data static giống nhau và ko có arg2 sẽ reload 2 lần, nếu có arg2 chỉ reload 1 lần

useEffect(()=>{},[])
chỉ reload 1 lần
sau khi reload 1 lần sẽ check data static và arg2(đặt [] ở arg2 sẽ copy data static trước đó sang data static hiện tại)

useEffect(()=>{},[var])
nếu có nhiều useState() sử dụng trong funcreturnvềelement ,muốn check data static hiện tại và trước đó của useState() nào, đặt var useState() vào useEffect() để check
có thể đặt var useState() vào arg2, nếu static value var hiện tại giống với static value var trước đó sẽ ko reload nữa
sẽ ko reload nữa nếu data trong static data giống với static data trước đó

useEffect() sẽ check data static hiện tại và data static trước đó của setState()
nếu data static giống sẽ ko reload
setState() nếu ko đặt trong useEffect() sẽ reload mà ko cần check data static setState() hiện tại và setState() trước đó

sau khi render xong sẽ quay lại xử lí code trong func useEffect()
useEffect() ưu tiên load giao diện người dùng trước,code có chạy lâu thì giao diện vẫn hiện ra trước cho
users sử dụng, trong lúc users sử dụng web,sẽ quay lại useEffect() sẽ xử lí code
tránh trường hợp code trong useEffect() chạy 5s user phải đợi 5s mới hiện ra giao diện

nếu data static hiện tại có value giống data static trước đó useEffect sẽ ko ref đến static hiện tại nữa

cleanevent useEffect()
khi unmount 1 funcreturnvềelement chỉ funcreturnvềelement đó dc unmount
event đã chạy trong funcreturnvềelement đó vẫn còn chạy
useEffect(
return ()=>{
    window.removeEventListener('scroll', test)
}
)
trước khi reload và unmount sẽ chạy return trong useEffect()

useLayoutEffect(()=>{

},[])
// xử lí useLayoutEffect() trước khi return về element
// nếu code trong useLayoutEffect() chạy lâu có thể làm cho UI người dùng 1 lúc sau mới hiển thị

Mỗi lần reload là 1 function func11{} mới, như call 1 func 2 lần

useRef() create 1 static (như đặt 1 var ngoài function)
useRef(init) chỉ chạy 1 lần,những lần reload sẽ k chạy lại nữa(như useState())
useRef() return obj
có thể sử dụng useRef() và useEffect() để ref đến value static useState() trước đó
sau khi reload và return element xong mới chạy useEffect() để ref lại useRef vào static useState() hiện tại
trước khi chạy useEffect useRef vẫn còn ref vào static trước đó
có thể ref đến element
<p ref={testref}>
<p/>



*/
