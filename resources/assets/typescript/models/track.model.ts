export class Track {

    private mix_id: string;     
    private name: string;
    private description: string;
    private cover: string;
    private url: string;

    
    constructor(
        mix_id?: string,    
        name?: string,
        description?: string,
        cover?: string,
        url?: string
    ) {
        this.mix_id = mix_id || '';
        this.name = name || '';
        this.description = description || '';
        this.cover = cover || '';
        this.url = url || '';
    }

}