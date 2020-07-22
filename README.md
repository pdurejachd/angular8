## Angular8 Bookmarks & Snippets

* Angular Routing
  * https://www.tutorialandexample.com/routing-in-angular-8/
  * https://www.tutorialspoint.com/angular7/angular7_routing.htm
  * https://www.youtube.com/watch?v=tUCa3JcFILI
  * https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/


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
