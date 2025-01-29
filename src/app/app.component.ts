import { Component, DestroyRef, OnInit, computed, effect, inject, signal } from '@angular/core';
import {interval, map} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickcount = signal(0);
  clickCount$ =toObservable(this.clickcount)
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$,{initialValue: 0});
  // interval = signal(0);
  // doubbleInterval = computed(() => this.interval()*2);
   constructor(){
    // effect(() => {
    //   console.log(`Clicked button ${this.clickcount()} times`);
    // })
    // toObservable(this.clickcount)
  }
  ngOnInit(): void {

    // setInterval(() => {
    //   this.interval.update(prev => prev + 1);
    // },1000);

      // const subscription =interval(1000).pipe(
      //   map((val) => val * 2)

      // ).subscribe({
      //   next:(val) => console.log(val),
      // });

      // this.destroyRef.onDestroy(()=>{
      //         subscription.unsubscribe();
      //   });
      const subscription =this.clickCount$.subscribe({
        next : (val) => console.log(`Clicked button ${this.clickcount()} times`)


      })
       
    }
    onClick(){
      this.clickcount.update(prevCount => prevCount+1);

}

}