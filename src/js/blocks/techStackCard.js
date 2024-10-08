import { createBlockElement, createDivElement, createImageElement } from "./functions.js"

const SteckLogosList = [
	{ src:"./images/icons/html.svg", alt:"HTML Logo" },
	{ src:"./images/icons/css.svg", alt:"CSS Logo" },
	{ src:"./images/icons/tailwind.svg", alt:"Tailwindcss Logo" },
	{ src:"./images/icons/js.svg", alt:"JavaScript Logo" },
	{ src:"./images/icons/git.svg", alt:"Git Logo" },
	{ src:"./images/icons/scss.svg", alt:"SCSS Logo" },
	{ src:"./images/icons/webpack.svg", alt:"Webpack Logo" },
	{ src:"./images/icons/gsap.svg", alt:"GSAP Logo" },
]

const tickerHeading = createBlockElement(
	"h4",
	"body-text-color",
	null,
	"My technology stack"
)

const steckWrapper = createDivElement(
	"technology-stack__scrolling-wrapper marquee marquee--8"
)
Object.assign(
	steckWrapper.style, {
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflowX: "hidden",
		margin: "0 auto"
	}
)

SteckLogosList.forEach(
	elem => {
		const image = createImageElement(
			elem.src,
			elem.alt,
			"marquee__item stack-logo"
		)
		if (image.classList.contains("marquee__item")) {
			Object.assign(
				image.style, {
					position: "absolute",
					objectFit: "contain"
				}
			)
		}
		steckWrapper.append(image)
	}
)

export const tickerSection = createBlockElement(
	"section",
	"technology-stack",
	null,
	tickerHeading,
	steckWrapper
)
Object.assign(
	tickerSection.style, {
		display: "inline",
		textAlign: "center",
	}
)