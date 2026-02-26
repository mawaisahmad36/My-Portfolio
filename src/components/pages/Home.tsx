import { MainHero } from "../MainHero"
import { About } from "../About"
import { TechExpertise } from "../TechExpertise"
import { Work } from "../Work"
import { Cta } from "../Cta"
import { ClientsSay } from "../ClientsSay"
export const Home: React.FC = () => {
    return (
        <>
            <MainHero />
            <Cta/>
            <About/>
            <TechExpertise/>
            <Work/>
            <ClientsSay/>
        </>
    )
}