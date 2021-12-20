<template>
<div>
  <head><meta name="view-prot" content="width=device-width, initial-scale=1.0"/></head>
      <nav class="navbar navbar-expand-lg navbar-light bg">
        <div class="container-fluid">
          <div class="sm-3">
            <a class="navbar-brand" href="#">KooKco</a>
          </div>
          <div class="sm-3 d-flex nav-content">
            <div class="me-3"><router-link class="nav-link" to="/"><p>Major</p></router-link></div>
            <div class="me-3"><router-link class="nav-link" to="/write"><p>Activity</p></router-link></div>
            <div class="me-7"><router-link class="nav-link" to="/blog"><p>Communication</p></router-link></div>
          </div>
          <div class="sm-3 d-flex me-3 justify-content-between nav-icon">
            <div class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill icon1" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>
            <div class="me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search icon2" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill icon3" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>
            </div>
          </div>
        </div>
      </nav>
  <router-view/>
  <footer class="footer">
    <hr>
    <div class="footer_text d-flex">
      <div class="footer_major me-4">
        <div class="footer_major_title">
          <p>Major</p>
        </div>
        <div class="footer_major_content">
          <p>경영정보</p>
        </div>
        <div class="footer_major_content">
          <p>경영정보</p>
        </div>
        <div class="footer_major_content">
          <p>경영정보</p>
        </div>
        <div class="footer_major_content">
          <p>경영정보</p>
        </div>
      </div>
      <div class="footer_Activity ">
        <div class="footer_activity_title">
          <p>Activity</p>
        </div>
        <div class="footer_activity_content">
          <p>교환학생</p>
        </div>
        <div class="footer_activity_content">
          <p>교환학생</p>
        </div>
        <div class="footer_activity_content">
          <p>교환학생</p>
        </div>
        <div class="footer_activity_content">
          <p>교환학생</p>
        </div>
      </div>
      <div class="footer_Communication ">
        <div class="footer_communication_title">
          <p>Communication</p>
        </div>
        <div class="footer_communication_content">
          <p>다전공</p>
        </div>
        <div class="footer_communication_content">
          <p>부전공</p>
        </div>
        <div class="footer_communication_content">
          <p>심화전공</p>
        </div>
        <div class="footer_communication_content">
          <p>융합전공</p>
        </div>
      </div>
      <div class="footer_Contact">
        <div class="footer_contact_title">
          <p>Contact</p>
        </div>
        <div class="footer_contact_content">
          <p>kookco@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="made d-flex">
      <div class="copyright">
        <img src="./images/copyright-symbol.png">
      </div>
      <div class="copyright_text ms-4">
        <p>kcokoo.All rights reserved.</p>
      </div>
      <div class="Madeby_title">
        <p>Made by</p>
      </div>
      <div class="madeby_name ms-4">
        <p>김지웅 강민준 윤민섭 유동근 이다연</p>
      </div>
    </div>
  </footer>
</div>
</template>

<style>

@media screen and (min-width:992px){
  .under-card{
    margin-left:2%;
  }
  .sm-card2{
    margin-top:8%;
  }
}
 
*{
  font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif;
  color:#191919
}
.nav-content{
  height:100%;
}
.nav-content p{
  font-size:18px;
}
.nav-content div{
  margin-top:5px;
  border-bottom:solid black 1px;
}
.nav-content div:hover{
  border-bottom:solid blue 1px;
}
.icon1:hover{
  fill:blue;
}
.icon2:hover{
  fill:blue;
}

.icon3:hover{
   fill:blue;
}


.kcokoo img{
  width:120px;
  margin-right:20px;
}
.banner{
  background-color:#F1F1F5;
  padding-top:100px;
  padding-bottom:100px;
}
.bg{
  background-color:#DBDBDB;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
}
.nav-link{
  padding:0;
}
.nav-link p{
  margin-bottom: 5px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.kcokoo_title h3{
  color:#292FD3;
}
.kcokoo_ex{
  margin-right:100px;
}
.kcokoo_font{
  color:#292FD3;
}
.network p{
  font-size:20px;
}
.middle_banner{
  margin-top:100px;
}
.kcokoo_ex{
  font-size:10vw;
}
.kcokoo_intro{
  padding-left:0;
}
.middle_card{
  margin-top:130px;
}
.card{
  box-shadow: 10px 5px 5px #6d6c6c;
}
.top1{
  font-size:0.8em;
}
.card-title1{
  text-align: left;
}
.card-content1{
  text-align: left;
  margin-top:70px;
}
.team{
  font-size:0.8em;
  font-weight: bold;
}
.name{
  font-size:0.8em;
  margin-left:20px;
}
.card-content2{
  margin-top:5px;
  text-align:left;
}
.inquery1{
  font-size:1em;
  font-weight: bold;
}
.card-content3{
  margin-top:10px;
  text-align: left;
}
.one-card{
  height: 575px;
}
.two-card{
  height:575px;
}
.except-card{
  height:275px;
}
.footer{
  margin-top:100px;
}
.footer_major{
  margin-left:20%;
}
.footer_Activity{
  margin-left:5%;
}
.footer_Communication{
  margin-left:5%;
}
.footer_Contact{
  margin-left:5%;
}
.footer_major_title p{
  font-weight: bold;
}
.footer_activity_title p{
  font-weight:bold;
}
.footer_communication_title p{
  font-weight: bold;
}
.footer_contact_title p{
  font-weight: bold;
}
.copyright img{
  width:15px;
  height:15px;
}
.made{
  margin-top:5%;
}
.copyright{
  margin-left:20%;
}
.Madeby_title{
  margin-left:30%;
}
.Madeby_title p{
  font-weight: bold;
}
.register{
  color:blue;
  margin-left:10px;
}
.write_main{
  margin-top:17%;
}
.write{
  padding-left:0;
}
.write h3{
  margin-right: 50px;
  width:80px;
  margin-bottom:5px;
}
.write_ex1{
  padding:0;
}
.write_ex1 p{
    margin-left:74%;
    margin-bottom:0;
    margin-top:10px;
}
.write_ex{
  border-bottom:solid black 1px;
  padding-bottom: 10px;
}
.one_sel{
  width:270px;
  height:50px;
}
.two_sel{
  width:200px;
  height:50px;
}
.three_sel{
  width:200px;
  height:50px;
}
.four_sel{
  width:150px;
  height:50px;
  margin-right: 60px;
}
.opt{
  padding-left:0;
}
.option_title{
  height:50px;
  width:820px;
}
.icon-fold{
  margin-left:25px;
  margin-right: 65px;
}
.accept_box{
  width:230px;
  height:140px;
  border:solid black 1px;
}
.accept_text1{
  margin-top:7px;
}
.write_select{
  height:150px;
}
.all_content{
  height:600px;
}
.big_content{
  width:76%;
  margin-right:23%;
  height:100%;
}
@media screen and (min-width:768px) and (max-width:992px){
   .top-card{
     position:relative;
     width:100%;
     margin-bottom: 40%;
   }
   .one-card{
     margin-bottom:20%;
     position:absolute;
     z-index: 1;
     width:100%;
   }
   .two-card{
     margin-left:30%;
     margin-bottom:20%;
     position:absolute;
     z-index: 2;
     width:100%;
   }
   .under-card{
     display: flex;
     margin-top:85%;
     width:100%;
     position:absolute;
   }
   .sm-card1{
     margin-left:7%;
   }
   .sm-card2{
     margin-left:20px;
   }
   
 }
 @media screen and (min-width:768px) and (max-width:953px){
    .one_sel{
      width:190px;
      height:40px;
    }
    .two_sel{
      width:150px;
      height:40px;
    }
    .three_sel{
      width:150px;
      height:40px;
    }
    .four_sel{
      width:120px;
      height:40px;
      margin-right:0;
    }
    .option_title{
      width:550px;
    }
    .write_main{
      position: relative;
      margin-bottom:1000px;
    }
    .accept_1{
      top:390%;
      position:absolute;
      z-index: 1;
      margin-left:250px;
    }
    .accept_box{
      display:flex;
      height:30px;
      width:410px;
    }
    .accept_text1{
      margin-top:0;
    }
    .all_content{
      position: absolute;
      width:850px;
    }
 }
 @media screen and (min-width:954px) and (max-width:1147px){
     .one_sel{
      width:190px;
      height:40px;
    }
    .two_sel{
      width:150px;
      height:40px;
    }
    .three_sel{
      width:150px;
      height:40px;
    }
    .four_sel{
      width:120px;
      height:40px;
      margin-right:0;
    }
    .option_title{
      width:550px;
    }
    .write_main{
      position: relative;
      margin-bottom:1000px;
    }
    .accept_1{
      top:400%;
      position:absolute;
      z-index: 1;
      margin-left:450px;
    }
    .accept_box{
      display:flex;
      height:30px;
      width:410px;
    }
    .accept_text1{
      margin-top:0;
    }
    .all_content{
      position: absolute;
      margin-left:100px;
      width:1000px;
    }
 }
 @media screen and (min-width:1148px) and (max-width:1173px){
     .one_sel{
      width:190px;
      height:40px;
    }
    .two_sel{
      width:150px;
      height:40px;
    }
    .three_sel{
      width:150px;
      height:40px;
    }
    .four_sel{
      width:120px;
      height:40px;
      margin-right:0;
    }
    .option_title{
      width:550px;
    }
    .write_main{
      position: relative;
      margin-bottom:1000px;
    }
    .accept_1{
      top:400%;
      position:absolute;
      z-index: 1;
      margin-left:450px;
    }
    .accept_box{
      display:flex;
      height:30px;
      width:410px;
    }
    .accept_text1{
      margin-top:0;
    }
    .all_content{
      position: absolute;
      margin-left:100px;
      width:1000px;
    }
 }
@media screen and (min-width:1174px) and (max-width:1321px){
    .one_sel{
      width:190px;
      height:40px;
    }
    .two_sel{
      width:150px;
      height:40px;
    }
    .three_sel{
      width:150px;
      height:40px;
    }
    .four_sel{
      width:120px;
      height:40px;
      margin-right:0;
    }
    .option_title{
      width:550px;
    }
 }
@media screen and (min-width:1322px) and (max-width:1400px){
    .one_sel{
    width:200px;
    height:40px;
  }
  .two_sel{
    width:170px;
    height:40px;
  }
  .three_sel{
    width:170px;
    height:40px;
  }
  .four_sel{
    width:120px;
    height:40px;
    margin-right: 60px;
  }
  .option_title{
    width:550px;
  }
}
.input_int{
  margin-top:200px;
  margin-left:65%;
}
.input_box{
  background-color:#EDEDED;
  border-top:none;
  border-bottom:none;
  border-left:none;
  border-right:none;
  height:40px;
}
.input_search{
  height:40px;
  background-color:#292FD3;
  width:40px;
}
.blog_search{
  font-weight: bold;
  margin-top:10px;
}
.prev{
  margin-left:66%;
}
.left_tag{
  width:100px;
  margin-right:0;
  margin-left:10%;
  position: fixed;
}

.left_tag h3{
  margin-right:20px;
}
.Major{
    border-bottom:1px solid black;
}
.major_detail_1 p{
  margin-right:30px;
}
.blog_main{
  width:1100px;
  height: 2200px;
  margin-left:22%;;
  border:solid 1px rgb(68, 68, 68);
  border-radius: 20px;
}
.mis_board_name{
  margin-top:40px;
}
.mis_board_name p{
  text-align: left;
  margin-left:40px;
  color:blue;
}
.mis_board_title h1{
  text-align: left;
  margin-left:40px;
  font-weight: normal;
}
.mis_board_sub1{
  margin-left:40px;
  font-size:20px;
}
.student_name p{
  font-weight: bold;
}
.paste{
  margin-left:650px;
}
.mis_board_pro{
  text-align: left;
  font-size:20px;
  margin-left:40px;
  border-bottom:solid black 1px;
  width:1020px;
}
.mis_board_date{
  margin-left:470px;
}
@media screen and (min-width:768px) and (max-width:991px){
  .mis_board_title h1{
  font-size:24px;
  font-weight: bold;
  }
  .mis_board_sub1 p{
    font-size:16px;
  }
  .blog_main{
    width:70%;
    height:1800px;
  }
  .paste{
    margin-left:35%;
  }
  .mis_board_pro p{
    font-size:16px;
  }
  .mis_board_pro{
    width:90%;
  }
  .mis_board_date{
    margin-left:10%;
  }
  .recommend_write{
    width:1020px;
    border:1px
  }
}
@media screen and (min-width:992px) and (max-width:1399px){
  .mis_board_title h1{
  font-size:24px;
  font-weight: bold;
  }
  .mis_board_sub1 p{
    font-size:16px;
  }
  .blog_main{
    width:70%;;
  }
  .paste{
    margin-left:50%;
  }
  .mis_board_pro p{
    font-size:16px;
  }
  .mis_board_pro{
    width:90%;
  }
  .mis_board_date{
    margin-left:30%;
  }
}
@media screen and (min-width:1400px) and (max-width:1650px){
  .blog_main{
    width:60%;;
  }
  .paste{
    margin-left:55%;
  }
  .mis_board_pro{
    width:90%;
  }
  .mis_board_date{
    margin-left:30%;
  }
}
@media screen and (min-width:1651px) and (max-width:1850px){
  .blog_main{
    width:60%;;
  }
  .paste{
    margin-left:58%;
  }
  .mis_board_pro{
    width:90%;
  }
  .mis_board_date{
    margin-left:40%;
  }
}
.mis_board_greeting{
  margin-top:150px;
}
.mis_board_img{
  width:60%;
  margin:auto;
  margin-top:50px;
}
.mis_board_file{
  margin-top:100px;
}
.mis_board_file h2{
  font-weight: normal;
}
.mis_board_detail{
  text-align: left;
  margin-left:40px;
  font-size:20px;
  margin-top:200px;
}
.board_heart_commen{
  text-align: left;
  margin-left:40px;
  font-size:20px;
  border-bottom:1px solid black;
  width:1020px;
}
.board_share{
  margin-left:70%;
}
.write_comment{
  font-size:20px;
  margin-left:40px;
}
.comment_regist p{
  margin-bottom:0;
  margin-top:2px;
}
.comment_name{
  font-size:22px;
}
.comment_recent p{
  color:#999999;
  margin-bottom: 0;
  margin-top:2px;
}
.write_down_comment1{
  text-align: left;
  margin-left:40px;
}
.write_down_comment1 p{
  margin-bottom:2px;
  font-size:20px;
}
.dayon_name{
  font-weight: bold;
  margin-left:0;
}
.write_dowm_to{
   text-align: left;
  margin-left:40px;
  border-bottom:solid #EDEDED 1px;
  width:1020px;
}
.write_dowm_to p{
  font-size:20px;
  color:#999999;

}
.lee{
  font-weight: bold;
}
.editor_emp p{
  margin-top:2px;
  font-size:18px;
  color:red;
}
.write_down_comment2{
  text-align: left;
  margin-left:40px;
}
.write_down_comment2 p{
  margin-bottom:2px;
  font-size:20px;
}
.write_dowm_to2{
   text-align: left;
  margin-left:40px;
  width:1020px;
}
.write_dowm_to2 p{
  font-size:20px;
  color:#999999;

}
.recommend_write{
  margin-left:40px;
  width:1020px;
  height:150px;
  border: 1px solid black;
  border-radius: 15px;
}
.recommend_name p{
  font-size:20px;
  font-weight: bold;
}
.recommend_name{
  text-align: left;
}
.recommend_commen{
  text-align: left;
}
.recommend_commen p{
  font-size:20px;
  font-weight: bold;
  color:#999999;
}
.recoomend_regist{
  margin-left:90%;
}
.recoomend_regist p{
  text-align: right;
  color:#999999;
  font-weight: bold;
}
.blue{
  color:blue;
}
.blog_footer{
  text-align: left;
  margin-left:23%;
}
.blog_footer_request{
  margin-left:56%;
}
.total_list{
  text-align: left;
  margin-left:16%;
}
.blog_list{
  margin-left:16%;
  width:67%;
  border-bottom:#999999 1px solid;
}
.list_grade{
  margin-left:60%;
}
@media screen and (min-width:768px) and (max-width:991px){
  .hi h2{
    font-size:20px;
  }
  .mis_board_file h2{
    font-size:20px;
  }
  .mis_board_detail{
    font-size:17px;
  }
  .board_heart_commen{
    width:90%;
    font-size:15px;
  }
  .board_share{
    margin-left:44%;
  }
  .write_dowm_to{
    width:90%;
  }
  
  .write_down_comment1 p{
  font-size:15px;
  } 
  .write_down_comment2 p{
  font-size:15px;
  } 
  .editor_emp p{
  font-size:16px;
  }
  .write_dowm_to p{
    font-size:15px;
  }
  .write_dowm_to2 p{
    font-size:15px;
  }
  .recommend_write{
    width:90%;
  }
  .recoomend_regist{
  margin-left:80%;
  }
  .recommend_commen p{
    font-size:15px;
  }
  .recommend_name p{
    font-size:15px;
  }
  .blog_list{
  margin-left:16%;
  width:76%;
  }
  .list_grade{
  margin-left:32%;
  }
}
@media screen and (min-width:992px) and (max-width:1299px){
   .board_heart_commen{
    width:90%;
  }
  .board_share{
    margin-left:50%;
  }
  .write_dowm_to{
    width:90%;
  }
  .recommend_write{
    width:90%;
  }
  .recoomend_regist{
  margin-left:90%;
  }
  .blog_footer_request{
  margin-left:57%;
  }
  .blog_list{
  margin-left:16%;
  width:76%;
  }
  .list_grade{
  margin-left:40%;
  }
}
@media screen and (min-width:1300px) and (max-width:1549px){
  .board_heart_commen{
    width:90%;
  }
  .board_share{
    margin-left:58%;
  }
  .write_dowm_to{
    width:90%;
  }
  .recommend_write{
    width:90%;
  }
  .recoomend_regist{
  margin-left:90%;
  }
  .blog_footer_request{
  margin-left:57%;
  }
  .blog_list{
  margin-left:16%;
  width:76%;
  }
  .list_grade{
  margin-left:50%;
  }
}
@media screen and (min-width:1550px) and (max-width:1772px){
  .board_heart_commen{
    width:90%;
  }
  .board_share{
    margin-left:63%;
  }
  .write_dowm_to{
    width:90%;
  }
  .recommend_write{
    width:90%;
  }
  .recoomend_regist{
  margin-left:90%;
  }
  .blog_footer_request{
  margin-left:57%;
  }
  .blog_list{
  margin-left:16%;
  width:67%;
  }
  .list_grade{
  margin-left:53%;
  }
}

</style>