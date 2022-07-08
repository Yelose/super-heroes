export class Powerstats {
    public intelligence: number;
    public strength: number;
    public speed: number;
    public durability: number;
    public power: number;
    public combat: number;
}

export class Appearance {
    public gender: string;
    public race: string;
    public height: string[];
    public weight: string[];
    public eyeColor: string;
    public hairColor: string;
}

export class Biography {
    public fullName: string;
    public alterEgos: string;
    public aliases: string[];
    public placeOfBirth: string;
    public firstAppearance: string;
    public publisher: string;
    public alignment: string;
}

export class Work {
    public occupation: string;
    public base: string;
}

export class Connections {
    public groupAffiliation: string;
    public relatives: string;
}

export class Images {
    public xs: string;
    public sm: string;
    public md: string;
    public lg: string;
}

export class SuperHero {
    public id: number;
    public name: string;
    public slug: string;
    public powerstats: Powerstats;
    public appearance: Appearance;
    public biography: Biography;
    public work: Work;
    public connections: Connections;
    public images: Images;
}
