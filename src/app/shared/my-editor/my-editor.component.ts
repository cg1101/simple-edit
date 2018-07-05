import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditData } from '../simple-edit.directive';

@Component({
  selector: 'app-my-editor',
  templateUrl: 'my-editor.component.html',
  styleUrls: ['my-editor.component.scss']
})
export class MyEditorComponent implements OnInit {

  @Input()
  enableAdvancedMode? = false;

  private _advancedMode = false;
  get advancedMode() {
    return this._advancedMode;
  }
  set advancedMode(isAdvancedMode) {
    this._advancedMode = isAdvancedMode;
  }


  get editData(): EditData {
    return this._editData;
  }
  set editData(data: EditData) {
    this._editData$.next(this._editData = data);
  }

  readonly maxLength = 140;
  readonly placeholderText = 'Enter ad copy here...';

  characterCount$: Observable<number>;

  private _editData: EditData = {
    html: '',
    text: '',
    count: 0
  };
  private _editData$ = new BehaviorSubject<EditData>(this._editData);

  constructor() {
    this.characterCount$ = this._editData$.pipe(
      map(d => d.count)
    );


  }

  ngOnInit() {
  }

  dataChanged(data: EditData) {
    this._editData$.next(data);
  }

  clear() {

  }
}
