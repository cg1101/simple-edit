import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-editor',
  templateUrl: 'my-editor.component.html',
  styleUrls: ['my-editor.component.scss']
})
export class MyEditorComponent implements OnInit {

  readonly maxLength = 140;
  readonly placeholderText = 'Enter ad copy here...';

  constructor() { }

  ngOnInit() {
  }

}
