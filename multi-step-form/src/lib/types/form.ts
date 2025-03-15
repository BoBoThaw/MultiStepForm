export type Validator = (val: string, paramas?: any) => string | null;
export type ListValidator = (val: string[], paramas?: unknown) => string | null;

export type InputEventType = Event & {
    currentTarget: EventTarget & HTMLInputElement;
}