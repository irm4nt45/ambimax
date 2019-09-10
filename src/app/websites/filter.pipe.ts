// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   // transform(value: any, filterString: string, propName: string): any {
//   //   if (value.length === 0 || filterString === ""){
//   //     return value;
//   //   }
//   //   const resultArray = [];
//   //   for(const item of value){
      
//   //     if(item[propName] === filterString){
//   //       resultArray.push(item);
//   //     }
//   //   }
//   //   return resultArray;
//   // }

//   transform(items: any, 
//     filterString1: string, 
//     propName1: string, 
//     filterString2: string, 
//     propName2: string): any {
//     if (items && items.length){
//       return items.filter(item =>{
//           if (filterString1 && item.date.toLowerCase().indexOf(filterString1.toLowerCase()) === -1){
//               return false;
//           }
//           if (filterString2 && item.category.toLowerCase().indexOf(filterString2.toLowerCase()) === -1){
//               return false;
//           }
//           return true;
//      })
//   }
//   else{
//       return items;

// }
//     }
//   }