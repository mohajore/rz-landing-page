import { Component } from "react";
import Welcome from "../Blocks/Welcome";
import About from "../Blocks/About";
import TwoStarLists from "../Blocks/TwoStarLists";
import OurVMCP from "../Blocks/Ourvmcp";
import ProductsTitle from "../Blocks/ProductsTitle";
import Products from "../Blocks/Products";
import Cataloguebtn from "../Blocks/Cataloguebtn";
import Facts from "../Blocks/Facts";
import CompanyNews from "../Blocks/CompanyNews";
import Team from "../Blocks/Team";
import SustainablePackaging from "../Blocks/SustainablePackaging";
import CustomizedFoodPackaging from "../Blocks/CustomizedFoodPackaging";
import Contact from "../Blocks/Contact";
import Gallary from "../Blocks/Gallary";
import InternalLinks from "../Blocks/InternalLinks";
import { generalServices } from "../../services/GeneralServices";
import MainLoader from "../Blocks/MainLoader";
class HomePage extends Component {
    state = {
        news: [],
        products: [],
        welcome: {},
        about_us: {},
        vmpc: {},
        facts: [],
        team: [],
        qa: {},
        qa_certificate: [],
        sustainable_packaging: [],
        gallery: [],
        pageLoader: true,
        contact_us: [],
        shop_link: {},
        social: [],
    };
    componentDidMount() {
        Promise.all([this.getHomePageData(), this.getGallary()]);
    }

    getHomePageData = async () => {
        const { success, data } = await generalServices.getHomePageData();
        if (!success) return;
        this.setState({
            news: data.news,
            welcome: data.welcome,
            products: data.products,
            about_us: data.about_us,
            qa: data.qa,
            qa_certificate: data.qa_certificate,
            sustainable_packaging: data.sustainable_packaging,
            vmpc: data.vmpc,
            facts: data.facts,
            team: data.team,
            gallery: data.gallery,
            gallery_all: data.gallery_all,
            pageLoader: false,
            contact_us: data.contact_us,
            shop_link: data.shop_link,
            social: data.social,
            product_title: data.product_title,
        });
    };

    getGallary = async (key) => {
        const { success, data } = await generalServices.getGallary(key ?? 0);
        if (!success) return;

        this.setState({
            gallary: data,
        });
    };

    render() {
        const { news, products, welcome, about_us, vmpc, facts, team, qa, qa_certificate, sustainable_packaging, gallery, pageLoader, gallery_all, contact_us, product_title, shop_link, social } = this.state;
        return pageLoader ? (
            <MainLoader />
        ) : (
            <div className="HomePage">
                <Welcome data={welcome} shop_link={shop_link} />
                <About data={about_us} />
                <TwoStarLists data={welcome} />
                <OurVMCP data={vmpc} />
                <ProductsTitle product_title={product_title} />
                <Products data={products} />
                {/* <Cataloguebtn /> */}
                <Facts data={facts} />
                <CompanyNews data={news} />
                <Team data={team} />
                <SustainablePackaging data={sustainable_packaging} qa={qa} qa_certificate={qa_certificate} />
                <CustomizedFoodPackaging data={contact_us} />
                <Gallary data={gallery} gallery_all={gallery_all} />
                <Contact data={welcome} social={social} />
                <InternalLinks data={gallery} social={social} />
            </div>
        );
    }
}

export default HomePage;
