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
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addErrorLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.errorLiveMessages.push(oneMessage);
        });
        this.hasErrorLiveMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addErrorLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.errorLoadMessages.push(oneMessage);
        });
        this.hasErrorLoadMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadErrorLiveMessages(){
        return this.hasErrorLiveMessage;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadErrorLoadMessages(){
        return this.hasErrorLoadMessage;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addSuccessLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.successLiveMessages.push(oneMessage);
        });
        this.hasSuccessLiveMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addSuccessLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.successLoadMessages.push(oneMessage);
        });
        this.hasSuccessLoadMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadSuccessLiveMessages(){
        return this.hasSuccessLiveMessage;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadSuccessLoadMessages(){
        return this.hasSuccessLoadMessage;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addWarningLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.warningLiveMessages.push(oneMessage);
        });
        this.hasWarningLiveMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addWarningLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.warningLoadMessages.push(oneMessage);
        });
        this.hasWarningLoadMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadWarningLiveMessages(){
        return this.hasWarningLiveMessage;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadWarningLoadMessages(){
        return this.hasWarningLoadMessage;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addInfoLiveMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.infoLiveMessages.push(oneMessage);
        });
        this.hasInfoLiveMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @param messages  Comment for parameter ´target´.
     */
    addInfoLoadMessage(messages: Array<string>){
        messages.forEach((oneMessage) => {
            this.infoLoadMessages.push(oneMessage);
        });
        this.hasInfoLoadMessage = true;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadInfoLiveMessages(){
        return this.hasInfoLiveMessage;
    }

    /**
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
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
     * Comment for method addErrorLiveMessage.
     * @returns       Comment for return value.
     */
    checkReadInfoLoadMessages(){
        return this.hasInfoLoadMessage;
    }
}