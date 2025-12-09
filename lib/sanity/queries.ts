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

export async function getHazelnutPrices(): Promise<SanityHazelnutPrice[]> {
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
	productName: string;
	productDescription: string;
	productImage?: {
		asset: {
			_ref: string;
			_type: string;
		};
		alt?: string;
	};
}

export async function getEquipment(): Promise<SanityEquipment[]> {
	const query = `*[_type == "equipment"] | order(_createdAt desc) {
	  _id,
	  productName,
	  productDescription,
	  productImage
	}`;

	return await client.fetch<SanityEquipment[]>(query);
}

// Site Settings from Sanity
export interface SanitySiteSettings {
	_id: string;
	favicon?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	siteTitle: string;
	logo?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	mainTitle: string;
	mainSubtitle: string;
	descriptionMetadata: string;
	mainPageBackground?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	aboutPageBackground?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	pricesPageBackground?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	equipmentPageBackground?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	secondHandEquipmentPageBackground?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	contactPageBackground?: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	socialMediaLinks?: {
		facebook?: string;
		instagram?: string;
		youtube?: string;
		tiktok?: string;
		whatsapp?: string;
		twitter?: string;
		linkedin?: string;
	};
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
	const query = `*[_type == "siteSettings"][0] {
	  _id,
	  favicon,
	  siteTitle,
	  logo,
	  mainTitle,
	  mainSubtitle,
	  descriptionMetadata,
	  mainPageBackground,
	  aboutPageBackground,
	  pricesPageBackground,
	  equipmentPageBackground,
	  secondHandEquipmentPageBackground,
	  contactPageBackground,
	  socialMediaLinks
	}`;

	return await client.fetch<SanitySiteSettings | null>(query);
}

// Present Price from Sanity
export interface SanityPresentPrice {
	_id: string;
	productDescription: string;
	brutPrice: number;
	netPrice: number;
	updatedAt: string;
	isActive: boolean;
}

export async function getPresentPrice(): Promise<SanityPresentPrice | null> {
	const query = `*[_type == "presentPrice" && isActive == true] | order(_updatedAt desc)[0] {
	  _id,
	  productDescription,
	  brutPrice,
	  netPrice,
	  "updatedAt": coalesce(updatedAt, _updatedAt),
	  isActive
	}`;

	return await client.fetch<SanityPresentPrice | null>(query);
}

// Second Hand Equipment from Sanity
export interface SanitySecondHandEquipment {
	_id: string;
	productName: string;
	productDescription: string;
	productImage?: {
		asset: {
			_ref: string;
			_type: string;
		};
		alt?: string;
	};
}

export async function getSecondHandEquipment(): Promise<SanitySecondHandEquipment[]> {
	const query = `*[_type == "secondHandEquipment"] | order(_createdAt desc) {
	  _id,
	  productName,
	  productDescription,
	  productImage
	}`;

	return await client.fetch<SanitySecondHandEquipment[]>(query);
}

