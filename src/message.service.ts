import { Injectable } from '@angular/core';
@Injectable()
export class MessageService {
    private hasErrorLiveMessage = false;
    private errorLiveMessages: Array<string> = [];
    private hasErrorLoadMessage = false;
    private errorLoadMessages: Array<string> = [];

    private hasSuccessLiveMessage = false;
    private successLiveMessages: Array<string> = [];
    private hasSuccessLoadMessage = false;
    private successLoadMessages: Array<string> = [];
    
    private hasWarningLiveMessage = false;
    private warningLiveMessages: Array<string> = [];
    private hasWarningLoadMessage = false;
    private warningLoadMessages: Array<string> = [];

    private hasInfoLiveMessage = false;
    private infoLiveMessages: Array<string> = [];
    private hasInfoLoadMessage = false;
    private infoLoadMessages: Array<string> = [];

    constructor() {
    }

    addErrorLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.errorLiveMessages.push(oneMessage);
        });
        this.hasErrorLiveMessage = true;
    }

    addErrorLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.errorLoadMessages.push(oneMessage);
        });
        this.hasErrorLoadMessage = true;
    }

    readErrorLiveMessages(){
        if (this.hasErrorLiveMessage) {
            let result = this.errorLiveMessages;
            this.errorLiveMessages = [];
            this.hasErrorLiveMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadErrorLiveMessages(){
        return this.hasErrorLiveMessage;
    }

    readErrorLoadMessages(){
        if (this.hasErrorLoadMessage) {
            let result = this.errorLoadMessages;
            this.errorLoadMessages = [];
            this.hasErrorLoadMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadErrorLoadMessages(){
        return this.hasErrorLoadMessage;
    }

    addSuccessLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.successLiveMessages.push(oneMessage);
        });
        this.hasSuccessLiveMessage = true;
    }

    addSuccessLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.successLoadMessages.push(oneMessage);
        });
        this.hasSuccessLoadMessage = true;
    }

    readSuccessLiveMessages(){
        if (this.hasSuccessLiveMessage) {
            let result = this.successLiveMessages;
            this.successLiveMessages = [];
            this.hasSuccessLiveMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadSuccessLiveMessages(){
        return this.hasSuccessLiveMessage;
    }

    readSuccessLoadMessages(){
        if (this.hasSuccessLoadMessage) {
            let result = this.successLoadMessages;
            this.successLoadMessages = [];
            this.hasSuccessLoadMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadSuccessLoadMessages(){
        return this.hasSuccessLoadMessage;
    }

    addWarningLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.warningLiveMessages.push(oneMessage);
        });
        this.hasWarningLiveMessage = true;
    }

    addWarningLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.warningLoadMessages.push(oneMessage);
        });
        this.hasWarningLoadMessage = true;
    }

    readWarningLiveMessages(){
        if (this.hasWarningLiveMessage) {
            let result = this.warningLiveMessages;
            this.warningLiveMessages = [];
            this.hasWarningLiveMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadWarningLiveMessages(){
        return this.hasWarningLiveMessage;
    }

    readWarningLoadMessages(){
        if (this.hasWarningLoadMessage) {
            let result = this.warningLoadMessages;
            this.warningLoadMessages = [];
            this.hasWarningLoadMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadWarningLoadMessages(){
        return this.hasWarningLoadMessage;
    }

    addInfoLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.infoLiveMessages.push(oneMessage);
        });
        this.hasInfoLiveMessage = true;
    }

    addInfoLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.infoLoadMessages.push(oneMessage);
        });
        this.hasInfoLoadMessage = true;
    }

    readInfoLiveMessages(){
        if (this.hasInfoLiveMessage) {
            let result = this.infoLiveMessages;
            this.infoLiveMessages = [];
            this.hasInfoLiveMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadInfoLiveMessages(){
        return this.hasInfoLiveMessage;
    }

    readInfoLoadMessages(){
        if (this.hasInfoLoadMessage) {
            let result = this.infoLoadMessages;
            this.infoLoadMessages = [];
            this.hasInfoLoadMessage = false;
            return result;
        } else {
            return null;
        }
    }

    checkReadInfoLoadMessages(){
        return this.hasInfoLoadMessage;
    }
}