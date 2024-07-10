import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(dateStr: string): string {
    const today = new Date();
    const date = new Date(dateStr); // Convert string to Date
    const monthsAgo = today.getMonth() - date.getMonth() + 
                      (12 * (today.getFullYear() - date.getFullYear())); // Calculate difference including year
    if (monthsAgo !== 0) {
      return `${monthsAgo} months ago`;
    } else {
      const daysAgo = today.getDay() - date.getDay() + 
                      (12 * (today.getFullYear() - date.getFullYear()));
      return `${daysAgo} days ago`;

    }
  }




}
