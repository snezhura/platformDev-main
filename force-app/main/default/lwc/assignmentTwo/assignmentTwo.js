import { LightningElement } from 'lwc';

fname;
lname;
email;
phone;
title;
depar;
savedData

export default class AssignmentTwo extends LightningElement {

    saveData(){
        this.savedData = this.fname + ' ' + this.lname + ' '+this.email + ' '+this.phone + ' ' + this.title + ' '+this.depar;
    }

    handleChange(event){
        const name = event.target.name;
        
        if(name === 'fname'){
             this.fname = event.target.value;
        }else if(name === 'lname'){
            this.lname = event.target.value;
        }else if(name === 'phone'){
            this.phone = event.target.value;
        }else if(name === 'email'){
            this.email = event.target.value;
        }else if(name === 'title'){
            this.title = event.target.value;
        }else if(name === 'depar'){
            this.depar = event.target.value;
        }
    }

}