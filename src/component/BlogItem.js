import { BrowserRouter as Link } from "react-router-dom";

function BlogItem() {
    return (
        <div className="bg-faded p-4 my-4">
        <div className="card card-inverse">
            <img className="card-img img-fluid w-100" src="./img/slide-1.jpg" alt="slide-1" />
            <div className="card-img-overlay bg-overlay">
                <Link href="#" className="btn btn-secondary">xem thêm..</Link>
            </div>
        </div>
    </div>
    );
  }
  
  export default BlogItem;
  