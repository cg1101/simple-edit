import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

import { MyTestComponent } from './my-test/my-test.component';
import { MyEditorComponent } from './my-editor/my-editor.component';
import { SimpleEditDirective } from './simple-edit.directive';
import { SimpleEditorComponent } from './simple-editor/simple-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
  ],
  declarations: [
    MyTestComponent,
    MyEditorComponent,
    SimpleEditDirective,
    SimpleEditorComponent,
  ],
  exports: [
    FormsModule,
    MyTestComponent,
    MyEditorComponent,
    SimpleEditDirective,
    EditorModule,
  ]
})
export class SharedModule { }
