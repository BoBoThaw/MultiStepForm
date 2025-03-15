import type { Validator } from '$lib/types/form';

// export function validateFields(
//     fields: { [key in string]: string },
//     validators: { [key in string]: Validator[]}
// ) {

// }

export function emailValidator(val: string){
    if (!val) return null;
    const re = 
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(val)) {
        return null;
    }
    return 'Invalid Email';
}

export function requiredValidator(val: string){
    if (val === null || val === undefined) return "This field is requried";
    val = val.toString();
    if(!val) {
        return 'This field is required';
    }
    return null;
}

export function phoneValidator(val: string){
    if (!val) return null;
    const re = 
     /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (re.test(val)) {
        return null;
    }
    return 'Invalid phone number';
}