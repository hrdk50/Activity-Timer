import { Component, OnInit } from '@angular/core';
import { Observable,Subject} from 'rxjs/Rx';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  count: number;
  counter: Observable<number>;
  display :boolean;
  displayendtime : boolean = false;
  timeup : boolean = false;
  private unsubscribe: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
   
  }

  onStratClick(){
    
    console.log('[takeUntil] on start click');

    this.counter = new Observable<number>(observer => {
      console.log('[takeUntil] Subscribed');

      let index = 0;
      const interval = setInterval(() => {
        index++;
        console.log('[takeUntil] next: '+index);
        observer.next(index);
        if(index == 10){
          console.log("Your time is up");
          this.timeup = true;
          this.onClickEnd();
        }
      }, 1000);

      // teardown
      return () => {
        console.log('[takeUntil] Teardown');
        clearInterval(interval);
      }
    });

    this.counter
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (value) => this.count = value,
      (error) => console.error(error),
      () => console.log('[takeUntil] complete'),
    );
  }

  onFirstActivity(){
    this.display = true;
  }

  onSecondActivity(){
    this.display = true;
  }

  onClickEnd(){
    this.display = false;
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.displayendtime = true;
  }

  onReset(){
    window.location.reload();
  }

}
