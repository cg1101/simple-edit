import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';

import { MyTestComponent } from './my-test/my-test.component';
import { MyEditorComponent } from './my-editor/my-editor.component';
import { SimpleEditDirective } from './simple-edit.directive';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
  ],
  declarations: [
    MyTestComponent,
    MyEditorComponent,
    SimpleEditDirective,
  ],
  exports: [
    MyTestComponent,
    MyEditorComponent,
    SimpleEditDirective,
    EditorModule,
  ]
})
export class SharedModule { }
