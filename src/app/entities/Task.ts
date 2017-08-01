export class Task {
	// tslint:disable-next-line:indent
    constructor( private id: number,
                 public title: string,
                 public message: string,
                 public done: Boolean) { }
}