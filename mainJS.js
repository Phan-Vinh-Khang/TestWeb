/*
{
var: có thể declare cùng name trong 1 block,
var declare sau sẽ ref đến var declare trước(nhưng sẽ ko thường dùng)
region:no region

let: ko thể declare cùng name trong 1 scope
region:block

const: declare phải có value(required),
ko thể declare cùng name trong 1 scope,
đối với có object,arr có thể có thể thay đổi các
values(like arr[i],arr[i].name),....)
region:block

1 name đã declared ko thể redeclare name đó với 1 let,const
exception: var và var

nếu ko declare var,let,const thì default sẽ là var

=== phải cùng datatype
'' và "" là như nhau

typeof [varname]: xem datatype

object obj={name:value,name:value,:name:value}
name(col) nếu convert sang table
It is acommon practice to declare objects with the const keyword.

1 func trong 1 object sử dụng this để ref đến properties trong object
nếu ko sử dụng this nó sẽ ref đến var name ở ngoài object nếu varname đó tồn tại

có thể sử dụng this để ref đến chính block hiện tại

1 func sử dụng this sẽ ref đến var name ở ngoài func
ko sử dụng this sẽ ref đến var name trong func

Event của js:
onclick: event click
onchange: event 1 element bị thay đổi tầng block
onmouseover: event mousehover
onmouseout: event mouseleft
onkeydown: event keydown
onload: event khi đã load trang xong

Comparing 2 obj với nhau sẽ return false 

str.slice(start,end)
nếu position start,end <0 vị trí sẽ bắt đầu ở cuối string

str.substring(start,end)
như slice nhưng nếu position start,end < 0 thì default sẽ là 0

str.substr(start,length)

str.replace("substr","string replace")
chỉ replace substring đầu tiên tìm thấy
sử dụng /substr/g để replace tất cả substr tìm thấy

str.replaceAll("substr","string replace")
replace all tất cả substr dc tìm thấy
(common)

str.toUpperCase()
str.toLowerCase()

str.split(string)
return về arr
nếu tìm thấy kí tự string sẽ substr từ position tìm thấy đến start
,sau đó sẽ remove kí tự vừa substr ra khỏi str,tiếp tục tìm cho đến end
nếu string=="" thì sẽ convert string to arr
str.trim()
loại bỏ ký tự space (" ") ở đầu và cuối string

str.trimStart()
loại bỏ ký tự space (" ") ở đầu string

str.trimEnd()
loại bỏ ký tự space (" ") ở cuối string

str.padStart(maxlength,string)
nếu str.length()<maxlength sẽ ký tự string sẽ thêm vào đầu str cho đến khi string.length()==maxlength

str.padEnd(maxlength,string)
nếu str.length()<maxlength sẽ ký tự string sẽ thêm vào cuối str cho đến khi string.length()==maxlength

str.charAt(position)
return về char tại position

str.charCodeAt(position)
return về acsii tại position

str.indexOf(string,position?=0)
return idx xuất hiện đầu của string nếu tìm thấy
return -1 nếu không tìm thấy
tìm từ 0 đến end
position: vị trí bắt đầu tìm

str.lastIndexOf(string,position?=0)
return idx xuất hiện cuối của string nếu tìm thấy
return -1 nếu không tìm thấy
tìm từ end đến 0
position: vị trí bắt đầu tìm

str.search(string)
như str.indexOf() nhưng ko điều chỉnh vị trí tìm kiếm dc
luôn tìm từ 0 đến end

str.match(string)
return về 1 string arr các substr dc tìm thấy strong str
phải sử dụng regular expression /string/g để tìm đến end str
nếu không sẽ dừng lại nếu tìm dc từ đầu tiên

str.matchAll(string)
return về 1 iterator ref vào tất cả các substr dc tìm thấy
nếu sử dụng regular expression phải có 'g'(/string/g) nếu ko sẽ error

str.includes(string,position?=0)
return về true nếu substr dc tìm thấy
position: vị trí bắt đầu tìm

str.startsWith(string,position?=0)
return true nếu value dc chỉ định nằm ở đầu str

str.endsWith(string,position?=0)
return true nếu value dc chỉ định nằm ở cuối str

${var}
chỉ nhận var
các var trong ${} sẽ tostring
chỉ dùng dc trong dấu ``

Js sẽ convert string số thành số ngoài trừ +
120/"2"
120/"a" sẽ ra kết quả ko hợp lệ

BigInt(number) or 123n

toString()
toFixed(number)
toPrecision(number)
return về 1 string với length number
valueOf() chuyển number dạng object về number(ít sử dụng)

Number(number)
string to number
Number.isInteger(number)
return true nếu là int
Number.isSafeInteger(number)
return true nếu number từ -(2^53 - 1) đến +(2^53 - 1).

Number.MAX_VALUE
return về số lớn nhất có thể sử dụng trong Js(BigInt)
Number.MIN_VALUE
return về số nhỏ nhất có thể sử dụng trong Js(BigInt)
Number.MAX_SAFE_INTEGER
return về số (2^53 - 1)
Number.MIN_SAFE_INTEGER
return về số -(2^53 - 1)

export
1 var,func,.... phải tồn tại mới export dc
export default [var,function,....]
1 file nên có export default,khi import [exportname] ko tồn tại sẽ import [exportdefault]
(ko gây ra error)
export {[var,func,....]}
exportname trong {} thì import cũng phải {} mới import dc nếu ko sẽ import exportdefault
hoặc error nếu ko có exportdefault

import [exportname],{[exportname,....]} from 'path'
[exportname] exportname, nếu exportname ko tồn tại default sẽ import [exportdefault]
import {[exportname,....]} from 'path'
nếu export {} thì import cũng phải có {} và absolute name nếu ko sẽ error
import * as [name] from 'path'
import tất cả những gì file export
name:object

InnerHTML get;set; tầng block của element

console.log và console[log] là như nhau
[[name]] sẽ return .[name]

nếu 1 obj chưa có properties có thể sử dụng var.[properties] bất kì
nhưng sẽ ko chứa value
có thể define mọi properties (var.test="a",var.test2=1,....)

spread có thể ref cả var và values (toàn bộ arg)
(
    functon test({a,...a2(2,3,"w",d="d2) }){
        //a=1;
        ...a2=[2,3,w,d=d2]
        consolog ra tat ca su dung for?
    }
    test(1,2,3,"w",d="d2")
    Nếu sử dụng cho
)
...obj sẽ create 1 obj tuong tu
nhưng như spicify vào 1 properties trong obj,data trong properties đó sẽ bị mat
obj={
    test:{
        test1:'a',
        test2:'b
    }
    test2:{
        test1:'c',
        test2:'d'
    }
}
{
    ...obj,
    test2:{ (spicify properties test2,data test2 sẽ bị mất)
        ...obj.test2, (properties test2 ref vào 1 obj có nhiều properties muốn thay đổi 1 properties và giữ lại toàn bộ properties khác su dung spread)
        test2:'a'
    }
}
var sẽ ref đến static data thì dung
var1->var2->var3->static data(dung)(var1->static data)
data doi so la 1 func

cac func truyen doi so la func (co san cua js,lib,....) se hoat dong nhu sau:
funcstatic dc call sẽ có 1 varfunc ref vào data doi so func do dev truyen vao
sau khi func xu li xong se call varfunc(varfunc ref vao func cua dev) sau do tryen data doi so cho func dev neu co
tiep tuc xu li func dev
(
    .then((data)=>{
        consoel.log(data)
    })
    hoac
    let a=(data)=>{
        consoel.log(data)
    }
    .then(a)

    static func then:
    then(data1Dev,data2dev?='',data3dev?=''){//thong thuong co the func nay se k return(chay func do dev truyen vao la xong)
        //xu li code cua func then,co the return ve data gi do
        (data=[data1,data2,data3,data4,data5]
        //sau khi co data sẽ dua data này cho dev de xu li
        //var data1dev sẽ ref den datastaticfunc của dev va truyen data gi do dc return trong func then vao func cua dev
        data1Dev(data)
        //data1Dev(data) gan nhu se dc goi sau cung,de return ve data cua func hien tai moi co data truyen vao funcdev


        function onChange(data1Dev){
            //return thay doi o input
            let a='data thay doi o input'
            data1Dev(a)
        }
        onChange((dataThayDoi)=>{var func nay sẽ ref den datastatic dc return trong func onChange
        console.log(dataThayDoi.target.value)
        })
    }
)
bếu truyền 1 doi so là obj,list thì varfunc sẽ ref đến datastatic của data đó và khi có thay đổi sẽ thay đổi data ở datastatic
nếu là 1 string,int thì chỉ có thể thay đổi ở func dc call,data ở noi gọi func sẽ k bi thay đổi
*/