import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import Header from "../../components/header";
import ListParticipants from "../../components/list-participants/list-participants";
import style from "./configuration.module.css";

const Configuration = () => {
    return (
        <>
            <Header />
            <main className="bg-blue h-100">
                <section className={`bg-beige h-100 ${style.configuration__main__section}`}>
                    <Form />
                    <ListParticipants />
                    <Footer />
                </section>
            </main>
        </>
    )
}

export default Configuration;