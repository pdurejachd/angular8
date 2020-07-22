## Angular8 Bookmarks & Snippets

```
ANGULAR ROUTING
```
* ARTICLES
  * https://www.tutorialandexample.com/routing-in-angular-8/
  * https://www.tutorialspoint.com/angular7/angular7_routing.htm
  * https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/
  
* YOUTUBE
  
  DESCRIPTION | LINK
  ----------- | ----
  Programming with Mosh | https://www.youtube.com/watch?v=tUCa3JcFILI
  Codeevolution | https://www.youtube.com/watch?v=Nehk4tBxD4o
  
```
WORKING WITH FORMS
```
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
