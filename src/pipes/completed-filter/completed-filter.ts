import { List } from './../../models/list.model';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CompletedFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'completedFilter',
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {

  transform(lists: List[], finished: boolean) {
    return lists.filter(list => list.finished === finished);
  }
}
