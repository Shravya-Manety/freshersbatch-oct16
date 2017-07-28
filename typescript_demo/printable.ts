interface IPrintable 
{  
    print: ()=>void 
}
let circle:IPrintable=
{
    print:()=>console.log("Circle to be printed")
}
let employee:IPrintable=
{
    print:()=>console.log("Employee to be printed")
}
var arr:Array<IPrintable>=[circle,employee];
function printAll(arr:Array<IPrintable>):void
{
    arr.forEach(function(element){
        element.print();
    }
    )
}

printAll(arr); 
