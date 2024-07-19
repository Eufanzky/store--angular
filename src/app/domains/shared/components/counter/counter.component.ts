import { Component, Input, SimpleChanges, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor( @Inject(PLATFORM_ID) private platformId: Object) {
    //No Async
    //before render
    console.log('CounterComponent constructor');
    console.log('-', repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //No Async
    //before and during render
    console.log('CounterComponent ngOnChanges');
    console.log('changes', changes);
    console.log('-', repeat(10));
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //Async
    //after render
    //only runs once
    console.log('CounterComponent ngOnInit');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    console.log('-', repeat(10));
    if(isPlatformBrowser(this.platformId)){
      this.counterRef = window.setInterval(() => {
        console.log('run interval')
        this.counter.update(statePrev => statePrev + 1);
      },1000)
    }

  }

  ngAfterViewInit() {
    //Async
    //after render
    //sons have been rendered
    console.log('CounterComponent ngAfterViewInit');
    console.log('-', repeat(10));
  }
  ngOnDestroy() {
    //Async
    //before render
    console.log('CounterComponent ngOnDestroy');
    console.log('-', repeat(10));
    if(isPlatformBrowser(this.platformId)){
      window.clearInterval(this.counterRef);
    }
  }
  doSomething() {
    console.log('change duration');
  }
}
