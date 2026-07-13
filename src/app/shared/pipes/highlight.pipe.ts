import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string): string {
    if (!search || !text) {
      return text;
    }
    const pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    const regex = new RegExp(`(${pattern})`, 'gi');
    return text.replace(regex, `<span class="bg-primary/30 text-primary font-bold rounded px-0.5">$1</span>`);
  }
}
