import { Component, Input } from '@angular/core';
import { MessageService} from './message.service';

@Component({
    selector: 'messages-component',
    templateUrl: 'messages.component.html'
})
export class MessagesComponent {
    
    /**
     * CSS classes used in error messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    errorClasses: String = "alert alert-dismissible alert-danger";

    /**
     * CSS classes used in success messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    successClasses: String = "alert alert-dismissible alert-success";

    /**
     * CSS classes used in warning messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    warningClasses: String = "alert alert-dismissible alert-warning";

    /**
     * CSS classes used in info messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    infoClasses: String = "alert alert-dismissible alert-info";

    private hasErrorMessage = false;
    private errorMessages: Array<string> = [];

    private hasSuccessMessage = false;
    private successMessages: Array<string> = [];
  
    private hasWarningMessage = false;
    private warningMessages: Array<string> = [];

    private hasInfoMessage = false;
    private infoMessages: Array<string> = [];

    public constructor(private messages: MessageService) {
        if (messages.checkReadErrorLoadMessages()){
            this.hasErrorMessage = true;
            this.errorMessages = messages.readErrorLoadMessages();
        }

        if (messages.checkReadSuccessLoadMessages()){
            this.hasSuccessMessage = true;
            this.successMessages = messages.readSuccessLoadMessages();
        }

        if (messages.checkReadWarningLoadMessages()){
            this.hasWarningMessage = true;
            this.warningMessages = messages.readWarningLoadMessages();
        }

        if (messages.checkReadInfoLoadMessages()){
            this.hasInfoMessage = true;
            this.infoMessages = messages.readInfoLoadMessages();
        }
    }

    getErrorMessages(){
        if (this.messages.checkReadErrorLiveMessages()){
            this.hasErrorMessage = true;
            this.errorMessages = this.messages.readErrorLiveMessages();
        }
        return this.errorMessages;
    }

    chechErrorMessage(){
        if (this.hasErrorMessage || this.messages.checkReadErrorLiveMessages()){
            this.hasErrorMessage = true;
            return this.hasErrorMessage;
        } else {
            return false;
        }
    }

    getSuccessMessages(){
        if (this.messages.checkReadSuccessLiveMessages()){
            this.hasSuccessMessage = true;
            this.successMessages = this.messages.readSuccessLiveMessages();
        }
        return this.successMessages;
    }

    chechSuccessMessage(){
        if (this.hasSuccessMessage || this.messages.checkReadSuccessLiveMessages()){
            this.hasSuccessMessage = true;
            return this.hasSuccessMessage;
        } else {
           return false;
        }
    }

    getWarningMessages(){
        if (this.messages.checkReadWarningLiveMessages()){
            this.hasWarningMessage = true;
            this.warningMessages = this.messages.readWarningLiveMessages();
        }
        return this.warningMessages;
    }

    chechWarningMessage(){
        if (this.hasWarningMessage || this.messages.checkReadWarningLiveMessages()){
            this.hasWarningMessage = true;
            return this.hasWarningMessage;
        } else {
            return false;
        }
    }

    getInfoMessages(){
        if (this.messages.checkReadInfoLiveMessages()){
            this.hasInfoMessage = true;
            this.infoMessages = this.messages.readInfoLiveMessages();
        }
        return this.infoMessages;
    }

    chechInfoMessage(){
        if (this.hasInfoMessage || this.messages.checkReadInfoLiveMessages()){
            this.hasInfoMessage = true;
            return this.hasInfoMessage;
        } else {
            return false;
        }
    }
}