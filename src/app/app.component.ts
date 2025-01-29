import { Component, DestroyRef, OnInit, effect, inject, signal } from '@angular/core';
import {interval, map} from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickcount = signal(0);
  constructor(){
    effect(() => {
      console.log(`Clicked button ${this.clickcount()} times`);
    })
  }
  ngOnInit(): void {

      // const subscription =interval(1000).pipe(
      //   map((val) => val * 2)

      // ).subscribe({
      //   next:(val) => console.log(val),
      // });

      // this.destroyRef.onDestroy(()=>{
      //         subscription.unsubscribe();
      //   });
       
    }
    onclick(){
      this.clickcount.update(prevCount => prevCount+1);
}

}