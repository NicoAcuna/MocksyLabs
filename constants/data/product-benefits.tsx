import { ProductBenefit } from "../types"
import ProductBenefits1 from '../../assets/images/product-benefits-1.png'
import ProductBenefits2 from '../../assets/images/product-benefits-2.png'
import ProductBenefits3 from '../../assets/images/product-benefits-3.png'


export const ProductBenefitsData: ProductBenefit[] = [
    {
        image: ProductBenefits1,
        title: "Improved productivity",
        text: "Mosafe streamlines safety management, making it easier and faster to complete tasks.",
        link: "/feature-group/automation",
    },
    {
        image: ProductBenefits2,
        title: "Increased visibility",
        text: "Monitor and track safety compliance across your entire organisation, giving you greater visibility and control.",
        link: "/features/live-monitoring"
    },
    {
        image: ProductBenefits3,
        title: "Enhanced safety",
        text: "Identify and mitigate safety risks on the go to create a safer and more secure workplace for all employees.",
        link:"/use-cases/protect",
    }
]