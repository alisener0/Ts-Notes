//etiket tipi
export type Tag = {
    label:string;
    value:string;
};

// formdan alınacak olan note dizisinin tipi
export type NoteData ={
    title:string;
    tags: Tag[];
    markdown:string;
}

//state e kaydedilecek olan not verisinin tipi

export type Note ={
    id: string;
    }& NoteData;