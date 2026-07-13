import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [],
  templateUrl: './empty-state.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  /** The PrimeIcon class for the empty state (e.g., 'pi pi-folder-open') */
  @Input() icon: string = 'pi pi-inbox';
  
  /** The main title of the empty state */
  @Input() title: string = 'No Data Found';
  
  /** The descriptive message explaining the empty state */
  @Input() message: string = 'There is currently no data to display in this section.';
}
