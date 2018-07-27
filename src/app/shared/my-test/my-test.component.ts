import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { EditData } from '../simple-edit.directive';
import { defaultData } from '../simple-editor/simple-editor.component';

@Component({
  selector: 'app-my-test',
  templateUrl: 'my-test.component.html',
  styleUrls: ['my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  isAdvanced$: Observable<boolean>;

  _isAdvanced$ = new BehaviorSubject<boolean>(true);

  _editData: EditData = defaultData;
  editData$: Observable<EditData>;
  _editData$ = new BehaviorSubject<EditData>(this._editData);

  @Input()
  set data(newData: EditData) {
    this._editData$.next(this._editData = newData);
  }
  
  constructor() {
    this.isAdvanced$ = this._isAdvanced$.asObservable();
  }

  ngOnInit() {
  }

}
