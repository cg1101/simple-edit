import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EditData } from '../simple-edit.directive';

export const defaultData = <EditData>{
  html: '',
  text: '',
  count: 0,
};

@Component({
  selector: 'app-simple-editor',
  templateUrl: './simple-editor.component.html',
  styleUrls: ['./simple-editor.component.scss']
})
export class SimpleEditorComponent implements OnInit {

  @Input()
  placeholder? = '';

  @Input()
  showCounter? = true;

  @Input()
  maxLength? = 140;

  @Input()
  readonly? = false;

  @Output()
  change = new EventEmitter<EditData>();

  constructor() { }

  ngOnInit() {
  }

}
