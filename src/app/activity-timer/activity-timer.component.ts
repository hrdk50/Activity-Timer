import { Component, OnInit,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-activity-timer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './activity-timer.component.html',
  styleUrls: ['./activity-timer.component.css']
})
export class ActivityTimerComponent implements OnInit {
  startObservable: Observable<number>;
  counter = 0;
  display :boolean;
  private subscripction : Subscription;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("hello");
    this.startObservable = Observable.timer(100, 100).take(105);
  }

  onStratClick(){
    this.display = true;
   
    this.startObservable.subscribe((v) => {
      console.log('got value', v);
      this.counter++;

      if (this.counter % 5 === 0) {
        this.changeDetector.markForCheck();
        //console.log(this.counter);
      }
      
    },
    null,
    () => {
      this.changeDetector.markForCheck();
    });
  }

  onClickEnd(){
     // this.display = false;
      // this.counter = 0;
      // if(this.counter == 0){
      //   this.startObservable = Observable.timer(0);
      // }
      this.startObservable = Observable.timer(0);
      this.changeDetector.detach();
      if(this.changeDetector.detach){
        // this.startObservable.subscribe((v)=>{
        //   console.log('stop',v);
        //   this.counter = 0;
        // })
    
      }
      
  }
 
}
