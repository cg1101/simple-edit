import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-my-test',
  templateUrl: 'my-test.component.html',
  styleUrls: ['my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  isAdvanced$: Observable<boolean>;

  _isAdvanced$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.isAdvanced$ = this._isAdvanced$.asObservable();
  }

  ngOnInit() {
  }

}
