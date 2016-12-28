# ng2-gui-messages

## Installation

To install this library, run:

```bash
$ npm install ng2-gui-messages --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ng2-gui-messages library
import { MessageModule, MessageService } from 'ng2-gui-messages';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify ng2-gui-messages library module as an import
    MessageModule
  ],
  // Specify ng2-gui-messages library service as a provider
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<h1>
  {{title}}
</h1>
<messages-component></messages-component>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Octavio Garbarino](octaviogarbarino@gmail.com)
"# ng2-gui-messages" 
