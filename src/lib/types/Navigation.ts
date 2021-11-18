export class Navigation {
    //field 
    title: string;
    content: string;
    path: string;
    label: string;
    button: boolean;

    //constructor 
    constructor(title: string, content: string, path: string, label: string, button: boolean) {
        this.title = title
        this.content = content
        this.path = path
        this.label = label
        this.button = button
    }

    //function 
    disp(): void {
        console.log("Card title:   " + this.title + ", content:   " + this.content)
    }
}