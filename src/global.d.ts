/// <reference types="@sveltejs/kit" />

class CardContent {
    //field 
    title: string;
    content: string;
    path: string;

    //constructor 
    constructor(title: string, content: string, path: string) {
        this.title = title
        this.content = content
        this.path = path
    }

    //function 
    disp(): void {
        console.log("Card title:   " + this.title + ", content:   " + this.content + ", path:   " + this.path)
    }
}