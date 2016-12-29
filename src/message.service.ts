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

    /**
     * Method used to add error messages to the current page, previous error messages added in current page will be removed.
     * @param messages  array of string containing each message e.g. ["error message 1", "error message 2"].
     */
    addErrorLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.errorLiveMessages.push(oneMessage);
        });
        this.hasErrorLiveMessage = true;
    }

    /**
     * Method used to add error messages to the next page to be routed.
     * @param messages  array of string containing each message e.g. ["error message 1", "error message 2"].
     */
    addErrorLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.errorLoadMessages.push(oneMessage);
        });
        this.hasErrorLoadMessage = true;
    }

    /**
     * Method used by the component to read new error messages, it clean them after read.
     * @returns       array of error messages added in current page e.g. ["error message 1", "error message 2"].
     */
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

    /**
     * Method used by the component to check if new error messages have been added in current page.
     * @returns       boolean.
     */
    checkReadErrorLiveMessages(){
        return this.hasErrorLiveMessage;
    }

    /**
     * Method used by the component to read error messages sent in previous page, it clean them after read.
     * @returns       array of error messages added in previous page e.g. ["error message 1", "error message 2"].
     */
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

    /**
     * Method used by the component to check if error messages have been added in previous page.
     * @returns       boolean.
     */
    checkReadErrorLoadMessages(){
        return this.hasErrorLoadMessage;
    }

    /**
     * Method used to add success messages to the current page, previous success messages added in current page will be removed.
     * @param messages  array of string containing each message e.g. ["success message 1", "success message 2"].
     */
    addSuccessLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.successLiveMessages.push(oneMessage);
        });
        this.hasSuccessLiveMessage = true;
    }

    /**
     Method used to add success messages to the next page to be routed.
     * @param messages  array of string containing each message e.g. ["success message 1", "success message 2"].
     */
    addSuccessLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.successLoadMessages.push(oneMessage);
        });
        this.hasSuccessLoadMessage = true;
    }

    /**
     * Method used by the component to read new success messages, it clean them after read.
     * @returns       array of success messages added in current page e.g. ["success message 1", "success message 2"].
     */
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

    /**
     * Method used by the component to check if new success messages have been added in current page.
     * @returns       boolean.
     */
    checkReadSuccessLiveMessages(){
        return this.hasSuccessLiveMessage;
    }

    /**
     * Method used by the component to read success messages sent in previous page, it clean them after read.
     * @returns       array of success messages added in previous page e.g. ["success message 1", "success message 2"].
     */
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

    /**
     * Method used by the component to check if success messages have been added in previous page.
     * @returns       boolean.
     */
    checkReadSuccessLoadMessages(){
        return this.hasSuccessLoadMessage;
    }

    /**
     * Method used to add warning messages to the current page, previous warning messages added in current page will be removed.
     * @param messages  array of string containing each message e.g. ["warning message 1", "warning message 2"].
     */
    addWarningLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.warningLiveMessages.push(oneMessage);
        });
        this.hasWarningLiveMessage = true;
    }

    /**
     Method used to add warning messages to the next page to be routed.
     * @param messages  array of string containing each message e.g. ["warning message 1", "warning message 2"].
     */
    addWarningLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.warningLoadMessages.push(oneMessage);
        });
        this.hasWarningLoadMessage = true;
    }

    /**
     * Method used by the component to read new warning messages, it clean them after read.
     * @returns       array of warning messages added in current page e.g. ["warning message 1", "warning message 2"].
     */
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

    /**
     * Method used by the component to check if new warning messages have been added in current page.
     * @returns       boolean.
     */
    checkReadWarningLiveMessages(){
        return this.hasWarningLiveMessage;
    }

    /**
     * Method used by the component to read warning messages sent in previous page, it clean them after read.
     * @returns       array of warning messages added in previous page e.g. ["warning message 1", "warning message 2"].
     */
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

    /**
     * Method used by the component to check if warning messages have been added in previous page.
     * @returns       boolean.
     */
    checkReadWarningLoadMessages(){
        return this.hasWarningLoadMessage;
    }

    /**
     * Method used to add info messages to the current page, previous info messages added in current page will be removed.
     * @param messages  array of string containing each message e.g. ["info message 1", "info message 2"].
     */
    addInfoLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.infoLiveMessages.push(oneMessage);
        });
        this.hasInfoLiveMessage = true;
    }

    /**
     Method used to add info messages to the next page to be routed.
     * @param messages  array of string containing each message e.g. ["info message 1", "info message 2"].
     */
    addInfoLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.infoLoadMessages.push(oneMessage);
        });
        this.hasInfoLoadMessage = true;
    }

    /**
     * Method used by the component to read new info messages, it clean them after read.
     * @returns       array of info messages added in current page e.g. ["info message 1", "info message 2"].
     */
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

    /**
     * Method used by the component to check if new info messages have been added in current page.
     * @returns       boolean.
     */
    checkReadInfoLiveMessages(){
        return this.hasInfoLiveMessage;
    }

    /**
     * Method used by the component to read info messages sent in previous page, it clean them after read.
     * @returns       array of info messages added in previous page e.g. ["info message 1", "info message 2"].
     */
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

    /**
     * Method used by the component to check if info messages have been added in previous page.
     * @returns       boolean.
     */
    checkReadInfoLoadMessages(){
        return this.hasInfoLoadMessage;
    }
}