import { client } from "./client";

type Locale = "tr" | "en";

// Hazelnut prices from Sanity
export interface SanityHazelnutPrice {
	_id: string;
	type: Record<Locale, string>;
	grade: Record<Locale, string>;
	pricePerKg: number;
	currency: string;
	note?: Record<Locale, string>;
	updatedAt: string;
}

export async function getHazelnutPrices(
	_locale: Locale = "tr",
): Promise<SanityHazelnutPrice[]> {
	const query = `*[_type == "hazelnutPrice"] | order(date desc) {
	  _id,
	  "type": {
	    "tr": coalesce(typeTr, typeEn, ""),
	    "en": coalesce(typeEn, typeTr, "")
	  },
	  "grade": {
	    "tr": coalesce(gradeTr, gradeEn, ""),
	    "en": coalesce(gradeEn, gradeTr, "")
	  },
	  pricePerKg,
	  currency,
	  "note": {
	    "tr": noteTr,
	    "en": noteEn
	  },
	  "updatedAt": coalesce(updatedAt, _updatedAt)
	}`;

	return await client.fetch<SanityHazelnutPrice[]>(query);
}

// Contact info from Sanity
export interface SanityContactInfo {
	_id: string;
	location: string;
	phone: string;
	email: string;
	address: Record<Locale, string>;
}

export async function getContactInfo(): Promise<SanityContactInfo[]> {
	const query = `*[_type == "contactInfo"] | order(_createdAt asc) {
	  _id,
	  location,
	  phone,
	  email,
	  "address": {
	    "tr": coalesce(addressTr, addressEn, ""),
	    "en": coalesce(addressEn, addressTr, "")
	  }
	}`;

	return await client.fetch<SanityContactInfo[]>(query);
}

// Equipment from Sanity
export interface SanityEquipment {
	_id: string;
	name: Record<Locale, string>;
	description: Record<Locale, string>;
	images?: Array<{
		asset: {
			_ref: string;
			_type: string;
		};
		alt?: string;
	}>;
	specs?: Record<Locale, string>;
}

export async function getEquipment(
	_locale: Locale = "tr",
): Promise<SanityEquipment[]> {
	const query = `*[_type == "equipment"] | order(_createdAt desc) {
	  _id,
	  "name": {
	    "tr": coalesce(nameTr, nameEn, ""),
	    "en": coalesce(nameEn, nameTr, "")
	  },
	  "description": {
	    "tr": coalesce(descriptionTr, descriptionEn, ""),
	    "en": coalesce(descriptionEn, descriptionTr, "")
	  },
	  images,
	  "specs": {
	    "tr": specsTr,
	    "en": specsEn
	  }
	}`;

	return await client.fetch<SanityEquipment[]>(query);
}


