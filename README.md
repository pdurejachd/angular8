## Angular8 Snippets

* Working with Forms
  * Reactive Forms
    * Import ReactiveFormsModule to app.module.ts
      ```
      import { ReactiveFormsModule } from '@angular/forms';
      Add entry of ReactiveFormsModule inside imports: [] section
      ```
     * In order to use ReactiveForms a Component need to declare form fields as FormControl,
         ```
         import { FormControl } from '@angular/forms';
         
         email = new FormControl('');
         Using FormControls in html
         <input type="text" [formControl]="email"/>
        ```
