import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIInsight } from '../../state/kitchen-monitor.store';

@Component({
  selector: 'app-ai-insights-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-insights-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ai-insights-grid.component.scss']
})
export class AiInsightsGridComponent {
  insights = input.required<AIInsight[]>();
}
