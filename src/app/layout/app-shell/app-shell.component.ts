import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from '../top-navigation/top-navigation.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterModule, TopNavigationComponent],
  templateUrl: './app-shell.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {
}
