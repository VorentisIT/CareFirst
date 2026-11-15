export interface SiteConfig {
	name: string,
	copyright: string,
	address: string,
	phone: string,
	email: string,
	nav: {
		main: Array<{
			url: string;
			text: string;
		}>,
		info: Array<{
			url: string;
			text: string;
		}>,
		support: Array<{
			url: string;
			text: string;
		}>,
		legal: Array<{
			url: string;
			text: string;
		}>
	}
}

const siteConfig: SiteConfig = {
	name: "CareFirst Clinic",
	copyright: "© 2026 CareFirst Clinic. All rights reserved.",
	address: "Gill Road, Civil Lines, Ludhiana, Punjab 141014, India",
	phone: "+91 62397 96319",
	email: "vorentis.it@gmail.com",
	nav: {
		main: [
			{ text: "Home", url: "/" },
			{ text: "About us", url: "/about" },
			{ text: "Services", url: "/services" },
			{ text: "Doctors", url: "/doctors" },
			{ text: "Contact", url: "/contact" }
		],
		info: [
			{ text: "Services", url: "/services" },
			{ text: "Doctors", url: "/doctors" },
			{ text: "Pricing", url: "/pricing" }
		],
		support: [
			{ text: "About us", url: "/about" },
			{ text: "Contact", url: "/contact" }
		],
		legal: [
			{ text: "Privacy Policy", url: "/privacy" },
			{ text: "Terms of Service", url: "/terms" },
			{ text: "Cookies Policy", url: "/cookies" },
		]
	},
}

export default siteConfig;
