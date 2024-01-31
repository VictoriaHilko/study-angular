import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bounce, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-animate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animate.component.html',
  styleUrl: './animate.component.css',
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition(
        '* => void',
        useAnimation(bounceOutUp, {
          params: {
            timing: 3,
            delay: 0.5,
          },
        })
      ),
    ]),
  ],
})
export class AnimateComponent {
  visible = true;
}
