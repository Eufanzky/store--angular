import { Component, signal } from '@angular/core';


import { CounterComponent } from '@shared/components/counter/counter.component';
import { HighlitghtDirective } from '@shared/directives/highlitght.directive';
import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HighlitghtDirective, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement; 
    this.duration.set(input.valueAsNumber);
  }
  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement; 
    this.message.set(input.value);
  }
}
