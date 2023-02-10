export class Brand {
    id: string;
    name: string;

    createdAt: number;
    updatedAt?: number;
}

/* is like a reference to a table of a BD */
/* we don't user BrandEntity, should be the same name of the table */