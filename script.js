function label_create(tagname,attrname,attrvalue,content)
{
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname,attrvalue);
    label_ele.innerHTML = content;
    return label_ele;
}
function break_create()
{
    var break_create = document.createElement("br");
    return break_create;
}
function input_create(inputtag, attrname1, attrvalue1, attrname2,attrvalue2)
{
    var input_ele = document.createElement(inputtag)
    input_ele.setAttribute(attrname1,attrvalue1);
    input_ele.setAttribute(attrname2,attrvalue2);
    return input_ele;
}
function sub(inputtag, attrname1,attrvalue1,attrname2,attrvalue2,content)
{
    var sub_ele = document.createElement(inputtag);
    sub_ele.setAttribute(attrname1,attrvalue1);
    sub_ele.setAttribute(attrname2,attrvalue2);
    sub_ele.innerHTML = content;
    return sub_ele
}

document.body.append(label_create("label","for","firstname","Firstname"));
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","firstname"));

document.body.append(break_create());

document.body.append(label_create("label","for","middlename","Middlename"));
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","middlename"));

document.body.append(break_create());

document.body.append(label_create("label","for","lastname","Lastname"));
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","lastname"));

document.body.append(break_create());

document.body.append(label_create("label","for","email","Email"));
document.body.append(break_create());
document.body.append(input_create("input","type","email","id","email"));

document.body.append(break_create());

document.body.append(label_create("label","for","location","Location"));
document.body.append(break_create());
document.body.append(input_create("input","type","text","id","location"));

document.body.append(break_create());
document.body.append(break_create());

document.body.append(sub("button","type","button","onclick","foo()","Click me"));

function foo()
{
    var firstname = document.getElementById("firstname").value
    var middlename = document.getElementById("middlename").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var location = document.getElementById("location").value
    console.log(firstname);
    console.log(middlename);
    console.log(lastname);
    console.log(email);
    console.log(location)
}

