export interface DriverStanding {
	position: string;
	Driver: {
		givenName: string;
		familyName: string;
	};
	points: string;
	Constructors: { name: string }[];
}

export interface ConstructorStanding {
	position: string;
	Constructor: {
		name: string;
	};
	points: string;
}
