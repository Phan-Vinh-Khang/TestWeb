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

useEffect(()=>{},[state])
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
<p ref={testref}> //testref sẽ ref đến element này
<p/>

memo()
sử dụng khi ko muốn 1 funcreturnvềelement reload lại
memo() sẽ check prop của funcreturnvềelement có bị thay đổi hay ko nếu có 1 prop value thay đổi so với trước đó, funcreturnvềelement sẽ reload lại
memo() sẽ sử dụng === để check prop có bị thay đổi hay ko
nếu 1 funcreturnvềelement cần reload lại sau khi value static useState() thay đổi ko cần sử dụng memo,
nếu sử dụng memo vẫn reload lại bt khi value bị thay đổi nhưng sẽ k cần thiết

callBack(()=>{},[]) và memo()
mỗi lần reload các func trong funcreturnvềelement sẽ create 1 static mới
sử dụng var w=callBack(,[]) để chạy 1 lần(create static 1 lần những lần reload sau sẽ ko create 1 static mới)
sau đó w sẽ ref vào static đó
nếu deps bị thay đổi sẽ create 1 static mới và w sẽ ref vào static mới

useMemo(,[state])
sau khi reload check state hiện tại và trước đó có thay đổi ko
nếu có thay đổi chạy func trong useMemo() còn ko thì ko chạy
sử dụng để ko bị load những func,code ko can thiet mỗi khi reload funcreturnvềelement
nếu deps thay đổi mỗi khi reload mới chạy func trong useMemo()

var [reducer,dispatch]=useReducer(func,static state)
create 1 static stateReducer
reducer sẽ ref static state
dispatch sẽ ref vào func
call dispatch sẽ return về 1 static state sau đó sẽ reload và reducer sẽ ref vào static vừa create

createContext()
create 1 Context() để wrap elements
các elements dc wrap sẽ có thể sử dụng dc value của Context()
useContext()
sử dụng value của Context() trong 1 func dc specify

CSS module
đặt lại tên CSS của từng filename CSS
đặt lại 1 name unique cho từng classname trong file css
return về 1 obj
(name trong file css sẽ như var và sẽ  refvào)
thường đặt classname theo camelcase

Router,Routes,Route,Link
Ấn vào link <a href="test"></a>
chỉ có 1 Router wrap toan bo trang
1 Routes sẽ wrap các Route
1 Route ref đến funcreturnvềelement khi path == href của link <a>
Link sẽ thay thế element <a>
Load funcreturnvềelement ko cần load lại trang

import
nếu ko spicify tên file khi import thì sẽ ref đến file index trong thư mục
nếu export có {} thi phai import {}
có thể khi call funcreturnvềelement sẽ có các properties default do lib thêm vào

khi setState sẽ create 1 data static func returnvềelement với state mới
func vừa create sẽ bắt đầu chạy cùng lúc với func trước đó nếu func trước đó vẵn chưa chạy xong sau khi setState

khi vào link hoặc sử dụng url để đến 1 trang nào đó sẽ luôn reload func <App/> lại tu dau
nhưng nếu link đó dc sử dụng Route <Link> hoặc chuyển hướng sẽ k reload lại func <App/>

1 func dc call nếu var func ref vào 1 doi so la func,var func đó sẽ ref vào datastatic của func đó(sẽ sử dụng dc cac var,datastatic bên ngoài func)
1 var func ref vào doi so var func sẽ ref đến staticdata (ko phai create 1 data tuong tu sang ben func dc call)

call func dùng doi so obj va var func dùng var obj với các properties để ref vào data doi so
sẽ k cần dung vị trí (các properties của car obj sẽ tìm dung properties để ref vào)
và sẽ ít loi hon (nếu doi so nhiều var properties hon properties của var obj các properties trong var func obj
sẽ chỉ ref vào các properties doi so ton tai,
nếu var obj có nhiều properties hơn các properties ko tim thấy var properties của doi so sẽ ref vào undefine
nhung nếu sử dụng var obj func các properties doi so phải dung tên với properties var obj

obj.map((item)=>()) su dung () ko can return
obj.map((item)=>{}) su dung {} can return

sử dụng Promise((ok,err)=>{}) đặt trong try catch để return về loi để vào catch,
lúc này nếu có loi sẽ dừng và return về loi và vào catch(e) var e của catch sẽ ref vào loi promise vừa return
su dung return trong promise (return ok() hoac return err() ),
nếu k có return ở trước sẽ tiep tuc chay cho đến hết promise()

sử dụng setState khi muốn reload lại giao diện hoac khi giao diện có 1 funcreturnvelement cần data ở input của 1 funcreturnvelement khác
lúc này cần reload để chạy lại funcreturnvelement để nhận du liệu mới
nếu ko reload du lieu moi sẽ chỉ o datastatic

chỉ cần du lieu de xử lí k cần thể hiện ra giao diện thi k can reload
ko muốn bị mat datastatic do 1 state khác reload lai func sử dụng datastaticstate
nếu 1 state khác reload var datastaticstate sẽ k ref vào datadefault
(let a=''
sau khi có data a='data', nhung 1 state nao do reload var a sẽ ref vào ''
còn var usestate sẽ chỉ ref vào data default 1 lần
để k mất data khi 1 state khác reload nen sử dụng datastaticstate
)

chi reload khi var state ref vao 1 datastatic mới
(
    state1,
    setState(state1) như này sẽ k reload do sẽ ref lại vào datastatic cu
    setState({...state1}) như này sẽ ok do ref vào datastatic mới
)
element(<span>,....) sẽ chỉ reload lại những element đã thay đổi so với element trước đó
các element(<td>,....) ko thay đổi sẽ k bi reload
nen su dung setState neu ko co the loi 1 vai truong hop
call funcreturnve element (<Element/>) default sẽ có 1 varproperties children
các element,data đặt trên element (<Element> test </Element>) default properti children sẽ ref vào
co thể ghi <Element children={data} data={<img src=''/>} />

setState create 1 func tuong tu với datastatic mới ở func vừa create đó
ở func cũ nếu vẫn còn chạy thì datastate vẫn là data cũ

chỉ cần khi reload 1 funcreturnveelement ,funcreturnveelementchild dc call lai ngay thì datastaticstate sẽ k bi mat (reload 1 func nền và sẽ call lại func đặt trong func nền,lúc này datastatic sẽ k bi mat)
nếu khi reload ma funcchild ko dc call lại thì datastaticstate ở func ko dc call lại(funcchild) sẽ bi mất(chỉ cần 1 lần func ko dc call để mount thì lúc call lại func đó datastatic state sẽ dc init lại về default value)

cb của useEffect(()=>{}) ko dc return nếu ko sẽ gay ra err

các event nên dc đặt vào useEffect để có thể gỡ event đó khi element dc unmount
và đặt vào useEffect() sẽ đảm bảo rằng khi sự kiện được thêm vào, tất cả các phần tử DOM mà sự kiện có thể tương tác đều đã sẵn sàng.

ưu tiên sử dụng href để redirect,
nếu muốn ko có hiệu ứng load sử dụng useNagavite()

khi sử dụng nested route,path route parent phải có kí tự '*'
ở đuôi để có thể truy cập vào route[i],nếu ko có thì thi nhập url như
/order/settings nó sẽ vào route[*] do route ko có kí tự * route ở parent
sẽ so tất cả url path với route path,và route path ở parent thì ko có bất kì path
nào là '/order/settings' chỉ có '/order'
*/