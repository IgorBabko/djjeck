export class Mix {
     
    private name: string;
    private description: string;
    private cover: string;
    private url: string;

    
    constructor(
        name?: string,
        description?: string,
        cover?: string,
        url?: string

    ) {
        this.name = name || '';
        this.description = description || '';
        this.cover = cover || '';
        this.url = url || '';
    }

}