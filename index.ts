import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MessagesComponent} from "./src/messages.component";
import {MessageService} from "./src/message.service";

export * from './src/messages.component';
export * from './src/message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessagesComponent,
  ],
  exports: [
    MessagesComponent,
  ]
})
export default class MessageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessageModule,
      providers: [MessageService]
    };
  }
}
