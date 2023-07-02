import NewNote from "./NewNote";
import { data } from "../Content/Blog2";

function Homepage() {
    console.log(data.posts);

    return (
        <>
            <section className="main-content-wrapper" style={{ backgroundColor: "#FFE569" }}>
                <div className="container">
                    <section className="product-list">
                        <div className="container">
                            <div className="d-flex justify-content-between item-card-category">
                                <div className="h5 fw-bold">Our Notes</div>
                            </div>
                            <div className="row">
                                {data.posts.map((t) => (
                                    <div className="notes-list col-lg-6">
                                        <div className="new-note">
                                            <NewNote data={t} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Homepage;
