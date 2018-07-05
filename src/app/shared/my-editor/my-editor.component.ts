import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditData } from '../simple-edit.directive';

@Component({
  selector: 'app-my-editor',
  templateUrl: 'my-editor.component.html',
  styleUrls: ['my-editor.component.scss']
})
export class MyEditorComponent implements OnInit {

  readonly maxLength = 140;
  readonly placeholderText = 'Enter ad copy here...';

  characterCount$: Observable<number>;

  private _editData$ = new BehaviorSubject<EditData>(<EditData>{
    html: '',
    text: '',
    count: 0
  });

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
