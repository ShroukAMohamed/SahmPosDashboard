import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenStation } from '../../interfaces/kitchen-station.interface';

@Component({
  selector: 'app-station-capacity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station-capacity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./station-capacity.component.scss']
})
export class StationCapacityComponent {
  station = input.required<KitchenStation>();

  percentage = computed(() => {
    const st = this.station();
    const ratio = Math.round((st.currentLoad / st.maxCapacity) * 100);
    return Math.min(100, Math.max(0, ratio));
  });

  statusLabel = computed(() => {
    const st = this.station();
    if (st.status === 'OVERLOADED') return `Critical Load (${this.percentage()}%)`;
    if (st.status === 'WARNING') return `High Load (${this.percentage()}%)`;
    if (st.currentLoad < st.maxCapacity * 0.4) return `Low Load (${this.percentage()}%)`;
    return `Normal Capacity (${this.percentage()}%)`;
  });
}
