import {NavLink } from "react-router-dom";

function BlogItem() {
    return (
        <div className="bg-faded p-4 my-4">
        <div className="card card-inverse">
            <img className="card-img img-fluid w-100" src="./img/slide-1.jpg" alt="slide-1" />
            <div className="card-img-overlay bg-overlay">
            <h3 className=" card-text text-shadow text-white d-xs-block text">Hội chị em 115C2 (chương 1: Nơi nào là thanh xuân?)</h3>
            <p className=" lead card-text text-shadow text-white  break-word w-50 d-xs-block text text-h" >Giống như bao cô gái khác, dù 18 tuổi, 28 tuổi, 38 tuổi đều thích hoài niệm về quá khứ.
 Tôi - cô gái 18 tuổi + 5 cũng vậy, thích nhất hoài niệm về thời đại học, thời "thanh xuân" bốc lửa với những đêm thâu tán dóc cùng bạn bè, để đến một thời điểm tương đối "chín" thế này có thể viết ra một câu chuyện nho nhỏ, kỷ niệm cho bản thân và cho những người bạn yêu quý của tôi.
 Ngày 5/9/2014 là ngày nhập học của tôi...</p>
            <NavLink exact to ={'blog/' + 1} className="btn btn-secondary">Xem Thêm</NavLink>
            </div>
        </div>
    </div>
    );
  }
  
  export default BlogItem;
  