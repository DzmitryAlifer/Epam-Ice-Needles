import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'orderBy',
  pure: false 
})
export class OrderByPipe implements PipeTransform {

  transform(array, orderBy, asc = true) {
    if (!orderBy || orderBy.trim() == "") {
      return array;
    } 

    if (orderBy == 'posMinusNeg') {
      return Array.from(array).sort((item1: any, item2: any) => {
        if (!asc) [item1, item2] = [item2, item1];
        return this.orderByComparator(item1.positiveVotes - item1.negativeVotes, item2.positiveVotes - item2.negativeVotes);
      });
    } else {
      return Array.from(array).sort((item1: any, item2: any) => { 
        if (!asc) [item1, item2] = [item2, item1];
        return this.orderByComparator(item1[orderBy], item2[orderBy]);
      });
    }    
  }
 
  orderByComparator(a: any, b: any): number {
    if (!a) a = 0;
    if (!b) b = 0;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
}