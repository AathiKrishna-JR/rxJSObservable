import { Component, DestroyRef, OnInit, computed, effect, inject, signal } from '@angular/core';
import {interval, map} from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickcount = signal(0);
  interval = signal(0);
  doubbleInterval = computed(() => this.interval()*2);
  constructor(){
    effect(() => {
      console.log(`Clicked button ${this.clickcount()} times`);
    })
  }
  ngOnInit(): void {

    setInterval(() => {
      this.interval.update(prev => prev + 1);
    },1000);

      // const subscription =interval(1000).pipe(
      //   map((val) => val * 2)

      // ).subscribe({
      //   next:(val) => console.log(val),
      // });

      // this.destroyRef.onDestroy(()=>{
      //         subscription.unsubscribe();
      //   });
       
    }
    onClick(){
      this.clickcount.update(prevCount => prevCount+1);
}

}