import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: false,
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Frontend':
        return 'code';
      case 'Backend':
        return 'Computer';
      case 'Fullstack':
        return 'developer_mode';
      case 'Mobile':
        return 'smartphone';
      case 'Data-science':
        return 'bar_chart';
      case 'Devops':
        return 'build';
      case 'Design':
        return 'palette';
      case 'Database':
        return 'storage';
      case 'API':
        return 'api';
    }
    return 'code';
  }
}
