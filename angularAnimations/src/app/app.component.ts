import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { AppModule } from './app.module';
import { query } from 'express';
import { AnimateComponent } from './animate/animate.component';
import { boxAnimations } from './animate/app.animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AnimateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [boxAnimations]
})
export class AppComponent {
  title = 'angularAnimations';
// 
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted(event: AnimationEvent) {
    console.log('Animation started:', event);
  }
  
  animationDone(event: AnimationEvent) {
    console.log('Animation done:', event);
  }
}
