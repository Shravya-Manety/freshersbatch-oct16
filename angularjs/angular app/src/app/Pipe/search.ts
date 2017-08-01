import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'SearchPipe'
})
export class SearchAd implements PipeTransform {
  transform(value: any[], ...args:string[]): any[]
  {
    
        let arr:Array<any>=[];
        if(args[0]=='' || args[0]===undefined || value===undefined)
        {
            return value;
        }
        value.forEach((advertise) => {
            if(advertise.Name.includes(args[0]) || advertise.Category.includes(args[0]))
            {
                arr.push(advertise);
                console.log(advertise);
            }

        })
    return arr;
  }
}